// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { sender, subject } = require('../utils/utils');

const emailController = {
    sendEmail: async (req, res) => {
        const { emailId, saleIdentifier, lastBoughtItem, userName } = req.body;
        try {
            const msg = {
                to: emailId,
                from: sender,
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            };
            await sgMail.send(msg);
            res.status(200).send({
                success: true, message: `Email Successfully Sent to user ${emailId}`
            });
        }
        catch (err) {
            console.log("Send Email failed:", err);
            res.status(500).send({
                success: false, message: `Server Error ${err}`
            });
        }
    },
};

module.exports = emailController;
