import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/product";

export const CreateProduct = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      description: description,
      price: price,
      stock: stock,
    });
    navigate("/");
  };

  return (
    <div>
      <h3>Create Product</h3>
      <form onSubmit={store}>
        <div>
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
        </div>
        <div>
          <label>Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="number"
          />
        </div>
        <button type="submit">Store</button>
      </form>
    </div>
  );
};
