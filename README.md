"# BagShop - E-commerce Platform

A modern e-commerce backend application built with Node.js and Express for selling bags online. The platform includes user authentication, product management, shopping cart functionality, and owner dashboard capabilities.

## Features

- **User Authentication**: Secure user registration and login using JWT and bcrypt
- **Product Management**: Browse and manage bag products with details and images
- **Shopping Cart**: Add items to cart and manage purchases
- **Owner Dashboard**: Store owners can manage products and inventory
- **Session Management**: Express session with JWT authentication
- **File Upload**: Multer integration for product image uploads
- **EJS Templating**: Dynamic server-side rendering of views

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT & bcrypt
- **Templating**: EJS
- **File Handling**: Multer
- **Session Management**: express-session
- **Development**: Nodemon for hot-reload

## Project Structure

```
BagShop/
├── app.js                 # Express app configuration
├── server.js             # Server entry point
├── package.json          # Project dependencies
├── config/               # Configuration files
│   ├── config.js        # Environment configuration
│   ├── database.js       # MongoDB connection
│   ├── keys.js          # API keys
│   └── multer-config.js # File upload configuration
├── controllers/          # Business logic controllers
├── models/              # Database schemas
│   ├── user.model.js
│   ├── product.model.js
│   └── owner.model.js
├── routes/              # API endpoints
│   ├── index.js
│   ├── usersRouter.js
│   ├── productsRouter.js
│   └── ownersRouter.js
├── middlewares/         # Custom middleware
│   └── isLoggedIn.js   # Authentication middleware
├── views/              # EJS templates
├── public/             # Static files (CSS, JS, images)
└── utils/              # Utility functions
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or Atlas)
- npm

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd BagShop
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment file**

   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**

   ```
   MONGO_URI=mongodb://localhost:27017/bagshop
   PORT=3001
   JWT_KEY=your_secret_jwt_key
   ```

5. **Start the server**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3001` with hot-reload enabled via Nodemon.

## API Routes

### Authentication & Users

- `POST /users/register` - Register new user
- `POST /users/login` - Login user
- `GET /users/logout` - Logout user

### Products

- `GET /products` - List all products
- `POST /products` - Create product (owner only)
- `GET /products/:id` - Get product details
- `PUT /products/:id` - Update product (owner only)
- `DELETE /products/:id` - Delete product (owner only)

### Owner Management

- `POST /owners/register` - Register store owner
- `POST /owners/login` - Login owner
- `GET /owners/dashboard` - Owner dashboard

### Shopping

- `GET /shop` - View all available products (authenticated)
- `GET /cart` - View shopping cart (authenticated)
- `GET /addtocart/:productid` - Add product to cart (authenticated)

### Main Pages

- `GET /` - Homepage
- `GET /shop` - Shop page

## Dependencies

| Package         | Version | Purpose                  |
| --------------- | ------- | ------------------------ |
| express         | 5.2.1   | Web framework            |
| mongoose        | 9.3.3   | MongoDB ODM              |
| jsonwebtoken    | 9.0.3   | JWT authentication       |
| bcrypt          | 6.0.0   | Password hashing         |
| express-session | 1.19.0  | Session management       |
| ejs             | 5.0.1   | Template engine          |
| multer          | 2.1.1   | File uploads             |
| dotenv          | 17.3.1  | Environment variables    |
| cookie-parser   | 1.4.7   | Cookie parsing           |
| connect-flash   | 0.1.1   | Flash messages           |
| config          | 4.4.1   | Configuration management |
| nodemon         | 3.1.14  | Development auto-reload  |

## Environment Variables

| Variable    | Description               | Example                                               |
| ----------- | ------------------------- | ----------------------------------------------------- |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/bagshop` |
| `PORT`      | Server port               | `3001`                                                |
| `JWT_KEY`   | JWT secret key            | `your_secret_key_here`                                |

## Authentication Flow

1. User registers or logs in
2. Server validates credentials and creates JWT token
3. Token stored in session
4. Middleware `isLoggedIn` verifies token on protected routes
5. User gains access to authenticated endpoints

## Development

### Running in Development Mode

```bash
npm start
```

Uses Nodemon for automatic server restart on file changes.

### Project Configuration

- Express static files served from `/public`
- EJS template engine configured
- Session middleware enabled with JWT secret
- Flash messaging system active

## Future Enhancements

- Payment gateway integration
- Order history and tracking
- Product reviews and ratings
- Wishlist functionality
- Admin panel improvements
- Email notifications
- Advanced search and filtering

## License

ISC

## Support

For issues or questions, please open an issue in the repository."
