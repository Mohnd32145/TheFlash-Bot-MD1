import fetch from 'node-fetch';
let handler = async (m, { conn, isOwner, command }) => {
    let fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

    if (command == 'listban' || command == 'listbaneado') {
        let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned);
        let users = Object.entries(global.db.data.users).filter(user => user[1].banned);
        let caption = `
╭•·––| 👥 المستخدمين المحظورين |––·•
│  الإجمالي: ${users.length} ${users.length ? '\n' + users.map(([jid], i) => `
│ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
╰•·–––––––––––––––––––·•

╭•·––| 💬 الشاتات المحظورة |––·•
│  الإجمالي: ${chats.length} ${chats.length ? '\n' + chats.map(([jid], i) => `
│ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
╰•·–––––––––––––––––––·•
`.trim();
        m.reply(caption, null, { mentions: conn.parseMention(caption) });
    }

    if (command == 'listablock' || command == 'blocklist' || command == 'listabloqueados') {
        await conn.fetchBlocklist().then(async data => {
            let txt = `📛 قائمة المحظورين\n\n*الإجمالي:* ${data.length}\n\n╭━━━[ *${vs} 𓃠* ]━━━⬣\n`;
            for (let i of data) {
                txt += `┃🚫 @${i.split("@")[0]}\n`;
            }
            txt += "╰━━━━━━━⬣\n\n*من فضلك لا تتصل لتجنب الحظر، شكراً.*";
            return conn.reply(m.chat, txt, fkontak, m, { mentions: await conn.parseMention(txt) });
        }).catch(err => {
            console.log(err);
            return conn.reply(m.chat, `لا يوجد مستخدمين محظورين حالياً`, fkontak, m);
        });
    }
}

handler.help = ['listban', 'listablock'];
handler.tags = ['owner'];
handler.command = /^(الشتات المحظوره|listbaneado|listablock|blocklist|listabloqueados)$/i;
//handler.rowner = true;
export default handler;
