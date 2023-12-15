import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetailPage = (props) => {
  const location = useLocation();
  const item = location.state.data;

  return (
    <div>
      <h2 style={{ color: "blue", padding: 10 }}>Product Details page</h2>
      <div
        style={{
          padding: 10,
          // borderBottomColor: "tomato",
          border: "1px solid rgb(212, 212, 212)",
          margin: "10px",
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        onClick={() => {}}
      >
        <div
          style={{
            padding: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ flex: 0.5 }}>
            <img src={item.thumbnail} alt="logo" />
          </div>

          <div style={{ flex: 0.3 }}>
            <h1>
              {item.brand} {item.title}
            </h1>

            <p>{item.description}</p>
            <button
              onClick={() => {}}
              style={{ alignSelf: "flex-end", padding: 5, margin: 5 }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {}}
              style={{ alignSelf: "flex-end", padding: 5, margin: 5 }}
            >
              Buy now
            </button>
          </div>
          <div style={{ flex: 0.2 }}>
            <h1>${item.price}USD</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
