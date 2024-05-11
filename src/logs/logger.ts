import fs from 'fs';
import path from 'path';

type TLogData = {
	text: string;
	duration: number;
	rows: number | null;
};

export const log = (data: TLogData) => {
	const logData = {
		query: data.text,
		duration: data.duration + 'ms',
		rows: data.rows,
		timestamp: new Date().toISOString(),
	};
	console.log('executed query', logData);
	const logString = 'executed query ' + JSON.stringify(logData) + '\n';

	fs.appendFile(path.join(__dirname, 'logs.txt'), logString, (err) => {
		if (err) {
			console.log(err);
		}
	});
};
