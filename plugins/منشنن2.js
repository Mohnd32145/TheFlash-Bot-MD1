let handler = async(m, { isOwner, groupMetadata, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `الرساله◡̈⃝💬❯  : ${pesan}`
let teks = `*┌────﹝*⺀ منشن جماعي 🗣️⺀*﹞*\nاسم البار◡̈⃝🧚‍♀️❯  : *${groupMetadata.subject}*\n${oi}\nالاعضاء◡̈⃝🗿❯ \n`
for (let mem of participants) {
teks += `❐╎◡̈⃝⚡️❯ @${mem.id.split('@')[0]}\n`}
teks += `*𝑻𝑼𝑹𝑩𝑶﹝⚡️﹞𝑩𝑶𝑻*\n`
teks += `*└──────────────────⊷*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|منشن|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler

