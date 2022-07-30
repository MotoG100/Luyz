import { time, Op, hasMusicRealzin } from './../../functions.js'
import { EmbedBuilder } from 'discord.js'

export default async function (client, player, track) {
  let by = new Op({
      t:'button',
      label: 'Adicionar a playlist',
      customID: 'add',
      style: 1,
      emoji: m.music
  })
  
let embed = new EmbedBuilder({
        title: 'tocando ' + track.title,
        description: `${m.messagem}⟩ título: \n**${track.title}**
${m.relogio}⟩ duração: \n**${time('video', track.duration)}**
${m.pessoa}⟩ autor: \n**${track.author}**
${m.fixado}⟩ url: \n[${track.title}](${track.url})
`,
        thumbnail: {
            url: track.thumbnail
        },
        color: m.color,
        footer: {
            text: 'Powered by Moonlink.js',
            url: `https://moonlink.js/logoC`
        }
})
     client.channels.cache.get(player.textChannel).send({ 
        embeds: [embed],
   components: [by],
        content: ''
}).then(msg => {
   let filter = (click) => click.user.id !== client.user.id
    let collector = msg.channel.createMessageComponentCollector({
filter,
max:'1',
time: 150000
})

collector.on('collect', async (collected) => {
          if(!collected.isSelectMenu() && collected.type !== collected.ApplicationCommand) {
              let value = collected.customId
          let user = collected.user
              collected.deferUpdate()
    if(value=='add') {
       console.log(hasMusicRealzin(await get(`/profile/${user.id}/playlist`), track))
      if(await hasMusicRealzin(await get(`/profile/${user.id}/playlist`), track)) {
         msg.edit({ embeds: [], content: `${m.no}⟩ não foi possível adicionar **${track.title}**, pois ela já está em sua playlist.`})
      } else {
       if(await get(`/profile/${user.id}/playlist`) < 1) {
         write(`/profile/${user.id}`, { playlist: [track]})
       } else {
         write(`/profile/${user.id}/`, { playlist: await get(`/profile/${user.id}/playlist`).then(x => {
            x.push(track)
            return x
         })})
       }
    msg.edit({ embeds: [new EmbedBuilder({ 
    description: `${m.si}⟩ **${collected.user.tag}**, adicionei **${track.title}** à sua playlist, para vê-la, use **L^perfil** e no menu clique em privado 😉.`,
    color: m.color,
    thumbnail: { url: track.thumbnail }})], components: []
    })
    }
    }
              /*
  let actved = false
  setTimeout(() => {
      actved = true
  }, await get(`/profile/${user.id}/global/cooldown`))
  if(!actved) {
  setTimeout(() => msg.edit({ embeds: [embed], components:[]}), 7000)
  
  } else {*/
      setTimeout(() => msg.edit({ embeds: [embed], components:[], content:''}), 7000)
  
          }
    })
    
})
}