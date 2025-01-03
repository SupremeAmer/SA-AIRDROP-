const express = require('express');
const app = express();
const TelegramBot = require('telegram-bot-sdk');
const db = require('./db');

const bot = new TelegramBot('YOUR_BOT_TOKEN');

app.get('/login', (req, res) => {
  const authUrl = bot.getAuthUrl();
  res.redirect(authUrl);
});

app.get('/callback', (req, res) => {
  const token = req.query.token;
  bot.getUserProfile(token).then((profile) => {
    const username = profile.username;
    db.saveUsername(username);
    res.send(`Welcome, ${username}!`);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
