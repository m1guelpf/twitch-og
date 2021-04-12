import Twitch from '../../utils/twitch'

const isLocal = typeof process.env.VERCEL_REGION === 'undefined'

export default async ({ query: { handle }, headers: { 'user-agent': userAgent, host } }, res) => {
	if (!handle) return res.status(404).send('Not Found')

	if (!userAgent.includes('Twitterbot')) return res.redirect(`https://twitch.tv/${handle}`)

	const stream = await Twitch.getStreamer(handle)

	if (!stream.is_live) return res.redirect(`https://twitch.tv/${handle}`)

	const meta = {
		title: `${stream.is_live ? '🔴 Live now: ' : ''}${stream.title}`,
		description: `Join ${stream.display_name} on Twitch now!`,
		image: `http${isLocal ? '' : 's'}://${host}/images/${handle}`,
	}

	res.setHeader('Content-Type', 'text/html; charset=utf-8')

	res.status(200).send(`
    <html>
        <head>
            <title>${meta.title}</title>
            <meta name="title" content="${meta.title}">
            <meta name="description" content="${meta.description}">

            <meta property="og:type" content="website">
            <meta property="og:url" content="https://twitch.tv/${handle}">
            <meta property="og:title" content="${meta.title}">
            <meta property="og:description" content="${meta.description}">
            <meta property="og:image" content="${meta.image}">

            <meta property="twitter:card" content="summary_large_image">
            <meta property="twitter:url" content="https://twitch.tv/${handle}">
            <meta property="twitter:title" content="${meta.title}">
            <meta property="twitter:description" content="${meta.description}">
            <meta property="twitter:image" content="${meta.image}">
            <meta http-equiv="refresh" content="0; URL=https://twitch.tv/${handle}" />
        </head>
        <body>
            <p>We're redirecting you to Twitch. <a href="https://twitch.tv/${handle}">Click here</a> to continue.</p>
        </body>
    </html>
    `)
}

export const config = { api: { bodyParser: false } }
