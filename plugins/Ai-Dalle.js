import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
    if (!text) throw `Teksnya`
	let url = `https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${text}`
	conn.sendFile(m.chat, await (await fetch(url)).buffer(), url, null)
}
handler.command = /^(dalle|aidalle|openaiimage)$/i
handler.tags = ['ai', 'convert']
handler.help = ['openaiimage','dalle']
handler.limit = true
handler.premium = false
export default handler
