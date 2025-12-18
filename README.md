# Equipment Tracker

This project was built as part of a take-home assignment for a Software Development Intern role.

The application helps manage basic equipment information. Users can add, update, view, and remove equipment details using a simple web interface.

---

## What the Application Does

- Displays a list of equipment in a table
- Allows adding new equipment
- Allows editing existing equipment
- Allows deleting equipment records

Each equipment item contains:
- Name
- Type (Machine, Vessel, Tank, Mixer)
- Status (Active, Inactive, Under Maintenance)
- Last Cleaned Date

---

## Tech Stack Used

### Frontend
- React
- JavaScript
- HTML and CSS

### Backend
- Node.js
- Express.js

### Storage
- JSON file (used instead of a database for simplicity)

---
Add project README

## How to Run the Project Locally

### Backend
```bash
cd backend
npm install
node server.js
