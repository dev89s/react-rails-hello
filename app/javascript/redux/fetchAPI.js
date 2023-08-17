export async function fetchApi(url = "http://localhost:3000/greetings") {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}
