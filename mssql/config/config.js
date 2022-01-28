/**
 *  Database connection credentials
 *  You may need to execute "CREATE DATABASE test_database" if it says db not found
 */
const mssqlConfig = {
	user: 'sa',
	password: 'Strongpass2!',
	database: 'test_database',
	server: 'localhost',
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true, // for azure
		trustServerCertificate: true, // change to true for local dev / self-signed certs
	},
};

module.exports = mssqlConfig;
