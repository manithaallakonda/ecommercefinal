import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/*" element={<Admin />} />
            {/* Future routes can go here */}
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
