/* أسئلة الاختبار — كلها من كتاب حصن المسلم (نفس محتوى الصفحة الرئيسية) */
const QUESTIONS = [
{
 q:"كم مرة تُقال سور الإخلاص والفلق والناس في أذكار الصباح والمساء كما ورد في الكتاب؟",
 options:["مرة واحدة","3 مرات","7 مرات","100 مرة"],
 answer:1,
 fb:"من الكتاب: تُقال «3 مرات صباحاً ومساءً». قال ﷺ: «قل هو الله أحد والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل شيء»."
},
{
 q:"ما فضل سيد الاستغفار كما ورد في الكتاب؟",
 options:["يُكتب له ألف حسنة","من قالها موقناً بها فمات فهو من أهل الجنة","تُفتح له أبواب الجنة الثمانية","يُكفى ما أهمّه من الدنيا والآخرة"],
 answer:1,
 fb:"من الكتاب: «من قالها من النهار موقناً بها فمات من يومه قبل أن يمسي فهو من أهل الجنة، ومن قالها من الليل وهو موقن بها فمات قبل أن يصبح فهو من أهل الجنة». ونصها: اللهم أنت ربي لا إله إلا أنت…"
},
{
 q:"كم مرة يُقال «حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم»؟",
 options:["مرة واحدة","3 مرات","7 مرات","10 مرات"],
 answer:2,
 fb:"من الكتاب: تُقال «7 مرات صباحاً ومساءً»، وفضلها: «من قالها حين يصبح وحين يمسي سبع مرات كفاه الله ما أهمّه من أمر الدنيا والآخرة»."
},
{
 q:"ماذا يقول المسلم عند دخول الخلاء كما في الكتاب؟",
 options:["بسم الله توكلت على الله","اللهم إني أعوذ بك من الخبث والخبائث","غفرانك","اللهم افتح لي أبواب رحمتك"],
 answer:1,
 fb:"من الكتاب: عند الدخول يقول: «اللهم إني أعوذ بك من الخبث والخبائث»، وعند الخروج يقول: «غفرانك»."
},
{
 q:"ما فضل الذكر بعد الوضوء: «أشهد أن لا إله إلا الله… اللهم اجعلني من التوابين واجعلني من المتطهرين»؟",
 options:["غُفر له ما تقدم من ذنبه","فُتحت له أبواب الجنة الثمانية يدخل من أيها شاء","كتبت له مائة حسنة","أُجير من الجن حتى يصبح"],
 answer:1,
 fb:"من الكتاب: «من قال ذكر ما بعد الوضوء فُتحت له أبواب الجنة الثمانية يدخل من أيها شاء». وقبل الوضوء يقول: بسم الله."
},
{
 q:"كم مرة يُقال «بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء»؟ وما فضله؟",
 options:["مرة واحدة — يُكفى الهم","3 مرات — لم تضرّه فجأة بلاء","7 مرات — أُعتق من النار","100 مرة — حُطت خطاياه"],
 answer:1,
 fb:"من الكتاب: تُقال «3 مرات صباحاً ومساءً»، وفضلها: «من قالها ثلاثاً حين يصبح وحين يمسي لم تضرّه فجأة بلاء»."
},
{
 q:"ماذا يفعل المسلم بالمعوذات عند النوم كما ورد في الكتاب؟",
 options:["يقرؤها مرة واحدة فقط","يجمع كفيه وينفث فيهما ويقرؤها ثم يمسح جسده — 3 مرات","يقرؤها 7 مرات","يقرؤها 100 مرة"],
 answer:1,
 fb:"من الكتاب: «يجمع كفيه ثم ينفث فيهما فيقرأ: الإخلاص والفلق والناس، ثم يمسح بهما ما استطاع من جسده… يفعل ذلك ثلاث مرات». كان ﷺ يفعل ذلك كل ليلة."
},
{
 q:"ما دعاء نزول منزل في السفر كما في الكتاب؟",
 options:["سبحان الذي سخر لنا هذا","أعوذ بكلمات الله التامات من شر ما خلق","بسم الله توكلت على الله","اللهم إني أسألك خيرها"],
 answer:1,
 fb:"من الكتاب: «أعوذ بكلمات الله التامات من شر ما خلق»، وفضلها: «من نزل منزلاً ثم قالها لم يضرّه شيء حتى يرتحل منه»."
},
{
 q:"ما فضل دعاء دخول السوق كما ورد في الكتاب؟",
 options:["كتب الله له ألف ألف حسنة ومحا عنه ألف ألف سيئة","غُفرت خطاياه وإن كانت مثل زبد البحر","أُجير من الشيطان يومه كله","أدى شكر يومه وليلته"],
 answer:0,
 fb:"من الكتاب: «من دخل السوق فقال: لا إله إلا الله وحده لا شريك له… كتب الله له ألف ألف حسنة، ومحا عنه ألف ألف سيئة، ورفع له ألف ألف درجة»."
},
{
 q:"ماذا يقول المسلم عند المصيبة كما في الكتاب؟",
 options:["لا حول ولا قوة إلا بالله","إنا لله وإنا إليه راجعون، اللهم أجرني في مصيبتي وأخلف لي خيراً منها","حسبنا الله ونعم الوكيل","يا حي يا قيوم برحمتك أستغيث"],
 answer:1,
 fb:"من الكتاب: «إنا لله وإنا إليه راجعون، اللهم أجرني في مصيبتي وأخلف لي خيراً منها»، وفضلها: «إلا أخلف الله له خيراً منها»."
},
{
 q:"ما هي كفارة المجلس كما وردت في الكتاب؟",
 options:["أستغفر الله وأتوب إليه 100 مرة","سبحانك اللهم وبحمدك أشهد أن لا إله إلا أنت أستغفرك وأتوب إليك","لا إله إلا الله وحده لا شريك له","الحمد لله الذي أطعمنا وسقانا"],
 answer:1,
 fb:"من الكتاب: «سبحانك اللهم وبحمدك، أشهد أن لا إله إلا أنت، أستغفرك وأتوب إليك»، وفضلها: «غُفر له ما كان في مجلسه ذلك»."
},
{
 q:"ما أكثر دعاء كان يدعو به النبي ﷺ كما في الكتاب؟",
 options:["اللهم أعني على ذكرك وشكرك","ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار","اللهم إنك عفو تحب العفو فاعف عني","يا مقلب القلوب ثبت قلبي على دينك"],
 answer:1,
 fb:"من الكتاب: «كان أكثر دعاء النبي ﷺ: ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار» [البقرة: 201]."
},
{
 q:"كم مرة تُقال «سبحان الله وبحمده» في الصباح والمساء؟",
 options:["10 مرات","33 مرة","100 مرة","1000 مرة"],
 answer:2,
 fb:"من الكتاب: «100 مرة صباحاً ومساءً»، وفضلها: «حُطت خطاياه وإن كانت مثل زبد البحر، ولم يأت أحد بأفضل مما جاء به إلا من قال مثل ما قال أو زاد»."
},
{
 q:"ماذا يقول المسلم إذا استيقظ من نومه كما في الكتاب؟",
 options:["بسم الله الذي لا يضر مع اسمه شيء","الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور","أصبحنا وأصبح الملك لله","اللهم بك أصبحنا وبك أمسينا"],
 answer:1,
 fb:"من الكتاب: دعاء الاستيقاظ: «الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور». كان ﷺ إذا استيقظ قالها."
},
{
 q:"ما دعاء الاستخارة باختصار كما ورد في الكتاب؟",
 options:["ركعتان ثم: اللهم إني أستخيرك بعلمك وأستقدرك بقدرتك… ويسمّي حاجته","سجدة ثم الاستغفار 100 مرة","الوضوء ثم قراءة آية الكرسي","صيام يوم ثم الدعاء عند الإفطار"],
 answer:0,
 fb:"من الكتاب: «إذا همّ أحدكم بالأمر فليركع ركعتين من غير الفريضة ثم ليقل: اللهم إني أستخيرك بعلمك وأستقدرك بقدرتك وأسألك من فضلك العظيم…» ويسمّي حاجته. كان ﷺ يعلّمها كما يعلّم السورة من القرآن."
}
];

