const main = {
    index:(req, res) =>{
        res.render('index');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contact:(req, res) =>{
        res.render('contact');
    }
};
module.exports = main;