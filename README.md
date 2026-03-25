# Network-Scanner
 # Simple Network Scanner 

A full-stack web application that scans a network and detects open ports using **Nmap**.  
Users can enter an IP address or network range and view open ports in a clean UI.  
Scan results are saved in **MongoDB Atlas** for future reference.

---

## Features 

- Scan network using Nmap
- Detect open ports and services
- Store scan history in MongoDB Atlas
- Simple React frontend UI
- Node.js backend API
- Fast and lightweight
- Beginner-friendly project

---

## Tech Stack 

Frontend:
- React.js
- Axios

Backend:
- Node.js
- Express.js

Database:
- MongoDB Atlas

Tool:
- Nmap

---

## How It Works 

1. User enters IP address (example: 127.0.0.1)
2. Frontend sends request to backend
3. Backend runs Nmap scan
4. Open ports are detected
5. Results are saved in MongoDB Atlas
6. Results displayed in frontend table

---

## Project Structure 

network-scanner
│
├── client (React frontend)
│
├── server (Node backend)
│   ├── models
│   │   └── Scan.js
│   ├── .env
│   ├── server.js
│
└── README.md

---

## Installation Guide 

### 1. Clone project

git clone <repo-link>
cd network-scanner

---

### 2. Install backend dependencies

cd server
npm install

---

### 3. Install frontend dependencies

cd client
npm install

---

### 4. Install Nmap

Download:
https://nmap.org/download.html

Check installation:

nmap --version

If not working, use full path in .env:

NMAP_PATH="C:\\Program Files (x86)\\Nmap\\nmap.exe"

---

### 5. Setup environment variables

Create `.env` file inside server folder:

PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

NMAP_PATH="C:\\Program Files (x86)\\Nmap\\nmap.exe"

---

### 6. Run backend

cd server
node server.js

---

### 7. Run frontend

cd client
npm start

---

## Usage 

Enter IP address:

127.0.0.1

OR

scanme.nmap.org

Click:

Scan

View open ports in table.

---

## Example Output 

Port     Status    Service  
135/tcp  open      msrpc  
445/tcp  open      microsoft-ds  
5000/tcp open      upnp  

---

## Future Improvements 

- Better UI using Tailwind CSS
- Scan history page
- Authentication system
- Export scan results
- Advanced Nmap options

---

## Author 

Aman Singh
