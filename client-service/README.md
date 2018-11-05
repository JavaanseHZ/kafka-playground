# Client Service
Simple C#/ASP.net Core REST application using Kafka

## Description
* Supports CRUD operations on endpoint /api/client
* [Example requests](https://github.com/JavaanseHZ/kafka-playground/tree/master/soap-ui) in soap-ui subfolder

### Model
```
id : uuid
firstname : string
lastname : string
street : string
city : string
```

## Extensions for Visual Studio Code
- C# (ms-vscode.csharp)
- Nuget Paket Manager (jmrog.vscode-nuget-package)
- Docker (peterjausovec.vscode-docker)

## Installation
- [.NET Core](https://www.microsoft.com/net/learn/dotnet/hello-world-tutorial)
- [Confluent Kafka .NET Client](https://github.com/confluentinc/confluent-kafka-dotnet)
- [Docker build](https://hub.docker.com/r/microsoft/aspnetcore/)

## Build Docker Image
```
docker build -t client-service:latest .
```

## Generate Classes from Avro Schema
Execute in terminal
```
client-service/avro$ avrogen -s ClientCreated.avsc ..
```
