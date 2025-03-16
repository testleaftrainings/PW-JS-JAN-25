import mysql from 'mysql2/promise';
import { test } from '../customFixtures/salesForceFixture';
import { format, addMinutes } from 'date-fns';
import data from "../data/dbData/dbCredentials.json"

export default class DB {
    private DBConfig: mysql.ConnectionOptions = {
        host: data.database_config.host,
        user: data.database_config.credentials.user,
        database: data.database_config.database_name,
        password: data.database_config.credentials.password,
        port: data.database_config.port,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    };
    //"universal_profile"
    async executeQuery(query: string): Promise<any[]> {
        const connection = await mysql.createConnection(this.DBConfig);
        try {
            const [rows] = await connection.execute(query) as [any[], any];
            return rows;
        } catch (error) {
            console.error("Error in connection/executing query:", error);
            throw error;
        } finally {
            await connection.end().catch((error) => {
                console.error("Error ending connection:", error);
            });
        }
    }
}


