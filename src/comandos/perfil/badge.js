import Discord from 'discord.js'

export default {
  aliases: ['addBadge'],
  description: 'adicione uma badge à alguém.',
  usage: 'badge ⟨usuário⟩ ⟨badge opções⟩',
  isOn: true,
  category: 'perfil',
  run: async (client, message, args) => {
function isUrlValid(string) {
  let url = false
     try {
       url = new URL(string)
     } catch(_) {
        url = false
     }
    return url
 }


    if(!['882757043142950974','978981769661513758','853025249063075841'].includes(message.author.id)) return message.reply(`${m.no}⟩ você não pode usar isso :3.`)
    let userBadge = args[0]
    let badgeOption = args[1]
    if(!userBadge && !badgeOption && badgeOption !== 'padrão' && badgeOption !== 'custom') return message.reply(`${m.no}⟩ coloque o usuário e a opção de badge para ele receber a badge. A opções é **custom** ou **padrão**`)
   if(isNaN(userBadge)) return message.reply(`${m.no}⟩ coloque um Id em números!`)
    const user = await client.users.fetch(userBadge)
    let badgePositionForPush = undefined
   if(await get(`/profile/853025249063075841/global/badge`).then(x => x.length) > 7) return message.reply(`${m.no}⟩ ${user}, não pode mais receber badges, pois o máximo de badges é **7**`);
    await get(`/profile/${user.id}/global/badge`).then(x => {
    if(!x[0]) {
       badgePositionForPush = 1 + 1
    } else {
    let k = 0;
    x.map(o => k = x.slice(-1)[0])
    
    badgePositionForPush = k.position - 182
    }
    })
console.log(badgePositionForPush)
let badge = {
      url: '/home/container/src/img/',
      position: 3840
  }
  let badgePush = {
      url: '/home/container/src/img/',
      position: badgePositionForPush
  }
   if(badgeOption == 'padrão') {
    let badgeStandard = args[2]
    if(!['luyz_favorite','noxi_favorite','luyz_moder','luyz_dev','luyz_amigx','wumpus'].includes(badgeStandard)) return message.reply(`${m.no}⟩ \`${badgeStandard}\` não foi econtrado ma lista de badges, coloque em minúsculo. Veja ela:
**
Luyz_favorite == ${m.estrela}
Noxi_favorite == ${m.noxi}
Luyz_moder == ${m.mod}
Luyz_dev == ${m.dev}
Luyz_amigx == ${m.feliz}
Wumpus == <:wumpus_gripado:989629398611296386>**`)
   if(badgeStandard == 'luyz_favorite') {
      if(await get(`/profile/${user.id}/global/badge`) < 1) {
         badge.url = '/home/container/src/img/estrela.png'
                                                       
          write(`/profile/${user.id}/global`, { badge: [badge]})
      } else {
          write(`/profile/${user.id}/global`, { badge: await get(`/profile/${user.id}/global/badge`).then(x => { 
badgePush.url = '/home/container/src/img/estrela.png'
x.push(badgePush)
return x
})})
      }
  message.reply(`${m.si}⟩ **${user.tag}** recebeu a badge **luyz_favorite** ${m.estrela} use L^perfil <@${user.id}> para ver a badge. 😉`)
   }
if(badgeStandard == 'noxi_favorite') {
      if(await get(`/profile/${user.id}/global/badge`) < 1) {
        badge.url = '/home/container/src/img/noxi.png'
          write(`/profile/${user.id}/global`, { badge: [badge]})
      } else {
          badgePush.url = '/home/container/src/img/noxi.png'
          write(`/profile/${user.id}/global`, { badge: await get(`/profile/${user.id}/global/badge`).then(x => { x.push(badgePush)
return x
})})
      }
  message.reply(`${m.si}⟩ **${user.tag}** recebeu a badge **noxi_favorite** ${m.noxi} use L^perfil <@${user.id}> para ver a badge. 😉`)
   }
 if(badgeStandard == 'luyz_moder') {
      if(await get(`/profile/${user.id}/global/badge`) < 1) {
        badge.url = '/home/container/src/img/mod.png'
          write(`/profile/${user.id}/global`, { badge: [badge]})
      } else {
          write(`/profile/${user.id}/global`, { badge: await get(`/profile/${user.id}/global/badge`).then(x => {
badgePush.url = '/home/container/src/img/mod.png'
x.push(badgePush)
return x
})})
      }
  message.reply(`${m.si}⟩ **${user.tag}** recebeu a badge **luyz_moder** ${m.mod} use L^perfil <@${user.id}> para ver a badge. 😉`)
   }
   if(badgeStandard == 'luyz_dev') {
      if(await get(`/profile/${user.id}/global/badge`) < 1) {
          badge.url = '/home/container/src/img/dev.png'
          write(`/profile/${user.id}/global`, { badge: [badge]})
      } else {
          write(`/profile/${user.id}/global`, { badge: await get(`/profile/${user.id}/global/badge`).then(x => { badgePush.url = '/home/container/src/img/dev.png' 
  x.push(badgePush)
return x
})})
      }
  message.reply(`${m.si}⟩ **${user.tag}** recebeu a badge **luyz_dev** ${m.dev} use L^perfil <@${user.id}> para ver a badge. 😉`)
   }
   if(badgeStandard == 'luyz_amigx') {
      if(await get(`/profile/${user.id}/global/badge`) < 1) {
          badge.url = '/home/container/src/img/feliz.png'
          write(`/profile/${user.id}/global`, { badge: [badge]})
      } else {
          write(`/profile/${user.id}/global`, { badge: await get(`/profile/${user.id}/global/badge`).then(x => { 
              badgePush.url = '/home/container/src/img/feliz.png'
              x.push(badgePush)
return x
})})
      }
  message.reply(`${m.si}⟩ **${user.tag}** recebeu a badge **luyz_amigx** ${m.feliz} use L^perfil <@${user.id}> para ver a badge. 😉`)
   }

  if(badgeStandard == 'wumpus') {
      if(await get(`/profile/${user.id}/global/badge`) < 1) {
          badge.url = '/home/container/src/img/wumpus_gripado.png'
          write(`/profile/${user.id}/global`, { badge: [badge]})
      } else {
         badgePush.url = '/home/container/src/img/wumpus_gripado.png'
          write(`/profile/${user.id}/global`, { badge: [await get(`/profile/${user.id}/global/badge`).then(x => { x.push(badgePush)
return x
})]})
      }
  message.reply(`${m.si}⟩ **${user.tag}** recebeu a badge **wumpus** <:wumpus_gripado:989629398611296386> use L^perfil <@${user.id}> para ver a badge. 😉`)
   }
 /*
  if(badgeOption == 'custom') {
     let badgeEmoji = args[2]
     
     let emoji = Discord.Util.parseEmoji(badgeEmoji)
     if(!emoji.id) return message.reply(`${m.no}⟩ \`${args[2]}\`, não é um emoji do seu servidor, as badges customizaveis tem que ser emojis do seu servidor.`)
     let emojiURL = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? 'gif' : 'png'}`
    if(await get(`/profile/${user.id}/global/badge`) < 1) {
        badge.url = emojiURL 
        write(`/profile/${user.id}/global`, { badge: [badge] })
    } else {
   write(`/profile/${user.id}/global`, { badge: await get(`/profile/${user.id}/global/badge`).then(x =>{
       badgePush.url = emojiURL
       x.push(badgePush)
       return x
   })})
    }
  message.reply(`${m.si}⟩ ${message.author}, ${user} ganhou uma custom badge com sucesso \^ω^/`)
  }*/
   }
 if(args[1] == 'deleteAll') {
    if(await get(`/profile/${user.id}/global/badge`) < 1) return message.reply(`${m.no}⟩ ${user} não tem badges 🤨.`)
     write(`/profile/${user.id}/global/badge`, null)
     message.reply(`${m.si}⟩ as badges de ${user} foram deletadas.`)
 }
 if(args[1] == 'delete') {
     
 }
   
}
} 