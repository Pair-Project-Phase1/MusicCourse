const nodemailer = require("nodemailer");
function sendEmail(dataStudent, email) {
    //Step 1: Creating the transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
          user: "musicomersproject@gmail.com",
          pass: "pairprojectF1"
        }
  });

  //Step 2: Setting up message options
  const messageOptions = {
  subject: "Registered Music Course",
  text: `Congratulation ${dataStudent.first_name} ${dataStudent.last_name} You have join to Course`,
  to: email,
  from: "musicomersproject@gmail.com"
  };

  //Step 3: Sending email
  transporter.sendMail(messageOptions);
}


module.exports = sendEmail