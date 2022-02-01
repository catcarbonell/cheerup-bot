const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const cheers = [
  "Cheer up, buttercup!",
  "You know who's a badass? YOU ARE!",
  "Believe in me who believes in YOU!",
  "You are enough.",
  ":heart: you.",
  "https://media4.giphy.com/media/9JnRMIFMYAKpaHRXRF/giphy.gif?cid=2319e9d198etbh9sss7d213wisilce5xrj3qjow81heipa17&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/tHLMotErNVh1m/giphy.gif?cid=2319e9d198etbh9sss7d213wisilce5xrj3qjow81heipa17&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/l0MYCDXGiwtgif24o/giphy-downsized.gif?cid=2319e9d198etbh9sss7d213wisilce5xrj3qjow81heipa17&rid=giphy-downsized.gif&ct=g",
  "https://i.ytimg.com/vi/0Qe9dA5GP48/maxresdefault.jpg"
]

const getCheers = () => cheers[Math.floor(Math.random() * cheers.length)]


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "!sad") {
    msg.reply(getCheers());
  }
})
const mySecret = process.env['TOKEN']

client.login(mySecret)