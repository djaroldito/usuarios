const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false}).then(() => {
    server.listen(process.env.PORT, () => {
      console.log('escuchando en puerto', process.env.PORT); // eslint-disable-line no-console
    });
  });