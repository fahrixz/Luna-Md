let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*Acces Denied*`
const templateButtons = [
    {index: 1, urlButton: {displayText: '404 NOT FOUND', url: ''}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['myyt'] 
 handler.tags = ['info'] 
 handler.command = /^(myyt)$/i 
  
 export default handler
