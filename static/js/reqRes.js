function funcReqRes(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		console.log(xhttp.responseText)
		  return xhttp.responseText;
		
		//document.getElementById("sentMessage").innerHTML = document.getElementByXPath("//*[@id='chat']/input").value + this.responseText;
		//document.getElementById("sentMessage").innerHTML = this.responseText;
		//return document.getElementById("sentMessage").innerHTML;
    }
  };
  
  xhttp.open("GET", "/chatter/response?userresponse=" + document.getElementByXPath("//*[@id='chat']/input").value, true);
  xhttp.send();
  return xhttp.onreadystatechange();
}

document.getElementByXPath = function(sValue) { 
	var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null); 
	if (a.snapshotLength > 0) { return a.snapshotItem(0); } }
	; 