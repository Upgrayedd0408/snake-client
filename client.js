const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541 // PORT number here,
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