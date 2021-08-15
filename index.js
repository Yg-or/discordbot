require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

const TelegramBot = require('node-telegram-bot-api');
const tokenTelegram = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(tokenTelegram, { polling: true });
const chatId = '-1001591609440';

client.on('message', (mess) => {
  if (mess.author.id === process.env.BOTPAGO_TOKEN) {
    const mensagem = `🌿 ${mess.embeds[0].fields[0].name}: ${mess.embeds[0].fields[0].value} 💦`;
    bot.sendMessage(chatId, mensagem)
  }

  if (mess.author.id === process.env.BOTFREE_TOKEN) {
    const msg = mess.content;
    const inicial = msg.indexOf('(');
    const final = msg.indexOf(')')
    const data = msg.slice(inicial, final + 1);
    const mensagem = `🌿 Coordenada: ${data}💦`;
    bot.sendMessage(chatId, mensagem)
  }
})

client.login(token);
