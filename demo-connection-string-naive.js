const { Client } = require("pg");

async function doDemo() {
  //Bad practice here!
  //Good practice would be to read this string from an environment variable
  //NOT embed it in our code (particularly given it contains a password!)

  //However, this is the simplest way to see how a pg client can be configured with a connection string

  //NOTE: the following connection string points at a fictitious database.
  const connectionString =
    "postgresql://academy@localhost:5432/demos";
  

  const client = new Client({
    connectionString,
  });

  await client.connect();

  const result = await client.query("SELECT NOW()");
  console.log(result.rows);

  await client.end();
}

doDemo();
