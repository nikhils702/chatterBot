from bottle import get, post, request, run, response, template, route
import chatter
from bottle import static_file    

    
@route('/static/<filename:path>')
def send_static(filename):
    return static_file(filename, root='/Users/nikhitajalan/Desktop/pythonScripts/static/')

@route('/chatter', method='GET')
def showAll():
    return template('botRequest', rows="")
    
@route('/chatter/response', method='GET')
def act():
    textEntered = request.query.userresponse;
    result = chatter.getBotResponse(textEntered)
    return result
    
run(host = "127.0.0.1", port = 8080)
