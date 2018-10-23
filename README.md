# kafka-playground
Playground for Apache Kafka

## Prerequisites
```
export HOSTNAME=${HOSTNAME}
```
## web interfaces

[kafka-topics-ui](http://localhost:3030)
[adminer (DB)](http://localhost:18080)
[dejavu (elastic)](http://localhost:1358)

## PartnerDubletten

### Kafka Connect JdbcSourceConnector Configuration for PartnerDubletten
1. Create new JDBC Source Connector [kafka-topic-connect-ui](http://localhost:3030/kafka-connect-ui/#/cluster/fast-data-dev/create-connector/io.confluent.connect.jdbc.JdbcSourceConnector)
2. Use the follwing Json Configuration
```json
{
  "name": "source-partnerdubletten",
  "connector.class": "io.confluent.connect.jdbc.JdbcSourceConnector",
  "mode": "timestamp+incrementing",
  "incrementing.column.name": "id",
  "timestamp.column.name": "ts",
  "topic.prefix": "PartnerdublettenFound",
  "tasks.max": "1",
  "connection.url": "jdbc:postgresql://postgres:5432/postgres?user=postgres&password=example",
  "poll.interval.ms": 1000,
  "query": "SELECT * FROM partnerdubletten",
  "key.converter": "io.confluent.connect.avro.AvroConverter",
  "value.converter": "io.confluent.connect.avro.AvroConverter",
  "key.converter.schema.registry.url":"http://localhost:8081",
  "value.converter.schema.registry.url":"http://localhost:8081",
  "transforms":"createKey,extractInt",
  "transforms.createKey.type":"org.apache.kafka.connect.transforms.ValueToKey",
  "transforms.createKey.fields":"id",
  "transforms.extractInt.type":"org.apache.kafka.connect.transforms.ExtractField$Key",
  "transforms.extractInt.field":"id"
}
```

### Insert Partnerdubletten in PostgreSQL
1. Login in [Adminer](http://localhost:18080)
```
System:	PostgreSQL
Server: postgres
Username:	postgres
Password:	example
Database: postgres
```
2. Insert PartnerDubletten Data (replace OLD-UUID and NEW-UUID with real values):
```sql
INSERT INTO "partnerdubletten" ("oldpartnerid", "newpartnerid")
VALUES ('[OLD-UUID]', '[NEW-UUID]');
```

## Kafka Connect ElasticSinkConnector Configuration for VertragCreated
1. Create new Elastic Sink Connector [kafka-topic-connect-ui](http://localhost:3030/kafka-connect-ui/#/cluster/fast-data-dev/create-connector/io.confluent.connect.elasticsearch.ElasticsearchSinkConnector)
2. Use the follwing Json Configuration
```json
{
  "name": "VertragCreatedElasticSinkConnector",
  "connector.class": "io.confluent.connect.elasticsearch.ElasticsearchSinkConnector",
  "type.name": "vertrag",
  "topics": "VertragCreated",
  "tasks.max": "1",
  "topic.index.map": "VertragCreated:vertrag_created",
  "connection.url": "http://elasticsearch:9200",
  "key.ignore": "true",
  "schema.ignore": "true",
  "key.converter": "io.confluent.connect.avro.AvroConverter",
  "value.converter": "io.confluent.connect.avro.AvroConverter",
  "key.converter.schema.registry.url":"http://localhost:8081",
  "value.converter.schema.registry.url":"http://localhost:8081"
}
```
