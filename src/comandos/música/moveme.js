export default {
  aliases: ['memova'],
  description: 'me mova para outro canal de voz da sua guilda.',
  category: 'music',
  perms: ['CONNECT'],
  isOn: false,
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
   if(!client.moon.players.has(message.guild.id)) return message.reply(`${m.no}⟩ nenhum player foi criado nessa guilda **__MoonLink.Js__**`)
  let player = client.moon.players.edit({
      voiceChannel: `${message.member.voice.channel.id}`,
      textChannel: `${message.channel.id}`,
      guildId: `${message.guild.id}`
  });
      
  let track = await client.moon.search('https://youtu.be/OiL1kFo4C8Y')
  player.queue.add(track.tracks[0])
   player.play();
     message.reply(`${m.si}⟩ eu me mudei para o canal de voz **<#${message.member.voice.channel.id}>** ;)`)
  }
}