[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hebertcisco/nestjs-microservices-mqtt)

[![Build and Test](https://github.com/hebertcisco/nestjs-microservices-mqtt/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/hebertcisco/nestjs-microservices-mqtt/actions/workflows/node.js.yml)

MQTT is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport. It is useful for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium.

# Basic documentation

## free MQTT test server 

> You can use the following server for testing

```sh
MQTT_URL=mqtt://test.mosquitto.org
```

Or you can use docker to run a local server

## MQTT with Docker

> Up an image and run emqx image with docker

```sh
docker run -it --rm --name emqx -p 18083:18083 -p 1883:1883 emqx:latest
```

## Runing the application with docker

### Run as dev

```sh
docker-compose up dev
```

### Run as prod

```sh
docker-compose up -d prod
```

## Runing the application with npm scrips

```sh
npm install && npm run build
```

```sh
npm run prepare:enviroment
```

### Run as dev

```sh
npm run start:dev
```

### Run as prod

```sh
npm run start
```

or

```sh
npm run start:prod
```
