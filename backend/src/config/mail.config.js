import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export default function sendConfirmationMail(name, email, code) {
    transport.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: '[Shiftie Judge] Confirm your account!',
        html: `
        <div>
            <h1>Confirmation email!</h1>
            <br>
            <p>Hello ${name}, your account has been created!</p>
            <p>Click <a href="${process.env.FRONTEND_URL}/confirm?=${code}">HERE</a> to confirm your account!</p>
        </div>
    `
    }).then(() => console.log(`Email sent to ${email}`))
        .catch(err => console.log(err));
}