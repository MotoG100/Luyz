const c = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
    },
    bG: {
     black: "\x1b[40m",
     red: "\x1b[101m",
     green: "\x1b[102m",
     yellow: "\x1b[103m",
     blue: "\x1b[104m",
     magenta: "\x1b[105m",
     cyan: "\x1b[106m",
     white: "\x1b[107m"
},
   luyz: {
      error: "\x1b[101m",
      sucess: "\x1b[102m"
}
    }
import Canvas, { registerFont } from 'canvas'
import {
   ButtonBuilder,
   ActionRowBuilder,
   EmbedBuilder,
   SelectMenuBuilder,
   ButtonStyle
} from 'discord.js'
import Discord from 'discord.js'
import fetch from 'node-fetch'
const firebaseURL = 'https://luyz-ce361-default-rtdb.firebaseio.com'

export function color(type) {
    
  if(!type) {
    throw new TypeError(`[ UTILS ]: [ COLORS ]: put a type!`)
  }
if(type == 'fg') {
 return c.fg
}
if(type == 'bg') {
  return c.bg
}
if(type == 'luyz') {
  return c.luyz
}
}

export function Op(op) {
  if(!op.t) {
    throw new TypeError(`[ LUYZ ] que tipo de op é desejado?`)
  }
  
if(op.t === 'embed') {
 const a = new EmbedBuilder({
    title: op.title,
    description: op.desc,
    footer: {
      text: op.footer?.text,
      iconURL: op.footer?.icon
    },
    image: {
      url: op.image?.url
    },
    author: {
      url: op.author?.url,
      name: op.author?.name
    },
    thumbnail: {
      url: op.thumb
    },
    color: op.color,
 })
return a
}

if(op.t === 'menu') {
  const row = new ActionRowBuilder().addComponents(new SelectMenuBuilder().setCustomId(op.customId).setPlaceholder(op.place).addOptions(
    op.options
      ))
  return row
}
if(op.t == 'button') {
    let button = [{
       primary: ButtonStyle.primary,
       gray: ButtonStyle.secondary,
       sucess: ButtonStyle.sucess,
       danger: ButtonStyle.danger,
       
    }]
    
   if(op.style == 'PRIMARY') op.style = ButtonStyle.Primary
   if(op.style == 'GRAY') op.style = ButtonStyle.Secondary
   if(op.style == 'SUCESS') op.style = ButtonStyle.Sucess
   if(op.style == 'DANGER') op.style = ButtonStyle.Danger
   if(op.style == 'LINK') op.style = ButtonStyle.Link
    console.log(op.style)
    let buttonsRow = null
  if(op.style == '5') {
   buttonsRow = new ActionRowBuilder().addComponents(new ButtonBuilder().setLabel(op.label).setStyle(op.style).setDisabled(op.disabled? true : false).setEmoji(op.emoji? op.emoji : m.err).setURL(op?.url))
  } else {
buttonsRow = new ActionRowBuilder().addComponents(new ButtonBuilder().setLabel(op.label).setStyle(op.style).setDisabled(op.disabled? true : false).setEmoji(op.emoji? op.emoji : m.err).setCustomId(op.customID))
                                                  }
    return buttonsRow 
}
}


export function time(type, ms) {
  if(type == 'video') {
    var h, m, s; 
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60); 
  m = m % 60;
  if(s < 10) s = `0${s}`
  if(m < 10) m = `0${m}`
  if(h < 10) h = `0${h}`
  if(h == '00') {
return m + ':' + s
  } else {
   return h + ':' + m + ':' + s
  }
  }
 if(type == 'normal') {
   var d, h, m, s; 
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60); 
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24 
  
return d + ' dias, ' + h + ' horas, ' + m + ' minutos e ' + s + ' segundos.'
 }
}

