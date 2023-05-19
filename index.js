const aside = document.querySelector('.books');
const book = aside.querySelectorAll('.book');
const body = document.querySelector('body');
const linkChange = book[4].querySelector('a');
const ad = document.querySelector('.adv');
const bookChaptersOne = book[0].querySelectorAll('li');
const bookChaptersTwo = book[5].querySelectorAll('li');
const bookSix = book[2].querySelectorAll('li');

book[1].remove();
book[0].before(book[1]);
book[2].remove();
aside.append(book[2]);
book[4].after(book[3]);

body.style.backgroundImage = "url(../image/you-dont-know-js.jpg)";

linkChange.textContent = "Книга 3. this и Прототипы Объектов";

ad.remove();

bookChaptersOne[2].remove(); //Приложение C
bookChaptersOne[4].remove(); // глава 4
bookChaptersOne[5].remove(); // глава 5
bookChaptersOne[7].remove(); // приложение А
bookChaptersOne[8].after(bookChaptersOne[4]);
bookChaptersOne[4].after(bookChaptersOne[5]);
bookChaptersOne[5].after(bookChaptersOne[7]);
bookChaptersOne[9].after(bookChaptersOne[2]);

bookChaptersTwo[2].remove(); // 4
bookChaptersTwo[5].remove(); // A
bookChaptersTwo[9].remove(); // 1
bookChaptersTwo[3].before(bookChaptersTwo[9]);
bookChaptersTwo[4].after(bookChaptersTwo[2]);
bookChaptersTwo[8].before(bookChaptersTwo[5]);


console.log(bookSix);
const newLi = document.createElement("li");
newLi.textContent = "Глава 8: За пределами ES6";
book[2].append(newLi);
bookSix[9].before(newLi)


