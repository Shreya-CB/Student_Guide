# 🎓 Student Guide Website

A full-stack web application designed to assist students in exploring career paths, selecting courses, and planning their academic journeys. This project combines a React frontend with a Node.js + Express backend.

---

## 🌐 Live Website

You can access the deployed website here:  
👉 https://student-guide-nine.vercel.app/

---

## 📁 Project Structure
All UI components and related assets are inside the src/project/ folder.
The backend logic is handled in the server/server.js file.
```bash
my-app/
├── src/                    # React frontend code
│   ├── project/            # Main frontend components (UI, pages, etc.)
│   └── app.js              # Main frontend entry point
│
├── server/                 # Backend code (Node.js + Express)
│   └── server.js           # Main backend entry point
│   └── models              # Models 
│   └── routes              # API routes and backend logic
│
├── package.json            # Project metadata and shared dependencies
├── node_modules/           # Installed npm packages
├── .gitignore              # Files to ignore in version control
├── README.md               # Project documentation (you’re reading it!)
```
🚀 How to Run the Project Locally

You’ll need two terminals to run the frontend and backend simultaneously.

Start the Server
In the first terminal, navigate to the project root and run:

node server/server.js

Start the React Frontend
In the second terminal, run:

npm start

This will launch the React development server on http://localhost:3000.

⚙️ Prerequisites

Node.js installed
npm installed (node -v and npm -v to check)
