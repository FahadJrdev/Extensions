chrome.runtime.sendMessage({tabs: "showAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "changeColor"){
        var addColor = '#' + request.clickedColor;
        $('.stack').css('color', addColor);
    }
});