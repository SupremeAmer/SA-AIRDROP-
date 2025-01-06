
const telegramBot = new TelegramBot('8040618454:AAFpwP49XKefk2z2v8ZX6XiaOfKbMs4chdg');
const userIds = [];

function handleUserUpdate(chatId) {
  telegramBot.getChat(chatId)
    .then((chat) => {
      const userId = (https://t.me/userinfobot);
      const userName = chat.first_name;
      const userUsername = chat.username;

      if (!userIds.includes(userId)) {
        userIds.push(userId);
        console.log(`New user added: ${userName} (${userId})`);
      }

      // Update user info in database
    })
    .catch((error) => {
      console.error('Error getting user info:', error);
    });
}

telegramBot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'participate') {
    const chatId = (https://t.me/userinfobot);
    handleUserUpdate(chatId);
  }
});
