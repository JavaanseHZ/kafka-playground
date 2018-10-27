# Client Service
Simple C#/ASP.net Core REST application using Kafka

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