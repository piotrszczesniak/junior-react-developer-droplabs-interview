export const checkAuthenticate = (cookie) => {
  const cookiesArray = cookie.split('=');
  if (cookiesArray.includes('loginToken')) {
    return 'loginToken';
  } else {
    return null;
  }
};
