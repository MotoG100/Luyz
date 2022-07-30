import { color } from './../../functions.js'

export default async function (client, node, err) {
    console.log(color('fg').blue, `[ MOONLINK ]:`, color('fg').yellow, ` o node ${node.host}:${node.port} conectou com sucesso.`)
   client.channels.cache.get('990352281889304677').send(`${m.err}⟩ o node **${node.host}:${node.port}** emitiu um erro: ` + err)
}