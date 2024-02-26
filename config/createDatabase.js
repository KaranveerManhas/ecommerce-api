const database = require('./db');


database.executeQuery('CREATE TABLE IF NOT EXISTS products (product_id INT AUTO_INCREMENT PRIMARY KEY, category_id INT, title VARCHAR(255) NOT NULL, price DECIMAL(10, 2) NOT NULL, description TEXT, availability BOOLEAN DEFAULT true, FOREIGN KEY (category_id) REFERENCES categories(category_id));', []);

database.executeQuery('CREATE TABLE IF NOT EXISTS Users ( user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, password_hash VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL);', []);

database.executeQuery('CREATE TABLE IF NOT EXISTS categories (category_id INT AUTO_INCREMENT PRIMARY KEY, category_name VARCHAR(255) NOT NULL);', []);

database.executeQuery('CREATE TABLE IF NOT EXISTS Carts ( cart_id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES Users(user_id));', []);

database.executeQuery('CREATE TABLE IF NOT EXISTS CartItems ( cart_item_id INT AUTO_INCREMENT PRIMARY KEY, cart_id INT, product_id INT, quantity INT DEFAULT 1, FOREIGN KEY (cart_id) REFERENCES Carts(cart_id), FOREIGN KEY (product_id) REFERENCES products(product_id));', []);

database.executeQuery('CREATE TABLE IF NOT EXISTS orders ( order_id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, total_amount DECIMAL(10, 2) NOT NULL, FOREIGN KEY (user_id) REFERENCES users(user_id));', []);

database.executeQuery('CREATE TABLE IF NOT EXISTS orderItems ( order_item_id INT AUTO_INCREMENT PRIMARY KEY, order_id INT, product_id INT, quantity INT DEFAULT 1, FOREIGN KEY (order_id) REFERENCES orders(order_id), FOREIGN KEY (product_id) REFERENCES products(product_id));', []);
