export const fetcher = async (url, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token-tt": token,
    },
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}${url}`,
      requestOptions
    );

    if (!response.ok) {
      const error = new Error(`HTTP error! Status: ${response.status}`);
      error.status = response.status;
      throw error;
    }

    return response.json();
  } catch (error) {
    throw new Error(`Network error: ${error.message}`);
  }
};
