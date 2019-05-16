
class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = String(room);
        this.shelfGenre = String(shelfGenre);
        this.shelfCapacity = +shelfCapacity;
        this.shelf = [];
        this.shelfCondition;

        return this;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    get room() {
        return this._room;
    }

    set room(value) {
        if (value == 'livingRoom' || value == 'bedRoom' || value == 'closet') {
            this._room = value;
            return value;
        }
        else {
            throw `Cannot have book shelf in ${value}`;
        }
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelf.length == this.shelfCapacity) {
            this.shelf.shift();
            let book = {
                bookName,
                bookAuthor,
                genre,
            }
            this.shelf.push(book);
        }
        else {
            let book = {
                bookName,
                bookAuthor,
                genre
            }
            this.shelf.push(book);
        }

        this.sort();
        return this;
    }

    throwAwayBook(bookName) {
        for (let i = 0; i < this.shelf.length; i++) {
            const book = this.shelf[i];
            if (book.bookName == bookName) {
                this.shelf.splice(i , 1);
            }

        }
    }

    showBooks(genre) {
        let strResult = '';
        strResult = `Results for search "${genre}":\n`
        for (let i = 0; i < this.shelf.length; i++) {
            const book = this.shelf[i];
            if (book.genre == genre) {
                strResult += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`
            }
            

        }

        return strResult.trim();
    }

    toString() {
        let strResult = '';
        if (this.shelf.length <= 0) {
            strResult = 'It\'s an empty shelf';
        }
        else {
            strResult = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`
            for (let i = 0; i < this.shelf.length; i++) {
                const book = this.shelf[i];
                strResult += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;

            }
        }

        return strResult.trim();
    }

    sort() {
        this.shelf.sort(function (a, b) {
            if (a.bookAuthor < b.bookAuthor) { return -1; }
            if (a.bookAuthor > b.bookAuthor) { return 1; }
            return 0;
        })
    }
}


// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
// livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov")
// livingRoom.addBook("Introduction to Programming with Java", "Svetlin Nakov")
// livingRoom.throwAwayBook("Introduction to Programming with Java");
// console.log(livingRoom.toString());


