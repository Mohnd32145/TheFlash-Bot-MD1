let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗] تم حظر هذه الدردشة بنجاح*\n\n*—◉ سوف يتفاعل البوت مع أي أمر حتى تقوم بإلغاء حظر هذه الدردشة*')
}
handler.help = ['✓ ◡̈⃝ ✓│حظر💫🫣']
handler.tags = ['owner']
handler.command = /^2$/i
handler.rowner = true
export default handler
