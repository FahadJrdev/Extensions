chrome.bookmarks.onCreated.addListener(()=>{
    console.log('Bookmark newly saved');
})
chrome.runtime.onInstalled.addListener(()=>{
    console.log('installed');
    // if (typeof window !== 'undefined') {
    //     console.log('You are on the browser')
    //     // 👉️ can use alert()
    //   } else {
    //     console.log('You are on the server')
    //     // 👉️ can't use alert()
    //   }
})

/* Used for context menu and tabs accessing or saving bookmark or other browser window event */