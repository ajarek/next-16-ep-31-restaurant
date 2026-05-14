require('dotenv').config({ path: '.env.local' });
const { neon } = require('@neondatabase/serverless');
async function run() {
  const sql = neon(process.env.DATABASE_URL);
  await sql`UPDATE neon_auth.user SET role = 'admin' WHERE email = 'calvert48@wp.pl'`;
  console.log("Updated to admin!");
}
run().catch(console.error);
