var menuItem = {
    "id": "wikit",
    "title": "Wikit", 
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "wikit" && clickData.selectionText){
        var wikiUrl = "https://en.wikipedia.org/wiki/" + clickData.selectionText;
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": 1200,
            "height": 1500
        };
        chrome.windows.create(createData, function(){});
    }
});