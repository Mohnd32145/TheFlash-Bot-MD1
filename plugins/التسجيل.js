import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, args, usedPrefix, command }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
let biot = bio.status?.toString() || 'Sin Info'
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let api = await axios.get(`https://deliriusapi-official.vercel.app/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido'
let user = db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let name2 = conn.getName(m.sender)

if (command == 'verify' || command == 'reg' || command == 'verificar') {
if (user.registered === true) throw `*انت مسجل بالفعل 🧚🏼‍♂️*`
if (!Reg.test(text)) throw `*🧚🏼‍♂️ مش عارف تستخدم الأمر ده؟* استخدمه بالشكل ده: *${usedPrefix + command} الاسم.السن*\n*• مثال:* ${usedPrefix + command} ${name2}.16`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*فين الاسم؟*'
if (!age) throw '*السن مينفعش يبقى فاضي، ضيف السن يا ذكي*'
if (name.length >= 45) throw '*ايه؟ اسمك طويل كده 🧚🏼‍♂️*، مش متخيل اللي تحت 🤣' 
age = parseInt(age)
if (age > 100) throw '👴🏻 كبير قوي'
if (age < 5) throw '🚼 الأطفال بقى بيعرفوا يكتبوا؟ ✍️😳 '
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 150
global.db.data.users[m.sender].joincount += 2
let sn = createHash('md5').update(m.sender).digest('hex')

await conn.reply(m.chat,  `*[ ✅ تسجيل تم ]*

◉ *الاسم:* ${name}
◉ *السن:* ${age} سنة
◉ *الوقت:* ${time} ⌚
◉ *التاريخ:* ${date}
◉ *الدولة:* ${userNationality}
◉ *رقم التليفون:* wa.me/${who.split`@`[0]}
◉ *رقم السيريال*
⤷ ${sn}

🎁 *المكافأة:*
⤷ 2 ألماسة 💎
⤷ 400 كوينز 🪙
⤷ 150 نقاط خبرة

*◉ عشان تشوف أوامر البوت استخدم:*
${usedPrefix}.اوامر

*◉ إجمالي المستخدمين المسجلين:* ${rtotalreg}`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎`, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: [nna, nn, md, yt, tiktok].getRandom()}}})
await m.reply(`${sn}`)
}

if (command == 'nserie' || command == 'myns' || command == 'sn') {
let sn = createHash('md5').update(m.sender).digest('hex')
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', `⬇️ *ده رقم السيريال بتاعك* ⬇️`, 'status@broadcast')
}

if (command == 'unreg') {
if (!args[0]) throw `✳️ *ادخل رقم السيريال*\nتقدر تشوف رقم السيريال بتاعك باستخدام الأمر...\n\n*${usedPrefix}nserie*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '⚠️ *رقم السيريال غلط*'
global.db.data.users[m.sender].money -= 400
global.db.data.users[m.sender].limit -= 2
global.db.data.users[m.sender].exp -= 150
global.db.data.users[m.sender].joincount -= 2  
user.registered = false
m.reply(`✅ *التسجيل تم حذفه*`)
}}
handler.help = ['reg', 'حذف التسجيل', 'myns', 'nserie', 'unreg']
handler.tags = ['rg']
handler.command = /^(nserie|unreg|sn|myns|verify|verificar|registrar|reg(ister)?)$/i
export default handler
