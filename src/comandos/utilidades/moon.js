import { EmbedBuilder } from 'discord.js'

export default {
  aliases: ['moonlink'],
  description: 'imagine um bot de música...',
  isOn: true,
  
  category: 'util',
  
  run: async (client, message, args) => {
message.reply({ embeds:[new MessageEmbed().setTitle('**MoonLink.JS**').setThumbnail('https://moonlinkjs.tk/logoC').setDescription(`
Conheça a MoonLink! 

Uma simples npm js para você criar seu bot de música para o discord, leve, rápida e fácil de aprender, tudo para que você crie esu bot de música para o discord com a melhor experiência tanto sem os lags da lavalink quanto a espertesa e rapidez da moonlink. Deseja saber mais? Clique [aqui](https://npmjs.org/moonlink.js) ;)`).setColor('#5165f6')]})
  }
}