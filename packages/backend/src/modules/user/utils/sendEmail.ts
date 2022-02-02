import nodemailer from 'nodemailer';

export async function sendEmail(email: string, token: string) {
	const testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false, // True for 465, false for other ports
		auth: {
			user: testAccount.user, // Generated ethereal user
			pass: testAccount.pass, // Generated ethereal password
		},
	});

	const info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // Sender address
		to: email, // List of receivers
		subject: 'Confirmation ✔', // Subject line
		text: 'Hello world?', // Plain text body
		html: `<a href="${process.env.CORS_ORIGIN}/${token}">${process.env.CORS_ORIGIN}/${token}</a>`, // Html body
	});

	console.log('Message sent: %s', info.messageId);
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
