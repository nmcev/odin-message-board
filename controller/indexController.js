exports.index = function (req, res, title, messages) {
    res.render('index', { title: title, messages: messages })
}

exports.getNewMsg = function (req, res, title) {
    res.render('form', { title: title })
}

exports.postNewMsg = function (req, res, messages) {
    messages.push({ text: req.body.message, user: req.body.user || "unknown", added: new Date() })
    res.redirect('/')
}




