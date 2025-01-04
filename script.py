
from flask import Flask, request, jsonify
import telegram

app = Flask(*name*)

bot_token = '8040618454:AAFpwP49XKefk2z2v8ZX6XiaOfKbMs4chdg'
bot = telegram.Bot(token=bot_token)

@app.route('/', methods=['GET', 'POST'])
def index():
if request.method == 'POST':
update = telegram.Update.de_json(request.get_json(), bot)
chat_id = (link unavailable)
bot.sendMessage(chat_id, 'Hello! You participated!')
return 'OK'
else:
return 'Participate button clicked!'

if *name* == '*main*':
app.run()
