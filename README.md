# README.md

## description

dockerize these containers
 - app server(nodejs + express)
 - database server(mongodb)
 - revers proxy server(nginx)


## Development enviromnent
 OS: Windows 10 64bit with wsl(Ubuntu 20.04 LTS)  
 Docker Desptop v4.10.1  
 $ docker --version  
 Docker version 20.10.17, build 100c701  
 $ docker-compose --version  
 Docker Compose version v2.6.1  
 $ docker-compose exec server node --version  
  v18.7.0  
 $ docker-compose exec server npm list express  
  server@1.0.0 /usr/src/app  
  `-- express@4.18.1  
 $ docker-compose exec mongo mongo --version  
  MongoDB shell version v5.0.9  

## Feature
 - .env (contain enviroments key: value)
 - nginx/templets/*.conf.template (contains nginx variables)
 - mongodb with authenticated user and password.

## Next setup
 - SSL setup
 - If you use jwilder/nginx-proxy continer, you shuld set up it before.

