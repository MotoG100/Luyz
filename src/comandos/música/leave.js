export default {
  aliases: ['l'],
  description: 'me faça sair de um canal de voz.',
  category: 'music',
  isOn: true,
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
    if(!client.moon.players.has(message.guild.id)) return message.reply(`${m.no}⟩ nenhum player foi criado nessa guilda **__MoonLink.Js__**`)
   let player = client.moon.players.get(message.guild.id);
      message.reply(`${m.si}⟩ eu sai do canal de voz **<#${message.member.voice.channel.id}>**, até mais ;)`);
 
  player.destroy();
     
  }
}