let order = [], idx = 0, score = 0, locked = false;
const answers = [];

function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

function best(){ try{ return parseInt(localStorage.getItem("hisn-best")||"0",10);}catch(e){return 0;} }

function showBest(){
  const el = document.getElementById("bestScore");
  const b = best();
  el.textContent = b ? ("أفضل نتيجة سابقة: "+b+" / "+QUESTIONS.length) : "";
}

function start(){
  order = shuffle(QUESTIONS.map((_,i)=>i));
  idx = 0; score = 0; answers.length = 0;
  document.getElementById("quiz-start").classList.add("hidden");
  document.getElementById("quiz-result").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("qCount").textContent = QUESTIONS.length;
  renderQ();
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderQ(){
  locked = false;
  const qi = order[idx];
  const Q = QUESTIONS[qi];
  document.getElementById("bar").style.width = ((idx)/QUESTIONS.length*100)+"%";
  document.getElementById("qNum").textContent = "السؤال "+(idx+1)+" من "+QUESTIONS.length;
  document.getElementById("qScore").textContent = "النقاط: "+score;
  document.getElementById("qText").textContent = Q.q;
  const box = document.getElementById("opts");
  box.innerHTML = "";
  Q.options.forEach((op,i)=>{
    const b = document.createElement("button");
    b.className = "opt";
    b.innerHTML = "<span class='letter'>"+["أ","ب","ج","د"][i]+"</span> "+op;
    b.onclick = ()=>choose(i,b);
    box.appendChild(b);
  });
  const fb = document.getElementById("feedback");
  fb.className = "feedback hidden"; fb.innerHTML = "";
  document.getElementById("btnNext").classList.add("hidden");
}

function choose(i,btn){
  if(locked) return; locked = true;
  const qi = order[idx];
  const Q = QUESTIONS[qi];
  const ok = (i===Q.answer);
  if(ok) score++;
  const btns = document.querySelectorAll("#opts .opt");
  btns.forEach((b,j)=>{
    b.disabled = true;
    if(j===Q.answer) b.classList.add("correct");
    else if(j===i) b.classList.add("wrong");
  });
  answers.push({qi, ok, picked:i});
  const fb = document.getElementById("feedback");
  fb.classList.remove("hidden");
  fb.classList.toggle("ok", ok);
  fb.classList.toggle("bad", !ok);
  fb.innerHTML = (ok ? "<b>✅ إجابة صحيحة.</b><br>" : "<b>❌ إجابة غير صحيحة.</b> الصواب: <b>"+Q.options[Q.answer]+"</b><br>")
    + "<span class='fb-src'>📖 من الكتاب: "+Q.fb+"</span>";
  document.getElementById("qScore").textContent = "النقاط: "+score;
  const nx = document.getElementById("btnNext");
  nx.classList.remove("hidden");
  nx.textContent = (idx===QUESTIONS.length-1) ? "عرض النتيجة 🎉" : "السؤال التالي ←";
}

function next(){
  if(idx < QUESTIONS.length-1){ idx++; renderQ(); window.scrollTo({top:0,behavior:"smooth"}); }
  else finish();
}

function finish(){
  document.getElementById("quiz-box").classList.add("hidden");
  const r = document.getElementById("quiz-result");
  r.classList.remove("hidden");
  document.getElementById("bar").style.width = "100%";
  document.getElementById("finalScore").textContent = score+" / "+QUESTIONS.length;
  const p = score/QUESTIONS.length;
  document.getElementById("grade").textContent =
    p===1 ? "ممتاز! 🌟 حفظ متقن لأذكار الكتاب." :
    p>=0.8 ? "أحسنت! 👍 مراجعة بسيطة وتتم الإتقان." :
    p>=0.5 ? "جيد، لكن راجع الأذكار في الصفحة الرئيسية ثم أعد المحاولة. 📖" :
             "أنصحك بمراجعة الأذكار في الصفحة الرئيسية ثم إعادة الاختبار. 💪";
  if(score > best()){ try{localStorage.setItem("hisn-best",score);}catch(e){} }
  const rev = document.getElementById("review");
  rev.innerHTML = "<h3>مراجعة الإجابات (التغذية الراجعة من الكتاب):</h3>";
  answers.forEach((a,k)=>{
    const Q = QUESTIONS[a.qi];
    const d = document.createElement("div");
    d.className = "rev "+(a.ok?"rok":"rbad");
    d.innerHTML = "<b>"+(k+1)+". "+Q.q+"</b><br>"
      + (a.ok ? "✅ إجابتك صحيحة." : "❌ إجابتك: "+Q.options[a.picked]+" — الصواب: <b>"+Q.options[Q.answer]+"</b>")
      + "<br><span class='fb-src'>📖 "+Q.fb+"</span>";
    rev.appendChild(d);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}

document.getElementById("qCount").textContent = QUESTIONS.length;
document.getElementById("btnStart").onclick = start;
document.getElementById("btnNext").onclick = next;
document.getElementById("btnRetry").onclick = start;
document.getElementById("btnTheme").onclick = (e)=>{ document.body.classList.toggle("dark"); e.target.textContent = document.body.classList.contains("dark")?"☀️":"🌙"; };
showBest();
