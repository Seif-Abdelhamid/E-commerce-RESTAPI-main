# 🛒 E-Commerce REST API

This is a fully functional RESTful API for an e-commerce platform built using **Node.js**, **Express.js**, and **MongoDB**. It includes all essential backend functionalities such as product management, user authentication, cart handling, and order processing.

---

## 🚀 Features

- 🔐 **User Authentication** – Register/login with JWT-based sessions
- 📦 **Product Management** – CRUD operations for products
- 🛒 **Cart System** – Add, update, and remove items
- 📬 **Order Processing** – Place and retrieve orders
- ⚙️ **Admin APIs** – Role-based access control for management
- ❌ **Error Handling** – Centralized and consistent error responses
- 📘 **API Documentation** – Swagger/OpenAPI support (optional)

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT + bcrypt.js**
- **dotenv**
- (Optional) Swagger for API docs

---

## 📦 Installation

```bash
git clone https://github.com/Seif-Abdelhamid/E-commerce-RESTAPI-main.git
cd E-commerce-RESTAPI-main
npm install
```

---

## ⚙️ Configuration

Create a `.env` file in the root directory and add the following:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Running the App

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 📬 API Endpoints (Sample)

| Method | Endpoint            | Description                 | Auth Required |
|--------|---------------------|-----------------------------|---------------|
| POST   | /api/auth/register  | Register new user           | ❌            |
| POST   | /api/auth/login     | Login and get token         | ❌            |
| GET    | /api/products       | List all products           | ❌            |
| GET    | /api/products/:id   | Get product by ID           | ❌            |
| POST   | /api/products       | Create new product          | ✅ Admin       |
| PUT    | /api/products/:id   | Update product              | ✅ Admin       |
| DELETE | /api/products/:id   | Delete product              | ✅ Admin       |
| GET    | /api/cart           | Get user cart               | ✅            |
| POST   | /api/cart           | Add item to cart            | ✅            |
| DELETE | /api/cart/:itemId   | Remove item from cart       | ✅            |
| POST   | /api/orders         | Place new order             | ✅            |
| GET    | /api/orders         | Get user’s order history    | ✅            |

---

## 📁 Project Structure

```
E-commerce-RESTAPI-main/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── app.js / index.js
├── .env
└── package.json
```

---

## 🧪 Testing

You can use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test endpoints locally. Ensure the server is running and your `.env` is correctly set up.

---

## 👤 Author

**Seif Abdelhamid**  
GitHub: [@Seif-Abdelhamid](https://github.com/Seif-Abdelhamid)
