import { Op } from './../../../functions.js'


export default {
  aliases:['say'],
  usage:'say (#canal) ⟨mensagem⟩',
  description:'me faça falar algo.',
  isOn: true,
  category:'util',
  perms:['MANAGE_MESSAGES'],
  run: async (client, message, args) => {
    let arg = args.join(' ')
    if(!arg) return message.reply(`${m.no}⟩ coloque uma mensagem para que eu fale!`)
    
    message.delete()
   if(!message.mentions.channels.first()) {
     message.channel.send({ content: `${arg.replace(`@everyone`, '`mensagem contendo menções`').replace(`@here`, '`mensagem contendo menções`').replace(`<@&`, '`mensagem contendo menções`').replace('https://','`mensagem contendo links.`')}`, components: [new Op({ t:'button', label:'Enviado por ' + message.author.tag, disabled: true, style: 'PRIMARY', customID: 'raboduq', emoji: m.messagem})]})
     

   } else {
   const c = client.channels.cache.get(`${message.mentions.channels.first().toString().replace('<#','').replace('>', '')}`)
     c.send({ content: `${arg.replace(`@everyone`, '`mensagem contendo menções`').replace(`@here`, '`mensagem contendo menções`').replace(`<@&`, '`mensagem contendo menções`').replace('https://', '`mensagem contendo links`').split(`${message.mentions.channels.first()}`)[1]}`, components: [new Op({ t:'button', label:'Enviado por ' + message.author.tag, disabled: true, style: 'PRIMARY', customID: 'rabo', emoji: m.messagem })]})
   }
  }
}
