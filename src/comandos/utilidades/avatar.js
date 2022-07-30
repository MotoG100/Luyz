import { EmbedBuilder } from 'discord.js'

export default {
  aliases:['av'],
  usage:'avatar (@user ou Id)',
  description:'veja seu avatar ou de outra pessoa',
  isOn: true,
  category:'util',
  run: async (client, message, args) => {
    const user = await client.users.fetch(`${args.join(' ').toString().replace(/\D/g, "") || message.author.id}`)
    let a = 'Avatar de ' + user.tag;
     if(user.id == client.user.id) a = 'Meu avatar, sim eu sei sou lindo UwU.'
    if(user.id == message.author.id) a = 'Seu Avatar' 
    message.reply({ embeds: [new EmbedBuilder().setTitle(`${m.pessoa}⟩ ${a}`).setDescription(`clique [aqui](${user.avatarURL({ dynamic: true, size: 2048 })}) para abaixar o avatar.`).setColor(`${m.color}`).setImage(user.avatarURL({ dynamic: true, size: 2048 }))
    ]})
  }
}
