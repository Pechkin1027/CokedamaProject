import { sql_query } from "../../lib/db";

const handler = async (_, res) => {
<<<<<<< HEAD
  try {
    const results = await sql_query(`
    SELECT * FROM products
    ORDER BY id DESC
=======
    try {
        const results = await sql_query(`
            SELECT * FROM products
             ORDER BY id
>>>>>>> 552dd2e18d68ab92e412d899a103f0a8c3523979
        `);
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
