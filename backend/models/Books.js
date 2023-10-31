const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const p = path.join(`${__dirname}/../data/books.json`);

const getBooksFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Books {
    constructor(id, name, author, narrated, img, bookLength, releaseDate, language) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.narrated = narrated;
        this.img = img;
        this.bookLength = bookLength;
        this.releaseDate = releaseDate;
        this.language = language;
    }
    save() {
        getBooksFromFile((books) => {
            this.id = String(uuidv4());

            books.push(this);

            fs.writeFile(p, JSON.stringify(books), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getBooksFromFile(cb);
    }
    static findById(id, cb) {
        getBooksFromFile((books) => {
            const bookId = books.find((b) => b.id === id);
            cb(bookId);
        });
    }
};