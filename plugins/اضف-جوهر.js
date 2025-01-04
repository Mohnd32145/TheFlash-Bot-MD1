//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ منشن المستخدم'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ أدخل المبلغ *الحد* الذي تريد إضافته'
    if (isNaN(txt)) throw '🔢 مجرد ارقام'
    let dmt = parseInt(txt)
    let diamond = dmt

    if (diamond < 1) throw '✳️ الحد الأدنى  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 
إضافة الماس*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ 
يحصل \n\n *+${dmt}* الحد`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi', 'ضيف جواهر'] 
handler.rowner = true

export default handler

