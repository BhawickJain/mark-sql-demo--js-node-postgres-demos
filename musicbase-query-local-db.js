const { Client } = require("pg");

async function doMusicbase() {
  const client = new Client({ database: 'musicbase' });
  await client.connect();
  try {
  await client.query("INSERT INTO artists VALUES(2, 'Cardi B', NULL)")

  }
  catch(err) {
    console.error(err)
  }
  const res = await client.query("SELECT * from artists");
  console.log(res.rows);
  await client.end();
}

doMusicbase();
