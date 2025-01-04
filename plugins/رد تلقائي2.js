//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^جيت$/i.test(m.text)) { 
     responses = [ 
 '*`نورت/ي يورحي🧚‍♀️🥂`*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*`و عليكم السلام💞`*',  
     ]; 
   }else if (/^تيربو|تيربو$/i.test(m.text)) { 
     responses = [ 
'*`اي يروحي🥂🧚‍♀️`*',
       '`اي يقلبي قول🗿💗`',
     '`يعم انت احول منا برد اهو🙂😂`'
       ];
 }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
'*`اسمي تيربو يقلبي🗿💗`*'
     ]; 
   }else if (/^تيربو هوا انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*`لا و مش عايز الارتباط🏌🏻‍♂💔`*'
   ]; 
   }else if (/^بتحبني$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^تيربو تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'`محصلش يحبي 🗿💞`*',
'*`لا و متتعبش نفسك عشان  احبك اسكت 🫥`*',
'*`ايوا بكرهك🗿`*',   ]; 

     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*`هاي يروحي🧚‍♀️🥂`*',  

     ]; 
}else if (/^ات بوسه|هات بوسه|ات بوثه|بوسني|هات بوثه/i.test(m.text)) { 
     responses = [ 
       '*`اموااااااحححححح🥹💞`*',  

     ]; 
   }else if (/^حبني|حبوني$/i.test(m.text)) { 
     responses = [ 
'انا بعشقك مش بحبك بس🫦💗'
     ]; 
   } else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
'*`مـي تو 🗿💗`*',
       '`انا كمان بحبني🫦🥂`'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       '`بخير يبن/ت قلبي🥂🧚‍♀️`',  

     ];
     }else if (/^بتحبني$/i.test(m.text)) { 
     responses = [ 
       '`اوي كمان🫦🥂`',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي'
     ];
     }else if (/^بعشقك$/i.test(m.text)) { 
     responses = [ 
    '`بموت فيك/ي🥂🧚‍♀️`'
     ];
     }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
       '`بدمنك🫦🥂`',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مسائو🗿💞',  

     ];
     }else if (/^صباحو |صباح$/ .test(m.text)) { 
     responses = [ 
       '`ثباحو🧚‍♀️💗`',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       '`شغال يروحي اهو🥂🗿`'  
     ];
            }else if (/^دربكه$/i.test(m.text)) { 
     responses = [ 
       '*بقولك اي مهند مبقاش اسمو دربكه هشخرلك لو قولتهع تاني*', 
       'خخخخخخخخخخخخخخخخخخخخ قولتلك اسمو تيربو'
     ];
     }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
       '*كسمين تلاته اكساس امك*',  
     ];
     }else if (/^يعرص$/i.test(m.text)) { 
     responses = [ 
       '*امك لابسه استرز*',  
     ];
     }else if (/^دنتا ابن شرموطه$/i.test(m.text)) { 
        responses = [ 
          '*ابوك ماسك ل امك الفوطه*',  
        ];
     }else if (/^يابن الشرموطه$/i.test(m.text)) { 
        responses = [ 
          '*ابوك ماسك لمك الفوطه*',  
        ];
     }else if (/^با ابن الشرموطه$/i.test(m.text)) { 
        responses = [ 
          '*ابوك ماسك لمك الفوطه*',  
        ];
     }else if (/^يخول|يا ابن الخول |يابن الخول$/i.test(m.text)) { 
        responses = [ 
          '*زوبري ف طيزك اتحول*',  
        ];
     }else if (/^زوبري منجا$/i.test(m.text)) { 
     responses = [ 
       '*حطيت ف طيزك كمانجا*',  
     ];
     }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
       '*بالتكت بتاعها*',  
     ];
     }else if (/^يعلق$/i.test(m.text)) { 
     responses = [ 
       '*كسمك*',  
     ];
     }else if (/^كسمينك$/i.test(m.text)) { 
     responses = [ 
       '*يلا يبن المرا المتناكه*',  
     ];
     }else if (/^يابن المتناكه$/i.test(m.text)) { 
     responses = [ 
       '*امك مرا حناكه*',  
     ];  
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;