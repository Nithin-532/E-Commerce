const db = require('./database');

const createBrandTableQuery = `
  CREATE TABLE IF NOT EXISTS Brand (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    logo_url TEXT NOT NULL
  )
`;

db.run(createBrandTableQuery, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Brands table created successfully');
  }
});