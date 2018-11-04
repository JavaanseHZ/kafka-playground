# Contract Type Kstream
Simple Kstream application using Kafka.

#Stream function
- Consumes topic ContractCreated
- Filters topics with contract type "insurance" and "real estate" into separate topics:
InsuranceContractCreated and RealEstateContractCreated
- adds field risk to InsuranceContractCreated depending on premium

## Build Docker Image
```
gradle dockerBuildImage
```

## ElasticSinkConnector
Create Elastic Sink connector:
```
{
  "name": "sink-insurance-contract-created-elastic",
  "connector.class": "io.confluent.connect.elasticsearch.ElasticsearchSinkConnector",
  "type.name": "insurancecontract",
  "topics": "InsuranceContractCreated",
  "tasks.max": "1",
  "key.ignore": "true",
  "schema.ignore": "true",
  "topic.index.map": "InsuranceContractCreated:insurance_created",
  "connection.url": "http://elasticsearch:9200",
  "value.converter": "io.confluent.connect.avro.AvroConverter",
  "value.converter.schema.registry.url": "http://localhost:8081",
  "key.converter": "io.confluent.connect.avro.AvroConverter",
  "key.converter.schema.registry.url": "http://localhost:8081"
}
```
