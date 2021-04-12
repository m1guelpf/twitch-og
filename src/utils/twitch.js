import axios from 'axios'
import fs from 'fs'

class Twitch {
	constructor() {
		this.client = axios.create({
			baseURL: 'https://api.twitch.tv/helix/',
			headers: {
				'Client-ID': process.env.TWITCH_CLIENT,
				Authorization: `Bearer ${process.env.TWITCH_TOKEN}`,
			},
		})

		this.client.interceptors.response.use(res => res.data)
	}

	async getStreamer(handle) {
		const response = await this.client.get(`/search/channels?query=${handle}`)

		return response.data.filter(broadcast => broadcast.broadcaster_login === handle)?.[0]
	}
}

export default new Twitch()
