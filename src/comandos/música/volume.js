export default {
  aliases: ['v'],
  description: 'defina um volume a sua música.',
  usage: 'volume ⟨porcentagem⟩',
  category: 'music',
  isOn: true,
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
    if(!client.moon.players.has(message.guild.id)) return message.reply(`${m.no}⟩ nenhum player foi criado nessa guilda **__MoonLink.Js__**`)
   let player = client.moon.players.get(message.guild.id)
   if(!player.infos.playing) return message.reply(`${m.no}⟩ nada está sendo reproduzido.`);
   let percent = args.join(' ')
   if(!percent) percent = 0
   if(isNaN(percent)) return message.reply(`${m.no}⟩ coloque apenas números legíveis.`)
    if(percent > 200) return message.reply(`${m.no}⟩ não consigo aumentar o volume mais doque 200%!`)
    player.volume(percent)
    message.reply(`${m.si}⟩ o volume foi definido para **${percent}%**.`)
  }
}