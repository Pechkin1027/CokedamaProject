import { sql_query } from "../../lib/db";

const handler = async (_, res) => {
  try {
    const results = await sql_query(`
        SELECT * FROM products
            ORDER BY id
    `);
    const data = res.json(results);
    const newData = data.map((info) => {
      const img = [];
      for (let i = 0; i < 5; i++) {
        const newImg = info[`img${i}`];
        if (newImg) {
          img.push(newImg);
        }
      }
      return { ...info, img };
    });
    return newData;
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
