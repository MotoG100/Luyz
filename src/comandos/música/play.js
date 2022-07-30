import {
    time
} from './../../../functions.js'

export default {
  aliases: ['p'],
  description: 'escute uma musiquinha comigo ʕ·ᴥ·ʔ',
  usage: 'play ⟨url ou nome⟩',
  isOn: true,
  category: 'music',
  perms: ['CONNECT'],
  run: async (client, message, args) => {
  let playlistTrackFavorite = null
     await get(`/profile/${message.author.id}/playlist`).then(x => playlistTrackFavorite = x[0])
 if(!message.member.voice.channel) return message.reply(`${m.no}⟩ Você precisa entrar em um canal de voz para executar esse comando`)
  let music = args.join(' ')
  if(!music) music = 'snowman - sia'
  let player = client.moon.players.create({
      guildId: `${message.guild.id}`,
      textChannel: `${message.channel.id}`,
      voiceChannel: `${message.member.voice.channel.id}`
  })
let playerGet = client.moon.players.get(message.guild.id)
if(music === 'playlist') {
 if(!playerGet.connected) player.connect();
    await get(`/profile/${message.author.id}/playlist`).then(x => x.map(o => player.queue.add(o)).join('\n'))
   if(!playerGet.playing) player.play();
    
    message.reply(`${m.music}⟩ eu irei tocar sua playlist 😉.`)
} else {
const track = await client.moon.search(music)
if(!playerGet.connected) player.connect();
player.queue.add(track.tracks[0])
if(!playerGet.playing) player.play();
message.reply(`${m.music}⟩ ${message.author}, adicionei **${track.tracks[0].title}** • \`${time('video', track.tracks[0].duration)}\` à queue de **${message.guild.name}**.`)
  }
 }
}