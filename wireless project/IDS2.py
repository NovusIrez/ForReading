import RPi.GPIO as GPIO
import time
import telepot
from telepot.loop import MessageLoop

telegram_bot = telepot.Bot('5901069952:AAGtcDjItEQKsstD6ulccGV1kzMVTXOfwbg')

GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

a = 12
#b = 32
c = 36

GPIO.setup(a,GPIO.IN)
#GPIO.setup(b,GPIO.OUT)
GPIO.setup(c,GPIO.OUT)

running = False

def action(msg):
    chat_id = msg['chat']['id']
    command = msg['text']

    global running

    if 'help' or 'start' in command:
        message = """"\
                Hi there
                Commands:
                /help
                /on
                /off\
                """
        telegram_bot.sendMessage(chat_id,message)
    
    if 'on' in command:
        running = True
        telegram_bot.sendMessage(chat_id,'Turned On')

    if 'off' in command:
        running = False
        telegram_bot.sendMessage(chat_id,'Turned Off')
        
MessageLoop(telegram_bot, action).run_as_thread()

while True:
    if running:
        print(not GPIO.input(12)) 
        #GPIO.output(b,not GPIO.input(12))
        GPIO.output(c,not GPIO.input(12))
    else:
        print('waiting for start command...')