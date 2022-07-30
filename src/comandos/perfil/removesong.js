export default {
  aliases: ['rs'],
  description: 'remova uma música da playlist.',
  usage: 'removesong ⟨posição⟩',
  isOn: true,
  category: 'perfil',
  run: async (client, message, args) => {
   let position = args.join(' ')
   if(!position) return message.reply(`${m.no}⟩ coloque uma posição.`)
   if(isNaN(position)) return message.reply(`${m.no}⟩ o formato da posição em números`)
     await get(`/profile/${message.author.id}/playlist`).then(x => {
         position = position - 1
         x.splice(position, 1)
         write(`/profile/${message.author.id}`, { playlist: x })
     })
    message.reply(`${m.si}⟩ eu removi a música que estava na posição **${position}**.`)
  }
}