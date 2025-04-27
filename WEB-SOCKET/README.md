# Getting Started

>**Note**: This websocket can be executed in a python env on your PC or server, or you can jump into de docker guid instalation to create a container and the image to upload into dockerhub.

## 1. Python Usage
If you want to use the python method you need to create a python env inside your pc or server and then you can run de command:
```bash
pip install pymongo
```
And when de dependency of the connection for mongoDB is installed, we can execute de socket by running the command: 
```bash
python app.py
```
## 2. Docker configuration

### 2.1 Install Docker on Windows
1. Create environment to docker container, user powerShell as administrator and run the following command:
```bash 
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
2. Virtual machine environment enable feature, run the following command:
```bash
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
``` 
3. Download linux kernel upgrade file from [Microsoft](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

4. WSL-2 default version (into PowerShell as administrator):
```bash
    wsl --set-default-version 2
``` 
5. Linux distro installation, download from [Microsoft Store](https://aka.ms/wslstore), or From the Microsoft Store seek [Ubuntu 22.04 lts] 
		and push install button  or latest, this process takes awhile.

6. Validate WSL instance is running (into PowerShell as administrator):
```bash
    wsl --list --verbose
``` 

7. Download Docker Desktop from [Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

8. Open Docker Desktop and press settings button:

	- Select Resources option
		- Select WSL integration
		- Enable integration with additional distros
		
			- Ubuntu-22.04 or latest
			
	- Apply & Restart button	

### 2.2 Create Dockerfile
1. Create a new file named Dockerfile in the root of the project.
2. Add the following content to the Dockerfile:
```bash
FROM python:3.11.9-alpine3.19
LABEL authors="Team_Dinamite"

# Set the working directory in the container
WORKDIR /apps/socket_01

# Copy the dependencies file to the working directory
COPY . /apps/socket_01

# Create virtual environment
RUN python -m venv venv

# Activate virtual environment
RUN . venv/bin/activate

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app runs on
EXPOSE 5001

# Run the application
CMD ["python", "app.py"]
```
3. Create local container image:
```bash	
docker build -t socket_01 .
```
4. Run the container:
```bash
docker run -d -p 5001:5001 socket_01
```
5. Check the container is running:
```bash
docker ps
```

6. Create a remote container image:
```bash	
	-- Docker Hub connection
		docker login
			- Username:
			- Password:
		
	-- Create image 
		docker build -t name/socket_01:v2 .	


	-- Create proyect tag to use in Docker Hub
		docker tag name/socket_01:v2 dangeliza/socket_01


	-- Upload proyect to Docker Hub
		docker push name/socket_01

	 
	-- Create container with image
		docker run --name socket_01 -p 5001:5001 -d name/socket_01

```
## 3 Run webSocket Into DigitalOcean

### 3.1 Create MondoDB in DigitalOcean
1. The web socket needs access to a cloud base DB, so we need to create one into DigitalOcean, we can do this by log in to the Digital Ocean web page https://cloud.digitalocean.com/projects/25e10836-80c1-4790-932a-af0030f9716b/resources?i=1874b8.
2. Once we are log in, in the left pane, select 'Databases', then click on the option 'Create Database (MongoDB)' and choose a data center region, New York for preference and make sure to select the basic plan ($15/mo Basic 1 vCPU / 1GB RAM / 15BG SSD)

### 3.2 Create WebSocket App in DigitalOcean
1. We need to create the app that will be runnig the webSocket by going into the left pane select 'Select Apps', then we select the resources for the websocket by selecting the image uploaded into docker hub.
2. To customize our socket, we press the edit button while on the screen to generate the app and we need to change the HTTP-Port and the HTTP Request Routes, and finally we customize our payment plan and select the basic one, of choice $5.00/mo/Basic (512 MB RAM - 1 vCPU).
3. Finally, we just need to create the app and attach it with the mongoDB that we create in the step before.

