
const authRoutes = require ('./auth');

const booksRoutes = require ('./books');

module.exports = function (app) {
    app.use('/auth',authRoutes).use('/books',booksRoutes);;
};


//---------------------------NO AUTH | AUTH - 7 END POINT
//*GET ALL /feed/posts
//*GET /feed/post/:id
//*GET SEARCH /feed/post/search ? title = 
//*GET BY ME /feed/post/:id
//*POST /feed/post
//*PUT /feed/post/:id
//*DELETE /feed/post/:id
//*POST /feed/post/:id/like
//--------------------------
//-----> JWT  //4 END POINT
//*POST /user/login
//*POST /user/register
//*GET  /user/me
//PUT  /user/:id   //verificare permessi


