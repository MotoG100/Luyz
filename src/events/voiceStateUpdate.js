export default async function (client, oldState) {
if (oldState.channel && oldState.channel.members && oldState.channel.members.has(client.user.id) && oldState.channel.members.size == 1) {
  if(!client.moon.players.has(oldState.guild.id)) return;
let player = client.moon.players.get(oldState.guild.id) 
client.channels.cache.get(player.infos.textChannel).send(`${m.no}⟩ ninguém quis escutar **${player.current.title}**, estou saindo e limpando a queue de **${oldState.guild.name}**. Quem quiser escutar outra música **L^play** ô! ;)`)
 player.disconnect();
 player.destroy();

}
}