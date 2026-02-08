
import mariadb from 'mariadb';

// Connection pool
export const pool = mariadb.createPool({
  host: 'localhost',      // or container name if using Docker
  user: 'root',
  password: 'pass',
  database: 'mydb',
  connectionLimit: 5
});

// Helper function to query
export async function query(sql, params) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql, params);
    return rows;
  } finally {
    if (conn) conn.release();
  }
}

