# DevBlog - MERN Stack Blog Application

A modern, full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, post creation, theme switching, and responsive design.

![DevBlog Screenshot](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=DevBlog+MERN+Application)

## 🌟 Features

### 🔐 Authentication & User Management
- **User Registration**: Secure user registration with password confirmation
- **User Login**: JWT-based authentication with persistent sessions
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Logout Functionality**: Secure logout with confirmation dialogs
- **User Profile**: Welcome messages and user-specific content

### 📝 Blog Management
- **Create Posts**: Rich text editor with HTML support
- **Post Preview**: Live preview functionality while creating posts
- **Post Categories**: Tag-based categorization system
- **Featured Posts**: Highlight important content
- **Post Search**: Search functionality across titles and content
- **Responsive Design**: Mobile-friendly post display

### 🎨 User Interface
- **Dark/Light Theme**: Toggle between themes with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface using Tailwind CSS
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages and validation

### 🔧 Technical Features
- **RESTful API**: Well-structured backend API
- **Database Integration**: MongoDB with Mongoose ODM
- **File Upload**: Support for image uploads
- **CORS Configuration**: Secure cross-origin requests
- **Environment Variables**: Secure configuration management

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **multer**: File upload handling
- **cors**: Cross-origin resource sharing

### Development Tools
- **pnpm**: Fast, disk space efficient package manager
- **nodemon**: Automatic server restart during development
- **ESLint**: Code linting and formatting

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- pnpm (recommended) or npm

### 1. Clone the Repository
```bash
git clone git@github.com:PLP-MERN-Stack-Development/week-4-mern-integration-assignment-Jakababa94.git
cd week-4-mern-integration-assignment-Jakababa94
```

### 2. Install Dependencies

#### Backend Setup
```bash
cd server
pnpm install
```

#### Frontend Setup
```bash
cd client
pnpm install
```

### 3. Environment Configuration

#### Backend Environment Variables
Create a `.env` file in the `server` directory:
```env
MONGO_URI=mongodb://localhost:27017/devblog
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
PORT=5000
NODE_ENV=development
```

#### Frontend Environment Variables (Optional)
Create a `.env` file in the `client` directory if you need to override the API URL:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Database Setup
Ensure MongoDB is running locally or update the `MONGO_URI` to point to your MongoDB instance.

### 5. Start the Application

#### Start Backend Server
```bash
cd server
pnpm run dev
```
The server will start on `http://localhost:5000`

#### Start Frontend Development Server
```bash
cd client
pnpm dev
```
The client will start on `http://localhost:5173`

## 🚀 Usage Guide

### User Registration
1. Navigate to `/register`
2. Fill in your details (name, email, password)
3. Confirm your password
4. Click "Create Account"
5. You'll be redirected to the login page

### User Login
1. Navigate to `/login`
2. Enter your email and password
3. Click "Sign In"
4. You'll be automatically redirected to the create post page

### Creating a Blog Post
1. After logging in, you'll be on the create post page
2. Fill in the post details:
   - **Title**: Your post title
   - **Excerpt**: Brief description of your post
   - **Content**: Main content (supports HTML tags)
   - **Tags**: Comma-separated tags for categorization
   - **Featured**: Check if this should be a featured post
3. Use the "Preview" button to see how your post will look
4. Click "Publish Post" to save

### Theme Switching
- Click the sun/moon icon in the header to toggle between light and dark themes
- Your theme preference is automatically saved
- The theme applies across all pages

### Navigation
- **Home**: View all blog posts
- **Write**: Create new posts (authenticated users only)
- **Login/Register**: Authentication pages
- **Logout**: Secure logout with confirmation

## 📁 Project Structure

```
week-4-mern-integration-assignment-Jakababa94/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ui/                  # Base UI components
│   │   │   ├── AuthGuard.jsx        # Route protection
│   │   │   ├── BlogHeader.jsx       # Main navigation
│   │   │   └── ThemeToggle.jsx      # Theme switching
│   │   ├── contexts/                # React contexts
│   │   │   └── ThemeContext.jsx     # Theme management
│   │   ├── pages/                   # Page components
│   │   │   ├── Index.jsx            # Home page
│   │   │   ├── Login.jsx            # Login page
│   │   │   ├── Register.jsx         # Registration page
│   │   │   ├── CreatePost.jsx       # Post creation
│   │   │   ├── BlogPost.jsx         # Individual post view
│   │   │   └── NotFound.jsx         # 404 page
│   │   ├── services/                # API services
│   │   │   └── api.js               # HTTP client setup
│   │   ├── App.jsx                  # Main app component
│   │   └── main.jsx                 # App entry point
│   ├── index.html                   # HTML template
│   ├── package.json                 # Frontend dependencies
│   └── vite.config.js               # Vite configuration
├── server/                          # Backend Node.js application
│   ├── config/                      # Configuration files
│   │   └── db.js                    # Database connection
│   ├── controllers/                 # Route controllers
│   │   ├── authController.js        # Authentication logic
│   │   ├── postControllers.js       # Post management
│   │   ├── userControllers.js       # User management
│   │   └── categoryController.js    # Category management
│   ├── middleware/                  # Custom middleware
│   │   ├── authMiddleware.js        # JWT verification
│   │   ├── uploadMiddleware.js      # File upload handling
│   │   └── validation.js            # Input validation
│   ├── models/                      # Database models
│   │   ├── User.js                  # User schema
│   │   ├── Post.js                  # Post schema
│   │   └── Category.js              # Category schema
│   ├── routes/                      # API routes
│   │   ├── authRoutes.js            # Authentication routes
│   │   ├── postRoutes.js            # Post routes
│   │   ├── userRoutes.js            # User routes
│   │   ├── categoryRoutes.js        # Category routes
│   │   └── uploadRoutes.js          # File upload routes
│   ├── server.js                    # Main server file
│   ├── package.json                 # Backend dependencies
│   └── .env                         # Environment variables
└── README.md                        # Project documentation
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

## 🎨 Theme System

The application features a comprehensive theme system:

### Features
- **Automatic Detection**: Detects system theme preference
- **Persistent Storage**: Remembers user's theme choice
- **Smooth Transitions**: Animated theme switching
- **Global Application**: Theme applies to all components

### Usage
- Click the sun/moon icon in the header
- Theme changes instantly across the application
- Preference is saved in localStorage
- Works on all pages and components

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt password encryption
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Secure cross-origin requests
- **Environment Variables**: Sensitive data protection

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Configure MongoDB connection string
3. Set `NODE_ENV=production`
4. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the application: `pnpm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages
3. Configure environment variables for production API URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Job Otieno**
- GitHub: [@Jakababa94](https://github.com/Jakababa94)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the amazing frontend library
- [Express.js](https://expressjs.com/) for the backend framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/username/repo/issues) page
2. Create a new issue with detailed information
3. Contact the maintainer

---

**Happy Blogging! 🚀**
