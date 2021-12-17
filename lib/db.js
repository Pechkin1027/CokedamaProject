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

}