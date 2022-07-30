export default {
  aliases: ['sobre'],
  description: 'defina sua descrição para seu perfil.',
  usage: 'sobremim',
  isOn: true,
  category: 'perfil',
  run: async (client, message, args) => {
 function isUrlValid(string) {
  let url = false
     try {
       url = new URL(string)
     } catch(_) {
       url = false
     }
    return url
 }
 
  let about = args.join(' ');
  if(!about) return message.reply(`${m.no}⟩ coloque uma descrição por favor ( ͡°ᴥ ͡° ʋ).`);
   if(await isUrlValid(about)) return message.reply(`${m.no}⟩ você não pode colocar url nem menções em sua descrição.`)
    write(`/profile/${message.author.id}/global`, { about: ' ' + about + ' '});
      message.reply(`${m.si}⟩ sua descrição foi alterada para **${about}**, para vê-la use **L^perfil** e no menu clique em **privado** ;)`)
     
  }
}