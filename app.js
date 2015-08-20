var watch = require('watch');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
	host: 'smtp.sina.com',
	port: 25,
	auth: {
		user: 'kindle_sync@sina.com',
		pass: 'sendtokindle'
		}
}));

var dir = './';

watch.createMonitor(dir, function (monitor) {
    monitor.on("created", function (f, stat) {
			sendMail(f);
    })
  });

var sendMail = function(file) {
	var mailOptions = {
		from: 'kindle_sync@sina.com',
		to: 'crucci@163.com',
		subject: 'kindle sync',
		text: 'ok',
		attachments: [
		{
			filename: file,
			path: file
		}]
	};
	transporter.sendMail(mailOptions, function(err, info) {
		if (err) {
			console.log(err);
		} else {
			console.log(info.response);
		}
	});
}
