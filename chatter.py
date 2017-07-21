# -*- coding: utf-8 -*-
from chatterbot import ChatBot
from bottle import route, run
from chatterbot.trainers import ListTrainer
from bottle import get, post, request, template
import logging
from Fire import *
from Recon import *
from chatterbot.comparisons import levenshtein_distance

# Create a new instance of a ChatBot
bot = ChatBot("opsBot",
    storage_adapter="chatterbot.storage.SQLAlchemyDatabaseAdapter",
    database='chatterbot-database',
    logic_adapters=[
        "chatterbot.logic.MathematicalEvaluation",
        "chatterbot.logic.TimeLogicAdapter",
        "chatterbot.logic.BestMatch",
        "chatterbot.logic.LowConfidenceAdapter",
        {
            'import_path': 'chatterbot.logic.LowConfidenceAdapter',
            'threshold': 0.2,
            'default_response': "I am afraid, I don't know the answer for this. Please try something else."
        }
    ],
    input_adapter="chatterbot.input.VariableInputTypeAdapter",
    output_adapter="chatterbot.output.OutputAdapter",
    #input_adapter="chatterbot.input.TerminalAdapter",
    #output_adapter="chatterbot.output.TerminalAdapter",
        output_format="text"
)


conversation = [
    "Hello",
    "Hi there! How can I help you ?",
    "Hi there!",
    "How are you doing?",
    "I'm doing great.",
    "That is good to hear",
    "Thank you.",
    "You're welcome.",
    "I couldn't find this answer for you :( . Do you want to try something else ?",
    "Yes",
    "Please enter your question ",
    "who are you ? ", 
    "Well! I am a chatterbot",
    "who will win Innovate48 competition ?",
    "Are you kidding? it's definitely Team X :)",
    "What do you think about this app?",
    "Well, I am a bot so the best",
]

bot.set_trainer(ListTrainer)
bot.train(conversation)
bot.train(Fire.conversation)
bot.train(Recon.conversation)

#bot.train("chatterbot.corpus.english.greetings")
#bot.train("chatterbot.corpus.english.conversations")

#while True:
#    response = bot.get_response(None)
#    print(response)


# Uncomment the following line to enable verbose logging
#logging.basicConfig(level=logging.INFO)


# The following loop will execute each time the user enters input-- Variable input adapter
def getBotResponse(question):
    return str(bot.get_response(question))
        
