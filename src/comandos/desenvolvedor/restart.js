export default {
  aliases: ['religar'],
  description: 'me faça reiniciar...',
  isOn: true,
  category: 'dev',
  run: async (client, message, args) => {
    if(!['882757043142950974'].includes(message.author.id)) return message.reply(`${m.no}⟩ você não pode usar isso ;3`)
    process.exit(2)
  message.reply(`${m.load}⟩ reiniciado...`)
  }
}