import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
import { EmojiAPI } from 'emoji-api' 
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
let er = `
*[❗]الاستخدام الصحيح للأمر*
*◉ ${usedPrefix + command} <tipo> <emoji>*

*—◉ مثال:*
*◉ ${usedPrefix + command}* فيس 😎

*—◉ اختصارات* 

*◉ واتس = واتساب* 
*◉ ابل = ابل*
*◉ فيس = فيسبوك*
*◉ انستا = انستغرام*
*◉ جو = جوجب*
*◉ هتك = اتش-تي-سي*
*◉ ماي = مايكروسفت*
*◉ فير = فيرفكس*
*◉ موجي = اوبن-موجي*
*◉ نقط = بكسل*
*◉ سام = سامسونج*
*◉ تويت = تويتر*

*—◉ فقط استخدم رمزًا تعبيريًا واحترم المساحات*
*—◉ 𝑩𝒚 : 𝑨𝒃𝒅𝒆𝒍𝒓𝒂𝒉𝒎𝒂𝒏 𝑬𝒍𝒔𝒉𝒂𝒎𝒉𝒐𝒖𝒕 ( 𝑺𝒉𝒂𝒅𝒐𝒘 )*`
  
if (!args[0]) throw er
let template = (args[0] || '').toLowerCase()
if (!args[1]) throw er
if (/emo/i.test(command)) {
try {
switch (template) {
case 'ابل':
case 'تفاحه':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[0].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'فيسبوك':
case 'فيس':
case 'فيس بوك':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[6].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'جوجل':
case 'جو':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[1].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'اتش-تي-سي':
case 'هتك':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[12].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'انستا':
case 'ig':
case 'انستغرام':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[11].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'مايكروسفت':
case 'ma':
case 'ماي':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[3].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'فيرفكس':
case 'فير':
case 'موزيلا':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[13].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'openmoji':
case 'omoji':
case 'موجي':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[8].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'بكسل':
case 'نقط':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[7].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'سامسونج':
case 'سام':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[2].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'تويتر':
case 'تويت':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[5].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'واتساب':
case 'واتس':
case 'wh':
case 'wha':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(null, emoji.images[4].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
}
} catch (e) {
throw er
}}}
handler.help = ['emoji <tipo> <emoji>']
handler.tags = ['sticker'] 
handler.command = ['emoji', 'smoji', 'ايموجي2']
export default handler
