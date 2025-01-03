import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'بنت 👩‍💼', wm, json.result.female, [['🔄 الصورة التالية 🔄', `/${command}`]], m)
conn.sendButton(m.chat, 'ولد 👨‍💼', wm, json.result.male, [['🔄 الصورة التالية 🔄', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(طقم|تطقيم2)$/i
export default handler