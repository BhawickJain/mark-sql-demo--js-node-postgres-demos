const { Client } = require("pg");

async function doDemo() {
  // find 
  const client = new Client({ database: 'demos' });
  await client.connect();
  const res = await client.query("SELECT * from words");
  console.table(res.rows);
  await client.end();
}

doDemo();
