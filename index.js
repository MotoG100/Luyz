13107133279
import {
  EmbedBuilder,
  Collection,
  GatewayIntentBits,
  Partials,
  Client
} from 'discord.js'
import {
  color,
  writeData,
  getData,
  send,
  time
} from './functions.js'
import config from './config.js'
import fs from 'fs'
import { MoonlinkManager } from 'moonlink.js'
const client = new Client({
  intents: [131071],
  partials: [Partials.Channel, Partials.GuildMessages],
  ws: { properties: { $browser: "Discord iOS"}}
})
client.aliases = new Collection()
client.commands = new Collection()
import { exec } from 'child_process'
exec('--experimental-fetch')

process.on('unhandledRejection', error => {
 const a = (Date.now() / 1000)
    console.log(error.stack)
   try {
    send({ t:'custom', custom: {
     channel: '957414660821360680',
    
     text: `${m.err}⟩ parece que encontrei um erro: \`\`\`js\n${error.stack}\`\`\``
    }
         
})
   } catch (_) {
       console.log(error)
   }
})

client.moon = new MoonlinkManager([{ host: 'painel.synchost.tk', port: 5003, secure: false, password: 'youshallnotpass'}], { shards: 1 }, (guild, sPayload) => { 
     if(!guild) return;
    client.guilds.cache.get(guild).shard.send(JSON.parse(sPayload)) })

for (const file of fs.readdirSync('./src/moon/')) {
    const pull = await import(`./src/moon/${file}`)
    const name = file.split('.')[0]
    console.log(color('fg').green, `[EVENTS-MOON]:`, color('fg').blue, `Loaded ${name}`)
    client.moon.on(name, pull.default.bind(null, client))
}

for (const file of fs.readdirSync('./src/events/')) {
    const pull = await import(`./src/events/${file}`)
    const name = file.split('.')[0]
    console.log(color('fg').green, `[EVENTS]:`, color('fg').blue, `Loaded ${name}`)
    client.on(name, pull.default.bind(null, client))
}

fs.readdir('./src/comandos/', async (err, dir) => {
    if (err) return console.log(color('fg').red, `[HANDLER_COMMANDS] aconteceu um erro ×-×: ${err}`)
    dir.forEach((x) => {
        fs.readdir(`./src/comandos/${x}/`, async (err, files) => {
            if (err) return console.log(err)
            files.forEach(async (file) => {
                if (!file.endsWith('.js')) return
                let props = await import(`./src/comandos/${x}/${file}`)
                let commandName = file.split('.')[0]
                client.commands.set(commandName, props.default)
            })
            console.log(color('fg').green, `[COMMANDS]:`, color('fg').cyan, `Loaded: Comandos da categoria ${x}.`)
            
        })
    })
});

global.write = writeData
global.get = getData
global.m = config.emojis
global.cu = client
global.send = send
global.time = time
global.pedro = 'pedro = toddyn, os dois juntos dão nescau'
client.login(config.token)
