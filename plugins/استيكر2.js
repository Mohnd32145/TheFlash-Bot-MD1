import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let stick = args.join(" ").split("|");
  let f = stick[0] !== "" ? stick[0] : packname;
  let g = typeof stick[1] !== "undefined" ? stick[1] : author;
  try { 	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('*الحد الأقصى 10 ثواني للفيديو*')
      let img = await q.download?.()
      if (!img) return conn.reply(m.chat, ` *فين الصورة؟🧚🏼‍♂️ رد على صورة، فيديو، أو جيف عشان تعمل الاستيكر*\nاستخدم: *${usedPrefix + command}*`, m, {contextInfo: {externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
      let out
      try {
        stiker = await sticker(img, false, f, g)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, f, g)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('*رابط غير صحيح*')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply: { showAdAttribution: false, title: wm, body: '', mediaType: 2, sourceUrl: [nna, nn, md, yt].getRandom(), thumbnail: imagen4 } } }, { quoted: m })
    else return conn.reply(m.chat, `*فين الصورة؟ 🧚🏼‍♂️ رد على صورة، فيديو، أو جيف عشان تعمل الاستيكر*\nاستخدم: *${usedPrefix + command}*`, m, {contextInfo: {externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
  }
}
handler.help = ['استيكر']
handler.tags = ['استيكر']
handler.command = ['ستك', 'استيكر2'] 
handler.register = true
export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
                        }
