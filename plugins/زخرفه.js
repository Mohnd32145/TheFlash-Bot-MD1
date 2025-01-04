//هارلي بيمسي عليكو ويقولكم كل سنة وانتو طيبين مقدما بمناسبة عيد الاضحي ياحب🐐
//حقوق قناة هارلي كودنج 𝐻𝐴𝑅𝐿𝐸𝑌 ⚡ 𝐶𝛩𝐷𝐼𝑁𝐺  https://whatsapp.com/channel/0029VaXddtu0lwgiREisx82C
// تغير المصدر اذبحك مثل خروف العيد 🐐 🔪
//بس كده استمتعو بل الامر ⚡
function handler(m, { text }) {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  m.reply(teks.replace(/[a-z]/gi, v => {
      return { 
          'a': '𝐀',
          'b': '𝐁',
          'c': '𝐂',
          'd': '𝐃',
          'e': '𝐄',
          'f': '𝐅',
          'g': '𝐆',
          'h': '𝐇',
          'i': '𝐈',
          'j': '𝐉',
          'k': '𝐊',
          'l': '𝐋',
          'm': '𝐌',
          'n': '𝐍',
          'o': '𝐎',
          'p': '𝐏',
          'q': '𝐐',
          'r': '𝐑',
          's': '𝐒',
          't': '𝐓',
          'u': '𝐔',
          'v': '𝐕',
          'w': '𝐖',
          'x': '𝐗',
          'y': '𝐘',
          'z': '𝐙', 
      }[v.toLowerCase()] || v
  }))
}
handler.help = ['H A R L E Y']
handler.tags = ['H A R L E Y']
handler.command =  /^(زغرفه)$/i

export default handler
