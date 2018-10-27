CREATE TABLE clientduplicates (
  id SERIAL NOT NULL PRIMARY KEY,
  ts timestamp without time zone NOT NULL DEFAULT (current_timestamp),
  oldclientid TEXT,
  newclientid TEXT
);
