INSERT INTO categories(id, name, description, url_slug)
VALUES
  (1, 'Books', 'A selection of page-turners from a range of genres.', 'books'),
  (2, 'Movies', 'A variety of top-rated movies to lose yourself in.', 'movies'),
  (3, 'Vehicles', 'Cars, motorcycles, bicycles, and more.', 'vehicles'),
  (4, 'Clothing', 'A wide selection of clothing for all styles and occasions.', 'clothing'),
  (5, 'Furniture', 'Stylish and functional furniture for your home.', 'furniture');

WITH product_row AS (
  INSERT INTO products(
    name, 
    price, 
    stock_count, 
    available_stock_count, 
    short_description, 
    long_description, 
    size, 
    avg_rating, 
    rating_count, 
    img_link, 
    category_id
  ) VALUES 
    (
      'The Great Gatsby', 
      10.99, 
      50, 
      50, 
      'A classic novel by F. Scott Fitzgerald', 
      'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway''s interactions with mysterious millionaire Jay Gatsby and Gatsby''s obsession to reunite with his former lover, Daisy Buchanan.', 
      'N/A', 
      4.5, 
      100, 
      'https://img.upanh.tv/2024/06/08/81QuEGw8VPL._AC_UF10001000_QL80_.jpg', 
      1
    )
  RETURNING id
)
INSERT INTO product_categories(product_id, category_id)
VALUES
  ((SELECT id FROM product_row), 1);

WITH product_row AS (
  INSERT INTO products(
    name, 
    price, 
    stock_count, 
    available_stock_count, 
    short_description, 
    long_description, 
    size, 
    avg_rating, 
    rating_count, 
    img_link, 
    category_id
  ) VALUES 
    (
      'Inception', 
      14.99, 
      30, 
      30, 
      'A mind-bending thriller by Christopher Nolan', 
      'Dom Cobb is a thief with the rare ability to enter people''s dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone''s mind.', 
      'N/A', 
      4.7, 
      200, 
      'https://img.upanh.tv/2024/06/08/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw._V1_.jpg', 
      2
    )
  RETURNING id
)
INSERT INTO product_categories(product_id, category_id)
VALUES
  ((SELECT id FROM product_row), 2);

WITH product_row AS (
  INSERT INTO products(
    name, 
    price, 
    stock_count, 
    available_stock_count, 
    short_description, 
    long_description, 
    size, 
    avg_rating, 
    rating_count, 
    img_link, 
    category_id
  ) VALUES 
    (
      'Tesla Model S', 
      79999.99, 
      5, 
      5, 
      'An electric vehicle by Tesla', 
      'The Tesla Model S is an all-electric five-door liftback sedan produced by Tesla, Inc. It was introduced on June 22, 2012. As of August 2020, the Model S Long Range Plus has an EPA range of 402 miles (647 km), higher than that of any other battery electric car.', 
      'N/A', 
      4.8, 
      50, 
      'https://img.upanh.tv/2024/06/08/2018_Tesla_Model_S_75D.jpg', 
      3
    )
  RETURNING id
)
INSERT INTO product_categories(product_id, category_id)
VALUES
  ((SELECT id FROM product_row), 3);

WITH product_row AS (
  INSERT INTO products(
    name, 
    price, 
    stock_count, 
    available_stock_count, 
    short_description, 
    long_description, 
    size, 
    avg_rating, 
    rating_count, 
    img_link, 
    category_id
  ) VALUES 
    (
      'Men\''s T-Shirt', 
      19.99, 
      100, 
      100, 
      'A comfortable cotton t-shirt', 
      'This classic cotton t-shirt is perfect for everyday wear. Made from 100% cotton, it is both soft and breathable. Available in multiple sizes and colors.', 
      'L', 
      4.2, 
      75, 
      'https://img.upanh.tv/2024/06/08/tee1.webp', 
      4
    )
  RETURNING id
)
INSERT INTO product_categories(product_id, category_id)
VALUES
  ((SELECT id FROM product_row), 4);
WITH product_row AS (
  INSERT INTO products(
    name, 
    price, 
    stock_count, 
    available_stock_count, 
    short_description, 
    long_description, 
    size, 
    avg_rating, 
    rating_count, 
    img_link, 
    category_id
  ) VALUES 
    (
      'Modern Sofa', 
      499.99, 
      10, 
      10, 
      'A stylish and comfortable sofa', 
      'This modern sofa is perfect for any living room. It features a sleek design and is upholstered in high-quality fabric. The sofa is both comfortable and durable, making it a great addition to your home.', 
      'N/A', 
      4.3, 
      30, 
      'https://img.upanh.tv/2024/06/08/European-Luxury-Modern-Living-Room-Genuine-Leather-U-Shape-LED-Sofa.webp', 
      5
    )
  RETURNING id
)
INSERT INTO product_categories(product_id, category_id)
VALUES
  ((SELECT id FROM product_row), 5);
        
WITH product_row AS (
  INSERT INTO products(
    name, 
    price, 
    stock_count, 
    available_stock_count, 
    short_description, 
    long_description, 
    size, 
    avg_rating, 
    rating_count, 
    img_link, 
    category_id
  ) VALUES 
    (
      'Dây sạc nhanh type c Baseus 66W 6A ', 
      65, 
      50, 
      50, 
      'Cáp typec INOX dài 2m 1m cho samsung xiaomi', 
      'THÔNG TIN SẢN PHẨM

Tên: Cáp dữ liệu kim loại Baseus Cafule Series USB to Type-C 66W

Chất liệu: Hợp kim kẽm + Dây bện nylon

Dòng điện: 11V / 6A Max. 66W

Tốc độ truyền: 480Mbps

Giao diện đầu vào: USB

Giao diện đầu ra: Type-C

Chiều dài: 0,25m, 1m, 2m

Màu sắc: Đen (0,25m / 1m / 2m), Trắng (1m / 2m)

Phù hợp với: Sạc siêu nhanh SCP FCP cho Huawei Mate 40 30 P40P30 Pro Lite

Chức năng 1: Tương thích với sạc nhanh 66W / 40W

Chức năng 2: Truyền dữ liệu & Sạc nhanh Cáp USB C

Tính năng 3: Dành cho Honor 30/30 Pro +, V30 / 30Pro, X10,9X

lưu ý giữ vỏ hộp sản phẩm để được bảo hành', 
      'N/A', 
      4.5, 
      100, 
      'https://down-vn.img.susercontent.com/file/5b83b903766081b246a481cb10b47079', 
      1
    )
  RETURNING id
)
INSERT INTO product_categories(product_id, category_id)
VALUES
  ((SELECT id FROM product_row), 5);
