<<<<<<< HEAD
import mysql from 'serverless-mysql' 
//Database connection here.
export const db = mysql({
    config: {
        host : process.env.MYSQL_HOST,       //Get env variables from env.local
        datbase: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
    } 
})

export async function sql_queary(queary_string,values = []){
    try {
        const results = await db.queary(queary_string, values)
        await db.end() 
        return results  
    }catch (e) {
        throw Error(e.message) 
    }

=======
import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
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
>>>>>>> 3d4ed3f80b158017e7c7e851f82fe1c4fd886668
}