const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login', { csrfToken: req.csrfToken() });
};


exports.register = (req, res) => {
    const login = new Login(req.body)
    login.register()
    res.send(login.body)
}