import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductListingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => setData(response.products));
  }, []);

  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate("/ProductDetailPage", { state: { data: data[index] } });
  };

  console.log("data", data);

  return (
    <div>
      <h1
        style={{
          color: "blue",
          padding: 10,
          // borderBottom: "3px solid rgb(212, 212, 212)",
        }}
      >
        Product Listing page
      </h1>
      {data.map((item, index) => {
        return (
          <div
            style={{
              padding: 10,
              border: "1px solid rgb(212, 212, 212)",
              margin: "10px",
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
            onClick={() => handleClick(index)}
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
              </div>
              <div style={{ flex: 0.2 }}>
                <h1>${item.price}USD</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
