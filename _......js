let handler = async (m, { conn }) => {
    if (!(m.chat in global.db.data.chats)) return m.reply('*الشات ده مش مسجل في قاعدة البيانات!*')
    let chat = global.db.data.chats[m.chat]
    if (!chat.isBanned) return m.reply('*الشات ده مش متحظر!!*')
    chat.isBanned = false
    conn.reply(m.chat,  '*البوت شغال 🚀*', m, {
        contextInfo: { 
            externalAdReply: { 
                mediaUrl: null, 
                mediaType: 1, 
                description: null, 
                title: ag, 
                body: 'الشات اتفك عنه الحظر', 
                previewType: 0, 
                thumbnail: imagen4, 
            }
        }
    }) 
}
handler.command = /^بانشاتفك$/i
//handler.botAdmin = true
handler.rowner = true

export default handler
