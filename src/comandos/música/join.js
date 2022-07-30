export default {
  aliases: ['j'],
  description: 'me faça entrar no canal de voz.',
  category: 'music',
  perms: ['CONNECT'],
  isOn: true,
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
    let players = null

    if(!client.moon.players.has(message.guild.id)) players = client.moon.players.create({
        textChannel: message.channel.id,
        voiceChannel: message.member.voice.channel.id,
        guildId: message.guild.id
    })
    else players = client.moon.players.get(message.guild.id)
  players.connect()
  message.reply(`${m.si}⟩ entrei no canal de voz **<#${message.member.voice.channel.id}>**, caso queira escutar algo use **L^play** ;).`)
  }
}