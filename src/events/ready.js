import { EmbedBuilder } from 'discord.js'
import { color } from './../../functions.js'

export default async function (client, message) {
    
  client.moon.init(client.user.id)
  
  console.log(color('fg').green, `[ SYSTEM ]`, color('fg').magenta, ` conectado em ${client.user.tag}`)
 console.log(color('fg').green, `[ SYSTEM ]`, color('fg').magenta, `carregados no total ${client.commands.size} comandos.`)
  console.log(color('fg').green, `[ SYSTEM ]`, color('fg').magenta, ` sistema iniciado.`)
  console.log(color('fg').green, `[ LUYZ ]`, color('fg').cyan, ` estou online :D`)
  const a = [ 
    'Luyz v5.0.6 js',
    'realzin e lucas são lindos ( ͡°ᴥ ͡° ʋ)',
    `eu tenho ${client.commands.size} comandos`,
    `estou em ${client.guilds.cache.size} servidores!`,
    `estou satisfazendo ${client.users.cache.size} usuários!`,
    `🔑⟩ prefix L^`,
    `🎶⟩ snowman - sia minha música favorita ^ω^`,
    `Astronomia é pra mim? 🧐`,
    `buscando por meus 100 servidores (^•ᴥ•^)`
]
const b = [
    0,
    1,
    2,
    3,
    4,
    5
  ]

setInterval(() => {
client.user.setActivity({ name: a[Math.floor(Math.random() * a.length)], type: b[Math.floor(Math.random() * b.length)]})

}, 2000)
    

send({
  t:'custom',
  custom: {
    channel:'957414660821360680',
    t:'embed',
    embed: {
      title:'Acordei :D',
      desc:`
Eu **${client.user.tag}** fui reiniciado, operando na versão 5.0.6 js comendo paçoca, enquanto o realzin me mama gostoso ( ͡°ᴥ ͡° ʋ)

**Reiniciei:**
${m.planeta}⟩ com:
**${client.guilds.cache.size}** servidores!
${m.pasta}⟩ e:
**${client.commands.size}** comandos!
${m.pessoa}⟩ e com:
**${client.users.cache.size}** membros!
${m.ping}⟩ e também com:
**${client.ws.ping}ms** de ping.`,
  color: m.color,
  thumb: client.user.avatarURL(),
    }
  }
})
    }