import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: '192.168.0.7',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'tasksdb'
});
