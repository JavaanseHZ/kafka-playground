# partner-service-csharp
simple C# Kafka Producer

Corresponding Kafka Connect MongoDB Sink Connector Configuration:

{
  "connector.class": "com.datamountaineer.streamreactor.connect.mongodb.sink.MongoSinkConnector",
  "value.converter.schema.registry.url": "http://localhost:8081",
  "connect.mongo.connection": "mongodb://localhost:27017",
  "connect.mongo.kcql": "INSERT INTO partners SELECT * FROM partnerCreated",
  "topics": "partnerCreated",
  "tasks.max": "1",
  "name": "MongoSinkConnector",
  "connect.mongo.db": "test",
  "value.converter": "io.confluent.connect.avro.AvroConverter",
  "key.converter": "io.confluent.connect.avro.AvroConverter",
  "key.converter.schema.registry.url": "http://localhost:8081"
}
