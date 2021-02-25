const { Student, Instrument, Admin }   = require('../models/index.js')

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
    res.render('login', {error: null})
  }


  static loginProcess = (req, res) => {
    const {username, password} = req.body
    Admin.findOne({
      where:{username}
    })
    .then(data=>{
      if(data.password === password){
        res.redirect("/admin")
      }else{
        res.render("login", {error: "Password salah"})
      }
    })
    .catch(error=>{
      res.send(error)
    })
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