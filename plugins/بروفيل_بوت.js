import jimp from 'jimp';

const handler = async (message, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
    try {
        const userProfile = conn.user.jid;
        const quotedMessage = message.quoted ? message.quoted : message;
        if (!message.quoted) throw ` *⚠️ ملقيناش الصورة، من فضلك رد على صورة باستخدام الأمر ${usedPrefix + command}*`;
        const mimeType = quotedMessage.mimetype || '';
        const imageBuffer = await quotedMessage.download();
        const contactId = await userProfile;

        async function processImage(buffer) {
            const image = await jimp.read(buffer);
            const resizedImage = image.getHeight() > image.getWidth() ? image.resize(720, jimp.AUTO) : image.resize(jimp.AUTO, 720);
            const finalBuffer = await resizedImage.getBufferAsync(jimp.MIME_JPEG);
            return { img: finalBuffer }
        }

        const { img: processedImage } = await processImage(imageBuffer);

        await conn.query({ tag: 'iq', attrs: { to: contactId, type: 'set', xmlns: 'w:profile:picture' }, content: [{ tag: 'picture', attrs: { type: 'image' }, content: processedImage }]});

        await message.reply(' *🧚🏽‍♂️ تم تغيير صورة البروفايل بتاعة البوت بنجاح* ');
    } catch {
        throw ` *هات الصوره🧚🏽‍♂️ ${usedPrefix + command}*`;
    }
};

handler.help = ["setppbot"]
handler.tags = ["owner"]
handler.command = /^بروفايل بوت|cambiafoto|fotobot$/i;
handler.owner = true;

export default handler;
