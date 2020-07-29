const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 


 // handle incoming data from the server and console log it for the player
  conn.on('data', (data) => {
  console.log('Server says: ', data);
});

//Events: Print a message to the screen when the connection is successfully established.
conn.on('connect', () => {
  console.log("Successfully connected to game server")
});

//Events: Send the string "Name: ___" to the server, upon connection
conn.on('connect', () => {
  conn.write('Name: MoM');
});

//Events: Send the string "Move: up" as data to the server, via the conn object.
// conn.on('connect', () => {
//   conn.write('Move: up');
// });

  return conn;
}

module.exports = connect;