# Better Twitch Embeds

This app can act as a proxy for Twitch links to render a better-looking social card on Twitter or Facebook.

## Usage

There's a public instance of this application running at `https://twitch.m1guelpf.me`. The endpoints are as follows:

-   `/` just redirects to Twitch
-   `/[streamer]` redirects to the streamer's page on click, and displays the card when shared.
-   `/images/[streamer]` returns the dyanmically-generated banner (for use on socials).

## Development

-   Clone this repo in a local directory
-   Install dependencies (`yarn install` or `npm install`)
-   Copy `.env.example` to `.env.local` and add your Twitch API keys
-   Start the server! (`yarn dev` or `npm run dev`)

# Deployment

You can deploy to [Vercel](https://vercel.com/home) by clicking below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fm1guelpf%2Ftwitch-og&env=TWITCH_TOKEN,TWITCH_CLIENT&project-name=twitch-og&repo-name=twitch-og)

# License

This project is open-sourced software licensed under the MIT license. See the [License file](LICENSE.md) for more information.
