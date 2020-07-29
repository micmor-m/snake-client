/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
// Stores the active TCP connection object.
let connection; //this is oumost scope

const setupInput = function(conn) {
  connection = conn; //linked here
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


 // on any input from stdin (standard input), output a "." to stdout
 stdin.on('data', function handleUserInput (key) {
  //process.stdout.write('.');
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    //console.log('Move: up');
    conn.write('Move: up');
  }
  if (key === 'a') {
    //console.log('Move: left');
    connection.write('Move: left');
  }
  if (key === 's') {
    //console.log('Move: down');
    connection.write('Move: down');
  }
  if (key === 'd') {
    //console.log('Move: right');
    connection.write('Move: right');
  }
  
  if (key === 'q') {
    //console.log('Move: right');
    connection.write('Say: GO UP');
  }

  if (key === 'e') {
    //console.log('Move: right');
    connection.write('Say: ItsE');
  }


  })

  

  return stdin;
  }

module.exports = setupInput;


