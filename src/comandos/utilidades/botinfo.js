import { 
  time, Op
} from './../../../functions.js'

export default {
  aliases: ['bi'],
  description: 'veja minhas informações.',
  category: 'util',
  isOn: true,
  run: async (client, message, args) => {
  let Mused = process.memoryUsage().heapUsed / 1024 / 1024
  let a = process.memoryUsage().heapTotal / 1024 / 1024
  let Cused = process.cpuUsage().user / 1024 / 1024
  let Cu = process.cpuUsage().system / 1024 / 1024
 let embed = new Op({
     t:'embed',
     title: `${client.user.tag} :)`,
     desc: `
Olá **<@${message.author.id}>** eu sou **${client.user.tag}**, sou um bot de música para você usar na sua comunidade ou servidor, o meu sonho é ser o melhor bot BR 🇧🇷 de música do discord╰(^ω^)╯.

${m.bot}⟩ memória: 
｢Memória usada (MB): **${Math.round(Mused * 100) / 100} MB**
｢Memória disponível (MB): **${Math.round(a * 100) / 100}MB**
\n${m.system}⟩ cpu:
｢Cpu usada: **${Math.round(Cused * 100) / 100}%**
\n\n${m.luyz_Think}⟩ status:
｢Servidores: **${client.guilds.cache.size}**
｢Usuários: **${client.users.cache.size}**
｢Total de Comandos: **${client.commands.size}**
｢Total de canais: **${client.channels.cache.size}**
｢Tempo de atividade: **${time('normal', client.uptime)}**`,
     color:m.color,
     thumb: client.user.avatarURL({ dynamic: true }),
     image: 'https://media.discordapp.net/attachments/957414660821360680/999397316568027186/Luyz_banner.png'
 })
  message.reply({ embeds:[embed], components: [new Op({
      t:'button',
      style: 'LINK',
      emoji: m.feliz,
      label: 'me adicione',
      customID: ';)',
      url: `https://discord.com/oauth2/authorize?client_id=883062882680569866&permissions=139587956808&scope=bot%20applications.commands`
  }), new Op({
      t:'button',
      style: 'LINK',
      emoji: m.planeta,
      label: 'meu Suporte',
      customID: ':)',
      url: 'https://discord.gg/wFvfmsVT5b'
  })]
                })
  }
}