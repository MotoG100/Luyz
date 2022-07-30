export default {
  description: 'dê loop a sua música ou queue.',
  category: 'music',
  isOn: false,
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
    let players = client.moon.players.all()
   if(!players[message.guild.id]) return message.reply(`${m.no}⟩ nenhum player foi criado nessa guilda **__MoonLink.Js__**`)
   let player = client.moon.players.get(message.guild.id)
   if(!player.infos.playing) return message.reply(`${m.no}⟩ nada está sendo reproduzido.`);
    let stats = null;
    
    if(player.infos.loop === 1) stats = 'loop da música'
    if(player.infos.loop === 2) stats = 'loop da queue'
    if(player.infos.loop === 3) stats = 'loop desligado'
    player.loop(player.infos.loop || 0 + 1)
    message.reply(`${m.si}⟩ agora o loop está com o status **${stats}**`)
  }
}