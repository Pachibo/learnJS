// a function to construct a Book object
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read == true) {
      return title + " by " + author + ", " + pages + ", has read";
    }
    return title + " by " + author + ", " + pages + ", has not read";
  };
}
book.prototype.printType = function() {
    return this.type;
}
function Manga (manga, title, author, pages, read) {
    this.type = manga;
    this.prototype = new book(title, author, pages, read);
}

const book1 = new book("book1", "pachibo", 250, false);
const info1 = book1.info();
console.log(info1);
const user = {name: "Si Hou"};
console.log(user.name);
const manga1 = new Manga("manga", "One Piece", "Oda", 500, true);
console.log(manga1.printType());


