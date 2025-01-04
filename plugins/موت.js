let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let name = conn.getName(who);

  // تحميل صورة شخصية للمستخدم أو استخدام صورة افتراضية إذا كانت الصورة غير موجودة
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './mob.jpg');

  // إرسال الصورة مع النص بدون تحديد اسم الملف
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/wasted', {
    avatar: pp, 
  }), '', `*⎔❯╼╾╾╃❖⟪ 🍥 ⟫❖╃╼╾╾❮⎔*
*⌝🪦┇لقد مات┇🪦⌞*
*⎔❯╼╾╾╃❖⟪ 🍥 ⟫❖╃╼╾╾❮⎔*
*♡↵》كان راجل جدع*
*♡↵》المرحوم『 ${name} 』•*
*‏◉ ⊱━─━─━ •♦️• ━─━─━⊰ ◉*
『 بوت تيربو🤺🔥』
*⎔❯╼╾╾╃❖⟪ 🍥 ⟫❖╃╼╾╾❮⎔*
*⧉↵╎「تـوقـيـع ✍🏻」*
~*♯◡̈⃝𝑻𝑼𝑹𝑩𝑶﹝*~`, m);
};

handler.help = ['waste @user'];
handler.tags = ['fun'];
handler.command = ['موت'];

export default handler;