import fetch from 'node-fetch'

export default {
  aliases: ['noxi-stats'],
  description: 'veja os status do noxi.',
  category: 'dev',
  isOn: true,
  run: async (client, message, args) => {
  if(!['882757043142950974','853025249063075841'].includes(message.author.id)) return message.reply(`${m.no}⟩ você não pode usar isso :3.`)
 let response = await fetch(`https://noxi-onMoonSpace.motg100.repl.co/response`)
  message.reply(`Status do site:

**${response.status}**
Response: 
**${response.data}**
\`\`\`js\n${JSON.stringify(response)}\`\`\``)
  }
}