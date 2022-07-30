import { EmbedBuilder } from 'discord.js'

export default {
  aliases: ['ci'],
  description: 'veja a informação ed um comando.',
  usage: 'commandinfo ⟨nome do comando⟩',
  isOn: true,
  category: 'util',
  run: async (client, message, args) => {
  let command = args.join(' ')
  if(!command) command = 'commandinfo'
     if(!client.commands.has(command)) return message.reply(`${m.no}⟩ não encontrei \`${command}\` no meu sistema, verifique sua ortografia uo reporte.`)
    let cmd = client.commands.get(command)
    message.reply({ embeds:[new EmbedBuilder({ 
    title: command,
    thumbnail: {
        url: cmd.category?.toString().replace('util','https://media.discordapp.net/attachments/879328719603380234/996816148437942292/bot.png').replace('dev', 'https://media.discordapp.net/attachments/879328719603380234/996785595630227528/developer.png').replace('profile', 'https://media.discordapp.net/attachments/879328719603380234/996508852948307979/pessoa.png').replace('music','https://media.discordapp.net/attachments/879328719603380234/996508930450653224/music.png')
    },
    color: m.color,
    description: `Atualmente v5.....`,
    fields: [
        { name: `${m.fixado}⟩ nome:`, value:`**${command}**`},
        { name: `${m.circulo}⟩ aliases:`, value:`**${cmd.aliases? cmd.aliases : m.luyz_Think + ' não há aliases pelo visto.'}**`},
        { name: `${m.messagem}⟩ descrição:`, value:`**${cmd.description? cmd.description : m.luyz_Think + ' não há descrição pelo visto.'}**`},
        { name: `${m.chave}⟩ categoria:`, value:`**${cmd.category? cmd.category : m.luyz_Think + ' não há categoria pelo visto.'}**`},
        { name: `${m.mod}⟩ permissões:`, value:`**${cmd.Uperms? cmd.Uperms : m.luyz_Think + ' não contem permissões pelo visto.'}**`}
    ]
})]})
  }
}