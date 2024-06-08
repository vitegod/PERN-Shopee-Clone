// import { Form, useActionData, useRouteLoaderData, useNavigate } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import utilStyles from "../../App/utilStyles.module.css";
// import styles from './ProductUpload.module.css';
// import { json } from 'react-router-dom';

// export default function ProductUpload() {
//   const [price, setPrice] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const authData = useRouteLoaderData("app");
//   const navigate = useNavigate();
//   const categories = ["Books", "Movies", "Vehicles", "Clothing", "Furniture"];

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const productData = Object.fromEntries(formData.entries());
//     productData.seller_id = authData.id;
//     console.log('Form submitted');
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL}/products/upload-product`,
//         {
//           method: "POST",
//           credentials: "include",
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         // Trả về response dưới dạng JSON để `useActionData` có thể đọc được
//         return json(
//           { error: errorData.error || "Lỗi tạo sản phẩm" },
//           { status: response.status }
//         );
//       }

//       const newProduct = await response.json();
//       navigate(`/products/${newProduct.id}`); // Hoặc bất kỳ route nào bạn muốn
//     } catch (error) {
//       // Trả về response dưới dạng JSON nếu có lỗi khác
//       return json({ error: error.message }, { status: 500 });
//     }
//   };

//   useEffect(() => {
//     if (!authData.logged_in) {
//       navigate("/login");
//     }
//   }, [authData, navigate]);

//   return (
//     <div className={`${styles.pagePadding} ${utilStyles.mw80rem}`}>
//       <h1 className={utilStyles.h1}>Add New Product</h1>
//       <Form method="post" onSubmit={handleSubmit} className={utilStyles.stackedForm}>
//         <label htmlFor="name" className={utilStyles.label}>Product Name:</label>
//         <input type="text" id="name" name="name" className={utilStyles.input} required />

//         <label htmlFor="img_link" className={utilStyles.label}>Product Image URL <a target="_blank" href="https://upanh.tv/upload" rel="noreferrer">(Here)</a></label>
//         <input type="text" id="img_link" name="img_link" className={utilStyles.input} />

//         <label htmlFor="price" className={utilStyles.label}>Product Price:</label>
//         <input type="number" 
//             id="price" 
//             name="price"
//             className={utilStyles.input}
//             required
//             step="0.1"
//             value={price}
//             onChange={(e) => setPrice(parseFloat(e.target.value))} />

//         <label htmlFor="available_stock_count" className={utilStyles.label}>Quantity:</label>
//         <input type="number" id="available_stock_count" name="available_stock_count" min="1" className={utilStyles.input} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />

//         <label htmlFor="category_id" className={utilStyles.label}>Category:</label>
//         <select id="category_id" name="category_id" className={utilStyles.input} required>
//           {categories.map((category, index) => (
//             <option key={index} value={index + 1}>
//               {category}
//             </option>
//           ))}
//         </select>
        
//         <label htmlFor="short_description" className={utilStyles.label}>Short Description:</label>
//         <input type="text" id="short_description" name="short_description" className={utilStyles.input} />
        
//         <label htmlFor="long_description" className={utilStyles.label}>Long Description:</label>
//         <textarea id="long_description" name="long_description" className={utilStyles.input} />

//         <button type="submit" className={utilStyles.button}>Publish New Product</button>
//       </Form>
//     </div>
//   );
// }
import { Form, useRouteLoaderData, useNavigate, useActionData } from "react-router-dom";
import { useState, useEffect } from 'react';
import utilStyles from "../../App/utilStyles.module.css";
import styles from './ProductUpload.module.css';

export default function ProductUpload() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stockCount, setStockCount] = useState(1); // Thêm state cho stock_count
  const authData = useRouteLoaderData("app");
  const navigate = useNavigate();
  const actionData = useActionData(); // Sử dụng useActionData để lấy dữ liệu lỗi (nếu có)
  const categories = ["Books", "Movies", "Vehicles", "Clothing", "Furniture"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData.entries());
    productData.seller_id = authData.id;
    
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/products/upload-product`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(productData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Lỗi tạo sản phẩm từ front-end:", errorData.error || "Lỗi tạo sản phẩm");
        return;
      }

      const newProduct = await response.json();
      navigate(`/`);
    } catch (error) {
      console.error("Lỗi tạo sản phẩm:", error.message);
    }
  };

  useEffect(() => {
    if (!authData.logged_in) {
      navigate("/login");
    }
  }, [authData, navigate]);

  return (
    <div className={`${styles.pagePadding} ${utilStyles.mw80rem}`}>
      <h1 className={utilStyles.h1}>Add New Product</h1>
      {actionData?.error && <p className={utilStyles.errorText}>{actionData.error}</p>}
      <Form method="post" onSubmit={handleSubmit} className={utilStyles.stackedForm}>
        <label htmlFor="name" className={utilStyles.label}>Product Name:</label>
        <input type="text" id="name" name="name" className={utilStyles.input} required />

        <label htmlFor="img_link" className={utilStyles.label}>Product Image URL:</label>
        <input type="text" id="img_link" name="img_link" className={utilStyles.input} required />

        <label htmlFor="price" className={utilStyles.label}>Product Price:</label>
        <input type="number" 
            id="price" 
            name="price"
            className={utilStyles.input}
            required
            step="0.1"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))} />

        <label htmlFor="available_stock_count" className={utilStyles.label}>Open Stock Product:</label>
        <input type="number" id="available_stock_count" name="available_stock_count" min="1" max="1000" className={utilStyles.input} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />

        <label htmlFor="category_id" className={utilStyles.label}>Category:</label>
        <select id="category_id" name="category_id" className={utilStyles.input} required>
          {categories.map((category, index) => (
            <option key={index} value={index + 1}>
              {category}
            </option>
          ))}
        </select>
        
        <label htmlFor="short_description" className={utilStyles.label}>Short Description:</label>
        <input type="text" id="short_description" name="short_description" className={utilStyles.input} />
        
        <label htmlFor="long_description" className={utilStyles.label}>Long Description:</label>
        <textarea id="long_description" name="long_description" className={utilStyles.input} />

        <button type="submit" className={utilStyles.button}>Publish New Product</button>
      </Form>
    </div>
  );
}
