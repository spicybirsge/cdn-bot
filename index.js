// require('dotenv').config();
const express = require('express')
const app = express()
app.get('/', async (req, res) => {
  return res.sendStatus(200)
})

app.listen(3000)
const { Client, Collection, MessageAttachment } = require("discord.js")
const fetch = require('node-fetch');
const FormData = require('form-data');     
const fs = require('fs');
const request = require('request')


const client = new Client({
    intents: ["GUILDS",
    
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING"],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    restTimeOffset: 0,
    allowedMentions: {
        parse: ['users']
    }
})
client.on('ready', () => {
    console.log('Bot Online')
})

client.on('messageCreate', async (message) => {
    if(message.author.bot) return;
    if(message.channel.id === "943887879078297610") {

    const form = new FormData();

    if(message.attachments.size > 0) {
image_url = message.attachments.first().url
    } else {
        image_url = message.content
    }
      

try {
    message.channel.send('Uploading to cdn...')
form.append('image', request(image_url))
  



await fetch(`https://cdn.shaheerahamed.me/upload?key=${process.env.AUTH_KEY}`, {method: 'POST', body: form})
.then(res => res.json()).then(async(data) => {
   message.channel.send(`Uploaded to CDN: ${data.url}`)
})
} catch(e) {
  
    console.log(e)
    return message.channel.send(`${e}`)
}
} 
})

client.login(process.env.token)
