testMessage();

function testMessage() {
  chrome.runtime.sendMessage(
    { payload: 'Hello from content' }, 
    () => console.log(2 + 2));
}

chrome.runtime.onMessage.addListener((request, sender, cb) => {
  console.log('request', request);
  console.log('sender', sender);
  cb()
});
