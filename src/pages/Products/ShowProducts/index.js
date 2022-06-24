import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { UiNumber } from "../../../components/UiNumber";

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
    <div className="App">
      <Link to="/create" className="Link">
        <button>Create</button>
      </Link>
      <table>
        <div></div>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => (
            <tr key={products.id}>
              <td>{products.description}</td>
              <td>
                R$<UiNumber format="0,0.00">{products.price}</UiNumber>
              </td>

              <td>{products.stock}</td>

              <td>
                <Link to={`/edit/${products.id}`} className="Link">
                  <button>Edit</button>
                </Link>

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
