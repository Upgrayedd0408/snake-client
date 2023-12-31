const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

let connection;

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }

  if (data === "w") {
    connection.write("Move: up");
  }

  if (data === "a") {
    connection.write("Move: left");
  };

  if (data === "s") {
    connection.write("Move: down");
  };

  if (data === "d") {
    connection.write("Move: right");
  };

  if (data === "o") {
    connection.write("Say: Om Nom Nom");
  };

  if (data === "l") {
    connection.write("Say: Let's GOOOO!");
  };
};


module.exports = {
  setupInput
};