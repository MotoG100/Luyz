 import { time } from './../../../functions.js'
 
export default {
  aliases: ['up'],
  description:'veja meu tempo de atividade',
  isOn: true,
  category:'util',
  run: async (client, message, args) => {
    message.reply(`${m.load}⟩ carregando...`).then((msg) => setTimeout (async() => {
      msg.edit(`${m.relogio}⟩ meu tempo de atividade: **${await time('normal', client.uptime)}**`)
    }, 1000))
  }
}
