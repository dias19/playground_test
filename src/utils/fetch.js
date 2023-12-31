export async function fetchWithBaseUrl(requestUrl, method, body) {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json", // Adjust content type as needed
    },
    body: JSON.stringify(body), // Convert the body to JSON if it's an object
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
