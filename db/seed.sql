\c cars_dev

INSERT INTO cars (make, model, year, price, color, mileage, condition, location, image_url, is_favorite, for_sale) VALUES 
('Nissan', 'Nissan Skyline GT-R', 1999, 179000.00, 'Blue', 28000, 'Certified', '850 E Jericho Turnpike, Huntington Station, NY 11746', '/static/1999_GTR_FV.webp', true, true),
('Nissan', 'Nissan GT-R Nismo', 2024, 224400.00, 'Stealth Gray', 0, 'New', '1521 Sunrise Hwy, Bay Shore, NY 11706', '/static/2024_GTR.jpg', true, true),
('Subaru', 'Subaru WRX STI', 2017, 33998.00, 'Red', 21000, 'Used', '133 American Blvd, Brentwood, NY 11717', '/static/2017_STI.jpg', true, false),
('Dodge', 'Dodge Durango SRT Hellcat', 2024, 104810.00, 'Destroyer Gray', 0, 'New', '212-19 Northern Blvd, Queens, NY 11361', '/static/2024_DURANGO_HELLCAT.webp', false, false),
('Lamborghini', 'Lamborghini Revuelto', 2024, 608358.00, 'Arancia Atlas', 0, 'New', '711 11th Ave, New York, NY 10019', '/static/2024_LAMBO.jpg', false, true);