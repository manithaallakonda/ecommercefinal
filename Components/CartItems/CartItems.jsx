import React, { useContext, useState } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { products, cartItems, removeFromCart, addToCart, getTotalCartAmount } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (getDiscountedTotal() <= 0) {
      alert("Your cart is empty.");
      return;
    }
    setShowPaymentPage(true);
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Order placed successfully!");
      // navigate("/success"); // optional redirect
    }, 2000);
  };

  const handlePromoCode = () => {
    if (promoCode === 'FREE50') {
      setDiscount(0.5);
    } else if (promoCode === 'SAVE100') {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const getDiscountedTotal = () => {
    const total = getTotalCartAmount();
    return (total - total * discount).toFixed(2);
  };

  const handleInputChange = (e) => {
    setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
  };

  if (showPaymentPage) {
    return (
      <div className="payment-page">
        <h2>Delivery Address</h2>
        <form className="payment-form">
          {["name",
           "address",
            "city",
             "postalCode", 
             "country"]
             .map(field => (
            <input
              key={field}
              name={field}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              value={deliveryDetails[field]}
              onChange={handleInputChange}
              required
            />
          ))}
          <div className="payment-summary">
            <p>Final Amount: <strong>{currency}{getDiscountedTotal()}</strong></p>
            <button onClick={handlePayment} disabled={loading}>
              {loading ? "Processing Payment..." : "Pay Now"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="cartitems">
      <h1 className="cart-header">Your Shopping Cart</h1>
      <div className="cartitems-format-main header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems-format-main item-row">
              <img className="cartitems-product-icon" src={backend_url + e.image} alt={e.name} />
              <p className="cartitems-product-title">{e.name}</p>
              <p>{currency}{e.new_price}</p>
              <div className="cartitems-quantity-controls">
                <button onClick={() => removeFromCart(e.id)}>-</button>
                <span>{cartItems[e.id]}</span>
                <button onClick={() => addToCart(e.id)}>+</button>
              </div>
              <p>{currency}{(e.new_price * cartItems[e.id]).toFixed(2)}</p>
              <img onClick={() => removeFromCart(e.id)} className="cartitems-remove-icon" src={cross_icon} alt="remove" />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h2>Order Summary</h2>
          <div className="price-details">
            <p>Subtotal:</p>
            <p>{currency}{getTotalCartAmount().toFixed(2)}</p>
          </div>
          <div className="price-details">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="price-details discount">
            <p>Discount:</p>
            <p>-{currency}{(getTotalCartAmount() * discount).toFixed(2)}</p>
          </div>
          <div className="price-details total">
            <h3>Total:</h3>
            <h3>{currency}{getDiscountedTotal()}</h3>
          </div>
          <div className="cartitems-buttons">
            <button className="continue-btn" onClick={() => navigate("/")}>Continue Shopping</button>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>Have a Promo Code?</p>
          <div className="cartitems-promobox">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromoCode}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
