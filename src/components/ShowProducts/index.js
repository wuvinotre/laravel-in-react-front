import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api";

export const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    getAllProducts();
  };

  return (
    <div>
      <div>
        <Link to="/create">Create</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => (
            <tr key={products.id}>
              <td>{products.description}</td>
              <td>{products.price}</td>
              <td>{products.stock}</td>

              <td>
                <Link to={`/edit/${products.id}`}>Edit</Link>
                <button onClick={() => deleteProduct(products.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
