const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 


 // handle incoming data from the server and console log it for the player
  conn.on('data', (data) => {
  console.log('Server says: ', data);
});

  return conn;
}

console.log('Connecting ...');
connect();

//handle incoming data from the server and console log it for the player
// conn.on('data', (data) => {
//   console.log('Server says: ', data);
// });