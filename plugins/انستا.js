import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import { instagram } from '@xct007/frieren-scraper';
import { instagramdl } from '@bochilteam/scraper';
import instagramDl from '@sasmeee/igdl';
import { fileTypeFromBuffer } from 'file-type';

const handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0] || !/^https?:\/\/(www\.)?instagram\.com\/\S+$/i.test(args[0])) {
    return conn.reply(
      m.chat, 
      `🧚🏼‍♂️ *يرجى إدخال رابط فيديو إنستجرام صالح مع الأمر*.\n\nمثال: *${usedPrefix + command}* https://www.instagram.com/p/xxxxx`, 
      m
    );
  }

  await m.react('⌛');

  try {
    const img = await instagramDl(args[0]);
    for (let item of img) {
      const bufferInfo = await getBuffer(item.download_link);
      if (bufferInfo && bufferInfo.detectedType.mime.startsWith('image/')) {
        await conn.sendMessage(m.chat, { image: { url: item.download_link } }, { quoted: m });
      } else if (bufferInfo && bufferInfo.detectedType.mime.startsWith('video/')) {
        await conn.sendFile(m.chat, item.download_link, 'igdl.mp4', `*هذا هو الفيديو من إنستجرام*`, m);
      }
    }
    await m.react('✅');
  } catch (error) {
    console.log('الخطأ الأول:', error);

    const downloadMethods = [
      async () => instagram.download(args[0]),
      async () => instagramGetUrl(args[0]).url_list,
      async () => instagramdl(args[0]),
      async () => {
        const res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
        const json = await res.json();
        return [{ url: json.result }];
      }
    ];

    for (let method of downloadMethods) {
      try {
        const results = await method();
        if (results && results.length) {
          for (let { url } of results) {
            const shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt = `_${shortUrl}_`.trim();
            await conn.sendFile(m.chat, url, 'igdl.mp4', txt, m);
          }
          await m.react('✅');
          return;
        }
      } catch (error) {
        console.log('الخطأ:', error);
      }
    }

    await m.react('❌');
    conn.reply(m.chat, '❌ *عذرًا، فشل التنزيل. يرجى المحاولة لاحقًا.*', m);
  }
};

handler.help = ['instagram *<link ig>*'];
handler.tags = ['downloader'];
handler.command = /^(instagramdl|instagram|انستا|ig)$/i;
handler.limit = 1;
handler.register = true;
export default handler;

const getBuffer = async (url, options = {}) => {
  try {
    const res = await axios({
      method: 'get',
      url,
      headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 },
      ...options,
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(res.data, 'binary');
    const detectedType = await fileTypeFromBuffer(buffer);
    if (!detectedType || !['image/jpeg', 'image/png', 'video/mp4'].includes(detectedType.mime)) {
      return null;
    }
    return { buffer, detectedType };
  } catch (error) {
    console.log('خطأ في تحميل الملف:', error);
    return null;
  }
};