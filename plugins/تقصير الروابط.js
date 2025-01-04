import fetch from 'node-fetch';

const handler = async (m, { conn, args, text }) => {
  if (!text) throw '*[❗] ادخل رابط عايز تقصره*';
  
  const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  
  if (!shortUrl1) throw `*[❗] خطأ، اتأكد إن الرابط اللي دخلته صحيح وجرب تاني*`;

  const done = `*🔗 الرابط اتقصر بنجاح!!*\n\n*الرابط الأصلي:*\n${text}\n*الرابط المقصر:*\n${shortUrl1}`.trim();
  
  m.reply(done);
};

handler.help = ['tinyurl', 'acortar'].map((v) => v + ' <رابط>');
handler.tags = ['tools'];
handler.command = /^(tinyurl|تقصير|acortar|corto)$/i;
handler.fail = null;
handler.register = true;

export default handler;
