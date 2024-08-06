# Introduction
Welcome to the Food Delivery App! This is a full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application facilitates online food ordering with separate panels for users and administrators.

# Features
1.User Panel:

-Browse restaurants and menus
-Place orders
-Track order status
-User authentication and profile management

2.Admin Panel:

-Manage restaurants and menus
-View and update order status
-User management

# Technologies Used
1.Frontend:

React.js
Context API for state management
Tailwind CSS for styling

2.Backend:

Node.js
Express.js
MongoDB
Other Tools:

Axios for API calls
JWT for authentication
Mongoose for MongoDB object modeling

# Installation
Prerequisites
Node.js
MongoDB
# Steps
1.clone the repository
git clone https://github.com/mayanksm404/Delivery-Project/
cd food-delivery-app

2.Install Dependencies 
//Install server dependencies
cd server
npm install

//Install client dependencies
cd ../client
npm install

3.set up environment variables
Create a .env file in the server directory and add the following variables:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

4.Start the development server
# Start the backend server
cd server
npm run dev

# Start the frontend server
cd ../client
npm start

5.Open the application
Visit http://localhost:3000 to view the application.
