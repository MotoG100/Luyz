import { EmbedBuilder } from 'discord.js'

export default {
  aliases:['Lban'],
  usage:'blacklist ⟨Id ou @user⟩ ⟨motivo⟩',
  isOn: true,
  description:'bloqueie um usuário de me usar.',
  category:'dev',
  run: async (client, message, args) => {
    if(!['915295692002582541','882757043142950974','853025249063075841'].includes(message.author.id)) return message.reply(`${m.no}⟩ você não pode usar isso ;3`)
    if(args[0] === 's' && args[0] === 'un' && args[0] == 'info') return message.reply(`${m.no}⟩ coloque \`s\` para adicionar o usuário a blacklist, \`un\` para remover e \`info\` para ver as informações do usuário banido.`)
 if(isNaN(args[1])) return message.reply(`${m.no}⟩ coloque o id corretamente do usuário!`)
    

var user = await client.users.fetch(`${args[1]}`)

    if(user.id == '882757043142950974') return message.reply(`${m.no}⟩ N venha colocar o id do meu dono ( ͡°ᴥ ͡° ʋ)`)
      
    if(args[0] == 'info') {
        if(await get(`/blacklist/${user.id}/reason`) === 0) return message.reply(`${m.no}⟩ o usuário \`${user.tag}\` não foi banido!`)

 message.reply({ embeds: [new EmbedBuilder({
title: `info ⟨${user.tag}⟩`,
description: `${m.pessoa}⟩ quem foi banido?:
\`${user.tag}\`
${m.messagem}⟩ motivo: 
\`${await get(`/blacklist/${user.id}/reason`)}\`
${m.mod}⟩ quem baniu?:
\`${await get(`/blacklist/${user.id}/author`)}\``,


color: m.color,
thumbnail: user.avatarURL(),
})
]
})
}
    if(args[0] == 's') {
       message.reply(`${m.bot}⟩ ${user.tag}⟨\`${user.id}\`⟩ foi banido com o motivo: **${args.join(' ').split(user.id)[1]}**`)
      write(`blacklist/${user.id}`, { reason: `${args.join(' ').split(user.id)[1]} `})
      write(`blacklist/${user.id}`, { author: ` ${message.author.tag} ` })
    } else if(args[0] === 'un') {
      message.reply(`${m.bot}⟩ ${user.tag} foi desbanido.`)
      write(`blacklist/${user.id}/reason`, null)
      write(`blacklist/${user.id}/author`, null)
    }
    }
  }



