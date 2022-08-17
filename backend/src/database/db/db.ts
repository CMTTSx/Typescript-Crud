const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
export const db = new Sequelize('crud_typescript', 'root', 'eR17$1p#XDfZ', {
  host: 'localhost',
  dialect: 'mysql' 
});