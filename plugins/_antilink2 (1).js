let رابطRegex = /https:/i

export async function قبل(m, { هو_مشرف, هو_مشرف_بوت, النص }) {
  if (m.isBaileys && m.fromMe) return !0
  if (!m.isGroup) return !1

  let الدردشة = global.db.data.chats[m.chat]
  let المرسل = m.key.participant
  let معرف_الرسالة = m.key.id
  const المستخدم = `@${m.sender.split`@`[0]}`;
  let البوت = global.db.data.settings[this.user.jid] || {}

  const هو_رابط_مجموعة = رابطRegex.exec(m.text)

  if (الدردشة.مكافحة_الروابط2 && هو_رابط_مجموعة && !هو_مشرف) {
    if (هو_مشرف_بوت) {
      const رابط_يوتيوب1 = `https://www.youtube.com/`
      const رابط_يوتيوب2 = `https://youtu.be/`
      if (m.text.includes(رابط_هذه_المجموعة)) return !0
      if (m.text.includes(رابط_يوتيوب1)) return !0
      if (m.text.includes(رابط_يوتيوب2)) return !0
    }    

    await conn.sendMessage(
      m.chat, 
      {text: `*「 تم اكتشاف رابط غير مسموح به 」*\n\n${المستخدم} 🤨 لو شايفني غلط اصححلك انا`, mentions: [m.sender]}, 
      {quoted: m}
    )

    if (!هو_مشرف_بوت) 
      return m.reply('*لا أستطيع حذف الرابط لأنني لست مشرفًا 👾✨️*')  

    if (هو_مشرف_بوت) {
      await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: معرف_الرسالة, participant: المرسل }})
      let نتيجة_الطرد = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
      if (نتيجة_الطرد[0].status === "404") return   
    } else if (!البوت.restrict) {
      return m.reply('*مالك البوت لم يقم بتفعيل ميزة التقييد (enable restrict)، يرجى التواصل معه لتفعيلها.*')
    }
  }
  return !0
}