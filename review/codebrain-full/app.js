(() => {
"use strict";
const data={
pl:{
tag:"✧ MAŁE KROKI, WIELKA CIEKAWOŚĆ",title:"Zwolnij. Pobudź ciekawość.",sub:"Kilka spokojnych zagadek albo prawdziwa nauka programowania. W swoim tempie, z Codeym.",
play:"Zagraj 5 minut",playSub:"Proste łamigłówki, bez presji",learn:"Ucz się Pythona",learnSub:"Wróć do swojej ścieżki",note:"♡ Codziennie chwila dla głowy — bez pośpiechu.",
dashboard:"Mój świat",relax:"Relaks",areas:"Odkrywaj",notes:"Notatki",brain:"Mój mózg",premium:"Premium",
welcome:"Miło Cię widzieć!",welcomeSub:"Codey czeka. Wybierz jedną drobną rzecz na dziś.",level:"POZIOM 4 · PRZYKŁADOWE DANE",daily:"Twoja spokojna sesja",dailySub:"5 łamigłówek, które ćwiczą myślenie bez presji",
course:"Kontynuuj naukę Pythona",courseSub:"Twoje zadania, mapy i dotychczasowy postęp.",tools:"Twoje odkrycia",view:"Zobacz",
streak:"Dni nauki",finished:"Ukończone zagadki",fruits:"Owoce Codeya",
areasTitle:"Wybierz krainę",areasSub:"Każda wyspa to mała przygoda. Nie musisz znać Pythona na początek.",islands:["Pierwsze kroki","Wzory i powtórzenia","Logika decyzji","Więcej możliwości","Mistrzowski trening"],
areaDesc:["Poznaj podstawy przez zabawę.","Powtarzaj, przewiduj, układaj.","Ćwicz warunki i pomysłowość.","Więcej zagadek dla ciekawych.","Wyzwanie dla wytrwałych."],
free:"Dostępne",paid:"Rozszerzenie",start:"Otwórz",
mapTitle:"Twoja ścieżka",mapSub:"Odkrywaj kolejne zadania we własnym tempie.",questTitle:"Łamigłówki krok po kroku",questSub:"Wybierz lekcję. Każda ćwiczy jedną małą umiejętność.",questNames:["Przewiduj kolejne kroki","Układaj instrukcje","Decyduj jak programista","Sprawdź, co pamiętasz"],
taskTitle:"Ułóż prosty algorytm",taskSub:"Wskaż właściwą kolejność. Możesz próbować bez ograniczeń.",
taskQuestion:"Co należy wykonać najpierw, żeby zrobić herbatę?", taskAnswers:["Wypić herbatę","Włożyć torebkę do kubka","Odstawić kubek"],taskGood:"Świetnie! Najpierw przygotowujesz kubek, dopiero potem napój. Właśnie uporządkowałaś prosty algorytm.",taskBad:"Spróbuj ponownie. Pomyśl, co musi wydarzyć się jako pierwsze.",taskNext:"Wróć do mapy",
mindTitle:"Chwila dla głowy",mindSub:"Pięć krótkich pytań. Brak timera i przegrywania.",round:"Zagadka",of:"z",choose:"Wybierz odpowiedź",tryAgain:"Jeszcze raz, bez pośpiechu ♡",right:"Pięknie!",next:"Następna zagadka",complete:"Zakończ sesję",noTimer:"Nie musisz się spieszyć.",why:"Co właśnie odkrywasz?",done:"Dobra robota!",doneSub:"Pięć małych kroków to już sukces. Wróć po kolejne.",again:"Zagraj ponownie",
notesTitle:"Twój pamiętnik nauki",notesSub:"Wracaj do tego, czego już się nauczyłaś. Właściwe notatki nadal zapisuje Django.",notes1:"Reguły i wzory",notes2:"Kolejność działań",notes3:"Instrukcja warunkowa",notesText1:"Kolejne elementy mogą tworzyć powtarzalną regułę.",notesText2:"Algorytm ma określoną kolejność kroków.",notesText3:"Jeżeli coś jest prawdą, program wykonuje określone działanie.",
brainTitle:"Twój rosnący mózg",brainSub:"Każde ukończone zadanie rozwija Twoją wizualizację. W aplikacji działa dotychczasowy system premium.",
premiumTitle:"Dodatkowa przygoda",premiumSub:"Dawne zakupy i subskrypcje pozostają aktywne. Podgląd nie pobiera żadnych płatności.",premiumInfo:"Płatne mapy i rozbudowaną wizualizację mózgu zachowujemy. Nowy wygląd nie kasuje wcześniej zakupionych treści.",
previewTag:"PODGLĄD CAŁEGO UI · PRZYKŁADOWE DANE · BEZ DJANGO I PŁATNOŚCI",example:"Przykładowe dane w podglądzie",return:"Wróć do mapy",insight:"Zobacz, czego się uczysz",cta:"Dalej",
},
en:{
tag:"✧ SMALL STEPS, BIG CURIOSITY",title:"Slow down. Stay curious.",sub:"A few gentle puzzles or a real coding journey. At your own pace, with Codey.",
play:"Play for 5 minutes",playSub:"Gentle puzzles, no pressure",learn:"Learn Python",learnSub:"Continue your learning path",note:"♡ A calm moment for your mind — at your pace.",
dashboard:"My space",relax:"Relax",areas:"Explore",notes:"Notes",brain:"My brain",premium:"Premium",
welcome:"Lovely to see you!",welcomeSub:"Codey is waiting. Pick one little thing for today.",level:"LEVEL 4 · SAMPLE DATA",daily:"Your gentle daily session",dailySub:"5 puzzles that practice thinking, without pressure.",
course:"Continue learning Python",courseSub:"Your tasks, maps and existing progress.",tools:"Your discoveries",view:"Explore",
streak:"Learning days",finished:"Solved puzzles",fruits:"Codey's fruits",
areasTitle:"Choose an island",areasSub:"Every island is a little adventure. No Python experience needed to begin.",islands:["First steps","Patterns and loops","Decision logic","More possibilities","Master challenge"],
areaDesc:["Learn the basics by playing.","Repeat, predict and arrange.","Practice conditions and curiosity.","More puzzles for curious minds.","Challenge yourself."],
free:"Available",paid:"Expansion",start:"Open",
mapTitle:"Your learning path",mapSub:"Discover new tasks in your own time.",questTitle:"One puzzle at a time",questSub:"Choose a lesson. Each trains a small skill.",questNames:["Predict next steps","Arrange instructions","Think in conditions","Review what you know"],
taskTitle:"Build a tiny algorithm",taskSub:"Pick the right order. Unlimited tries.",
taskQuestion:"What's the first step when making tea?",taskAnswers:["Drink tea","Put the tea bag in the mug","Put away the mug"],taskGood:"Great! First prepare the mug, then make the tea. You just planned a simple algorithm.",taskBad:"Try again. What must happen before drinking tea?",taskNext:"Back to map",
mindTitle:"A moment for your mind",mindSub:"Five quick questions. No timer or losing.",round:"Puzzle",of:"of",choose:"Choose an answer",tryAgain:"Try again, no rush ♡",right:"Lovely!",next:"Next puzzle",complete:"Finish session",noTimer:"Take as long as you need.",why:"Here's what you learned",done:"Beautiful work!",doneSub:"Five small steps count. Come back for more.",again:"Play again",
notesTitle:"Your learning journal",notesSub:"Return to what you've learned. Your actual notes remain on Django.",notes1:"Rules and patterns",notes2:"Order of steps",notes3:"If conditions",notesText1:"Items can follow a repeating rule.",notesText2:"Algorithms work in a specific sequence.",notesText3:"When a condition is true, programs take an action.",
brainTitle:"Your growing brain",brainSub:"Every completed task develops your brain visualization. Existing premium rules are preserved.",
premiumTitle:"Extra adventures",premiumSub:"Existing purchases and subscriptions stay active. This preview makes no charges.",premiumInfo:"Paid maps and the expanded brain visualizer remain available; the new design does not delete prior purchases.",
previewTag:"FULL UI PREVIEW · EXAMPLE DATA · NO LIVE DJANGO OR PAYMENTS",example:"Sample preview data",return:"Back to map",insight:"See what you're learning",cta:"Continue"
}
};
const puzzles=[
{pl:"2, 4, 8, 16… Co dalej?",en:"2, 4, 8, 16… What's next?",a:["18","24","32"],correct:2,whyPl:"Każda liczba jest dwa razy większa. To reguła.",whyEn:"Each number doubles, forming a rule."},
{pl:"Jeśli pada, zabieram parasol. Pada deszcz. Co zabiorę?",en:"If it's raining, I take an umbrella. It's raining. What do I take?",a:[["Okulary","Parasol","Koc"],["Glasses","Umbrella","Blanket"]],correct:1,whyPl:"Tak wygląda warunek „jeśli… to…”.",whyEn:"That's an 'if… then…' condition."},
{pl:"Kółko, gwiazdka, kółko, gwiazdka… Co dalej?",en:"Circle, star, circle, star… What follows?",a:[["Gwiazdka","Kółko","Kwadrat"],["Star","Circle","Square"]],correct:1===2?1:0,whyPl:"Powtarzanie sekwencji to wstęp do pętli.",whyEn:"Repeating sequences introduce loops."},
{pl:"Co jest od najmniejszej liczby do największej?",en:"Which list is sorted smallest to largest?",a:["9, 5, 2","2, 9, 5","2, 5, 9"],correct:2,whyPl:"Sortowanie jest podstawowym algorytmem.",whyEn:"Sorting is a core algorithm."},
{pl:"Masz trzy pudełka, po dwa klocki w każdym. Ile klocków?",en:"Three boxes, with two blocks in each. How many blocks?",a:["5","6","8"],correct:1,whyPl:"Powtarzane dodawanie można zapisać jako mnożenie.",whyEn:"Repeated addition can be written as multiplication."}
];
const l=()=>data[state.lang];
const state={lang:(localStorage.getItem('brainacademy_lang') || (navigator.language.toLowerCase().startsWith('pl')?'pl':'en')),page:"home",step:0,answered:false,good:false,taskCorrect:false,area:0,stars:0};
if(!["pl","en"].includes(state.lang))state.lang="pl";
try{state.stars=Number(localStorage.getItem("cb_full_demo_stars")||0)}catch{}
const root=document.getElementById("view"),dock=document.getElementById("dock"),brandimg="https://raw.githubusercontent.com/martynarasz/brainacademy-mobile/master/brainacademy_web/public/images/premium-codey-head.png";
const htmlEscape=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const button=(text,go,extra="")=>'<button class="primary '+extra+'" data-go="'+go+'">'+text+' →</button>';
const intro=(tag,title,sub)=>'<div class="pagehead"><div class="eyebrow">'+tag+'</div><h1>'+htmlEscape(title)+'</h1><p>'+htmlEscape(sub)+'</p></div>';
const card=(title,body,go,emoji)=>'<button class="mini-card" data-go="'+go+'"><span class="mini-icon">'+emoji+'</span><strong>'+title+'</strong><small>'+body+'</small></button>';
const navitems=[["dashboard","⌂"],["relax","✧"],["areas","◈"],["notes","▤"],["brain","◎"]];
function home(){
return '<div class="home-hero"><div><div class="eyebrow">'+l().tag+'</div><h1>'+l().title+'</h1><p>'+l().sub+'</p><div class="action-stack"><button class="action purple" data-go="relax"><span class="icon">✦</span><span><b>'+l().play+'</b><small>'+l().playSub+'</small></span><span class="arrow">→</span></button><button class="action" data-go="dashboard"><span class="icon">⌘</span><span><b>'+l().learn+'</b><small>'+l().learnSub+'</small></span><span class="arrow">→</span></button></div><p style="font-size:12px">'+l().note+'</p></div><div class="mascot-area"><div class="mascot-halo"></div><img class="mascot" src="'+brandimg+'" alt="Codey"><div class="mascot-label">✨ '+(state.lang==="pl"?"Jedna mała wygrana":"One little win")+'</div></div></div><div class="section-grid">'+card(l().dashboard,l().courseSub,"dashboard","⌂")+card(l().areas,l().mapSub,"areas","◈")+card(l().brain,l().brainSub,"brain","◎")+'</div>';
}
function dashboard(){
return intro("✧ "+l().level,l().welcome,l().welcomeSub)
+'<div class="two-cols"><section class="card"><div class="dashboard-hero"><div><small>✧ CODEY</small><h2>'+l().daily+'</h2><p>'+l().dailySub+'</p></div><img src="'+brandimg+'" alt="Codey"></div>'
+button(l().play,"relax","wide")+'<div class="statrow"><div class="statitem"><strong>4</strong><span>'+l().streak+'</span></div><div class="statitem"><strong>12</strong><span>'+l().finished+'</span></div><div class="statitem"><strong>8</strong><span>'+l().fruits+'</span></div></div>'
+'<div class="premium-panel"><strong>'+l().course+'</strong><p class="muted">'+l().courseSub+'</p>'+button(l().cta,"areas","wide")+'</div></section>'
+'<aside class="card"><h3>'+l().tools+'</h3><div class="section-grid" style="grid-template-columns:1fr">'+card(l().areas,l().mapSub,"areas","◈")+card(l().notes,l().notesSub,"notes","▤")+card(l().brain,l().brainSub,"brain","◎")+'</div></aside></div>';
}
function areas(){
return intro("✧ CODEBRAIN · MAPY",l().areasTitle,l().areasSub)+'<div class="island-grid">'+l().islands.map((s,i)=>'<button class="island-card" data-area="'+i+'"><span class="island-art">'+["🌱","🌷","☁️","🌿","🌌"][i]+'</span><span style="flex:1"><span class="chip '+(i>2?"lock":"free")+'">'+(i>2?"✦ "+l().paid:"✓ "+l().free)+'</span><h3>'+s+'</h3><p>'+l().areaDesc[i]+'</p><div class="progressbar"><div style="width:'+([60,35,12,0,0][i])+'%"></div></div></span></button>').join('')+'</div>';
}
function map(){
return intro("✧ "+l().islands[state.area],l().mapTitle,l().mapSub)+'<div class="map-steps">'+l().questNames.map((s,i)=>'<button class="step" data-go="quests"><span class="step-num">'+(i+1)+'</span><span><strong>'+s+'</strong><span>'+([65,40,0,0][i])+'% '+l().example+'</span></span><span class="step-go">→</span></button>').join('')+'</div>';
}
function quests(){
return intro("✧ "+l().mapTitle,l().questTitle,l().questSub)+'<div class="section-grid">'+l().questNames.map((s,i)=>card(s,l().taskSub,"task",["◈","☘","◎","✦"][i])).join('')+'</div>';
}
function task(){
return intro("✧ PYTHON · "+l().example,l().taskTitle,l().taskSub)+'<div class="card puzzle"><div class="puzzle-illustration">✧</div><div class="eyebrow">ALGORYTM / ALGORITHM</div><h2 class="question">'+l().taskQuestion+'</h2><div class="options">'+l().taskAnswers.map((a,i)=>'<button class="option '+(state.taskCorrect&&i===1?"ok":"")+'" data-task-answer="'+i+'"><span class="letter">'+String.fromCharCode(65+i)+'</span>'+htmlEscape(a)+'</button>').join('')+'</div><div id="taskFeedback" class="feedback" style="display:'+(state.taskCorrect?"block":"none")+'">'+(state.taskCorrect?l().taskGood:"")+'</div><div class="space"></div>'+button(l().taskNext,"map","wide")+'</div>';
}
function relax(){
const p=puzzles[state.step%puzzles.length], pl=state.lang==="pl";const arr=Array.isArray(p.a[0])?p.a[pl?0:1]:p.a;
return intro("✧ "+l().play,l().mindTitle,l().mindSub)+(state.step>=5
?'<div class="card puzzle" style="text-align:center"><div class="puzzle-illustration">✦</div><h2>'+l().done+'</h2><p class="muted">'+l().doneSub+'</p><div class="statrow"><div class="statitem" style="grid-column:2"><strong>'+state.stars+'</strong><span>✦</span></div></div><button class="primary wide" data-action="repeat">'+l().again+' →</button></div>'
:'<div class="card puzzle"><div class="eyebrow">'+l().round+' '+(state.step+1)+' '+l().of+' 5</div><div class="progressbar" style="margin:14px 0"><div style="width:'+(state.step/5*100)+'%"></div></div><div class="puzzle-illustration">✦</div><div class="eyebrow">LOGIKA / LOGIC</div><h2 class="question">'+htmlEscape(p[pl?"pl":"en"])+'</h2><p class="muted">'+l().choose+'</p><div class="options">'+arr.map((a,i)=>'<button data-answer="'+i+'" class="option '+(state.answered&&i===p.correct?"ok":"")+'"><span class="letter">'+String.fromCharCode(65+i)+'</span>'+htmlEscape(a)+'</button>').join('')+'</div><div id="answerFeedback" class="feedback" style="display:'+(state.answered?"block":"none")+'"><strong>'+l().right+'</strong><br>'+l().why+': '+(pl?p.whyPl:p.whyEn)+'</div><div class="space"></div>'+(state.answered?'<button class="primary wide" data-action="next">'+(state.step===4?l().complete:l().next)+' →</button>':'<div class="muted" style="text-align:center">'+l().noTimer+'</div>')+'</div>');
}
function notes(){
return intro("✧ CODEBRAIN",l().notesTitle,l().notesSub)+'<div class="notes-list">'+[0,1,2].map(i=>'<article class="note"><span class="chip free">✧ '+l().notes+'</span><h3 style="margin-top:12px">'+l()["notes"+(i+1)]+'</h3><p>'+l()["notesText"+(i+1)]+'</p></article>').join('')+'</div>';
}
function brain(){
return intro("✧ CODEBRAIN · PREMIUM",l().brainTitle,l().brainSub)+'<div class="two-cols"><div class="card"><div class="brain-art"><div class="brain-glow">🧠</div></div><div class="space"></div><div class="progressbar"><div style="width:42%"></div></div><p class="muted">'+l().example+'</p></div><div class="card"><span class="chip">✦ PREMIUM</span><h2 style="margin-top:16px">'+l().premiumTitle+'</h2><p class="muted">'+l().premiumInfo+'</p>'+button(l().view,"premium","wide")+'</div></div>';
}
function premium(){
return intro("✧ GOOGLE PLAY BILLING",l().premiumTitle,l().premiumSub)+'<div class="card" style="max-width:630px"><div class="premium-panel"><span class="chip">✦ PREMIUM</span><h2 style="margin:16px 0">'+l().premiumTitle+'</h2><p class="muted">'+l().premiumInfo+'</p><p class="muted"><strong>'+l().previewTag+'</strong></p></div><div class="space"></div>'+button(l().return,"areas","wide")+'</div>';
}
const screens={home,dashboard,relax,areas,map,quests,task,notes,brain,premium};
function draw(){
document.documentElement.lang=state.lang;
document.getElementById("langbtn").textContent=state.lang.toUpperCase()+" ⌄";
document.getElementById("previewflag").textContent=l().previewTag;
root.innerHTML=screens[state.page]();
dock.innerHTML=navitems.map(([id,icon])=>'<button class="'+(state.page===id?"active":"")+'" data-go="'+id+'">'+icon+'<span>'+l()[id]+'</span></button>').join('');
dock.style.display=state.page==="home"?"none":"flex";
}
function go(p){if(!screens[p])return;state.page=p;state.answered=false;state.taskCorrect=false;draw();window.scrollTo(0,0);}
document.addEventListener("click",e=>{
const el=e.target.closest("button");if(!el)return;
if(el.id==="langbtn"){state.lang=state.lang==="pl"?"en":"pl";try{localStorage.setItem("brainacademy_lang",state.lang)}catch{}draw();return}
if(el.dataset.area!==undefined){state.area=Number(el.dataset.area);go(state.area>2?"premium":"map");return}
if(el.dataset.go){go(el.dataset.go);return}
if(el.dataset.taskAnswer!==undefined){if(Number(el.dataset.taskAnswer)===1){state.taskCorrect=true;draw()}else{const feedback=document.getElementById("taskFeedback");feedback.style.display="block";feedback.textContent=l().taskBad;feedback.style.background="#fff1f0";feedback.style.color="#ae7175"}return}
if(el.dataset.answer!==undefined){const p=puzzles[state.step%puzzles.length],idx=Number(el.dataset.answer);if(idx===p.correct){state.answered=true;draw()}else{el.classList.add("bad");const hint=document.getElementById("answerFeedback");hint.style.display="block";hint.textContent=l().tryAgain;hint.style.background="#fff1f0";hint.style.color="#ae7175"}return}
if(el.dataset.action==="next"){state.step++;state.answered=false;state.stars++;try{localStorage.setItem("cb_full_demo_stars",String(state.stars))}catch{}draw();return}
if(el.dataset.action==="repeat"){state.step=0;state.answered=false;draw()}
});
draw();
})();