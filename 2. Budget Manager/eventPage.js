var contextMenuItems = {
    "id": "spendMoney",
    "title": "SpendMoney",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItems);

function isInt(value) {
    return !isNaN(value) &&
            parseInt(Number(value)) == value &&
            !isNaN(parseInt(value, 10));
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "spendMoney" && clickData.selectionText){
        if(isInt(clickData.selectionText)){
            chrome.storage.sync.get(['total','limit'], function(budget){
                var newTotal = 0;
                if(budget.total){
                    newTotal += parseInt(budget.total);
                }
                newTotal += parseInt(clickData.selectionText);
                chrome.storage.sync.set({'total': newTotal}, function(){
                    if(newTotal >= budget.limit){
                        var notifOptions = {
                            type: 'basic',
                            iconUrl: 'images/icon48.png',
                            title: 'Limit Reached',
                            message: 'Uh oh! Looks like you\'ve reached your limit' 
                        };
                        chrome.notifications.create('limitNotification', notifOptions)
                    }
                });            
            });
        }
    }
})

chrome.storage.onChanged.addListener(function(change, storageName){
    chrome.action.setBadgeText({"text": change.total.newValue.toString()});
})