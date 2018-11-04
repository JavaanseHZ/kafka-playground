# Test CLI Producer & Consumer
- start kafka [fast-data-dev](https://github.com/Landoop/fast-data-dev)
```
docker-compose up -d
```
- produce event from CLI
```
docker exec -it kafka bash -c "seq 42 | kafka-console-producer --request-required-acks 1 --broker-list localhost:9092 --topic foo && echo 'Produced 42 messages.'"
```
- consume event from CLI
```
docker exec -it kafka kafka-console-consumer --bootstrap-server localhost:9092 --topic foo --from-beginning --max-messages 42
```
