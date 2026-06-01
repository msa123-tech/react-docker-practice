# React Docker Practice

This is a simple React application created using Vite and Docker. The purpose of this project was to understand how React applications can be containerized and run inside Docker containers.

Tech Stack

* React
* Vite
* Docker

Prerequisites

Make sure Docker Desktop is installed and running on your machine.

# Prerequisites

Make sure Docker Desktop is installed and running on your machine.

Check Docker installation:
docker --version
docker ps

git clone https://github.com/msa123-tech/react-docker-practice.git
cd react-docker-practice

Build the Docker Image

Run the following command from the project root directory:

docker build -t react-docker-practice .

Run the Docker Container

docker run --name react-docker-container -p 5173:5173 react-docker-practice

Access the Application

Open your browser and visit:
http://localhost:5173

What I Learned

* Creating a React application using Vite
* Writing a Dockerfile for a frontend application
* Building Docker images
* Running applications inside Docker containers
* Port mapping between host machine and container
* Basic Docker container management commands
