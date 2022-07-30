import util from 'util'
import { EmbedBuilder } from 'discord.js'
import config from './../../../config.js'
import * as funcs from './../../../functions.js'
import Discord from 'discord.js'
import fetch from 'node-fetch' 
export default {
  aliases: ['e'],
  description: 'comando administrativo ʕ·ᴥ·ʔ',
  usage: 'eval ⟨code⟩',
  isOn: true,
  category: 'dev',
  run: async(client, message, args) => {
    try {
   const o = args.join(' ')
    if(!['882757043142950974','853025249063075841', '978981769661513758'].includes(message.author.id)) return message.reply(`${m.no}⟩ você não pode usar isso :3`)
    if(!o) return message.reply(`${m.no}⟩ coloca o código uai ( ͡°ᴥ ͡° ʋ)`)
    let eva = eval(o)
    var type = typeof eva
    if(eva instanceof Promise) 
    message.reply(`coloquei await no resultado ( ͡°ᴥ ͡° ʋ)`)
     eva = await eva
    if(typeof eva !== 'string')
    eva = util.inspect(eva, { depth: 0})
    
message.reply(`${m.load}⟩ executando o código \`${o}\``).then((msg) => {
setTimeout(() => {
  msg.edit(`executado com sucesso ${m.si}.
tipo de código: **${type}**
**\`\`\`js\n${eva}\`\`\`**`)
}, 1000)
})
} catch(e) {
  const o = args.join(' ')
  message.reply(`${m.load}⟩ executando o código \`${o}\``).then((msg) => {
setTimeout(() => {
  msg.edit(`executado com erros ${m.no}.
tipo de código: **${type}**
**\`\`\`js\n${e}\`\`\`**`)
}, 1000)
})
}
}
}