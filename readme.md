
# FIS ChatterBot

This is a machine-learning based conversational dialog engine build in
Python which makes it possible to generate responses based on collections of
known conversations. The language independent design of Bot allows it
to be trained to speak any language.



An example of typical input would be something like this:

> **user:** Good morning! How are you doing?  
> **bot:**  I am doing very well, thank you for asking.  
> **user:** You're welcome.  
> **bot:** Thanks, how can I help you?  

# How it works

An untrained instance of ChatterBot starts off with no knowledge of how to communicate. Each time a user enters a statement, the library saves the text that they entered and the text that the statement was in response to. As ChatterBot receives more input the number of responses that it can reply and the accuracy of each response in relation to the input statement increase. The program selects the closest matching response by searching for the closest matching known statement that matches the input, it then returns the most likely response to that statement based on how frequently each response is issued by the people the bot communicates with.

Below is the flow-logic for a chatterbot-
1) create instance of chatterbot
   from chatterbot import ChatBot
   chatbot = ChatBot("Ron Obvious")
   
2) Training the chatterbot
   After an instance of chatterbot is created, a chatbot needs to be trained. Training is a good way to ensure that the bot starts off with knowledge about specific responses. {Details under training}

3) After the chatterbot has some initial training's done, it's ready to receive user input statements. 
   Next step is to create/add logical response adapters and input output
   adapters. There are some built-in adapters in chatterbot library.
   Logic adapters determine the logic for how ChatterBot selects a responses to a given input statement.

   It is possible to enter any number of logic adapters for your bot to use. If multiple adapters are used, then the bot will return the response with the highest calculated confidence value. If multiple adapters return the same confidence, then the adapter that is entered into the list first will take priority.
   
   Few of the logical adapters-
   i) 	chatterbot.logic.BestMatch : The BestMatch logic adapter selects a response based on the best know match to a given statement.
   ii) 	chatterbot.logic.TimeLogicAdapter : The TimeLogicAdapter returns the current time.
   iii)	chatterbot.logic.LowConfidenceAdapter : This adapter returns a specified default response if a response can not be determined with a high amount of confidence.

   chatbot = ChatBot(
       "My ChatterBot",
       logic_adapters=[
           "chatterbot.logic.BestMatch"
       ]
   )
   # Input adapters / Output adapater
   ChatterBot’s input/output adapters are designed to allow a chat bot to have a versatile method of receiving/and responding to user input from a given source.
   Different Input/ouput adapters -
   i)	TerminalAdapter (A simple adapter that allows ChatterBot to communicate through the terminal.) 
   ii)	VariableInputTypeAdapter (The variable input type adapter allows the chat bot to accept a number of different input types using the same adapter. This adapter 		accepts strings, dictionaries and Statements.)
   iii)	External Adapters like Gitter, HipChat.
   
4) Getting responses- 
   chatbot.get_response("Hello, how are you today?")
   
# Requirements

Chatterbot libraries:
This package can be installed from [PyPi](https://pypi.python.org/pypi/ChatterBot) by running:

```
pip install chatterbot
```
Python >= 2.7
SQLAlchemy>=1.1,<1.2
Python bottle framework

If you are using Python 2.7, be sure that the unicode header is the first line of your Python file: 
 #-*- coding: utf-8 -*-

# Training data

ChatterBot includes tools that help simplify the process of training a chat bot instance. ChatterBot’s training process involves loading example dialog into the chat bot’s database. This either creates or builds upon the graph data structure that represents the sets of known statements and responses. When a chat bot trainer is provided with a data set, it creates the necessary entries in the chat bot’s knowledge graph so that the statement inputs and responses are correctly represented.

Chatterbot comes with a data utility module that can be used to train chat bots.
Train based on the english corpus
chatbot.train("chatterbot.corpus.english")

 - Train based on english greetings corpus
	chatbot.train("chatterbot.corpus.english.greetings")
 - Train based on the english conversations corpus
	chatbot.train("chatterbot.corpus.english.conversations")
 - Train based on the english corpus
	chatbot.train("chatterbot.corpus.english")

# Usage
  This Chatterbot is created primarily for the use by Operation, QA, Project Management teams by making the system learn about the daily processes, general user-requests in Wall street concepts Tax reporting Solutions eco-system.

# Examples

For examples, see the [examples] at: https://github.com/nikhils702/hackathon-chatterbot