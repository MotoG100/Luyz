import { Op } from './../../../functions.js'
import config from './../../../config.js'
let prefix = config.prefix.replace('l^','L^');

export default {
  aliases: ['ajuda','h'],
  description: 'veja meus comandos',
  category: 'util',
  isOn: true,
  run: async (client, message, args) => {
  let row = new Op({
      t:'menu',
      place: 'L^play para escutar uma música.',
      customId: 'placehold',
      options: [
          {
              label: 'Música',
              description: `Veja meus comandos de música.`,
              emoji: m.music,
              value: '1'
          },
          {
              label: 'Perfil',
              description: `Veja meus comandos de perfil.`,
              emoji: m.pessoa,
              value: '2'
          },
          {
              label: 'Ultilidades',
              description: `Veja meus comandos de ultilidades.`,
              emoji: m.bot,
              value: '3'
          },
          {
              label: 'Voltar a embed',
              description: `Volte a embed inicial.`,
              emoji: m.voltat,
              value: 'return'
          }
      ]
  })
 let embed = new Op({
         t:'embed',
         title: 'Meus comandos',
         desc: `Olá ${message.author}, fico feliz por querer saber sobre meus comandos 〜(꒪꒳꒪)〜.
Em baixo estará emojis que indicaram a categoria dos comandos.
Qualquer dúvida use **L^commandinfo** 😉.
Status dos comandos: 
${m.off}⟩ não funcionando 
${m.on}⟩ funcionando

Categorias:
${m.um}⟩ **música**
${m.dois}⟩ **perfil**
${m.tres}⟩ **ultilidades**
${m.voltat}⟩ **voltar ao painel**`,
         color: m.color,
         thumb: client.user.avatarURL(),
         image: {
             
         url: 'attachment://luyz.png'
         }
     })
 
 message.reply({
     embeds: [embed],
     components: [row],
     files: ['/home/container/src/img/luyz.png']
 }).then(msg => {
     const filter = (a) => a.isSelectMenu()
     const collector = msg.createMessageComponentCollector({
         filter,
         time: 150000
     })
    collector.on('collect', (p) => {
       
      let user = p.user
      let value = p.values[0]
      if(message.author.id !== user.id) return p.reply({ ephemeral: true, content: `${m.no}⟩ ${user} esta interação ó na é sua, não mexa ( ͡°ᴥ ͡° ʋ)`})
      if(value==='1') {
          msg.edit({
              embeds: [new Op({
                  t:'embed',
                  title: 'Pagina (3/1)',
                  desc: `Dúvidas?? Use **L^commandinfo** 😉.

${m.on}⟩ **${prefix}play**
${m.on}⟩ **${prefix}pause**
${m.off}⟩ **${prefix}loop**
${m.on}⟩ **${prefix}skip**
${m.on}⟩ **${prefix}queue**
${m.on}⟩ **${prefix}queue**
${m.on}⟩ **${prefix}join**
${m.on}⟩ **${prefix}leave**
${m.on}⟩ **${prefix}replay**
${m.on}⟩ **${prefix}search**
${m.on}⟩ **${prefix}stop**
${m.on}⟩ **${prefix}volume**
`,
                  color: m.color,
                  thumb: client.user.avatarURL(),
                  image: {
             
         url: 'attachment://luyz.png'
         }
              })],
             components: [row]
          })
      }
    if(value==='2') {
        msg.edit({ embeds: [new Op({
           t:'embed',
           title: 'Pagina (3/2)',
           desc:`Dúvidas?? Use **L^commandinfo** 😉.

${m.on}⟩ **${prefix}botinfo**
${m.on}⟩ **${prefix}ping**
${m.on}⟩ **${prefix}say**
${m.on}⟩ **${prefix}uptime**
${m.on}⟩ **${prefix}avatar**
${m.on}⟩ **${prefix}commandinfo**
${m.on}⟩ **${prefix}moon**
${m.on}⟩ **${prefix}invite**`,
            color: m.color,
            thumb: client.user.avatarURL(),
            image: {
             
         url: 'attachment://luyz.png'
         }
        })]})
    }
    if(value==='3') {
        msg.edit({ embeds: [new Op({
            t:'embed',
            desc: `Dúvidas?? Use **L^commandinfo** 😉.

${m.on}⟩ **${prefix}perfil**
${m.on}⟩ **${prefix}badge**
${m.on}⟩ **${prefix}removesong**
${m.on}⟩ **${prefix}sobremim**
`,
            color: m.color,
            thumb: client.user.avatarURL(),
            image: {
             
         url: 'attachment://luyz.png'
         }
        })]})
    }
   if(value==='return') {
       msg.edit({ embeds:[embed], componentes: [row]})
   }
    })
 })
      
  
}
}