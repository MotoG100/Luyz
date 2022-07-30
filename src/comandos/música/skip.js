export default {
  aliases: ['ski','pular'],
  description: 'pule uma música da sua queue.',
  category: 'music',
  isOn: true,
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
    if(!client.moon.players.has(message.guild.id)) return message.reply(`${m.no}⟩ nenhum player foi criado nessa guilda **__MoonLink.Js__**`)
   let player = client.moon.players.get(message.guild.id)
  if(!player.infos.playing) return message.reply(`${m.no}⟩ nada está sendo reproduzido.`);
  if(player.queue.all.length < 1) return message.reply(`${m.no}⟩ não à uma música depois de **${player.current.title}**.`)
   
      message.reply(`${m.si}⟩ música pulada, próxima **${player.queue.all[0].title}**.`)
      player.skip()
  }
}