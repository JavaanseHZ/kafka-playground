# kafka-playground
Playground for Apache Kafka

## Prerequisites
```
export HOSTNAME=${HOSTNAME}
```
## web interfaces

[kafka-topics-ui](http://localhost:3030)
[adminer (postgres)](http://localhost:18080)
[kibana (elastic)](http://localhost:5601)

## PartnerDubletten

### Kafka Connect JdbcSourceConnector Configuration for Client Duplicates
1. Create new JDBC Source Connector [kafka-topic-connect-ui](http://localhost:3030/kafka-connect-ui/#/cluster/fast-data-dev/create-connector/io.confluent.connect.jdbc.JdbcSourceConnector)
2. Use the follwing Json Configuration
```json
{
  "name": "source-client-duplicates",
  "connector.class": "io.confluent.connect.jdbc.JdbcSourceConnector",
  "mode": "timestamp+incrementing",
  "incrementing.column.name": "id",
  "timestamp.column.name": "ts",
  "topic.prefix": "ClientDuplicatesFound",
  "tasks.max": "1",
  "connection.url": "jdbc:postgresql://postgres:5432/postgres?user=postgres&password=example",
  "poll.interval.ms": 1000,
  "query": "SELECT * FROM clientduplicates",
  "key.converter": "io.confluent.connect.avro.AvroConverter",
  "value.converter": "io.confluent.connect.avro.AvroConverter",
  "key.converter.schema.registry.url":"http://localhost:8081",
  "value.converter.schema.registry.url":"http://localhost:8081",
  "transforms":"createKey,extractInt,SetSchemaName",
  "transforms.createKey.type":"org.apache.kafka.connect.transforms.ValueToKey",
  "transforms.createKey.fields":"id",
  "transforms.extractInt.type":"org.apache.kafka.connect.transforms.ExtractField$Key",
  "transforms.extractInt.field":"id",
  "transforms.SetSchemaName.type":"org.apache.kafka.connect.transforms.SetSchemaMetadata$Value",
  "transforms.SetSchemaName.schema.name":"de.client.kafkaevent.duplicates.ClientDuplicatesFound"
}
```

### Insert Client Duplicates in PostgreSQL
1. Login in [Adminer](http://localhost:18080)
```
System:	PostgreSQL
Server: postgres
Username:	postgres
Password:	example
Database: postgres
```
2. Insert Client Duplicates Data (replace [OLD-UUID] and [NEW-UUID] with real values):
```sql
INSERT INTO "clientduplicates" ("oldclientid", "newclientid")
VALUES ('[OLD-UUID]', '[NEW-UUID]');
```

## Kafka Connect ElasticSinkConnector Configuration for Event ContractCreated
1. Create new Elastic Sink Connector [kafka-topic-connect-ui](http://localhost:3030/kafka-connect-ui/#/cluster/fast-data-dev/create-connector/io.confluent.connect.elasticsearch.ElasticsearchSinkConnector)
2. Use the follwing Json Configuration
```json
{
  "name": "sink-life-contract-created-elastic",
  "connector.class": "io.confluent.connect.elasticsearch.ElasticsearchSinkConnector",
  "type.name": "contract",
  "topics": "ContractCreated",
  "tasks.max": "1",
  "topic.index.map": "ContractCreated:contract_created",
  "connection.url": "http://elasticsearch:9200",
  "key.ignore": "true",
  "schema.ignore": "true",
  "key.converter": "io.confluent.connect.avro.AvroConverter",
  "value.converter": "io.confluent.connect.avro.AvroConverter",
  "key.converter.schema.registry.url":"http://localhost:8081",
  "value.converter.schema.registry.url":"http://localhost:8081"
}
```
