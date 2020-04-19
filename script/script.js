'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let books = document.querySelector('.books'),
    book = document.querySelectorAll('.book'),
    bookTitle = document.getElementsByTagName('a');
    const newTitle = document.createElement('a');
    newTitle.textContent = 'Книга 3. this и Прототипы Объектов';
    newTitle.setAttribute('href', "https://github.com/azat-io/you-dont-know-js-ru/blob/master/types%20%26%20grammar/README.md#you-dont-know-js-types--grammar");
    newTitle.setAttribute('target', "_blank");
    books.prepend(book[1]);
    books.append(book[4]);
    books.append(book[3]);
    books.append(book[5]);
    books.append(book[2]);
    document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
    bookTitle[2].replaceWith(newTitle);
    let titles = document.getElementsByTagName('ul'),
      itemBook2 = titles[1].getElementsByTagName('li'),
      itemBook5 = titles[4].getElementsByTagName('li'),
      itemBook6 = titles[5].getElementsByTagName('li');
    console.log(itemBook2);
    titles[1].append(itemBook2[2]);
    titles[1].append(itemBook2[3]);
    titles[1].append(itemBook2[3]);
    titles[1].append(itemBook2[4]);
    titles[1].append(itemBook2[5]);
    titles[1].append(itemBook2[5]);
    titles[1].append(itemBook2[5]);
    titles[1].append(itemBook2[9]);

    titles[4].append(itemBook5[2]);
    titles[4].append(itemBook5[8]);
    titles[4].append(itemBook5[2]);
    titles[4].append(itemBook5[2]);
    titles[4].append(itemBook5[7]);
    titles[4].append(itemBook5[3]);
    titles[4].append(itemBook5[3]);
    titles[4].append(itemBook5[2]);
    titles[4].append(itemBook5[2]);
    titles[4].append(itemBook5[2]);

    const newArticle = document.createElement('li');
    newArticle.textContent = 'Глава 8: За пределами ES6';
    console.log(newArticle);
    titles[5].insertBefore(newArticle, itemBook6[9]);
    //itemBook6[9].insertAdjacentHTML('beforebegin', newArticle);
});