export function send(i) {
let ch = cu.channels.cache.get(`957414660821360680`)

 
  if(!i) {
    ch.send(`${i}`)
  }
 if(i.t == 'embed') {
   ch.send({ embeds: [i.embed]})
 }
 if(i.t == 'custom') {
 ch = cu.channels.cache.get(i.custom.channel)
  if(!i.custom.t) {
    ch.send(`${i.custom.text}`)
  }
   if(i.custom.t == 'embed') {
     return ch.send({ embeds: [new EmbedBuilder({ 
 title: i.custom.embed.title,
 description: i.custom.embed.desc,
 footer: {
   text: i.custom.embed.footer?.text,
   iconURL: i.custom.embed.footer?.icon
},
 color: i.custom.embed.color,
 thumbnail: {
   url: i.custom.embed.thumbnail
 }, 
  image: {
      url: i.custom.embed.image
  }
     })
]
       
     })
 }
}
}

export async function hasMusicRealzin(x, track) {
   let isMusic = false
   if(!x && !track) throw new ReferenceError(`[ FUNCTIONS ]: paramater is empty`)
   x.map(o => {
      if(o.title === track.title) isMusic = true
      else isMusic = false
   })
  return isMusic
}

export async function writeData(x, y) {
    let method = y !== null ? 'PATCH' : 'DELETE'
    try {
   console.log(`[ Firebase ] write (${x}) : (${y})`)
   fetch(`${firebaseURL}/${encodeURI(x)}.json`, {
      body: JSON.stringify(y),
      method
      }).then((err) => {
        if (err.error) console.log(err.error)
      })
    } catch(e) {
console.log(e)
    }
  }
export async function getData(x) {
 return new Promise((promise) => {
        fetch(`${firebaseURL}/${encodeURI(x)}.json`).then(data => data.json()).then(data => {
            if (data && typeof data === 'string' && isNaN(Number(data))) promise(data.slice(1, -1))
            else if (data === 'null') promise(null)
             else if (!isNaN(Number(data))) promise(Number(data))
             
              else promise(data)
           
            })
        
            })
    }

  function applyLineBreaks(string, maxCharLengthPerLine) {
  const split = string.toString().split(' ')
  const chunks = []
  for (var i=0, j=0; i < split.length; i++) {
    if ((chunks[j] + split[i]).length > maxCharLengthPerLine) j++
    chunks[j] = (chunks[j] || '') + split[i] + ' '
  }
  return chunks.map(c => c.trim()).join('\n')
}

function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}

export async function card(user) {
   registerFont('fonte.ttf', { family: 'Fonte' })
    const canvas = Canvas.createCanvas(4096, 2096)
    
    const ctx = canvas.getContext('2d')
   let backgraund = await Canvas.loadImage('./src/img/background.png')
   let avatar = await Canvas.loadImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=4096`);
    ctx.drawImage(avatar, 181, 147, 989, 989);
   ctx.drawImage(backgraund, 0, 0, 4096, 2096);
    
    if(await get(`/profile/${user.id}/global/badge`) < 1) {
    if(user.id !== '882757043142950974' && !user.bot) {
       const badge = await Canvas.loadImage('/home/container/src/img/pessoa.png')
       ctx.drawImage(badge, 3840, 509, 146, 146)
    }
   if(user.bot) {
       const badge = await Canvas.loadImage('/home/container/src/img/bot.png')
       ctx.drawImage(badge, 3840, 509, 146, 146)
   }
    } else {
        get(`/profile/${user.id}/global/badge`).then(x => {
         const map = x.map(async(o) => {
         const badge = await Canvas.loadImage(o.url)
         ctx.drawImage(badge, o.position, 509, 146, 146)
            })
         Promise.all(map)
        })
    }
    
   let XP = await get(`/profile/${user.id}/global/xp`)
   if(XP > 1000) {
     XP = `${abbreviateNumber(await get(`/profile/${user.id}/global/xp`))}`
   }
   
     let sobre = await get(`/profile/${user.id}/global/about`)
   ctx.fillStyle = '#ffffff';
      ctx.font = '210px Fonte' 
      ctx.fillText(user.username, 1380, 360)
   ctx.fillStyle = '#008080ff';
      ctx.font = '166px Fonte'
      ctx.fillText(XP, 1780, 630)
      ctx.font = '110px Fonte'
ctx.fillText(applyLineBreaks(sobre? sobre : 'Sou um simples usuário :D, você sabia que pra definir seu sobre você pode usar L^sobre?', 70), 170, 1550)
    
    return canvas.toBuffer()
}