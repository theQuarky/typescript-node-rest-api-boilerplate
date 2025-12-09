# TypeScript Node.js REST API Boilerplate

A lightweight and easy-to-use boilerplate for building RESTful APIs with TypeScript, Node.js, Express, and MongoDB. Perfect for simple projects that need CRUD operations and JWT authentication.

## 🚀 Features

- **TypeScript** - Type-safe JavaScript with modern ES6+ features
- **Express.js** - Fast, unopinionated web framework
- **MongoDB/Mongoose** - NoSQL database with ODM
- **JWT Authentication** - JSON Web Token for secure authentication
- **Security** - Helmet for security headers, CORS enabled
- **Logging** - Morgan for HTTP request logging
- **Development** - Hot reload with nodemon and ts-node
- **Code Organization** - Clean architecture with controllers, services, and routes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or remote instance)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/theQuarky/typescript-node-rest-api-boilerplate.git
   cd typescript-node-rest-api-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Application
   APP=development
   PORT=3000

   # Database
   DB_DIALECT=mongo
   DB_HOST=mongodb://localhost:27017/example_db
   DB_NAME=example_db
   DB_USER=root
   DB_PASSWORD=db-password
   DB_PORT=27017

   # JWT
   JWT_ENCRYPTION=your_secret_key_here
   JWT_EXPIRATION=1h
   SALT_ROUNDS=10
   ```

4. **Start MongoDB**
   
   Make sure your MongoDB server is running:
   ```bash
   # On Linux/Mac
   sudo systemctl start mongod
   
   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo
   ```

## 🎯 Usage

### Development Mode

Run the application in development mode with hot reload:

```bash
npm run dev
```

The server will start at `http://localhost:3000` (or your configured PORT).

### Production Mode

Build and run the application in production:

```bash
npm run prod
```

Or build and start separately:

```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start the built application
- `npm run prod` - Build and start production server
- `npm run clean` - Remove node_modules, dist, and coverage folders

## 📁 Project Structure

```
typescript-node-rest-api-boilerplate/
├── src/
│   ├── api/                    # API routes
│   │   ├── index.ts           # API router
│   │   └── users/             # User routes
│   │       └── userRoute.ts
│   ├── config/                # Configuration files
│   │   ├── config.ts          # App configuration
│   │   └── db.ts              # Database connection
│   ├── controller/            # Route controllers
│   │   └── userController.ts
│   ├── service/               # Business logic
│   │   └── userService.ts
│   ├── helpers/               # Utility functions
│   │   ├── errorHandler.ts   # Error handling middleware
│   │   └── verifyToken.ts    # JWT verification
│   ├── App.ts                 # Express app setup
│   └── index.ts               # Application entry point
├── package.json
└── README.md
```

## 🔌 API Endpoints

The API is versioned and accessible at `/v1` prefix.

### Base URL
```
http://localhost:3000/v1
```

### User Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/v1/users/test` | Test endpoint |
| POST | `/v1/users/register` | Register a new user |

## 🛠️ Customization

This boilerplate is designed to be a starting point. Here's how to customize it for your project:

### Adding New Routes

1. Create a new route file in `src/api/[resource]/[resource]Route.ts`
2. Create corresponding controller in `src/controller/[resource]Controller.ts`
3. Create service logic in `src/service/[resource]Service.ts`
4. Import and use the route in `src/api/index.ts`

### Example: Adding a "Posts" Resource

**1. Create route** (`src/api/posts/postRoute.ts`):
```typescript
import { Router } from 'express';
import * as postController from '../../controller/postController';

const post: Router = Router();

post.get('/', postController.getAllPosts);
post.get('/:id', postController.getPostById);
post.post('/', postController.createPost);
post.put('/:id', postController.updatePost);
post.delete('/:id', postController.deletePost);

export default post;
```

**2. Create controller** (`src/controller/postController.ts`):
```typescript
import express from 'express';

export const getAllPosts = (req: express.Request, res: express.Response) => {
  // Your logic here
};

export const getPostById = (req: express.Request, res: express.Response) => {
  // Your logic here
};

export const createPost = (req: express.Request, res: express.Response) => {
  // Your logic here
};

export const updatePost = (req: express.Request, res: express.Response) => {
  // Your logic here
};

export const deletePost = (req: express.Request, res: express.Response) => {
  // Your logic here
};
```

**3. Register route** in `src/api/index.ts`:
```typescript
import { Router } from 'express';
import users from './users/userRoute';
import posts from './posts/postRoute'; // Add this

const router: Router = Router();

router.use('/users', users);
router.use('/posts', posts); // Add this

export default router;
```

## 🔐 Security Features

- **Helmet** - Sets various HTTP headers for security
- **CORS** - Configurable Cross-Origin Resource Sharing
- **JWT** - Token-based authentication
- **Environment Variables** - Sensitive data stored in .env file

## 📝 Best Practices

- Keep controllers thin - business logic belongs in services
- Use TypeScript types/interfaces for better code quality
- Handle errors consistently using the error handler middleware
- Validate input data before processing
- Use environment variables for configuration
- Follow RESTful API naming conventions

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Created by [theQuarky](https://github.com/theQuarky)

## 🙏 Acknowledgments

- Built with Express.js, TypeScript, and MongoDB
- Inspired by the need for a simple, clean boilerplate for quick project starts

---

**Happy Coding! 🎉**

If you find this boilerplate helpful, please consider giving it a ⭐️ on GitHub!
