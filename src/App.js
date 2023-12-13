import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Import the pages

import ProductListingPage from "./Components/ProductListingPage.js";
import ProductDetailPage from "./Components/ProductDetailPage";
import Page3 from "./Components/page3";

// Import css
// import "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductListingPage />} />
          <Route
            exact
            path="ProductDetailPage"
            element={<ProductDetailPage />}
          />
          <Route exact path="page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
