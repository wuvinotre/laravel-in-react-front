import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/product/";

export const EditProduct = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      description: description,
      price: price,
      stock: stock,
    });
    navigate("/");
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStock(response.data.stock);
    };
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={update}>
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
