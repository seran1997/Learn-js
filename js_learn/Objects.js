let employeeObject = {
    firstName:'Vasiliy',
    lastname:'Terkin',
    age: 28, }
function getFullName(employeeObject) {
    console.log(employeeObject.firstName+' '+employeeObject.lastname);
}
getFullName(employeeObject);
//----------------------------------------------------------------------------------
/*Ваша функция должна пройтись по каждой книге и вывести её название и количество страниц на экран.
Затем она должна вернуть книги, написанные в 19 веке.*/
const books = [
    {
       "id":2,
       "author_id":1,
       "title":"Hard Times",
       "cover_image":"",
       "pages":300,
       "releaseDate":1854,
       "isbn":"jk654"
    },
    {
       "id":3,
       "author_id":3,
       "title":"Hamlet",
       "cover_image":"",
       "pages":160,
       "releaseDate":1603,
       "isbn":"po789"
    },
    {
       "id":4,
       "author_id":2,
       "title":"IT",
       "cover_image":"",
       "pages":500,
       "releaseDate":2017,
       "isbn":"yu098"
    },
    {
       "id":5,
       "author_id":4,
       "title":"Norwegian Wood",
       "cover_image":"http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
       "pages":296,
       "releaseDate":1987,
       "isbn":"hj846"
    }
 ] 
 function processBooks (books){
    books.forEach(function(book){
        console.log(book.title+'имеет'+book.pages+'стр.');
    });
    return books.filter(function(book){
        return book.releaseDate >= 1800 && book.releaseDate < 1900;
    });
 }
 processBooks(books);