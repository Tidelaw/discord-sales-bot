# **Getting Started**

**In order to run locally:**


- **Node.js** needs to be installed on your OS
- Clone the **discord-sales-bot** [repo](https://github.com/Tidelaw/discord-sales-bot.git)
- Start the project
    1. Run `npm install` to install all our project dependencies
    2. Run `npm run dev` to run our application


`npm install` downloads the packages found in **package.json**

`npm run dev` runs the website. The website can now be accessed from `localhost:3000` or `0.0.0.0`

In order for queries to be made, a **Helius API** key is necessary - in order to obtain one, visit 

`https://www.helius.xyz `

Now, create a file called `.env.local` on the outermost directory of the cloned repo, adding the following text into the file.

```
HELIUS_KEY = <your Helius API key>
```
The app is now fully functional on your local machine.

<br>

# **Walkthrough**

Detailed blog explanation [here](https://helius-api.notion.site/Discord-Sales-Bot-4dee7df2dd814e99abaf593a62c28e62?pvs=4).

- Clone Repo
- Visit Vercel, add repository and deploy with environmental variables:
    - **HELIUS_KEY** - API Key generated from [Helius Dashboard](https://dev.helius.xyz/dashboard/app) (not RPC URL)
    - **DISCORD_WEBHOOK** - Webhook URL from Discord (see [blog](https://helius-api.notion.site/Discord-Sales-Bot-4dee7df2dd814e99abaf593a62c28e62?pvs=4))

- Copy URL of deployed endpoint and setup a webhook at the Helius Dashboard
- Enter other details e.g your collection's address

That's it!

<br>

## For any inquiries, visit the [Helius Discord](https://discord.gg/helius) or message Tidelaw#0707.
