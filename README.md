# GradientGPT Frontend

Welcome to the **GradientGPT** frontend repository! This is the client-side of the GradientGPT project, a chatbot-based application that interacts with Hugging Face GPT models to provide AI-powered responses.
The project is hosted at vercel [https://gradientgpt-frontend.vercel.app/](https://gradientgpt-frontend.vercel.app/).
The frontend is developed  using React, and it communicates with the backend API to fetch data and send requests.
The backend is hosted on Vercel, and the Docker image is available for deployment on Docker Hub. 

The app has two views: 
- **Admin View**: Where the admin can see each user and their saved prompts.
- **User View**: Where users can interact with the chatbot and view their conversation history.

## Backend & API
- Backend Hosted at: [https://gradientgpt.vercel.app/](https://gradientgpt.vercel.app/)

Note: The backend is hosted seperately on vercel and has a seprate repository on github because it was causing conflicts while being hosted. Sincere  apologies for the inconvenience.
- Backend GitHub Repository: [https://github.com/rangercoder/Gradientgpt](https://github.com/rangercoder/Gradientgpt)
- Docker Image: [https://hub.docker.com/r/fixxer9912/image01/tags](https://hub.docker.com/r/fixxer9912/image01/tags)

## Features
- **User View**: 
  - Interact with the chatbot.
  - Get Response in structred json  format. that can be further used for processing .
  ```bash
  {
    "summary": "string",
    "result_text": "string",
    "result_table_path": "string (URL)",
    "result_visualization_path": "string (URL)",
    "error": "string"
  } 
  ```
  - View chat history via the navbar.
  - Save conversations for later reference.
- **Admin View**: 
  - View all users and their saved prompts.
  - Manage and view chatbot interactions.
- **Hugging Face GPT Integration**: Uses Hugging Face GPT models for generating responses.
  
## Technologies Used
- **Frontend**: React, Tailwind CSS, Vite for fast build and development.
- **Backend**: Node.js with Express, MongoDB for storing user and conversation data, hosted on Vercel.
- **LLM API**: Hugging Face GPT for natural language processing.
- **Docker**: Docker image available for backend deployment.

## Installation

To get the frontend of **GradientGPT** running locally, follow the steps below:

### 1. Clone the Frontend Repository
```bash
cd gradientgpt
mkdir frontend
cd frontend
git clone https://github.com/rangercoder/Gradientgpt-frontend
```
The Folder structure of the  frontend should be as follows:

![image](https://github.com/user-attachments/assets/da0d89b2-dc25-4807-be3a-e5329378d2b1)
### 2. Clone the Backend Repository
```bash
cd gradientgpt
mkdir backend 
cd backend
git clone https://github.com/rangercoder/Gradientgpt
```

### 3. NOTE for the next step make sure sure you have node insatlled on your machine.

### 4. Skip this step if you have node installed on your machine 

- NodeJs Download Link: [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)

- insert image  of nodejs installation

- Setup the bin folder in the environemnt variable of your system(depends on your OS)
shown here for windows machine 

```bash
Copy such apth from your machine 
C:\Program Files\nodejs
```

- Edit the environemnent variables as shown in the iamge.

- Insert evironment variable screenshot

### 4. Install Dependencies in Frontend Directory
```bash
cd ..
cd frontend
npm install
```
### 4. Install Dependencies in Backend Directory
```bash
cd ../backend
npm install
```

### 5.  Start the Frontend Server
```bash
cd ..
cd frontend 
npm run dev 
```
### 6.  Start the Backend Server
```bash
cd ..
cd backend
node index.js
```
## License
This project is open-source and licensed under the MIT License.



