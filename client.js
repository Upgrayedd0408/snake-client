const net = require("net");
const {IP, port} = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    IP,
    port
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: MDL");


  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports =  {
  connect
};