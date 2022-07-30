import { color } from './../../functions.js'

export default async function (client, node) {
    console.log(color('fg').blue, `[ MOONLINK ]:`, color('fg').yellow, ` o node ${node.host}:${node.port} fechou 🤨`)
   client.channels.cache.get('990352281889304677').send(`${m.bot}⟩ o node **${node.host}:${node.port}** fechou 🤨`)
}