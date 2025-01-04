let handler = m => m;

handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];
    let responses;

    if (/^يروحي$/i.test(m.text)) {
        responses = [
            '*قلب روحك😹💕*'
        ];
    } else if (/^صلي علي النبي|صلي ع النبي$/i.test(m.text)) {
        responses = [
            '*عليه افضل الصلاة والسلام🧚‍♂️🩵*',
            '*عليه الصلاة والسلام💜🧚‍♂️*',
            '*عليه الصلاة والسلام💜🦋*',
            '*عليه افضل الصلاة والسلام🕊🤍*'
        ];
    } else if (/^بحب تيربو$/i.test(m.text)) {
        responses = [
            '*ونا كمان بحبني😹💕*'
        ];
    } else if (/^يارب ديما$/i.test(m.text)) {
        responses = [
            '*ليا وليك يسطا😹💜*'
        ];
    } else if (/^عامل اي|ازيك$/i.test(m.text)) {
        responses = [
            '*تمام الحمد لله🧸💜*',
            '*احسن منك🧸💜*',
            '*زي الفل😹💜*'
        ];
    } else if (/^انا مخنوق|انا زعلان$/i.test(m.text)) {
        responses = [
            '*ليه كده يسطا😹*'
        ];
    } else if (/^بموت فيك/i.test(m.text)) {
        responses = [
            '*بعشقكك🥺💕*'
        ];
    } else if (/^فين البوت$/i.test(m.text)) {
        responses = [
            '*مافيش بوتات هنا😒*'
        ];
    } else if (/^ازاي$/i.test(m.text)) {
        responses = [
            '*زي السكر في الشاي😹🔪*'
        ];
    } else if (/^خخخ|خخخخ|خخخخخ|خخخخخخخ|خخ$/i.test(m.text)) {
        responses = [
            '*خوخ ومنجا وسوق العبور🦦🥂*'
        ];
    } else if (/^سلام$/i.test(m.text)) {
        responses = [
            '*باي😹*'
        ];
    } else if (/^تيربو عايز اجوز$/i.test(m.text)) {
        responses = [
            '*احا ونا مالي😒*'
        ];
    } else if (/^كسمكو يولاد المتناكه|كسم الي هنا$/i.test(m.text)) {
        responses = [
            '*كسم امك المتناكه الشرموطه الي جبتك🔥*',
            '*كسمين امك يابن البوه يا ديوث يا عرص🔥*',
            '*كسم امك العاهره يااض🔥*',
            '*كسم امك يابن الزانيه🔥*'
        ];
    } else if (/^اسكت$/i.test(m.text)) {
        responses = [
            '*مين انت علشان تسكتني🦦*',
            '*اسكت انت🧸*'
        ];
    } else if (/^مين طلع تيربو|مين خرج تيربو$/i.test(m.text)) {
        responses = [
            'انا موجود اهو😹💜'
        ];
    } else if (/^عايز اعيط|عيزه اعيط$/i.test(m.text)) {
        responses = [
            '*ليه كده😹*'
        ];
    } else if (/^انا جعان$/i.test(m.text)) {
        responses = [
            '*طب ونا مالي😹🧸*'
        ];
    } else if (/^تيربو عايز عروسه$/i.test(m.text)) {
        responses = [
            '*احا ونا مالي😒*',
            '*ونا مالي يعم😒*'
        ];
    } else if (/^بوسه|محح$/i.test(m.text)) {
        responses = [
            '*ميحح💋*'
        ];
    } else if (/^متيجي$/i.test(m.text)) {
        responses = [
            '*مليش ف الخشن😂🏌*',
            '*متيجي انت💋😂*'
        ];
    } else if (/^فينك$/i.test(m.text)) {
        responses = [
            '*هنا اهو*',
            '*فين ايه؟*'
        ];
    } else if (/^كسم البضان$/i.test(m.text)) {
        responses = [
            '*مافيش غيرك هنا بضان😹🦦*',
            '*انت البضان نفسهاا😹🦦*'
        ];
    } else if (/^كسمك يا تيربو$/i.test(m.text)) {
        responses = [
            '*كسمين امك المتناكه الي جبتك🫵🏻*',
            '*سفروت نايك امك وانت معرص🫵🏻*'
        ];
    } else if (/^تصبح على خير$/i.test(m.text)) {
        responses = [
            '*وانت من اهله*',
            '*وانت طيب*'
        ];
    } else if (/^مين ضفني|مين الي جبني هنا$/i.test(m.text)) {
        responses = [
            '*ضور عليه بقا😹🦦*',
            '*معرفش🧸*'
        ];
    } else if (/^ربنا معاك$/i.test(m.text)) {
        responses = [
            '*ومعاك يحب😹*',
            '*تثلم يحب😹*'
        ];
    } else if (/^مبسوط؟$/i.test(m.text)) {
        responses = [
            '*💜الحمد لله*',
            '*ايوه وانت؟*'
        ];
    } else if (/^وحشني$/i.test(m.text)) {
        responses = [
            '*وانت اكتر*',
            '*وحشني طلتك😹*'
        ];
    } else if (/^ايه الاخبار$/i.test(m.text)) {
        responses = [
            '*كلو تمام الحمد لله*',
            '*ماشي الحال وانت؟*'
        ];
    } else if (/^عايز اروح السينما$/i.test(m.text)) {
        responses = [
            '*فكرة حلوة، انا كمان عايز اروح*',
            '*ايه الفيلم اللي نفسك تشوفه؟*'
        ];
    } else if (/^ايه رايك في الجو$/i.test(m.text)) {
        responses = [
            '*الجو حلو النهاردة*',
            '*الجو وحش بصراحة*'
        ];
    } else if (/^حاسب$/i.test(m.text)) {
        responses = [
            '*ممعيش فكه🦦*',
            '*حاسب انت🦦*'
        ];
    } else if (/^شوفت الماتش؟$/i.test(m.text)) {
        responses = [
            '*اه، كان ماتش جامد*',
            '*لأ، ما شفتوش*'
        ];
    } else if (/فين النا؟$/i.test(m.text)) {
        responses = [
            '*مش عارف والله*',
            '*يمكن نايمين*'
        ];
    } else if (/^تفتكر هنكسب؟$/i.test(m.text)) {
        responses = [
            '*اكيد هنكسب*',
            '*عندي امل كبير*'
        ];
    } else if (/^بتحب مين$/i.test(m.text)) {
        responses = [
            '*لولو🥺🎈*',
            '*😼قولت لولو*'
        ];
    }

    if (responses) {
        let randomIndex = Math.floor(Math.random() * responses.length);
        conn.reply(m.chat, responses[randomIndex], m);
    }
    return !0;
};

export default handler;
