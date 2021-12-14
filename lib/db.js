import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: '138.128.160.186',
        database: 'cokedama_products',
        user: 'cokedama_testuser',
        password: 'X;th7h04GN@q',
    }
});

export async function sql_query(query_string,values = []) {
    try {
        const results = await db.query(query_string, values)
        await db.end()
        return results
    } catch (e) {
        throw Error(e.message)
    }
}