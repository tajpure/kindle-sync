var fs = require('fs');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(smtpTransport({
	host: 'smtp.sina.com',
	port: 25,
	auth: {
		user: 'kindle_sync@sina.com',
		pass: 'sendtokindle'
		}
}));
	
var dir = '';

fs.watch(dir, function (event, filename) {
	if (filename) {
	} else {
	}
});

var sendMail(file) {
	var mailOptions = {
		from: '',
		to: '',
		subject: '',
		text: '',
		attachments: [

		{
			filename: '',		
			path: ''
}
]
	}
}

}
