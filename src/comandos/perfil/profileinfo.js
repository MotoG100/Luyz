import {
    Op,
    time
} from './../../../functions.js'
import { EmbedBuilder } from 'discord.js'


export default {
  aliases: ['pi'],
  description: 'veja as informações ed um perfil.',
  usage: 'profileinfo ⟨Id do user⟩',
  category: 'profile',
  isOn: true,
  run: async (client, message, args) => {
  if(!['882757043142950974','978981769661513758','853025249063075841'].includes(message.author.id)) return message.reply(`${m.no}⟩ você não pode usar isso :3`)
    let o = args.join(' ')
  if(!o) o = '883062882680569866'
  const user = await client.users.fetch(o)
 let playlist = null
 await get(`/profile/${user.id}/playlist`).then(x => playlist = x ? x : 'no playlist');
  message.reply({
     embeds: [new EmbedBuilder({
         title: 'ProfileInfo (' + user.tag + ')',
         description: `
${m.pessoa}⟩ Tag:
**${user.tag}**
${m.relogio} data de criação:
**${time('normal', message.author.createdAt)}**
${m.messagem}⟩ total de músicas na playlist:
**${playlist.length}**
${m.chave}⟩ Xp:
**${await get(`/profile/${user.id}/global/xp`)}**
${m.fixado}⟩ banido?:
**${await get(`/blacklist/${user.id}/reason`)? 'sim, tá banido ( ͡°ᴥ ͡° ʋ)' : 'não, não tá banido ( ͡°ᴥ ͡° ʋ)'}**`,
    color: m.color,
    thumbnail: {
        url: user.avatarURL()
    },
    footer: {
        text: 'perfil de ' + user.tag
     }
         
     })]
     })
  }
}