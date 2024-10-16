const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'leopoldo.oconner15@ethereal.email',
            pass: 'TVk6nMJyfzwesAsccG'
        }
    });

    let info = await transporter.sendMail({
        from: 'Mastoora Turkmen <mastooraturkmen@gmail.com>',
        to: 'bar@example.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js</h2>'
    })

    res.send(info)
}

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'janmastoorajan@gmail.com',
        from: 'mastooraturkmen631@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'easy to do anything with SendGrid is Fun with Node.js',
        html: '<strong>easy to do anything with SendGrid is Fun with Node.js</strong>',
    }

    const info = await sgMail.send(msg);
    res.json(info)
}


module.exports = sendEmail