const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.8040618454:AAFpwP49XKefk2z2v8ZX6XiaOfKbMs4chdg, { polling: false });

app.get('/participate', (req, res) => {
  const authUrl = bot.getAuthUrl();
  res.redirect(authUrl);
});

app.get('/callback', (req, res) => {
  const token = req.query.token;
  bot.getUserProfile(token).then((profile) => {
    console.log('User profile:', profile);
    res.send(`Welcome, ${profile.username}!`);
  }).catch((error) => {
    console.error('Error:', error);
    res.status(500).send('Error occurred');
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
