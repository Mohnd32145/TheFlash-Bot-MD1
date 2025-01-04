import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*بتبحث عن ايه يحب🤔 حط  لينك الفديو ال انت عاوز تحمله*'
await m.reply(`*⏳ انتظر لحظة ⏳*`)
try {
let qu = args[1] || '480'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
let cap = `*╭┄〔 *${wm}* 〕┄⊱-\n┆📥 يوتيوب 📥*\n┆——————«•»——————\n┆❏ *العنوان:* ${ttl}\n┆❏ *الحجم:* ${size}\n╰─────────────────`.trim()
await await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `*╭┄〔 *${wm}* 〕┄⊱-\n┆📥 يوتيوب 📥*\n┆——————«•»——————\n┆❏ *العنوان:*  ${n}\n┆❏ *الحجم:* ${n3}\n╰─────────────────—`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m})
} catch {
}
}}
handler.command = /^ytmp4doc|ytvdoc|ytv.2|تحميل-ملف$/i
handler.limit = 4
export default handler
