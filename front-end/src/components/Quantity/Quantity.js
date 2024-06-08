import React, { useState, useEffect } from 'react'; // Thêm import useEffect
import styles from './Quantity.module.css';

function Quantity({ initialValue = 1, onChange, max }) { // Thêm prop max
    const [value, setValue] = useState(initialValue);
  
    const increment = () => {
      if (value < max) { // Kiểm tra trước khi tăng
        setValue(value + 1);
        onChange(value + 1); // Thông báo thay đổi cho component cha
      }
    };
  
    const decrement = () => {
      if (value > 1) { // Kiểm tra trước khi giảm
        setValue(value - 1);
        onChange(value - 1); // Thông báo thay đổi cho component cha
      }
    };
    
    useEffect(() => {
      // Kiểm tra khi max thay đổi
      if (value > max) {
        setValue(max);
        onChange(max);
      }
    }, [max]);

  return (
    <div className={styles.quantity}>
      <p>Set the quantity</p>
      <div className={styles.quantityInput}>
        <button 
          className={`${styles.modifier} ${styles.left}`} 
          onClick={decrement}
        >
          &mdash;
        </button>
        <input 
          className={styles.screen} 
          type="text" 
          value={value} 
          readOnly 
          onChange={(e) => onChange(parseInt(e.target.value))} // Gọi hàm onChange khi giá trị thay đổi
        />
        <button 
          className={`${styles.modifier} ${styles.right}`} 
          onClick={increment}
        >
          &#xff0b;
        </button>
      </div>
    </div>
  );
}

export default Quantity;
