//import db from './database.js'
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ *ضع علامة على المستخدم*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ *أدخل مبلغ *خبرة* الذي تريد إضافته*'
  if (isNaN(txt)) throw ' 🔢 *أرقام فقط*'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ الحد الأدنى *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ ~*تمت إضافة الخبرة*~
*┓✥━═━═━━═━═━✥*
*▢  ▢ المجموع: +${xp}*
*┛✥━═━═━━═━═━✥*`)
//conn.fakeReply(m.chat, `▢ *لقد استقبلت* \n\n *+${xp} خبرة*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['خبرة+','adxp'] 
handler.rowner = true

export default handler

//import db from './database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ *ضع علامة على المستخدم*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ *أدخل مبلغ *خبرة* الذي تريد إضافته*'
  if (isNaN(txt)) throw ' 🔢 *أرقام فقط*'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ الحد الأدنى *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ ~*تمت إضافة الخبرة*~
*┓✥━═━═━━═━═━✥*
*▢  ▢ المجموع: +${xp}*
*┛✥━═━═━━═━═━✥*`)
//conn.fakeReply(m.chat, `▢ *لقد استقبلت* \n\n *+${xp} خبرة*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['خبرة+','addxp'] 
handler.rowner = true

export default handler

//import db from './database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ *ضع علامة على المستخدم*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ *أدخل مبلغ *خبرة* الذي تريد إضافته*'
  if (isNaN(txt)) throw ' 🔢 *أرقام فقط*'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ الحد الأدنى *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ ~*تمت إضافة الخبرة*~
*┓✥━═━═━━═━═━✥*
*▢  ▢ المجموع: +${xp}*
*┛✥━═━═━━═━═━✥*`)
//conn.fakeReply(m.chat, `▢ *لقد استقبلت* \n\n *+${xp} خبرة*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['اضف اكسبي','addxp'] 
handler.rowner = true

export default handler

