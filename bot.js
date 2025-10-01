const TelegramBot = require('node-telegram-bot-api');

// токен, который дал BotFather
const token = 'ТОКЕН_ОТ_BOTFATHER';

const bot = new TelegramBot(token, { polling: true });

// простая команда
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Привет! Бот работает ✅');
});
