CREATE TABLE cards (
	id INTEGER PRIMARY KEY,
	info TEXT NOT NULL
);

INSERT INTO cards (info) values ("\alpha = 3^2 + 7 - 11 + \beta_2");

SELECT * from cards;
