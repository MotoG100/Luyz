import { EmbedBuilder } from 'discord.js'

export default {
  aliases: ['convidar'],
  description: 'me convide ao seu servidor ou entre em meu suporte',
  isOn: true,
  category: 'util',
  run: async (client, message, args) => {
    message.reply({ embeds: [new EmbedBuilder({
      title: 'invite!',
      description: `Que bom que você quer me adicionar ao seu servidor ${message.author.id}! :D, ou você quer entrar no meu suporte? se sim vou deixar o LINK de tudo abaixo até do twitter do meu dono ok?
› [invite :D](https://discord.com/oauth2/authorize?client_id=883062882680569866&permissions=139587956808&scope=applications.commands%20bot)
› [suporte (๑'◡'๑)?](https://discord.gg/wFvfmsVT5b)
› [twitter ʕ·ᴥ·ʔ](https://twitter.com/MotoG6507?t=81LCIuUbMK6UeiV7JRZJdQ&s=09)
`,
color: m.color,
thumbnail: {
    url: client.user.avatarURL()
}
    })]})
  }
}