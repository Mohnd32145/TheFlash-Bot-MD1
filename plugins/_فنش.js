let handler = async (m, {command, text, conn, usedPrefix}) => {

let url = `こんにちは、私たちは Inisani Community Killer to Experiment (IKKTE) チームです。

人間を泳げる海の動物に変える実験をしてみたいです🤫👹。実験をしてくれる女の子を探しているのですが、女の子を見つけてもらえませんか？ 20歳の女の子を見つけて、東京近郊の狭い路地の地下にある倉庫に送ってください👿。女の子を見つけたら、より明確な場所を伝えるために私に連絡してください 👇
https://api.whatsapp.com/send?phone=+20

女の子を2人か3人ください、女の子1人につき4000ドルをお支払いします。誰にも言わないでください🤫🔪`;
let a7a = url + text;
await conn.reply(m.chat, a7a, m);
}
    handler.help = ['تبنيد'];
    handler.tags = ['K U R O S A K I'];
    handler.command = /^(فنش2)$/i

    export default handler;
