const db = require('../utils/db2');
const Book = require('../models/book');

exports.getPost = (req, res, next) => {


    console.log('questo è get books');
    res.json({ status: 200, data: {test:"ok"} })
    /*
    db.execute('SELECT * FROM books')
        .then(([rows, fieldData]) => {
            console.log(rows)
            res.json({ status: 200, data: rows })
        })
        .catch(err => console.log(err));
*/

};

exports.searchBooks = (req, res, next) => {
    db.execute('SELECT * FROM books WHERE books.titolo LIKE ?', ['%' + req.query.search + '%'])
        .then(([rows, fieldData]) => {

            res.json({ status: 200, data: rows })
        })
        .catch(err => console.log(err));
};

exports.insertBook = (req, res, next) => {


    const title = req.body.title;
    const autore = req.body.autore;
    const images = req.body.images;
    const pubblicato = req.body.pubblicato;

    Book.create(
        {
            title:title,
            autore:autore,
            images:images,
            pubblicato:pubblicato
        }
    ).then((result) => {

        res.status(201).json({
            messages: 'success operation',
            status: '201',
        });
    }).catch(err => {
        return res.status(422).json({
            message: 'Error nel salvataggio'
        })
    });
/*
    var newUser = db.execute('INSERT INTO books (title,autore,images,pubblicato) VALUES (?,?,?,?)', [title, autore, images, pubblicato])
    console.log('query' + JSON.stringify(newUser));
    newUser.then(newUser => {

        const ID = newUser[0].insertId;
        res.status(200).json({
            messages: 'success operation',
            status: '200',
            access_token: 'non esiste il tokern',
            post: {
                id: ID
            }
        });
    })
        .catch(err => {
            return res.status(422).json({
                message: 'Error nel salvataggio'
            })
        });*/
};

