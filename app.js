const qrcode = require('qrcode-terminal');
const { Client, LocalAuth  } = require('whatsapp-web.js');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let isReadyLogged = false;

server.listen(port, function() {
    console.log('Aplicação rodando na *: ' + port);
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/' });
});

// ARGUMENTOS PARA INICIAR O CLIENT DO ZAP 
// E O EXPRESS PARA O INDEX
const client = new Client({
    puppeteer: {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-gpu',
        ],
    },
    authStrategy: new LocalAuth(),
    webVersion: '2.2322.15',
	webVersionCache: {
		type: 'remote',
	remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
	},
});

client.on('disconnected', (reason) => {
    console.log('WhatsApp foi desconectado!');

    io.emit('disconnected', 'WhatsApp foi desconectado. Escaneie um novo QR Code.');
    
    isReadyLogged = false;

    client.destroy();
    client.initialize();
});

// O WHATSAPP FOI CONECTADO COM SUCESSO //
client.on('ready', () => {
    if(isReadyLogged == false) {
	isReadyLogged = true;
	console.log('WhatsApp conectado com sucesso!');
    	io.emit('ready', '✅ WhatsApp conectado com sucesso!');
    }
});

client.on('qr', (qr) => {
	if(isReadyLogged == false) {
		console.log('QR code recebido. Escaneie com seu Whatsapp:');
		qrcode.generate(qr, { small: true });
	}
});

// MENSAGEM PARA VERIFICAÇÃO DE FUNCIONAMENTO //
client.on('message', msg => {
    if (msg.body == '!ping') {
      msg.reply('pong...');
      console.log("!ping recebido!");
    }
});

client.initialize();
