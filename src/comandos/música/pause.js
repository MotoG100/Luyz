import { time } from './../../../functions.js'

export default {
  aliases: ['pausar'],
  description: 'pause a sua música',
  category: 'music',
  isOn: true,
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
    if(!client.moon.players.has(message.guild.id)) return message.reply(`${m.no}⟩ nenhum player foi criado nessa guilda **__${message.guild.name}__**`)
    let player = client.moon.players.get(message.guild.id)
     player.pause(player.infos.paused? false : true)
      message.reply(`${m.si}⟩ **${player.current.title}** • \`${time('video', player.current.duration)}\` foi ${player.infos.paused? 'despausada' : 'pausada'}.`)
  }
}