import express from 'express'

type Func<T, R> = (value: T) => R

const app = express()
const port = 3000

const getTime = (): number[] => {
	const date = new Date()
	return [
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
	]
}

const numberToDigit = (length = 2): Func<number, string> =>
	(time: number): string =>
		time.toLocaleString('en-US', {minimumIntegerDigits: length})

const getTimeString = (): string =>
	getTime()
		.map(numberToDigit())
		.join(':')

const info = (msg: string): void =>
	console.log(`[INFO] ${getTimeString()} ${msg}`)

app.listen(port, () => {
	info(`running on: ${port}!`)
	setInterval(() => info('Blub!'), 1000)
})
