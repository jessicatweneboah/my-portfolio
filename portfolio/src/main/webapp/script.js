/** Fetches the current date from the server and adds it to the page. */
async function showHello() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('hello-container');
  dateContainer.innerText = textFromResponse;
}