import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchComponent from "./searchComponent";

export default function ProductListingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((response) => setData(response.products));
  }, [data]);

  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate("/ProductDetailPage", { state: { data: data[index] } });
  };

  const updateDataOnsearch = (updatedData) => {
    setData(updatedData);
  };
  console.log("data", data);

  return (
    <div>
      <SearchComponent updateDataOnsearch={updateDataOnsearch} />
      {data.length > 0 && (
        <h1
          style={{
            color: "blue",
            padding: 10,
            // borderBottom: "3px solid rgb(212, 212, 212)",
          }}
        >
          Product Listing page
        </h1>
      )}
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
        );
      })}
    </div>
  );
}
