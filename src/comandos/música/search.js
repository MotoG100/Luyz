import { 
    time, 
    Op 
} from './../../../functions.js'

export default {
  aliases: ['pesquisa','s'],
  description: 'pesquise uma música',
  usage: 'search ⟨termo⟩',
  category: 'music',
  isOn: true,
  run: async (client, message, args) => {
    
    if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
    if(!client.moon.players.has(message.guild.id)) return message.reply(`${m.no}⟩ nenhum player foi criado nessa guilda **__MoonLink.Js__**`)
   let player = client.moon.players.get(message.guild.id) || {}
  if(!player.infos.playing) return message.reply(`${m.no}⟩ nada está sendo reproduzido.`);
  let term = args.join(' ')
  if(!term) term = 'como escrever?'
  let track = await client.moon.search(term)
  let embed = new Op({
      t:'embed',
      title: track.tracks[0].title + ' track 0',
      desc: `${m.messagem}⟩ título: \n**${track.tracks[0].title}**
${m.relogio}⟩ duração: \n**${time('video', track.tracks[0].duration)}**
${m.pessoa}⟩ autor: \n**${track.tracks[0].author}**
${m.fixado}⟩ url: \n[${track.tracks[0].title}](${track.tracks[0].url})`,
   color: m.color,
   thumb: track.tracks[0].thumbnail 
  }), button = new Op({
      t:'button',
      label: 'Adicionar à queue.',
      emoji: m.music,
      style: 'PRIMARY',
      customID: 'adicionar'
  })
  
  message.reply({
     embeds: [embed],
     components: [button]
  }).then((msg) => {
     const filter = (click) => click.user.id !== client.user.id
     
    let coletor = msg.channel.createMessageComponentCollector({
      filter,
      max: '1',
      time: 15000
    })
 coletor.on('collect', inte => {
    if(!inte.isSelectMenu() && inte.type !== inte.ApplicationCommand) {
 const user = inte.user
 const id = inte.customId
 inte.deferUpdate();
  console.log(user.id + ' ' + id)
   if(id=='adicionar') {
       msg.edit({
           embeds:[],
           components:[],
           content: `${m.si}⟩ adicionei **${track.tracks[0].title}** • \`${time('video', track.tracks[0].duration)}\` à queue de **${msg.guild.name}**.`
       })
     player.queue.add(track.tracks[0])
   }
  setTimeout(() => msg.edit({ embeds: [embed], content: '', components:[]}), 8000)
    }
 })
 
  })

  }
}