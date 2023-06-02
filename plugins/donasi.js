let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://i.ibb.co/xqDTrnH/qris.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 6285880029379
┃Pulsa: 6285880029379
┃Pulsa: Scan qris di atas
┃Gopay: Scan qris di atas
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/nansofficial
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler