/**
 *  Some useful commands that you can run with mssql using node
 */
const mssql = require('mssql');
const mssqlConfig = require('./config/config');

/**
 *  Selects all from a given table
 */
async function testSelect(tableName) {
	try {
		console.log('Starting testSelect function\n');
		if (!tableName) throw new Error('Must include a table name');

		const connection = await mssql.connect(mssqlConfig);
		if (!connection) throw new Error('Failed to connect to db');

		const results = await mssql.query(`SELECT * FROM ${tableName}`);
		if (!results) throw new Error('Failed to select from that table');

		console.log('\n\n---------------------------------------');
		console.dir(results);

		return connection.close();
	} catch (err) {
		console.error(err);
	}
}

/**
 *  Execute a stored procedure
 */
// async function executeStoredProcedure(procedure, params = {}) {
//     try {
//         if (!procedure) throw new Error('Must include a stored prcedure');

//         const connection = await mssql.connect(mssqlConfig);
//         if (!connection) throw new Error('Failed to connect to db');

//         const results = await connection
//             .request()
//             // .input(params)
//             .execute(procedure);

//         if (!results) throw new Error('Failed to execute stored procedure');

//         console.log('\n\n---------------------------------------');
//         console.dir(results);

//         return connection.close();
//     } catch (err) {
//         console.error(err);
//     }
// }

// testSelect('users');
