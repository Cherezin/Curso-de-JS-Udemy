exports.homePage = (req, res) => {
    res.render('index', {
        titulo: 'Este será o titulo da página',
        numeros: [0, 1, 2, 3, 4, 5]
    })
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};