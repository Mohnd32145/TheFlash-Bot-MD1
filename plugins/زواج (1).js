let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},اديلو ادي🙃😂*
*${toM(b)}, عقبال ما تجيبو كتاكيت تملا البار بتاعنا🥹😂*\n\
متقفش كد دي مجرد لعبه👾😂*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','زواج']
handler.group = true
export default handler
