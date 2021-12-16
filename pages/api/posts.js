// import { sql_query } from "../../lib/db";

// const handler = async (_, res) => {
//     try {
//         const results = await sql_query(`
//             SELECT * FROM products
//              ORDER BY id
//         `);
//         return res.json(results);
//     } catch (e) {
//         res.status(500).json({ message: e.message });
//     }
// };

// export default handler;

const {
	createPool
} = require('mysql');

const pool = createPool({
	host: "192.168.64.2",
	user: "cokedama_user1",
	password: "nospecialchars123",
	database: "cokedama_products",
	connectionLimit: 10
})

pool.query(`select * from products`, (err, result, fields)=>{
	if (err) {
		return console.log(err);
	}
	return console.log(result);
})
