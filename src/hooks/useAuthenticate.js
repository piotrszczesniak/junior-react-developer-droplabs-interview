export const useAuthenticate = (cookie) => {
  const cookiesArray = cookie.split('=');
  if (cookiesArray.includes('loginToken')) {
    return true;
  } else {
    return false;
  }
};
