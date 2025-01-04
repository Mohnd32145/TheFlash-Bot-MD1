const handler = async (m, {conn, usedPrefix, text}) => {
  if (isNaN(text) && !text.match(/@/g)) {
    // هنا بيكون في حالة لو النص مش رقم ومش فيه علامة @
  } else if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  if (!text && !m.quoted) return conn.reply(m.chat, `*⚠️ تحب ادّي الادمن لمين؟* \n*اتاگ شخص معين عشان مش بعرف اخمن :)*`, m);
  if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*⚠️ الرقم اللي دخلته مش صحيح 🤓* \n*اتاكد من الرقم أو اتاگ الشخص @tag*`, m);

  try {
    if (text) {
      var user = number + '@s.whatsapp.net';
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + '@s.whatsapp.net';
    }
  } catch (e) {
    // هنا ممكن تضيف رد أو رسالة خطأ لو في مشكلة
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], 'promote');
    conn.reply(m.chat, `*[ ✅ ] تم الترقيه*`, m);
  }
};
handler.help = ['*593xxx*', '*@usuario*', '*الرد على الرسالة*'].map((v) => 'promote ' + v);
handler.tags = ['group'];
handler.command = /^(ترقية|ترقيه|رول)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;
