let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true
  conn.reply(m.chat, '*البوت متوقف🦦*', m, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        description: null,
        title: ag,
        body: '𝐂𝐡𝐚𝐭 𝐛𝐚𝐧𝐞𝐚𝐝𝐨',
        previewType: 0,
        thumbnail: imagen4,
      }
    }
  });
}

handler.help = ['حظر_الدردشه']
handler.tags = ['owner']
handler.command = /^بانشات$/i
//handler.botAdmin = true
handler.rowner = true
export default handler
