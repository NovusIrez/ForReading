import RPi.GPIO as GPIO
import time
import telepot
from telepot.loop import MessageLoop

telegram_bot = telepot.Bot('5901069952:AAGtcDjItEQKsstD6ulccGV1kzMVTXOfwbg')

GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

a = 12 # IR sensor
c = 36 # Buzzer

GPIO.setup(a,GPIO.IN) #Receive input from IR sensor
GPIO.setup(c,GPIO.OUT) #Output to buzzer

running = False

def action(msg):
    global chat_id 
    chat_id = msg['chat']['id']
    command = msg['text']

    global running

    if 'help' in command or 'start' in command:
        message = """\
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

state = False

while True:
    if running:
        output = not GPIO.input(12)
        print(output)
        GPIO.output(c, output)
        if state != output:
            state = output
            if state:
                telegram_bot.sendMessage(chat_id,'Intruder detected!')
    else:
        print('waiting for start command...')