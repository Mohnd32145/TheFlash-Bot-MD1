import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
import * as fs from 'fs';

const handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
  try {
    const users = participants.map(u => conn.decodeJid(u.id)); // الحصول على الـJid لكل الأعضاء
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || '';
    const isMedia = /image|video|sticker|audio/.test(mime);

    const htextos = text || '*Zack 3mk*'; // النص الذي سيُرسل
    const more = String.fromCharCode(8206);
    const masss = more.repeat(850); // يمكن أن يكون هذا لتجنب النص الطويل أو لتحديد المسافة

    if (isMedia) {
      let mediax;
      switch (quoted.mtype) {
        case 'imageMessage':
          mediax = await quoted.download?.();
          await conn.sendMessage(m.chat, {
            image: mediax,
            mentions: users,
            caption: htextos,
          }, { quoted: m });
          break;

        case 'videoMessage':
          mediax = await quoted.download?.();
          await conn.sendMessage(m.chat, {
            video: mediax,
            mentions: users,
            mimetype: 'video/mp4',
            caption: htextos,
          }, { quoted: m });
          break;

        case 'audioMessage':
          mediax = await quoted.download?.();
          await conn.sendMessage(m.chat, {
            audio: mediax,
            mentions: users,
            mimetype: 'audio/mpeg',
            fileName: 'Hidetag.mp3',
          }, { quoted: m });
          break;

        case 'stickerMessage':
          mediax = await quoted.download?.();
          await conn.sendMessage(m.chat, {
            sticker: mediax,
            mentions: users,
          }, { quoted: m });
          break;

        default:
          break;
      }
    } else {
      await conn.relayMessage(m.chat, {
        extendedTextMessage: {
          text: `${masss}\n${htextos}\n`,
          contextInfo: {
            mentionedJid: users,
            externalAdReply: {
              thumbnail: 'imagen1',
            }
          }
        }
      }, {});
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

handler.command = /^(منشن_وهمي|مخفي|وهمي)$/i;
handler.group = true;
handler.admin = false;
export default handler;