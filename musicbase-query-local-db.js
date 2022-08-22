const { Client } = require("pg");

async function doMusicbase() {
  const client = new Client({ database: 'musicbase' });
  await client.connect();
  const res = await client.query("SELECT * from artists");
  console.log(res.rows);
  await client.end();
}

doMusicbase();
