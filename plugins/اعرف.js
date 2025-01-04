import fs from 'fs';
import acrcloud from 'acrcloud';

let acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_
});

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (/audio|video/.test(mime)) {
    // إضافة رد فعل مؤقت (🕐) قبل بدء التعرف
    await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });

    let media = await q.download();
    let ext = mime.split('/')[1];

    fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);

    let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
    let { code, msg } = res.status;

    if (code !== 0) {
      throw msg;
    }

    let { title, artists, album, genres, release_date } = res.metadata.music[0];

    let txt = `
𝚁𝙴𝚂𝚄𝙻𝚃
• 📌 *العنوان*: ${title}
• 👨‍🎤 *الفنان*: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'لم يتم العثور'}
• 💾 *الألبوم*: ${album.name || 'لم يتم العثور'}
• 🌐 *الأنواع الموسيقية*: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'لم يتم العثور'}
• 📆 *تاريخ الإصدار*: ${release_date || 'لم يتم العثور'}
`.trim();

    fs.unlinkSync(`./tmp/${m.sender}.${ext}`);

    // إرسال النص مع نتيجة التعرف
    await m.reply(txt);

    // إضافة رد فعل ناجح (✅️) بعد انتهاء التعرف وإرسال الرسالة
    await conn.sendMessage(m.chat, { react: { text: '✅️', key: m.key } });

  } else {
    throw '*يرجى الرد على مقطع صوتي أو فيديو*';
  }
};

handler.command = /^اعرف|shazam|whatmusic$/i;
export default handler;