const fetch = require('node-fetch');

let handler = async (m, { text, usedPrefix, command }) => {
  // التحقق من وجود النص المطلوب
  if (!text) {
    throw `*TERBO-𝙈𝘿*\n\n*—◉ مثال على الطلبات:*\n*◉ ${usedPrefix + command} بوت اعطني كود بايثون*\n*◉ ${usedPrefix + command} بوت اعطني انمي*`;
  }

  try {
    // تحديث حالة الكتابة
    await conn.sendPresenceUpdate('composing', m.chat); 

    // إجراء طلب لـ API للحصول على الرد بناءً على النص المدخل
    let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`);
    let hasil = await tiores.json();

    // التحقق مما إذا كانت الاستجابة تحتوي على نتيجة
    if (hasil && hasil.result) {
      // إرسال النتيجة للمستخدم
      m.reply(`${hasil.result}`.trim());
    } else {
      // في حال كانت الاستجابة غير صالحة
      throw `*[❗] لم يتم العثور على نتيجة لطلبك، حاول مرة أخرى*`;
    }
  } catch (error) {
    // التعامل مع الأخطاء في حال فشل الـ API أو وجود مشكلة أخرى
    console.error(error);
    throw `*[❗] حدث خطأ أثناء معالجة طلبك، حاول مرة أخرى*`;
  }
};

// تعيين أوامر البوت
handler.command = ['openai', 'شوف', 'ia', 'robot'];
module.exports = handler;