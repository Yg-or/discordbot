require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

const TelegramBot = require('node-telegram-bot-api');
const tokenTelegram = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(tokenTelegram, { polling: false });
const chatId = '-1001591609440';

let lastMessage = '';

client.on('message', (mess) => {
    if (mess.author.id === process.env.BOTPAGO_TOKEN) {
      const mensagem = `===🌿Reset em 8 segundos💦=== \n ${mess.embeds[0].fields[0].name}: ${mess.embeds[0].fields[0].value} \n Link ${mess.embeds[0].fields[1].value}`;
      if (mensagem === lastMessage) {
        return null;
      }
      else {
        bot.sendMessage(chatId, mensagem);
        lastMessage = mensagem;
      }
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
