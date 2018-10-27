CREATE TABLE clientduplicates (
  id SERIAL NOT NULL PRIMARY KEY,
  ts timestamp without time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'CEST'),
  oldclientid TEXT,
  newclientid TEXT
);
