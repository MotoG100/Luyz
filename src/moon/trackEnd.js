import { Op, time } from './../../functions.js'

export default async function (client, player, track) {
    client.channels.cache.get(player.textChannel).send({
        embeds: [new Op({
            t:'embed',
            title: track.title + ' Terminou.',
            desc: `${m.music}⟩ a música **${track.title}** • \`${time('video', track.duration)}\` terminou, volte a escutar comigo usando **L^play**, até mais ;)`,
            color: m.color,
            thumb: track.thumbnail
            
        })]
    })
}