import {
    Op,
    time,
    card
} from './../../../functions.js'
import Discord from 'discord.js';
import Canvas from 'canvas';

export default {
    aliases: ['profile'],
    description: 'veja seu perfil digital.',
    usage: 'perfil (@user)',
    isOn: true,
    category: 'perfil',
    run: async (client, message, args) => {
        let th = 'https://media.discordapp.net/attachments/990352281889304677/994671018448785478/39_Sem_Titulo_20220707114800.png'
   let cardProfile = card

        let user = await client.users.fetch(message.author.id)
        let av = user.avatarURL({
            dynamic: true
        })
        
        let playlist = 'no playlist'
        await get(`/profile/${user.id}/playlist`).then(x => playlist = x ? x : 'no playlist');
        let embeds = new Op({
            t: 'embed',
            title: 'Selecione a opção.',
            desc: `bem vindo(a) **${user.tag}** à seu perfil digital, todos os seus dados estão salvos aqui, não dados como IP, senhas, contas, entre outras coisas pessoais. 

${m.planeta}⟩ **Perfil global**
${m.pessoa}⟩ **Perfil pessoal (privado)**`,
            thumb: user.avatarURL({
                dynamic: true
            }),
            color: m.color,
            footer: {
                text: client.user.tag + ' todos os direitos reservados.'
            }
        })

        let embed = new Op({
            t: 'embed',
            title: user.tag + ' beta v1',
            desc: `
**${user.tag}** esté é seu perfil digital pessoal, irei lhe mostrar algumas informações que você deixou eu coletar e guardar no fundo do meu coração :)

${m.lixeira}⟩ **deletar todos os dados**
${m.discord}⟩ **voltar ao menu principal**
${m.music}⟩ **playlist**
${m.feliz}⟩ **premium**
${m.estrela}⟩ **XP do usuário**`,
            color: m.color,
            footer: {
                text: 'executed by ' + user.tag
            },
            thumb: user.avatarURL({
                dynamic: true
            }),
            image: {
                url: 'https://media.discordapp.net/attachments/957414660821360680/997670514208296960/39_Sem_Titulo_20220715220405.png'
            }
        });

        let row = new Op({
                t: 'menu',
                customId: 'row',
                place: `click here ${user.tag}.`,
                options: [{
                        label: 'Desconectar usuário',
                        description: 'delete your data salved by me.',
                        emoji: m.lixeira,
                        value: '0'
                    },
                    {
                        label: 'Main',
                        description: 'return to main menu',
                        emoji: m.discord,
                        value: '1'
                    },
                    {
                        label: 'Playlist',
                        description: 'view your Favorite musics playlist.',
                        emoji: m.music,
                        value: '2'
                    },
                    {
                        label: 'Premium',
                        description: 'view your Premium account.',
                        emoji: m.feliz,
                        value: '3'
                    },
                    {
                        label: 'XP',
                        description: 'view your XP in your account, maybe your pay a Premium.',
                        emoji: m.estrela,
                        value: '4'
                    }
                ]
            }),
            row2 = new Op({
                t: 'menu',
                place: 'selecione aqui.',
                customId: 'main',
                options: [{
                        label: 'Global',
                        description: 'veja seu perfil global',
                        emoji: m.planeta,
                        value: 'g'
                    },
                    {
                        label: 'Privado',
                        description: 'veja seu perfil pessoal.',
                        emoji: m.pessoa,
                        value: 'p'
                    }
                ]
            })
     if(args[0]) {
    user = await client.users.fetch(args[0].toString().replace(/\D/g, ""))
    
    
    const attachments = new Discord.AttachmentBuilder(await cardProfile(user))
    
      return message.reply({ embeds: [new Op({
          t:'embed',
          title: 'Perfil global (' + user.tag + ')',
          image: {
              
url: 'attachment://file.jpg'
          },
          color: m.color,
     })],
     files: [attachments]
    })
     } 
        message.reply({
            embeds: [embeds],
            components: [row2]
        }).then(async (msg) => {
            let filter1 = (interaction) => interaction.isSelectMenu()
            const collector = msg.createMessageComponentCollector({
                filter1,
                time: 150000
            });

            collector.on('collect', async (collected) => {
           if(message.author.id !== collected.user.id) return msg.reply({ ephemeral: true, content: `${m.no}⟩ <@${collected.user.id}> esta interação não é sua, não mexa ( ͡°ᴥ ͡° ʋ)`})
                let value = collected.values[0]

                collected.deferUpdate()

                if (value == 'p') {
              
                  msg.edit({ embeds: [embed], files: null, components: [row] })
                
                }
                if (value == '0') {
                    msg.edit({
                        embeds: [new Op({
                            t: 'embed',
                            title: 'Desconectar usuário (' + user.tag + ')',
                            desc: `**${user.tag}** 
por enquanto, essa função não está disponível....`,
                            color: m.color,
                            footer: {
                                text: ':('
                            },
                            thumb: av
                        })],
                        components: [row],
                        files: null
                    })

                }
                if (value == '1') {
                    msg.edit({
                        embeds: [embeds],
                        components: [row2],
                        files: null
                    })
                }
                if (value == '2') {
                    if (playlist == 'no playlist') return msg.edit({
                        embeds: [new Op({t:'embed', desc: m.no + '⟩ Que tal você escutar algumas músicas e adicioná-las a playlist?'})]
                    })
                    let i = 1;
                    let q = playlist.map(x => i++ + `⟩ **[` + x.title + `](` + x.url + `)** • \`` + time('video', x.duration) + `\``).join('\n')
                    msg.edit({
                        embeds: [new Op({
                            t: 'embed',
                            author: {
                                name: `Playlist • (${user.tag})`,
                                u: av
                            },
                            desc: `**${user.tag}**, está é sua playlist, para adicionar alguma música aqui siga isso:
- Quando você dar play, na embed irá aparecer **${m.music} Adicionar a playlist**
- Ao clicar vou adicionar essa música a sua playlist, se não ouver uma, irei criar e esta música estará marcada como "Música favorita."

Playlist **${message.guild.name}**:
${m.messagem}⟩ Quantidade de músicas: **${playlist.length}**
${m.coroa}⟩ música favorita:
**${playlist[0].title}** • \`${time('video', playlist[0].duration)}\`

${q}`,
                            color: m.color,
                            thumb: message.guild.iconURL({
                                dynamic: true
                            })
                        })],
                        components: [row],
                        files: null
                    })
                }
                if (value == '3') {
                    msg.edit({
                        embeds: [new Op({
                            t:'embed',
                            title:`premium (${user.tag})`,
                            desc: `por enquanto, essa função não está disponível....`, 
                            color: m.color,
                            footer: {
                                text: 'premium 👑'
                            }
                        })],
                        components: [row2],
                        files: null
                    })
                }
                if (value == '4') {
                    msg.edit({
                        embeds: [new Op({
                            t:'embed',
                            title:'XP acumulado (' + user.tag + ')',
                            desc: `**${user.tag}** parece que você tem **${await get(`/profile/${message.author.id}/XP`)}** De __**XP**__ em sua conta, em breve você poderá usar ele pra comprar premium 〜(꒪꒳꒪)〜, para ganhar __**XP**__ você precisa escutar músicas.
`,
                            color: m.color,
                            thumb: user.avatarURL({ dynamic: true}),
                            footer: {
                                text: 'XP DE ' + user.tag
                            }
                        })],
                        components: [row],
                        files: null
                    })
                }
       if(value=='g') {
           
    const attachment = new Discord.AttachmentBuilder(await cardProfile(user))
          let embed = new Discord.EmbedBuilder()
          .setTitle('Perfil global (' + user.tag + ')')
          .setColor('#000FFFF')
          .setImage('attachment://file.jpg')
           msg.edit({
               embeds: [embed],
               files: [attachment],
               components: []
           })
       }
            });
        });
    }
}