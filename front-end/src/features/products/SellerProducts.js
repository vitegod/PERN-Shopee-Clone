import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import utilStyles from "../../App/utilStyles.module.css";
import styles from "./SellerProducts.module.css";
import { useLoaderData } from "react-router-dom";

export async function sellerProductsLoader() {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/seller/products`, {
    credentials: "include",
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Failed to load seller products.");
  }
}

function SellerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/sellers/products`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (productId) => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/sellers/products/${productId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => setProducts(products.filter((product) => product.id !== productId)))
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.pagePadding}>
      <h1 className={utilStyles.h1}>Your Products</h1>
      <Link to="/seller/products/new" className={utilStyles.button}>Add New Product</Link>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            {product.name}
            <Link to={`/seller/products/${product.id}/edit`} className={utilStyles.button}>Edit</Link>
            <button onClick={() => handleDelete(product.id)} className={utilStyles.button}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SellerProducts;
