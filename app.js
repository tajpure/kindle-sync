var fs = require('fs');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(smtpTransport({
	host: 'gmail',
	port: 25,
	auth: {
		user: '',
		pass: ''
		}
}));
	
var dir = '';
var user = '';
var pass = '';
var host = '';
var port = '';

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
