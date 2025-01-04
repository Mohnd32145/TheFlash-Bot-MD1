const handler = async (m, { conn, args }) => {
  const group = m.chat;

  try {
    const inviteCode = await conn.groupInviteCode(group);
    const link = `https://chat.whatsapp.com/${inviteCode}`;

    await conn.reply(
      m.chat,
      link,
      m,
      {
        contextInfo: {
          externalAdReply: {
            mediaUrl: null,
            mediaType: 1,
            description: null,
            title: 'لينك الجروب',
            body: '𝐓𝐄𝐑𝐁𝐎 𝐵𝛩𝑇',
            previewType: 0,
          },
        },
      }
    );
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, "حدث خطأ أثناء استخراج رابط الجروب.", m);
  }
};

handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك|link$/i;
handler.group = true;
handler.botAdmin = true;

export default handler;