import { EmbedBuilder } from 'discord.js'
import { send } from './../../functions.js'

export default async function (client, guild) {
  let u, g
u = client.users.cache.get(`${guild.ownerId}`)
g = client.guilds.cache.get(`${guild.id}`)
if(await get(`blacklist/${u.id}/reason`) == 0) {

  return;

} else {

  u.send(`${m.danger}⟩ você foi blacklistado, sendo assim, não pode me adicionar em nenhum servidor.`)

  g.leave()

  console.log(color('fg').green, '[ SYSTEM ]:', color('fg').magenta, `o usuário ${u.tag} está blacklistado então eu sai do servidor ${g.name}`)

}
u.send({ content: `${m.bot}⟩ obrigado por me adicionar **${u.tag}** :D 
Meu prefixo é L^ meu comando de ajuda é L^ajuda e se você tiver visto minha descrição sabe que sou um bot de música! Use L^play para tocar sua música :3 fui criado por 𝙼𝚘𝚝𝚘𝙶.𝚓𝚜 se quiser entrar em contato com ele, precisa de ajuda? Suporte? Reportar bug? Denunciar um usuário infrator? Dar uma sugestão? Ok chega -_-, entre em meu suporte (link abaixo) obrigado por ler esse texto e me adicionar em **${guild.name}** continue sendo uma pessoa incrível e maravilhosa como você sempre foi **${u.tag}**`,
  embeds: [new EmbedBuilder().setDescription('[Suporte](https://discord.gg/wFvfmsVT5b) - [invite](https://discord.com/oauth2/authorize?client_id=883062882680569866&permissions=139587956808&scope=applications.commands%20bot)').setColor('#0FFFB')]
})

send({ t:'custom', custom: {
  t: 'embed',
  channel: '957414660821360680',
  embed: {
    title: 'nova guilda!',
    desc: `${m.estrela}⟩ fui adicionado à uma nova guilda chamada **${g.name}⟨${g.id}⟩** por **${u.tag}⟨${u.id}⟩**, atualmente tenho **${client.guilds.cache.size}** servidores e **${client.users.cache.size}** usuários!`,
    color: "#0FFFB",
    thumbnail: client.user.avatarURL()
  }
}
})
}
