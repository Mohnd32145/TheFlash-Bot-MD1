import fetch from "node-fetch";
import yts from "yt-search";
import ytdl from 'ytdl-core';
import axios from 'axios';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text) throw `*🤔 ما الذي تبحث عنه؟ 🤔*\n*يرجى إدخال اسم الأغنية*\n\n*مثال:*\n#play phonk`;

  try {
    const yt_play = await search(args.join(" "));
    let additionalText = command === 'اغنية' ? 'audio 🔊' : command === 'فديو' ? 'video 🎥' : '';

    // إرسال تفاصيل الفيديو
    conn.sendFile(m.chat, yt_play[0].thumbnail, 'thumbnail.jpg', `
      ✩『العنوان📌』: *${yt_play[0].title}*
     
      *⇄ㅤ◁ ㅤ  ❚❚ㅤ     ▷ㅤ     ↻*

                                         
      
      ✩ 『المده🕐』:${yt_play[0].timestamp}


                                                  
      ✩ 『المشاهده👀』: ${yt_play[0].views}


                                             
      ✩ 『الفنان🙋』:${yt_play[0].author.name}


                                          
      ✩ 『مدة النشر🧚‍♀️』: ${yt_play[0].ago}
    
      
    
    ✩ 『الرابط🔗』: ${yt_play[0].url}

      
      *𝑻𝑼𝑹𝑩𝑶﹝⚡️﹞𝑩𝑶𝑻*
    `.trim(), m);

    // تحميل الصوت أو الفيديو بناءً على الأمر
    if (command === 'شغل') {
      await playAudio(m, yt_play[0]);
    } else if (command === 'فديو') {
      await playVideo(m, yt_play[0]);
    }

  } catch (error) {
    console.error('Error in handler:', error);
  }
};

// دالة للبحث عن الفيديوهات
async function search(query) {
  const search = await yts.search({ query, hl: "ar", gl: "AR" });
  return search.videos;
}

// دالة لتشغيل الصوت
async function playAudio(m, video) {
  try {
    let q = '128kbps';
    const yt = await youtubedl(video.url).catch(async () => await youtubedlv2(video.url));
    const dl_url = await yt.audio[q].download();
    await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg' }, { quoted: m });
  } catch (error) {
    console.error('Error in playAudio:', error);
    await handleFallbackAudio(m, video);
  }
}

// دالة لتشغيل الفيديو
async function playVideo(m, video) {
  try {
    let q = '480p';
    const yt = await youtubedl(video.url).catch(async () => await youtubedlv2(video.url));
    const dl_url = await yt.video[q].download();
    const ttl = yt.title;
    await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*🔰 ها هو الفيديو*\n*🔥 العنوان: ${ttl}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m });
  } catch (error) {
    console.error('Error in playVideo:', error);
    await handleFallbackVideo(m, video);
  }
}

// دالة للبدائل في حال فشل تحميل الصوت
async function handleFallbackAudio(m, video) {
  try {
    const dataRE = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${video.url}`);
    const dataRET = await dataRE.json();
    await conn.sendMessage(m.chat, { audio: { url: dataRET.mp3[1].url }, mimetype: 'audio/mpeg' }, { quoted: m });
  } catch (error) {
    console.error('Fallback audio failed:', error);
    // يمكنك إضافة فشل إضافي مع دوال مختلفة إذا لزم الأمر
  }
}

// دالة للبدائل في حال فشل تحميل الفيديو
async function handleFallbackVideo(m, video) {
  try {
    let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${video.url}`);
    let lolh = await lolhuman.json();
    await conn.sendMessage(m.chat, { video: { url: lolh.result.link }, fileName: `${lolh.result.title}.mp4`, mimetype: 'video/mp4', caption: `*🔰 ها هو الفيديو*\n*🔥 العنوان: ${lolh.result.title}`, thumbnail: await fetch(lolh.result.thumbnail) }, { quoted: m });
  } catch (error) {
    console.error('Fallback video failed:', error);
    // يمكن إضافة فشل إضافي مع دوال مختلفة هنا أيضًا
  }
}

handler.command = ['فديو', 'شغل'];
handler.exp = 0;
export default handler;