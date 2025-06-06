 What is Docker?
Docker is a tool that helps you create, run, and manage apps in a lightweight, portable environment called a container.

Think of it like a box that includes your app and everything it needs to run — no matter where you open the box (your laptop, cloud, etc.).

🧱 What is a Docker Image?
An image is like a template or blueprint.

It contains the code, libraries, and settings needed for an app.

Example: You might have an image for a Python app that includes Python, your code, and required packages.

🧊 You cannot run an image directly — it’s just a static file.

📦 What is a Docker Container?
A container is a running instance of an image.

It’s like a living copy of your blueprint (image).

You can start, stop, or destroy containers — and you can run many containers from the same image
Command	Description
docker --version	Show Docker version
docker info	Display Docker system-wide info
docker help	Show help for Docker

🐳 Docker Image Commands
Command	Description
docker images	List all local images
docker pull <image>	Download image from Docker Hub
docker build -t <name>:<tag> .	Build image from Dockerfile
docker rmi <image>	Remove image
docker tag <image> <new_name>	Tag image
docker history <image>	Show image history
docker inspect <image>	Show detailed info about image

🐳 Docker Container Commands
Command	Description
docker ps	List running containers
docker ps -a	List all containers (including stopped)
docker run <image>	Run a container from an image
docker run -it <image> bash	Interactive shell in container
docker run -d <image>	Run container in detached mode
docker start <container>	Start an existing container
docker stop <container>	Stop a running container
docker restart <container>	Restart a container
docker rm <container>	Remove container
docker exec -it <container> bash	Execute command inside container
docker logs <container>	View container logs
docker top <container>	Show running processes inside container
docker kill <container>	Force kill a container

🐳 Docker Volume Commands
Command	Description
docker volume create <name>	Create a volume
docker volume ls	List volumes
docker volume inspect <volume>	Volume details
docker volume rm <volume>	Remove volume

🐳 Docker Network Commands
Command	Description
docker network ls	List networks
docker network create <name>	Create network
docker network inspect <name>	Network details
docker network rm <name>	Remove network

🐳 Docker Compose Commands
Command	Description
docker-compose up	Start services defined in docker-compose.yml
docker-compose up -d	Start in detached mode
docker-compose down	Stop and remove containers, networks, volumes
docker-compose build	Build or rebuild services
docker-compose ps	List services
docker-compose logs	View logs

🐳 Docker System Cleanup
Command	Description
docker system prune	Remove unused data (containers, networks, images)
docker image prune	Remove unused images
docker container prune	Remove stopped containers
docker volume prune	Remove unused volumes

🐳 Docker Save/Load & Export/Import
Command	Description
docker save -o <file>.tar <image>	Save image to tar archive
docker load -i <file>.tar	Load image from archive
docker export <container>	Export container filesystem
docker import <file>.tar	Import container from tarball
