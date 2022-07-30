import { exec } from 'child_process'

export default {

  aliases: ['bash'],

  description: 'execute um comando em bash.',

  usage: 'shell ⟨comando⟩',
  isOn: true,

  category: 'dev',

  run: async (client, message, args) => {

  if(!['978981769661513758','882757043142950974'].includes(message.author.id)) return message.reply(`${m.no}⟩ você não pode usar isso :3.`)
    let term = args.join(' ')
    if(!term) return message.reply(`${m.no}⟩ insira um termo para executar.`)
   exec(term, (err, result) => {
       if(err) {
           return message.reply(`\`\`\`js\n${err}\`\`\``)
}
   message.reply(`\`\`\`js\n${result}\`\`\``)
  })

}
    }