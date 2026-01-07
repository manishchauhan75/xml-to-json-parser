XML to JSON Parser

A full-stack application that allows users to upload XML files, convert them into JSON format, view the converted data, and download the output.
Built using Node.js, Express, React, and Tailwind CSS.

PROJECT STRUCTURE

xml-to-json-parser/
- Backend/
- Frontend/
- README.md

GETTING STARTED

1. Clone the Repository

git clone https://github.com/manishchauhan75/xml-to-json-parser.git
cd xml-to-json-parser

BACKEND SETUP

1. Navigate to Backend folder
cd Backend

2. Install dependencies
npm install

3. Create .env file
PORT=5000

4. Run backend server
node index.js
(Optional) nodemon index.js

Backend Packages:
cors
express
multer
nodemon
xml2js

FRONTEND SETUP

1. Navigate to Frontend folder
cd Frontend

2. Install dependencies
npm install

3. Create .env file
VITE_API_BASE_URL=http://localhost:5000

4. Run frontend
npm run dev

Frontend Packages:
react
tailwindcss
axios
vite

APPLICATION FLOW

- Upload XML file
- Backend parses XML to JSON
- JSON stored temporarily
- User can view and download JSON

FEATURES

- XML upload
- XML to JSON conversion
- Download JSON
- Clean UI
- REST API architecture

TECH STACK

Frontend: React, Tailwind CSS, Axios
Backend: Node.js, Express, Multer, xml2js

AUTHOR

Manish Chauhan
GitHub: https://github.com/manishchauhan75

