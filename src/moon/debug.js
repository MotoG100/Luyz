import { color } from './../../functions.js'

export default async function (client, data) {
    console.log(color('fg').blue, `[ MOONLINK-DEBUG ]:`, color('fg').yellow, data)
   client.channels.cache.get('990352281889304677').send(`${m.messagem}⟩ DEBUG: ` + data)
}