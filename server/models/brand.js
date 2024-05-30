const db = require('../database');

class Brand {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.logo_url = data.logo_url
    }
  
  }

  const getAllBrands = (callback) => {
    db.all('SELECT * FROM Brand', (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        const users = rows.map((row) => new Brand(row));
        callback(null, users);
      }
    });
  };
  
  module.exports = { getAllBrands };