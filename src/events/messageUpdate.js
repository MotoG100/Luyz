const cooldown = new Map()
import config from './../../config.js'
const prefix = config.prefix.replace('l', 'L')
import fs from 'fs'
import { color, time } from './../../functions.js'
 
export default async function (client, old, message) {
try {
if(message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}>`)) return message.reply(`${m.feliz}⟩ Olá **${message.author}** :D, sou Luyz, mas você pode me chamar do que quiser, sou um simples bot de música fácil e simples para você usar no seu servidor ou comunidade do discord. Meu prefixo é "L^" e meu comando de ajuda é "L^help", se quiser saber mais sobre mim use "L^botinfo"`)


if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix)) return;
        if (!message.guild) return;

        let args = message.content.slice(config.prefix.length).trim().split(/ +/g)
        let command = args.shift().toLowerCase()
        if (command.length == 0) return;
    let cmd = client.commands.get(command)  || client.commands.find(c => c.aliases && c.aliases?.includes(command))
    
    if(!client.commands.has(command) && !client.commands.find(c => c.aliases?.includes(command))) return message.reply(`${m.luyz_Think}⟩ é.... Não encontrei o comando **${command}**, verifique sua ortografia, se estiver incluso no help reporte!`)
    
 if(cooldown.has(message.author.id)) {
      return message.reply(`🔥⟩ Epaa! você está executando meus comandos muito rápido... Espere 7 segundos (・–・;)ゞ`)
 } else {
   cooldown.set(message.author.id, 7000)
   setTimeout(() => {
     cooldown.delete(message.author.id)
     }, cooldown.get(message.author.id))
 }
 
    
if(await get(`/blacklist/${message.author.id}/reason`) !== 0) return message.reply(`${m.danger}⟩ você foi banido, veja as informações abaixo para saber o porque do banimento o motivo e se foi um engano.
${m.messagem}⟩ motivo:
\`${await get(`/blacklist/${message.author.id}/reason`)}\`
${m.pessoa}⟩ banido por:
\`${await get(`/blacklist/${message.author.id}/author`)}\`
`)
    
send({
  t: 'custom',
  custom: {
    channel: '957415113864929330',
    t: 'embed',
    embed: {
      title: 'Alguém editou um comando.',
      desc: `
${m.pessoa}⟩ usuário:
tag: \`${message.author.tag}\`
Id: \`${message.author.id}\`
${m.planeta}⟩ guilda:
nome: \`${message.guild.name}\`
Id: \`${message.guild.id}\`
Administrador?: **${message.guild.members.me.permissions.has('ADMINISTRATOR') || 'não ( ͡°ᴥ ͡° ʋ)'}**
${m.relogio}⟩ cooldown: 
\`${cooldown.get(message.author.id)}\`
${m.pasta}⟩ comando: 
nome: \`${command}\`
aliases: \`${cmd.aliases}\`
${m.messagem}⟩ args: 
\`\`\`js\n${args.join(' ')}\`\`\`
`,
   thumbnail: message.author.avatarURL({ dynamic: true }),
    color: m.color,
    footer: {
      text: 'executado',
      icon: message.guild.iconURL(),
    }
  }
}
});

if(!message.member.permissions.has(cmd.perms || [])) return message.reply(`${m.no}⟩ você precisa da permissão \`${cmd.Uperms || []}\` para executar o comando **${command}**.`)

if(!message.guild.members.me.permissions.has(cmd.perms || [])) return message.reply(`${m.no}⟩ eu preciso da permissão \`${cmd.Uperms || []}\` para executar o comando **${command}**.`)

message.channel.sendTyping()
if(!command) return;
if(cmd) {
  if(!cmd) return;
  cmd.run(client, message, args)
}
} catch (e) {
   message.reply(`🤷⟩ parece que não consegui executar o comando corretamente:
\`\`\`js\n${e}\`\`\``)
   console.log('[ COMMANDS ]: não consegui executar o comando corretamente: ' + e)
}
}
