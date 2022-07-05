### cdn bot

A bot that will upload your images or videos to my cdn.

### Usage

- Simply you cannot use it. https://cdn.shaheerahamed.me is simply for me to use, but if you wanted your own one, then clone [this](https://github.com/spicybirsge/cdn) repo and self host it.

### Installation

1. Clone this repo and navigate to your directory.
2. Install dependencies with `npm install`.
3. Add env vars as mentioned in .env.example file (the `AUTH_KEY` car should be the var you added in hosting the cdn).
4. Clone [this](https://github.com/spicybirsge/cdn) repo and host it too.
5. Edit [this](https://github.com/spicybirsge/cdn-bot/blob/master/index.js#L55) line to your domain.
6. Edit [this](https://github.com/spicybirsge/cdn-bot/blob/master/index.js#L37) channel ID to your channel ID.
7. Run `node index.js` and send an attachment to your channel, and you should see your attachment uploaded to your cdn. Enjoy!
