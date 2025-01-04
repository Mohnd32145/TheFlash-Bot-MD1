import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*متنساش ال انت عاوز تبحث عليه يحب , مثال : .صوره شادو*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *البحث:* ${text}
🌎 *المصدر:* Google
`, author, link, link, '🔗 اللينك', null, null, [
['💫 التالي 💫', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صوره2|image|بحث-صورة)$/i
export default handler
