let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  // التحقق من وجود النص المدخل
  if (!text) throw `*من فضلك اكتب الرقم الذي تريد إرسال الدعوة له!*\nمثال:\n${usedPrefix + command} 201554582851`;

  // التحقق من عدم وجود علامة "+" في الرقم
  if (text.includes('+')) throw '*لا تضع علامة "+" في الرقم*';

  // التحقق من صحة الرقم (إذا كان رقمًا فقط)
  if (isNaN(text)) throw '*الرجاء إدخال رقم صالح بدون مسافات أو حروف!*';

  let group = m.chat;
  let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);

  // إرسال دعوة للشخص
  await conn.reply(text + '@s.whatsapp.net', `*دعوة لدخول المجموعة!*\n*الرابط:* ${link}`, m, { mentions: [m.sender] });

  // إعلام المستخدم بأن الدعوة تم إرسالها
  m.reply(`*تم إرسال رابط الدعوة بنجاح!*\nيمكنك الآن دعوة الشخص باستخدام الرابط.`);
};

handler.help = ['invite <20xxx>'];
handler.tags = ['group'];
handler.command = ['دعوة', 'دعوه'];
handler.group = true;
handler.admin = false; // يمكن للمشرفين العاديين استخدام الأمر
handler.botAdmin = true;

export default handler;