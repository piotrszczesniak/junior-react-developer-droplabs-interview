export const checkAuthenticate = () => {
  const cookie = document.cookie;
  const cookiesArray = cookie.split('=');
  return cookiesArray.includes('loginToken'); // this returns true or false
};
