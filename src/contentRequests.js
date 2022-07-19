const requestSender = new XMLHttpRequest();

requestSender.onreadystatechange = apiHandler;

// 0  |   UNSENT  |   Client has been created. open() not called yet.
// 1	|   OPENED	|   open() has been called.
// 2	|   HEADERS_RECEIVED    |	send() has been called, and headers and status are available.
// 3	|   LOADING	|   Downloading; responseText holds partial data.
// 4	|   DONE	|   The operation is complete.
function apiHandler(response) {
  if (requestSender.readyState === 4 && requestSender.status === 200) {
    console.log(response.target.response);
  }
}

// Button clicked
requestSender.open('GET', 'https://api.github.com/users/peter', true);
requestSender.send();


// ... somewhere down
// requestSender.open('GET', 'https://api.github.com/users/tomas', true);
// requestSender.send();