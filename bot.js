const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('NasiPadang Bot Loaded!');
});

client.on('message', message => {
	if (message.content === 'Welcome') {
		message.channel.send('Selamat Datang di Team Beol 2.0! Bot Version 0.0.9B.');
	}
});

client.on('message', message => {
	if (message.content === 'Anjing') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

client.on('message', message => {
	if (message.content === 'Bangsat') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

client.on('message', message => {
	if (message.content === 'Asu') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

client.on('message', message => {
	if (message.content === 'Tai') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

client.on('message', message => {
	if (message.content === 'Babi') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

client.on('message', message => {
	if (message.content === 'Ngentot') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

client.on('message', message => {
	if (message.content === 'Jancuk') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

client.on('message', message => {
	if (message.content === 'Bajingan') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

client.on('message', message => {
	if (message.content === 'Tolol') {
		message.channel.send('Mohon Untuk tidak *NGEGAS* disini!');
	}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
