/**
 *  A quick way to populate your Docker MSSQL database container.
 *  Docs for mssql https://www.npmjs.com/package/mssql
 */
const mssql = require('mssql');
const names = require('./config/names');
const foods = require('./config/foods');
const mssqlConfig = require('./config/config');

async function fillDatabasesExample() {
	try {
		const connection = await mssql.connect(mssqlConfig);
		if (!connection) throw new Error('Failed to connect to db');

		const giantQueryString = await buildGiantQueryString(50);
		const secondQueryString = await buildSecondQueryString(50);

		const results = await mssql.query(giantQueryString);
		if (!results) throw new Error('Failed to fill with first query');

		const results2 = await mssql.query(secondQueryString);
		if (!results2) throw new Error('Failed to fill with second query');

		return null;
	} catch (err) {
		console.error(err);
	}
}

function getRandomNumber(maxValue) {
	return Math.floor(Math.random() * maxValue);
}

/**
 *  Fill out random users (Be careful how many iterations you choose)
 */
async function buildGiantQueryString(iterations) {
	let giantQueryString = '';
	for (let i = 0; i < iterations; i++) {
		const firstName = names.first[getRandomNumber(names.first.length)];
		const lastName = names.last[getRandomNumber(names.last.length)];
		const age = getRandomNumber(80);
		const phone = `507${getRandomNumber(9999999)}`;

		giantQueryString = giantQueryString.concat(`
            INSERT INTO users (
                ID,
                First_Name,
                Last_Name,
                Age,
                Phone
            )
            VALUES (
                NEWID(),
                '${firstName}',
                '${lastName}',
                '${age}',
                '${phone}'
            )
        `);
	}

	return giantQueryString;
}

/**
 *  Fill out random foods (Be careful how many iterations you choose)
 */
async function buildSecondQueryString(iterations) {
	let giantQueryString = '';
	for (let i = 0; i < iterations; i++) {
		const foodName = foods.names[getRandomNumber(foods.names.length)];
		const rating = getRandomNumber(5);

		giantQueryString = giantQueryString.concat(`
            INSERT INTO foods (
                ID,
                Name,
                Rating
            )
            VALUES (
                NEWID(),
                '${foodName}',
                ${rating}
            )
        `);
	}

	return giantQueryString;
}

/**
 *  Make sure your db is running
 *  Fill out the config file
 *  Uncomment the function below and run "node fill-mssql"
 */

// fillDatabasesExample();
