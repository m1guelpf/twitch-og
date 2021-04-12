import { getScreenshot } from '../../utils/puppeteer'

const isLocal = typeof process.env.VERCEL_REGION === 'undefined'

export default async ({ query: { handle }, headers: { host } }, res) => {
	if (!handle) return res.status(404).send('Not Found')

	res.setHeader('Content-Type', `image/jpeg`)
	res.setHeader('Cache-Control', `s-maxage=1, stale-while-revalidate`)

	res.send(await getScreenshot(`http${isLocal ? '' : 's'}://${host}/meta/${handle}`))
}

export const config = { api: { bodyParser: false } }
