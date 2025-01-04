import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*تحميل الاغاني من يوتوب*`
  await m.reply(wait)
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw '*⚠️ Vídeo no encontrado, prueba con otro título*'
  let { title, thumbnail, timestamp, views, ago, url } = vid

  let captvid = `╭──── 〔 Y O U T U B E 〕 ─⬣
⬡ T: ${title}
⬡ D: ${timestamp}
⬡ V: ${views}
⬡ S: ${ago}
⬡ E: ${url}
╰────────⬣`
  conn.sendButton(m.chat, `╭──── 〔 Y O U T U B E 〕 ─⬣
⬡ T: ${title}
⬡ D: ${timestamp}
⬡ V: ${views}
⬡ S: ${ago}
⬡ E: ${url}
╰────────⬣`, author.trim(), await( await conn.getFile(thumbnail)).data, ['📽 VIDEO', `${usedPrefix}getvid ${url} 360`], false, { quoted: m, 'document': { 'url':'https://wa.me/59176184204' },
'mimetype': global.dpdf,
'fileName': `𝕐𝕠𝕦𝕋𝕦𝕓𝕖 ℙ𝕝𝕒𝕪`,
'fileLength': 666666666666666,
'pageCount': 2023,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `BOBIZ IS HERE ♥...`,
body:author,
sourceUrl: 'http://wa.me/59176184204', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})
  
  //let buttons = [{ buttonText: { displayText: '📽VIDEO' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
 //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

  const yt = await youtubedlv2(url).catch(async _ => await youtubedl(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: author,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
	// return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m})
	// return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^اغاني$/

handler.exp = 0
handler.limit = false

export default handler
