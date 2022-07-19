chrome.runtime.onInstalled.addListener(() => {
  console.log('Etension have been successfully installed!');
});

chrome.bookmarks.onCreated.addListener(() => {
  alert('Bookmark saved');
});
