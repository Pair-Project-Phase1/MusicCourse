const { Student, Instrument }   = require('../models/index.js')

class Controller {

  static home = (req, res) => {
    Instrument
      .findAll()
      .then(data => {
        res.render('home', {data})
      })
      .catch(err => {
          res.send(err)
      })
  }

  static login = (req, res) => {
    res.render('login')
  }

  static pianoRules = (req,res) => {
    res.render('rules-piano')
  }

  static gitarRules = (req,res) => {
    res.render('rules-gitar')
  }

  static drumRules = (req,res) => {
    res.render('rules-drum')
  }


}

module.exports = Controller