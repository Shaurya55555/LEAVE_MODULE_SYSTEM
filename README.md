# Leave Management System

A simple **Leave Management System** built with **Node.js, Express, and MongoDB (Mongoose)**.  
This system allows adding employees, applying for leave, approving/rejecting leave requests, and tracking leave balances.

---

##  Features

- Add new employees with department, joining date, and leave balance.
- Apply for leave with validation on dates and leave balance.
- Prevent overlapping leave applications.
- Approve or reject pending leave requests.
- Automatically deduct approved leave days from employee balance.
- Fetch employee leave balance by ID.

---

##  Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose ODM)
- **Utilities**: Custom date helpers for validations
- **Middleware**: Async handler for error management

---

##  Setup Instructions

### 1. Clone the repository
```bash
git clone <repo-url>
cd leave-management-system

Install dependencies
npm install

3. Configure environment variables

Create a .env file in the project root:

PORT=8000
MONGODB_URI=mongodb://127.0.0.1:27017/leave_management

4. Run the server
npm start


The server will start on http://localhost:8000
.

 API Endpoints
 Employees

Add Employee

POST /api/employees
Request body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering",
  "joiningDate": "2024-01-15",
  "leaveBalance": 20
}


Get Leave Balance

GET /api/employees/:id/leave-balance


Response:

{
  "employeeId": "64f9c7f5a87d0a77d1c12345",
  "leaveBalance": 15
}

📝 Leave Requests

Apply for Leave

POST /api/leaves/apply


Request body:

{
  "employeeId": "64f9c7f5a87d0a77d1c12345",
  "startDate": "2024-02-01",
  "endDate": "2024-02-05"
}


Update Leave Status

PATCH /api/leaves/:id


Request body:

{ "status": "APPROVED" }


