var btns = document.querySelectorAll('.drum');

var w = new SoundBit('tom-1.mp3');
var a = new SoundBit('tom-2.mp3');
var s = new SoundBit('tom-3.mp3');
var d = new SoundBit('tom-4.mp3');
var j = new SoundBit('crash.mp3');
var k = new SoundBit('kick-bass.mp3');
var l = new SoundBit('snare.mp3');

for (var i = 0, btnsLength = btns.length; i < btnsLength; i++) {
  btns[i].addEventListener('click', handleClick);
}

document.addEventListener('keydown', handleKeyDown);

function SoundBit(audioName) {
  return new Audio('sounds/' + audioName);
}

function makeSound(character) {
  switch (character) {
    case 'w': w.play(); break;
    case 'a': a.play(); break;
    case 's': s.play(); break;
    case 'd': d.play(); break;
    case 'j': j.play(); break;
    case 'k': k.play(); break;
    case 'l': l.play(); break;
    default: ;
  }
}

function buttonAnimation(key) {
  var activeBtn = document.querySelector('.' + key);
  activeBtn.classList.add('pressed');

  setTimeout(function() {
    activeBtn.classList.remove('pressed');
  }, 100);
}

function handleClick() {
  var btn = this.classList[0];

  makeSound(btn);
  buttonAnimation(btn);
}


function handleKeyDown(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}