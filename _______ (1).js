let handler = async (m, { command, text }) => m.reply(`
*اسالني يروحي*

*السؤال:* ${text}
*الاجابة:* ${['ايوا يروحي😂✨️','يمكن','في الاغلب اه','ف الاغلب لا','لا ابدا','مستحيل'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^هل$/i
export default handler
