import { Op, time } from './../../../functions.js'

export default {
  aliases: ['q'],
  description: 'veja a lista de músicas de sua guilda.',
  category: 'music',
  isOn: true,
  perms: ['CONNECT'],
  run: async (client, message, args) => {
if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
      if(!client.moon.players.has(message.guild.id)) return message.reply(`${m.no}⟩ nenhum player foi criado nessa guilda **__${message.guild.name}__**`)
    let player = client.moon.players.get(message.guild.id);
     if(!player.infos.playing) return message.reply(`${m.no}⟩ nada está sendo reproduzido.`);
    let i = 1;
    let queue = player.queue.all?.map(x => `**${i++}**⟩ [${x.title}](${x.url}) • \`${time('video', x.duration)}\``).join('\n')
   let loopFilter = undefined 
if(!player.infos.loop) loopFilter = '( ͡°ᴥ ͡° ʋ) sem loop'
if(player.infos.loop == '1') loopFilter= 'loop da música ' + player.current.title
if(player.infos.loop == '2') loopFilter = 'loop da queue de ' + message.guild.name
      
    if(!args[0]) {
  message.reply({ embeds: [new Op({
      t:'embed',
      title: m.planeta + '⟩ queue da guilda **' + message.guild.name + '**',
      desc:`${m.music}⟩ tocando agora: [${player.current.title}](${player.current.url}) • \`${time('video', player.current.duration)}\`\n\n${queue}`,
      color: m.color,
      thumb: player.current.thumbnail
  })]})
  }
  if(args[0] == 'stats') {
      i = 0;
      message.reply({ embeds: [new Op({
          t:'embed',
          title:'Status da queue.',
          desc:`${m.fixado}⟩ tocando agora: [${player.current.title}](${player.current.url}) • \`${time('video', player.current.duration)}\`
${m.queue}⟩ total de músicas: 
**${player.queue.all.map(o => o.length)}**
${m.quadrado}⟩ loop:
**${loopFilter}**
${m.pause}⟩ pausada?:
**${player.infos.paused? 'sim' : 'não'}**
${m.music}⟩ tocando?:
**${player.infos.playing? 'sim' : 'não'}**`,
       color: m.color,
       thumb: player.current.thumbnail
      })]})
  }
  }
}