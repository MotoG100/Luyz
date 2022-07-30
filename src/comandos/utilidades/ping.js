export default {
  aliases:['laticencia'],
  description:`veja meu ping.`,
  isOn: true,
  category:'util',
  run: async(client, message, args) => {
    message.reply(`${m.load}⟩ carregando...`).then((msg) => setTimeout(() => {
      msg.edit(`🏓⟩ pong!
Ping (Websocket): **${client.ws.ping}ms**
Ping (mensagem): **${new Date().getTime() - message.createdTimestamp}**
`)
    }, 1000))
  }
}