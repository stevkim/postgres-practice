import express from 'express';
import * as db from './database/db';

const app = express();

app.use(express.json());

// test endpoint
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Test endpoint' });
});

app
	.route('/students')
	.get(async (req, res) => {
		const allStudents = await db.query('SELECT * FROM students');

		res.status(200).json({ data: allStudents });
	})
	.post(async (req, res) => {
		const { name, email, age } = req.body;
		try {
			const addedStudent = await db.query(
				`INSERT INTO students(name, email, age) VALUES($1, $2, $3) RETURNING *`,
				[name, email, age]
			);

			res.status(201).json({ data: addedStudent.rows[0] });
		} catch (err) {
			console.log(err);

			res.sendStatus(500);
		}
	});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
