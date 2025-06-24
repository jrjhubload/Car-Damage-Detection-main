export const checkAuth = async () => {
  const response = await fetch('http://localhost:8000/api/check-auth/', {
    method: 'GET',
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    return { isAuth: true, user: data };
  }

  return { isAuth: false };
};
// This function checks if the user is authenticated by making a request to the backend.
// If the request is successful, it returns an object with isAuth set to true and the user data.
// If the request fails, it returns an object with isAuth set to false.