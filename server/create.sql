CREATE TABLE scores (
	iid TEXT PRIMARY KEY,
	name TEXT NOT NULL,
	amount INTEGER NOT NULL,
	count INTEGER NOT NULL,
	start TEXT NOT NULL,
	stop TEXT,
	seconds INTEGER,
	score REAL
);

SELECT * from scores;
