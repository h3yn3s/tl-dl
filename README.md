# TL;DL - too long; didn't listen

A selfhostable webapp which helps you read those uselessly long (by nature) voice messages with the power of AI.

## Building the image

Clone and check out the main branch and run `docker build -t tl-dl .` to build the image.

## Installation

Use the `docker-compose.yml` as a starting point. You'll need an OPENAI API key to run it. Set it along your final URL, where the docker runs and set it as ORIGIN.

The app is exposed on PORT 3000. I recommend a reverse proxy like caddy or traefik in front for https and PORT handling.

## Contributing

Clone and check out the main branch. You'll need node-18 installed. node-20 will probably work too. Run `npm ci` and `npm run dev` to get started with a local environment. You should probably set your OPENAI_API_KEY as well `OPENAI_API_KEY=YOURKEY npm run dev`.
