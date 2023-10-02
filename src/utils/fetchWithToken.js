export async function fetchWithToken(requestUrl, method, token, body) {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "token-tt": token,
    },
    body: JSON.stringify(body),
  };

  const url = `${process.env.NEXT_PUBLIC_APP_URL}${requestUrl}`;
  try {
    const response = await fetch(url, requestOptions);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error for handling elsewhere
  }
}
