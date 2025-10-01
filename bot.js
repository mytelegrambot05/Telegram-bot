const TelegramBot = require('node-telegram-bot-api');

// токен, который дал BotFather
const token = '8311896444:AAErBlg_C9Hs8bboXt9V6QYXtlze1w6lHBQ';

const bot = new TelegramBot(token, { polling: true });

// простая команда
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Привет! Бот работает ✅');
});
