const _0x1f46e3=_0x21a2;(function(_0x10c07b,_0x40e870){const _0x237297=_0x21a2,_0x4ddf6e=_0x10c07b();while(!![]){try{const _0x29e7a5=-parseInt(_0x237297(0x11c))/0x1+-parseInt(_0x237297(0x11f))/0x2+-parseInt(_0x237297(0xed))/0x3*(-parseInt(_0x237297(0x138))/0x4)+parseInt(_0x237297(0x12f))/0x5+-parseInt(_0x237297(0xff))/0x6+parseInt(_0x237297(0x149))/0x7*(parseInt(_0x237297(0x145))/0x8)+parseInt(_0x237297(0x104))/0x9;if(_0x29e7a5===_0x40e870)break;else _0x4ddf6e['push'](_0x4ddf6e['shift']());}catch(_0x192ced){_0x4ddf6e['push'](_0x4ddf6e['shift']());}}}(_0x5412,0x8b5d8));let score=0x0,timerInSeconds=0x0,timerStarted=![];function startTimer(){!timerStarted&&(timerInterval=setInterval(()=>{const _0x165d83=_0x21a2;timerInSeconds++,document[_0x165d83(0xf2)](_0x165d83(0x107))[_0x165d83(0x11e)]=formatTime(timerInSeconds);},0x3e8),timerStarted=!![]);}function formatTime(_0x587b17){const _0x422f3e=_0x21a2,_0x582e4c=Math[_0x422f3e(0x100)](_0x587b17/0x3c),_0x2d4153=_0x587b17%0x3c;return''+(_0x582e4c<0xa?'0':'')+_0x582e4c+':'+(_0x2d4153<0xa?'0':'')+_0x2d4153;}function check1(){const _0x471785=_0x21a2;let _0x5b4b34=document[_0x471785(0xf2)]('q1')[_0x471785(0x101)]['trim']()[_0x471785(0x14d)]();_0x5b4b34===_0x471785(0x126)?(alert(_0x471785(0x11a)),score++,!timerStarted&&startTimer(),document[_0x471785(0xf2)]('one')[_0x471785(0xf5)]=!![],gameOver()):alert(_0x471785(0x109));}function check2(){const _0x2e3add=_0x21a2;let _0x885cf4=document[_0x2e3add(0xf2)]('q2')['value'][_0x2e3add(0xf3)]()['toLowerCase']();_0x885cf4==='c'?(alert(_0x2e3add(0x11a)),score++,document[_0x2e3add(0xf2)]('two')[_0x2e3add(0xf5)]=!![],gameOver()):alert('Incorrect.\x20JavaScript\x20can\x20be\x20placed\x20in\x20both\x20the\x20<head>\x20and\x20<body>\x20sections.');}function check3(){const _0x135258=_0x21a2;let _0x4e970d=document[_0x135258(0xf2)]('q3')[_0x135258(0x101)][_0x135258(0xf3)]()[_0x135258(0x14d)]();_0x4e970d[_0x135258(0x105)](_0x135258(0x13e))&&_0x4e970d[_0x135258(0x105)](_0x135258(0xee))?(alert('Correct!'),score++,document['getElementById'](_0x135258(0x13c))['disabled']=!![],gameOver()):alert(_0x135258(0x111));}function check4(){const _0x1f648d=_0x21a2;let _0xca6ef7=document['getElementById']('q4')[_0x1f648d(0x101)][_0x1f648d(0xf3)]();_0xca6ef7===_0x1f648d(0xd8)||_0xca6ef7===_0x1f648d(0x13d)?(alert('Correct!'),score++,document[_0x1f648d(0xf2)](_0x1f648d(0x13f))['disabled']=!![],gameOver()):alert(_0x1f648d(0xfd));}function check5(){const _0x44fc59=_0x21a2;let _0x43d36d=document[_0x44fc59(0xf2)]('q5')['value']['trim']();_0x43d36d[_0x44fc59(0x137)](_0x44fc59(0xde))?(alert(_0x44fc59(0x11a)),score++,document['getElementById'](_0x44fc59(0xe8))['disabled']=!![],gameOver()):alert(_0x44fc59(0x129));}function check6(){const _0x234891=_0x21a2;let _0x1abb82=document[_0x234891(0xf2)]('q6')[_0x234891(0x101)][_0x234891(0xf3)]();_0x1abb82===_0x234891(0x127)?(alert(_0x234891(0x11a)),score++,document['getElementById'](_0x234891(0x140))[_0x234891(0xf5)]=!![],gameOver()):alert(_0x234891(0x12b));}function check7(){const _0x8df507=_0x21a2;let _0x4272ac=document[_0x8df507(0xf2)]('q7')[_0x8df507(0x101)][_0x8df507(0xf3)]();_0x4272ac===_0x8df507(0xe4)?(alert(_0x8df507(0x11a)),score++,document[_0x8df507(0xf2)]('seven')[_0x8df507(0xf5)]=!![],gameOver()):alert('Incorrect.\x20Refer\x20to\x20an\x20external\x20script\x20with\x20<script\x20src=\x22filename.js\x22>.');}function check8(){const _0x45deeb=_0x21a2;let _0x2d5ee0=document['getElementById']('q8')[_0x45deeb(0x101)][_0x45deeb(0xf3)]();_0x2d5ee0[_0x45deeb(0x137)]('//')||_0x2d5ee0[_0x45deeb(0x137)]('/*')?(alert('Correct!'),score++,document[_0x45deeb(0xf2)](_0x45deeb(0x14a))[_0x45deeb(0xf5)]=!![],gameOver()):alert(_0x45deeb(0x11d));}function check9(){const _0x485726=_0x21a2;let _0x13204e=document[_0x485726(0xf2)]('q9')[_0x485726(0x101)]['trim']();_0x13204e[_0x485726(0x137)](_0x485726(0xe0))||_0x13204e['startsWith'](_0x485726(0xe6))||_0x13204e[_0x485726(0x137)](_0x485726(0x142))?(alert(_0x485726(0x11a)),score++,document[_0x485726(0xf2)](_0x485726(0xea))[_0x485726(0xf5)]=!![],gameOver()):alert(_0x485726(0xf6));}function _0x21a2(_0x561480,_0x1d2927){const _0x541226=_0x5412();return _0x21a2=function(_0x21a2f4,_0x5cb252){_0x21a2f4=_0x21a2f4-0xd5;let _0x5aeb2d=_0x541226[_0x21a2f4];return _0x5aeb2d;},_0x21a2(_0x561480,_0x1d2927);}function check10(){const _0x444a4d=_0x21a2;let _0x12b405=document[_0x444a4d(0xf2)](_0x444a4d(0xf0))[_0x444a4d(0x101)][_0x444a4d(0xf3)]();_0x12b405[_0x444a4d(0x137)]('if')?(alert('Correct!'),score++,document[_0x444a4d(0xf2)](_0x444a4d(0x10d))[_0x444a4d(0xf5)]=!![],gameOver()):alert(_0x444a4d(0x10a));}function check11(){const _0x1b9626=_0x21a2;let _0x62e724=document['getElementById'](_0x1b9626(0x131))[_0x1b9626(0x101)]['trim']();_0x62e724==='console.log(\x27Hello,\x20console!\x27);'||_0x62e724===_0x1b9626(0xf8)?(alert('Correct!'),score++,document['getElementById'](_0x1b9626(0xfc))['disabled']=!![],gameOver()):alert(_0x1b9626(0x146));}function check12(){const _0x34a04c=_0x21a2;let _0x3ac73a=document['getElementById'](_0x34a04c(0x147))['value']['trim'](),_0x4ee432=_0x3ac73a[_0x34a04c(0x123)](/['"]/g,'\x22')[_0x34a04c(0x14d)]();_0x4ee432[_0x34a04c(0x105)](_0x34a04c(0xf7))||_0x4ee432['includes']('let\x20fruits\x20=\x20[\x22apple\x22,\x20\x22banana\x22,\x20\x22cherry\x22]')||_0x4ee432['includes'](_0x34a04c(0x122))?(alert(_0x34a04c(0x11a)),score++,document['getElementById'](_0x34a04c(0xda))[_0x34a04c(0xf5)]=!![],gameOver()):alert(_0x34a04c(0x115));}function check13(){const _0x36f73b=_0x21a2;let _0x142b30=document[_0x36f73b(0xf2)](_0x36f73b(0xe3))[_0x36f73b(0x101)][_0x36f73b(0xf3)]();_0x142b30===_0x36f73b(0xe2)?(alert(_0x36f73b(0x11a)),score++,document[_0x36f73b(0xf2)](_0x36f73b(0x136))[_0x36f73b(0xf5)]=!![],gameOver()):alert(_0x36f73b(0x133));}function check14(){const _0x40fc6b=_0x21a2;let _0x5c10ce=document['getElementById'](_0x40fc6b(0x128))['value'][_0x40fc6b(0xf3)]();_0x5c10ce==='.pop()'?(alert('Correct!'),score++,document['getElementById'](_0x40fc6b(0x116))['disabled']=!![],gameOver()):alert(_0x40fc6b(0x10b));}function _0x5412(){const _0x67eb3e=['promise','1427022uzrkWv','floor','value','submitForm','q20','2775240jfjipI','includes','addEventListener','timer-display','q16','Incorrect.\x20Try\x20again.','Incorrect.\x20If\x20statements\x20start\x20with\x20the\x20\x27if\x27\x20keyword.','Incorrect.\x20The\x20method\x20to\x20remove\x20the\x20last\x20element\x20from\x20an\x20array\x20is\x20\x27pop\x27.','eighteen','ten','fifteen','async','document.body.appendChild(div);','Incorrect.\x20Use\x20the\x20<script\x20src=\x22filename.js\x22>\x20syntax.','localStorage[\x27greeting\x27]\x20=\x20\x27hello\x27;','q15','twenty-six','Incorrect.\x20Remember\x20to\x20declare\x20an\x20array\x20named\x20\x27fruits\x27\x20with\x20the\x20strings\x20\x22Apple\x22,\x20\x22Banana\x22,\x20and\x20\x22Cherry\x22.','fourteen','fruits.indexOf(\x27Banana\x27)','q21','Incorrect.\x20To\x20append\x20the\x20\x27div\x27\x20to\x20the\x20body,\x20complete\x20the\x20line\x20as:\x20document.body.appendChild(div);','Correct!','localStorage.greeting\x20=\x20\x27hello\x27;','1130526FLZzXP','Incorrect.\x20Comments\x20in\x20JavaScript\x20start\x20with\x20//\x20for\x20single\x20line\x20or\x20/*\x20*/\x20for\x20multi-line.','textContent','5948izgcSk','q27','q29','const\x20fruits\x20=\x20[\x22apple\x22,\x20\x22banana\x22,\x20\x22cherry\x22]','replace','()\x20=>\x205','q24','<script>','myFunction();','q14','Incorrect.\x20A\x20function\x20is\x20declared\x20with\x20the\x20\x27function\x27\x20keyword.','twenty-four','Incorrect.\x20Functions\x20are\x20called\x20by\x20their\x20name\x20followed\x20by\x20parentheses.','localStorage.setItem(\x27greeting\x27,\x20\x27hello\x27);','q28','Incorrect.\x20Use\x20document.querySelector(\x27.example\x27)\x20to\x20select\x20elements\x20by\x20class.','4754565ahPDIh','q23','q11','twenty','Incorrect.\x20The\x20method\x20to\x20add\x20elements\x20to\x20the\x20end\x20of\x20an\x20array\x20is\x20\x27push\x27.','addEventListener(\x27click\x27,\x20handleClick);','Incorrect.\x20Complete\x20the\x20line\x20with:\x20addEventListener(\x27click\x27,\x20handleClick);\x20to\x20add\x20a\x20click\x20event\x20listener.','thirteen','startsWith','368XhJnnZ','document\x20object\x20model','twenty-seven','Incorrect.\x20The\x20simplest\x20arrow\x20function\x20returning\x205\x20is:\x20()\x20=>\x205;','three','alert(\x27Hello\x20World\x27);','<script\x20src=','four','six','Score:\x20','const','document.querySelector(\x27#demo\x27);','.btn2','1424SnGdtr','Incorrect.\x20Remember\x20the\x20syntax\x20for\x20logging\x20to\x20the\x20console.','q12','click','4522xoyOVk','eight','document.getElementById(\x27demo\x27);','Incorrect.\x20Ensure\x20you\x27re\x20using\x20the\x20correct\x20syntax\x20for\x20declaring\x20a\x20function.','toLowerCase','indexOf(\x22Banana\x22)','twenty-nine','twenty-two','seventeen','alert(\x22Hello\x20World\x22);','Incorrect.\x20Complete\x20the\x20line\x20with:\x20remove();\x20to\x20remove\x20the\x20element\x20with\x20the\x20ID\x20\x27toRemove\x27.','twelve','Incorrect.\x20Use\x20localStorage.setItem\x20to\x20store\x20data.','querySelector','twenty-three','function','Incorrect.\x20Asynchronous\x20functions\x20are\x20declared\x20with\x20\x27async\x27.','var','()=>5','.push()','q13','<script\x20src=\x22xxx.js\x22>','test','let','twenty-one','five','Incorrect.\x20Remember\x20how\x20to\x20select\x20an\x20element\x20by\x20its\x20ID.','nine','thirty','submit','18519DeRPEc','.js','q22','q10','Incorrect.\x20Use\x20\x27indexOf\x27\x20to\x20find\x20the\x20index\x20of\x20an\x20element\x20in\x20an\x20array.','getElementById','trim','Incorrect.\x20Use\x20\x27element.addEventListener(\x22click\x22,\x20function)\x27\x20to\x20react\x20to\x20click\x20events.','disabled','Incorrect.\x20Variables\x20can\x20be\x20declared\x20with\x20var,\x20let,\x20or\x20const.','var\x20fruits\x20=\x20[\x22apple\x22,\x20\x22banana\x22,\x20\x22cherry\x22]','console.log(\x22Hello,\x20console!\x22);','Incorrect.\x20Asynchronous\x20computations\x20can\x20be\x20handled\x20with\x20Promises.','preventDefault','score','eleven','Incorrect.\x20Did\x20you\x20forget\x20the\x20;?'];_0x5412=function(){return _0x67eb3e;};return _0x5412();}function check15(){const _0x68d5bf=_0x21a2;let _0x51b431=document[_0x68d5bf(0xf2)](_0x68d5bf(0x113))[_0x68d5bf(0x101)][_0x68d5bf(0xf3)]();_0x51b431===_0x68d5bf(0x117)||_0x51b431===_0x68d5bf(0x14e)?(alert(_0x68d5bf(0x11a)),score++,document['getElementById'](_0x68d5bf(0x10e))[_0x68d5bf(0xf5)]=!![],gameOver()):alert(_0x68d5bf(0xf1));}function check16(){const _0x8cefe7=_0x21a2;let _0x37c7c0=document[_0x8cefe7(0xf2)](_0x8cefe7(0x108))[_0x8cefe7(0x101)]['trim'](),_0x34a36b=/answer\s*=\s*true\s*\?\s*['"]Yes['"]\s*:\s*['"]No['"]/i;_0x34a36b['test'](_0x37c7c0)?(alert(_0x8cefe7(0x11a)),score++,document[_0x8cefe7(0xf2)]('sixteen')[_0x8cefe7(0xf5)]=!![],gameOver()):alert('Incorrect.\x20Remember,\x20the\x20format\x20for\x20the\x20ternary\x20operator\x20is:\x20variable\x20=\x20condition\x20?\x20\x27value\x20if\x20true\x27\x20:\x20\x27value\x20if\x20false\x27;');}function check17(){const _0x330287=_0x21a2;let _0x3e7bed=document[_0x330287(0xf2)]('q17')[_0x330287(0x101)][_0x330287(0xf3)]();/^\s*function\s+multiply\s*\(\s*\w+\s*,\s*\w+\s*\)\s*\{\s*return\s+\w+\s*\*\s+\w+\s*;\s*\}$/[_0x330287(0xe5)](_0x3e7bed)?(alert(_0x330287(0x11a)),score++,document[_0x330287(0xf2)](_0x330287(0xd7))['disabled']=!![],gameOver()):alert(_0x330287(0x14c));}function check18(){const _0x4c5dd7=_0x21a2;let _0xcf5baf=document[_0x4c5dd7(0xf2)]('q18')[_0x4c5dd7(0x101)][_0x4c5dd7(0xf3)]();/^\s*element\.addEventListener\s*\(\s*['"]click['"]\s*,/i[_0x4c5dd7(0xe5)](_0xcf5baf)?(alert(_0x4c5dd7(0x11a)),score++,document['getElementById'](_0x4c5dd7(0x10c))['disabled']=!![],gameOver()):alert(_0x4c5dd7(0xf4));}function check19(){const _0x51ea4f=_0x21a2;let _0x58b71f=document[_0x51ea4f(0xf2)]('q19')[_0x51ea4f(0x101)][_0x51ea4f(0xf3)]();_0x58b71f===_0x51ea4f(0x143)||_0x58b71f===_0x51ea4f(0x14b)?(alert(_0x51ea4f(0x11a)),score++,document[_0x51ea4f(0xf2)]('nineteen')['disabled']=!![],gameOver()):alert(_0x51ea4f(0xe9));}function check20(){const _0x2ab448=_0x21a2;let _0xe6ed5=document[_0x2ab448(0xf2)](_0x2ab448(0x103))[_0x2ab448(0x101)]['trim']()[_0x2ab448(0x14d)]();_0xe6ed5['match'](/constant|cannot be (changed|reassigned)/)?(alert(_0x2ab448(0x11a)),score++,document['getElementById'](_0x2ab448(0x132))[_0x2ab448(0xf5)]=!![],gameOver()):alert('Incorrect.\x20The\x20\x27const\x27\x20keyword\x20is\x20used\x20to\x20declare\x20variables\x20whose\x20values\x20cannot\x20be\x20reassigned.');}function check21(){const _0x88ab86=_0x21a2;let _0x119e9a=document[_0x88ab86(0xf2)](_0x88ab86(0x118))['value'][_0x88ab86(0xf3)]();_0x119e9a===_0x88ab86(0x124)||_0x119e9a===_0x88ab86(0xe1)?(alert(_0x88ab86(0x11a)),score++,document[_0x88ab86(0xf2)](_0x88ab86(0xe7))[_0x88ab86(0xf5)]=!![],gameOver()):alert(_0x88ab86(0x13b));}function check22(){const _0x17f047=_0x21a2;let _0x276618=document[_0x17f047(0xf2)](_0x17f047(0xef))[_0x17f047(0x101)]['trim']()['toLowerCase']();_0x276618===_0x17f047(0x10f)?(alert(_0x17f047(0x11a)),score++,document[_0x17f047(0xf2)](_0x17f047(0xd6))[_0x17f047(0xf5)]=!![],gameOver()):alert(_0x17f047(0xdf));}function check23(){const _0x3c6684=_0x21a2;let _0x2c5d18=document[_0x3c6684(0xf2)](_0x3c6684(0x130))['value']['trim']();_0x2c5d18[_0x3c6684(0x14d)]()===_0x3c6684(0xfe)?(alert(_0x3c6684(0x11a)),score++,document['getElementById'](_0x3c6684(0xdd))[_0x3c6684(0xf5)]=!![],gameOver()):alert(_0x3c6684(0xf9));}function check24(){const _0x361f80=_0x21a2;let _0x51341f=document[_0x361f80(0xf2)](_0x361f80(0x125))['value']['trim']();/^\s*fetch\(/[_0x361f80(0xe5)](_0x51341f)?(alert(_0x361f80(0x11a)),score++,document[_0x361f80(0xf2)](_0x361f80(0x12a))[_0x361f80(0xf5)]=!![],gameOver()):alert('Incorrect.\x20The\x20Fetch\x20API\x20is\x20used\x20to\x20make\x20HTTP\x20requests.');}function check25(){const _0x1e6e73=_0x21a2;let _0x1ec8c2=document['getElementById']('q25')[_0x1e6e73(0x101)]['trim']();/^\s*document\.querySelector\(\s*['"]\.example['"]\s*\)/['test'](_0x1ec8c2)?(alert(_0x1e6e73(0x11a)),score++,document['getElementById']('twenty-five')[_0x1e6e73(0xf5)]=!![],gameOver()):alert(_0x1e6e73(0x12e));}function check26(){const _0x1b5c33=_0x21a2;let _0x454553=document[_0x1b5c33(0xf2)]('q26')[_0x1b5c33(0x101)][_0x1b5c33(0xf3)]();_0x454553===_0x1b5c33(0x110)?(alert('Correct!'),score++,document[_0x1b5c33(0xf2)](_0x1b5c33(0x114))[_0x1b5c33(0xf5)]=!![],gameOver()):alert(_0x1b5c33(0x119));}function check27(){const _0x1fc8e9=_0x21a2;let _0x1fed67=document['getElementById'](_0x1fc8e9(0x120))[_0x1fc8e9(0x101)]['trim']();_0x1fed67===_0x1fc8e9(0x134)?(alert(_0x1fc8e9(0x11a)),score++,document[_0x1fc8e9(0xf2)](_0x1fc8e9(0x13a))[_0x1fc8e9(0xf5)]=!![],gameOver()):alert(_0x1fc8e9(0x135));}function check28(){const _0x1cdc94=_0x21a2;let _0x3ade6f=document[_0x1cdc94(0xf2)](_0x1cdc94(0x12d))[_0x1cdc94(0x101)][_0x1cdc94(0xf3)]();_0x3ade6f===_0x1cdc94(0x12c)||_0x3ade6f===_0x1cdc94(0x112)||_0x3ade6f===_0x1cdc94(0x11b)?(alert(_0x1cdc94(0x11a)),score++,document[_0x1cdc94(0xf2)]('twenty-eight')[_0x1cdc94(0xf5)]=!![],gameOver()):alert(_0x1cdc94(0xdb));}function check29(){const _0x1267f6=_0x21a2;let _0x20763d=document[_0x1267f6(0xf2)](_0x1267f6(0x121))[_0x1267f6(0x101)][_0x1267f6(0xf3)]();_0x20763d==='remove();'?(alert(_0x1267f6(0x11a)),score++,document[_0x1267f6(0xf2)](_0x1267f6(0xd5))[_0x1267f6(0xf5)]=!![],gameOver()):alert(_0x1267f6(0xd9));}function check30(){const _0x23a4ed=_0x21a2;let _0x3452dc=document['getElementById']('q30')[_0x23a4ed(0x101)]['trim']();_0x3452dc[_0x23a4ed(0x14d)]()===_0x23a4ed(0x139)?(alert(_0x23a4ed(0x11a)),score++,document['getElementById'](_0x23a4ed(0xeb))[_0x23a4ed(0xf5)]=!![],gameOver()):alert('Incorrect.\x20\x27DOM\x27\x20stands\x20for\x20Document\x20Object\x20Model,\x20which\x20is\x20crucial\x20for\x20manipulating\x20web\x20pages.');}function gameOver(){const _0x2e22e1=_0x21a2;document[_0x2e22e1(0xf2)](_0x2e22e1(0xfb))[_0x2e22e1(0x101)]=score,document[_0x2e22e1(0xf2)]('floating-score')[_0x2e22e1(0x11e)]=_0x2e22e1(0x141)+score;let _0x5033ea=formatTime(timerInSeconds);document[_0x2e22e1(0xf2)]('timer')[_0x2e22e1(0x101)]=_0x5033ea;}document[_0x1f46e3(0xdc)](_0x1f46e3(0x144))[_0x1f46e3(0x106)](_0x1f46e3(0x148),function(_0x51b3fa){const _0x23d38c=_0x1f46e3;_0x51b3fa[_0x23d38c(0xfa)](),gameOver(),document['getElementById'](_0x23d38c(0x102))[_0x23d38c(0xec)]();});
