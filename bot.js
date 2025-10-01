const TelegramBot = require('node-telegram-bot-api');

// токен, который дал BotFather
const token = '8311896444:AAGrVxvbBivu9e8u3LEHbDbPqfuCk7mmgAU';

// создаём бота
const bot = new TelegramBot(token, { polling: true });

// простая команда
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Привет! Бот работает 🚀');
});