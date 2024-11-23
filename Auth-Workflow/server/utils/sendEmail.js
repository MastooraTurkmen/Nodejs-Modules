const nodemailer = require('nodemailer')

const sendEmail = async () => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'alessandra.heaney@ethereal.email',
            pass: 'vytNdp9UgHKAXeVUQj'
        }
    });

    const info = await transporter.sendMail({
        from: '"Mastoora Turkmen 👻" <mastooraturkmen@gmail.com>', // sender address
        to: "user@example.com, baz@example.com", // list of receivers
        subject: "Testing Email ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Testing Email</b>", // html body
    });
}

module.exports = sendEmail