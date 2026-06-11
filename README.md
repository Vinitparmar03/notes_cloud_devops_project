# Notes Cloud DevOps Project

> A Full Stack Cloud-Native Notes Application built to learn Docker, Docker Compose, AWS DynamoDB, Cloud Deployment, and DevOps Fundamentals.

---

## 📖 Description

Notes Cloud DevOps Project is a full-stack Notes Management Application developed with the primary goal of understanding how modern cloud applications are built, containerized, deployed, and managed.

While the application itself allows users to create, update, view, and delete notes, the real purpose of this project is to gain practical experience with:

- Docker
- Docker Compose
- Cloud Computing
- AWS DynamoDB
- Backend API Development
- Frontend and Backend Communication
- Environment Variable Management
- Container Networking
- DevOps Fundamentals
- Deployment Workflows

This project demonstrates how multiple services work together in a production-like environment and how developers can package applications into containers for easy deployment and scalability.

---

## 🎯 Why I Built This Project

The main purpose of building this project was to understand:

### Docker

- What Docker is
- Why containers are used
- How Docker images are created
- How containers run applications
- Container isolation
- Container networking

### Docker Compose

- Running multiple services together
- Managing frontend and backend containers
- Environment variable management
- Service communication

### AWS DynamoDB

- NoSQL database concepts
- CRUD operations
- Cloud database integration
- Real-world backend connectivity

### Backend Development

- REST APIs
- Authentication
- Middleware
- Database communication

### Cloud & DevOps

- Application deployment
- Infrastructure concepts
- Environment management
- Service architecture
- Cloud-based application design

---

## 🚀 Features

### User Features

- User Registration
- User Login
- JWT Authentication
- Create Notes
- View Notes
- Update Notes
- Delete Notes

### DevOps Features

- Dockerized Frontend
- Dockerized Backend
- Docker Compose Setup
- Environment Variable Configuration
- AWS DynamoDB Integration
- Cloud Ready Deployment

---

## 🛠️ Technology Stack

### Frontend

- React.js
- Vite

### Backend

- Node.js
- Express.js

### Database

- AWS DynamoDB

### DevOps

- Docker
- Docker Compose

### Cloud

- AWS DynamoDB
- AWS IAM

---

## 🏗️ Architecture

```text
User Browser
      │
      ▼
Frontend (React + Vite)
      │
      ▼
Backend API (Node.js + Express)
      │
      ▼
AWS DynamoDB
```

The frontend communicates with the backend through REST APIs. The backend processes requests and performs CRUD operations on AWS DynamoDB.

---

## 📂 Project Structure

```text
notes_cloud_devops_project/

├── frontend/
├── backend/
├── docker-compose.yml
├── .env.example
├── .env
└── README.md
```

---

## ⚙️ Prerequisites

Before running this project, make sure you have:

- Docker Installed
- Docker Compose Installed
- Node.js Installed
- npm Installed
- AWS Account
- DynamoDB Tables Created

---

## 🔑 Environment Setup

Create a `.env` file in the root directory.

Copy all variables from:

```bash
.env.example
```

into:

```bash
.env
```

Example:

```env
PORT=5000

AWS_REGION=ap-south-1

AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY

AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY

DYNAMODB_TABLE=Notes

USERS_TABLE=Users

JWT_SECRET=YOUR_SECRET_KEY
```

### Important

You must configure your own AWS credentials.

Required variables:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION
- DYNAMODB_TABLE
- USERS_TABLE
- JWT_SECRET

The same `.env` file should be placed in the root directory of the project so Docker Compose can automatically access all environment variables.

---

## ☁️ AWS DynamoDB Setup

Create the following DynamoDB tables.

### Users Table

```text
Table Name: Users
Partition Key: userId
```

### Notes Table

```text
Table Name: Notes
Partition Key: noteId
```

Make sure your IAM user has permissions for:

- GetItem
- PutItem
- DeleteItem
- UpdateItem
- Scan

---

# 🐳 Running Using Docker Compose (Recommended)

### Step 1: Clone Repository

```bash
git clone https://github.com/Vinitparmar03/notes_cloud_devops_project.git
```

### Step 2: Navigate Into Project

```bash
cd notes_cloud_devops_project
```

### Step 3: Configure Environment Variables

Create `.env` file and copy all values from `.env.example`.

### Step 4: Start Containers

```bash
docker compose up --build
```

### Application URLs

#### Frontend

```text
http://localhost:80
```

#### Backend

```text
http://localhost:5000
```

---

# 💻 Running Without Docker

## Backend

```bash
cd backend
npm install
npm start
```

Backend:

```text
http://localhost:5000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## 🔍 API Routes

### Authentication

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
```

### Notes

```http
POST   /api/v1/notes
GET    /api/v1/notes
GET    /api/v1/notes/:noteId
PUT    /api/v1/notes/:noteId
DELETE /api/v1/notes/:noteId
```

---

## 🐳 Docker Concepts Demonstrated

- Docker Images
- Docker Containers
- Docker Networking
- Docker Compose
- Environment Variables
- Multi-Container Applications
- Service Communication

---

## ☁️ Cloud Concepts Demonstrated

### AWS DynamoDB

Used as the cloud database service.

Benefits:

- Fully Managed
- NoSQL Architecture
- High Availability
- Automatic Scaling

### AWS IAM

Used for secure access control and permissions management.

---

## 📚 What I Learned

While building this project, I learned:

- Full Stack Development
- Docker Fundamentals
- Docker Compose
- AWS DynamoDB
- IAM Permissions
- Cloud Architecture
- Container Networking
- Environment Management
- REST API Design
- DevOps Fundamentals
- Deployment Workflows

---

## ⚠️ Challenges Faced

Some challenges I faced:

- Understanding Docker networking
- Configuring environment variables correctly
- Connecting backend with DynamoDB
- Managing AWS IAM permissions
- Handling frontend-backend communication
- Debugging container issues
- Understanding deployment workflows

---

## 🚀 Future Improvements

- CI/CD using GitHub Actions
- Kubernetes Deployment
- HTTPS Support
- AWS ECS Deployment
- Terraform Infrastructure
- Monitoring & Logging
- Automated Testing

---

## 📝 Project Journey

Want to see how I deployed this application on AWS, containerized it with Docker, configured DNS, integrated DynamoDB, and solved the real-world issues I encountered along the way? Check out my detailed project journey on LinkedIn:
LinkedIn Post:

```text
https://www.linkedin.com/posts/vinit-kumar-parmar-22522a215_aws-devops-docker-ugcPost-7470842175547850752-Aia_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZRDr0B3jGUgimvN4mtmvOEEJqmA9dQEvQ
```

---

## 📖 References

- Docker Documentation
- AWS Documentation
- DynamoDB Documentation
- React Documentation
- Node.js Documentation
- Express.js Documentation

---

## 👨‍💻 Author

### Vinit Parmar

**Email**

```text
vinitparmar03@gmail.com
```

**LinkedIn**

```text
https://www.linkedin.com/in/vinit-kumar-parmar-22522a215/
```

**GitHub**

```text
http://github.com/vinitparmar03
```

## ⭐ Support

If you found this project useful:

- ⭐ Star the repository
- 🍴 Fork the repository
- 💬 Share feedback
- 🤝 Connect with me on LinkedIn

---

## 📄 License

This project is licensed under the MIT License.