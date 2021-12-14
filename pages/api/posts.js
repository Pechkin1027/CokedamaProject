import { sql_query } from "../../lib/db";

const handler = async (_, res) => {
    try {
        const results = await sql_query(`
            SELECT * FROM cokedama_products
            ORDER BY id DESC
        `);
        return res.json(results);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;