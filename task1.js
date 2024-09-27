// Zadanie 1. Generator slug



// Zanim rozwiążemy ten problem, zdefiniujmy nowy termin!

// Termin slug — to czytelny dla człowieka unikalny identyfikator używany w tworzeniu stron internetowych do tworzenia czytelnych adresów URL.



// Na przykład, zamiast wyświetlać użytkownikowi mysite.com/posts/1q8fh74tx, w pasku adresu, możesz utworzyć slug z tytułu artykułu. W rezultacie adres będzie przyjemniejszy w odbiorze: mysite.com/posts/arrays-for-beginners.



// Slug jest zawsze ciągiem małych liter, z wyrazami oddzielonymi myślnikami.

// Czy to jest jasne? Zatem wykonajmy zadanie!



// Napisz funkcję slugify(title), która przyjmuje tytuł artykułu, parametr title i zwraca slug utworzony z tego ciągu.

// Wartością parametru title będą ciągi, których słowa są oddzielone tylko spacjami.
// Wszystkie znaki slug muszą być pisane małymi literami.
// Wszystkie słowa slug muszą być oddzielone myślnikami.
const slugify = (title) => {
    // title = title.toLowerCase()
    // for (i = 0; i > title.length; i++) {
    //     return title
  title = title.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  title = title.toLowerCase(); // convert string to lowercase
  title = title.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
  title = title.replace(/\s+/g, '-') // replace spaces with hyphens
  title = title.replace(/-+/g, '-');
  return title
    }


// Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić, czy działa poprawnie. Konsola wyświetli wyniki jego działania.

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"