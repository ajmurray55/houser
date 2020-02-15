CREATE TABLE houses 
(
houseId SERIAL PRIMARY KEY,
property_name TEXT,
address TEXT,
city TEXT,
state VARCHAR(2),
zip NUMERIC(5)
);

INSERT INTO houses 
(property_name, address, city, state, zip)
VALUES
('Triplex', '4567 S Road St', 'Orem', 'UT', 84097),
('Duplex', '456 E Bakers St', 'Salt Lake City', 'UT', 84091);