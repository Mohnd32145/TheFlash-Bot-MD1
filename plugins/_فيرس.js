let timeout = 120000;
let minimumvirus = 2;

import { createRequire } from 'module';
import fetch from 'node-fetch';

const require = createRequire(import.meta.url);
const fs = require('fs');

let فيروسات = {
  isActive: false,
  players: {},
  حقن: 5,
  اصابه: 5
};

let توثيق = { 
  "key": { 
    "participants": "0@s.whatsapp.net", 
    "remoteJid": "status@broadcast", 
    "fromMe": false, 
    "id": "Halo" 
  }, 
  "message": { 
    "contactMessage": { 
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
    }
  }, 
  "participant": "0@s.whatsapp.net" 
};

// يتم تحديد الأساسيات
let handler = async (m, { conn, command, text }) => {
  let args = text.trim().split(/ +/).slice(1);
  
  switch (command) {
    case 'فيروس':
      if (!فيروسات.isActive) {
        فيروسات.isActive = true;
        فيروسات.players = {};
        m.reply(`تم بدء اللعبة! اكتب .اصابه للإصابة، .حقنه للعلاج، .نتيجه لعرض النتائج.`);
      } else {
        m.reply('اللعبة قيد التشغيل حالياً.');
      }
      break;

    case 'اصابه':
      if (!فيروسات.isActive) return m.reply('لا يوجد لعبة قيد التشغيل حالياً.');
      let newPlayer = m.quoted ? m.quoted.sender.split('@')[0] : null;
      if (newPlayer && !فيروسات.players[newPlayer]) {
        فيروسات.players[newPlayer] = فيروسات.اصابه;
        m.reply(`تم إصابة @${newPlayer} بـ ${فيروسات.اصابه} فيروسات.`);
      } else {
        m.reply('منشن لاعب أو رد على رسالته للإصابة.');
      }
      break;

    case 'حقنه':
      if (!فيروسات.isActive) return m.reply('لا يوجد لعبة قيد التشغيل حالياً.');
      let لاعب = m.quoted ? m.quoted.sender.split('@')[0] : null;
      if (لاعب && فيروسات.players[لاعب]) {
        فيروسات.players[لاعب]--;
        if (فيروسات.players[لاعب] <= 0) {
          delete فيروسات.players[لاعب];
          m.reply(`تم شفاء @${لاعب} تمامًا!`);
        } else {
          m.reply(`تم تقليل فيروس @${لاعب}. المتبقي: ${فيروسات.players[لاعب]}.`);
        }
      } else {
        m.reply('منشن لاعب أو رد على رسالته للعلاج.');
      }
      break;

    case 'نتيجه':
      if (!فيروسات.isActive) return m.reply('اللعبة لم تبدأ بعد.');
      let message = '*لوحة النتائج:*\n\n';
      for (let player in فيروسات.players) {
        let نتيجه = '👾'.repeat(فيروسات.players[player]);
        message += `*@${player}* - ${نتيجه}\n`;
      }
      m.reply(message || 'لا يوجد مشاركون حالياً.');
      break;

    default:
      m.reply('أمر غير معروف.');
  }
};

handler.command = /^(فيروس|اصابه|نتيجه|حقنه)$/i;
handler.admin = true;
handler.botAdmin = true;
handler.owner = true;

export default handler;