(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
				console.log("hhhhhh")
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
			console.log("12234")
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message, botResp="";
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
			console.log(text)
			var myVar = null;
			//Drawing response for user-input
			$(function(){
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200 ) {
					myVar = this.responseText;
		    		message_side = message_side === 'left' ? 'right' : 'left';
		    		message = new Message({
		    		         text: myVar,
		    		         message_side: message_side
		    		 });
		    		 message.draw();
				};
			  };
			  //xhttp.open("GET", "/chatter/response?userresponse=" + document.getElementByXPath("//*[@id='chat']/input").value, true);
			  xhttp.open("GET", "/chatter/response?userresponse=" + text, true);
			  xhttp.send();
		  });
		  console.log("2"+myVar)
			
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
		
        $('.send_message').click(function (e) {
			console.log("in here123")
            return sendMessage(getMessageText());
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
				console.log("came here as well")
                return sendMessage(getMessageText());
            }
        });
        sendMessage('Hi There! how can I help you ? :)');
    });
}.call(this));