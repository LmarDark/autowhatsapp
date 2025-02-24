# AutoWhatsApp
AutoWhatsApp é uma aplicação que permite conectar o WhatsApp Web via código, gerenciar sessões e interagir com a API usando o whatsapp-web.js. Ideal para automatizar tarefas simples, como responder a mensagens automaticamente e exibir status de conexão.

## 🚀 Instalação
1. **Clone o repositório**:
```bash
git clone https://github.com/LmarDark/autowhatsapp.git
```
2. **Instale as dependências**: Navegue até o diretório do projeto e execute o comando abaixo para instalar as dependências necessárias.
```bash
npm install
```
3. **Inicie o servidor**: Depois de instalar as dependências, inicie o servidor com o comando:
```bash
node app.js

```
Isso irá iniciar o servidor Express na porta 5000 (ou outra porta definida na variável de ambiente PORT).

4. **Escaneie o QR Code**: Ao rodar o aplicativo, um QR code será gerado no terminal. Escaneie o QR code com o WhatsApp no seu celular para conectar à sua conta.

## 💡 Como funciona
**Express**: O servidor é executado com Express, e ao acessar a raiz (/), ele serve o arquivo index.html. <br>
**WhatsApp Web**: O código usa o pacote whatsapp-web.js para conectar o WhatsApp Web via código e gerar o QR code. <br>
**Socket.IO**: Comunicação em tempo real entre o servidor e a página frontend utilizando o socket.io. A aplicação notifica quando o WhatsApp está conectado ou desconectado. <br>
## 🛠️ Tecnologias Usadas
**whatsapp-web.js**: Para interação com o WhatsApp Web. <br>
**Express**: Framework para criação do servidor web. <br>
**Socket.IO**: Comunicação em tempo real para o frontend. <br>
**QRCode-terminal**: Geração de QR code no terminal. <br>
## ⚙️ Funcionalidades
**QR Code**: Gera o QR code para escanear com o WhatsApp e conectar o WhatsApp Web. <br>
**Conexão com WhatsApp**: Após a autenticação, o sistema notifica quando o WhatsApp está conectado ou desconectado. <br>
**Comando simples**: Responde com "pong..." sempre que o comando !ping for enviado ao bot. <br>
## 🔧 Desenvolvimento
**Conecte-se ao WhatsApp**: Após escanear o QR code, você verá no terminal a mensagem "WhatsApp conectado com sucesso!". <br>
**Desconexão**: Caso a conexão seja perdida, o sistema tentará reconectar automaticamente. <br>
## 📝 Licença
Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
