
const { Student, Instrument, MusicCourse }   = require('../models/index.js')


class AdminController {

  static superUser = (req, res) => {
    res.render('admin')
  }

  static getListStudent = (req, res) => {
    Student
    .findAll({include : { model : Instrument }})
    .then(data => {
      res.render('crudStudents',{ data })
    })
    .catch(err => res.send(err))
  }

  static getAddStudent = (req, res) => {
    let dataStudent;
    Student.findAll({
      include: { model : Instrument }
    })
    .then(data => {
      dataStudent = data
      return Instrument.findAll()
    })
    .then(dataInstrument => {
      res.render('add-student', { dataStudent, dataInstrument })
    })
    .catch(err => res.send(err))



    // Instrument
    //   .findAll()
    //   .then(data => res.render('add-student',{ data }))
    //   // .then(data => res.send(data))
    //   .catch(err => res.send(err))
  }

  static postAddStudent = (req, res) => {
    const newStudent = {
      first_name : req.body.fname,
      last_name : req.body.lname,
      kelas : req.body.kelas,
      InstrumentId : +req.body.tipe,
      gender : req.body.gender
    }

   
    Student
      .create(newStudent)
      .then(data => {
        return MusicCourse.create({
          StudentId : data.id,
          InstrumentId : newStudent.InstrumentId
        })
      })
      .then(()=> res.redirect('/admin/student'))
      .catch(err => res.send(err))
  }

  static getEditStudent = (req, res) => {
    let student;
    Student
      .findOne({
        where: { id: +req.params.id }})
      // .then(data => res.render('edit-student',{data}))
      .then(data => {
        student = data
        return Instrument.findAll()
      })
      .then(instrument => {
        res.render('edit-student',{student, instrument})
      })
      .catch(err => res.send(err))
  }

  static postEditStudent = (req,res) => {
    const editStudent = {
      first_name : req.body.fname,
      last_name : req.body.lname,
      kelas : req.body.kelas,
      gender : req.body.gender
    }

    Student
      .update(editStudent, {where: {id: +req.params.id}})
      .then(data => {
        return MusicCourse.update(
          { InstrumentId : +req.body.tipe }, 
          { where : {
            StudentId : +req.params.id
          }
        })
        })

      .then(()=> res.redirect('/admin/student'))
      .catch(err => res.send(err))
  }

  static getDeleteStudent = (req, res) => {
    Student.destroy({
      where : {
        id : +req.params.id
      }
    })
    .then(data => {
      res.redirect('/admin/student')
    })
    .catch(err => {
      res.send(err)
    })
  }

}


module.exports = AdminController