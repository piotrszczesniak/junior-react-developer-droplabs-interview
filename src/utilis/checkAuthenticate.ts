export const checkAuthenticate = (cookieName: string) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split('=')[1];
};

// const cookie = document.cookie;
// const cookiesArray = cookie.split('=');
// return cookiesArray.includes('loginToken'); // this returns true or false

// Błędy na które chcemy zwrócić Ci uwagę:
// 1. Niepoprawne odczytywanie wartości tokena z cookies. Miałem kilka elementów, przez co token nie był odczytywany.
//       Nie używając żadnej biblioteki można sięgnąć po wartość w następujący sposób:
//           const cookieValue = document.cookie
//             .split(‘; ’)
//             .find((row) => row.startsWith(‘loginToken=‘))
//             ?.split(‘=’)[1];
//   2. Cena jest formatowana w niekonsekwentny sposób. Na przykład pokazywała się wartość 22.3 PLN. Po dodnaniu wielu produktów do koszyka pokazywała się cena: 90.38000000000002 PLN
//   3. Komunikat w formularzu logowania ‘Żeby przeglądać ofertę produktów zaloguj się proszę.’ wygląda jak błąd walidacji. Komunikat pojawia się na stronie Logowania nawet jeśli nie zostało się przekierowanym z Produktów.
//   4. Produkty pobierają się w nieskończonej pętli.

// Dodatkowo:
//   1. Kontekst jest zdefiniowany w katalogu components co jest mylące.
//   2. Hook useCallback jest używany nadmiarowo. Definiowana jest nowa funkcja logout wtedy gdy zmienia się koszyk.
