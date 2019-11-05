const keysArray = [
  {
    valueRu: 'ё',
    valueEng: '`',
    keyCode: 'Backquote',
  },
  {
    value: '1',
    specialValue: '!',
    keyCode: 'Digit1',
  },
  {
    value: '2',
    specialValue: '@',
    keyCode: 'Digit2',
  },
  {
    value: '3',
    specialValue: '#',
    keyCode: 'Digit3',
  },
  {
    value: '4',
    specialValue: '$',
    keyCode: 'Digit4',
  },
  {
    value: '5',
    specialValue: '%',
    keyCode: 'Digit5',
  },
  {
    value: '6',
    specialValue: '^',
    keyCode: 'Digit6',
  },
  {
    value: '7',
    specialValue: '&',
    keyCode: 'Digit7',
  },
  {
    value: '8',
    specialValue: '*',
    keyCode: 'Digit8',
  },
  {
    value: '9',
    specialValue: '(',
    keyCode: 'Digit9',
  },
  {
    value: '0',
    specialValue: ')',
    keyCode: 'Digit0',
  },
  {
    value: '-',
    specialValue: '_',
    keyCode: 'Minus',
  },
  {
    value: '=',
    specialValue: '+',
    keyCode: 'Equal',
  },
  {
    value: 'Backspace',
    keyCode: 'Backspace',
  },
  {
    value: 'Tab',
    keyCode: 'Tab',
  },
  {
    valueRu: 'й',
    valueEng: 'q',
    keyCode: 'KeyQ',
  },
  {
    valueRu: 'ц',
    valueEng: 'w',
    keyCode: 'KeyW',
  },
  {
    valueRu: 'у',
    valueEng: 'e',
    keyCode: 'KeyE',
  },
  {
    valueRu: 'к',
    valueEng: 'r',
    keyCode: 'KeyR',
  },
  {
    valueRu: 'е',
    valueEng: 't',
    keyCode: 'KeyT',
  },
  {
    valueRu: 'н',
    valueEng: 'y',
    keyCode: 'KeyY',
  },
  {
    valueRu: 'г',
    valueEng: 'u',
    keyCode: 'KeyU',
  },
  {
    valueRu: 'ш',
    valueEng: 'i',
    keyCode: 'KeyI',
  },
  {
    valueRu: 'щ',
    valueEng: 'o',
    keyCode: 'KeyO',
  },
  {
    valueRu: 'з',
    valueEng: 'p',
    keyCode: 'KeyP',
  },
  {
    valueRu: 'х',
    valueEng: '[',
    keyCode: 'BracketLeft',
  },
  {
    valueRu: 'ъ',
    valueEng: ']',
    keyCode: 'BracketRight',
  },
  {
    valueRu: '\\',
    valueEng: '/',
    keyCode: 'Backslash',
  },
  {
    value: 'Caps lock',
    keyCode: 'CapsLock',
  },
  {
    valueRu: 'ф',
    valueEng: 'a',
    keyCode: 'KeyA',
  },
  {
    valueRu: 'ы',
    valueEng: 's',
    keyCode: 'KeyS',
  },
  {
    valueRu: 'в',
    valueEng: 'd',
    keyCode: 'KeyD',
  },
  {
    valueRu: 'а',
    valueEng: 'f',
    keyCode: 'KeyF',
  },
  {
    valueRu: 'п',
    valueEng: 'g',
    keyCode: 'KeyG',
  },
  {
    valueRu: 'р',
    valueEng: 'h',
    keyCode: 'KeyH',
  },
  {
    valueRu: 'о',
    valueEng: 'j',
    keyCode: 'KeyJ',
  },
  {
    valueRu: 'л',
    valueEng: 'k',
    keyCode: 'KeyK',
  },
  {
    valueRu: 'д',
    valueEng: 'l',
    keyCode: 'KeyL',
  },
  {
    valueRu: 'ж',
    valueEng: ';',
    keyCode: 'Semicolon',
  },
  {
    valueRu: 'э',
    valueEng: '\'',
    keyCode: 'Quote',
  },
  {
    value: 'Enter',
    keyCode: 'Enter',
  },
  {
    value: 'Shift',
    keyCode: 'ShiftLeft',
  },
  {
    valueRu: 'я',
    valueEng: 'z',
    keyCode: 'KeyZ',
  },
  {
    valueRu: 'ч',
    valueEng: 'x',
    keyCode: 'KeyX',
  },
  {
    valueRu: 'c',
    valueEng: 'с',
    keyCode: 'KeyC',
  },
  {
    valueRu: 'м',
    valueEng: 'v',
    keyCode: 'KeyV',
  },
  {
    valueRu: 'и',
    valueEng: 'b',
    keyCode: 'KeyB',
  },
  {
    valueRu: 'т',
    valueEng: 'n',
    keyCode: 'KeyN',
  },
  {
    valueRu: 'ь',
    valueEng: 'm',
    keyCode: 'KeyM',
  },
  {
    valueRu: 'б',
    valueEng: ',',
    keyCode: 'Comma',
  },
  {
    valueRu: 'ю',
    valueEng: '.',
    keyCode: 'Period',
  },
  {
    valueRu: '.',
    valueEng: '/',
    keyCode: 'Slash',
  },
  {
    value: 'Shift',
    keyCode: 'ShiftRight',
  },
  {
    value: 'Ctrl',
    keyCode: 'ControlLeft',
  },
  {
    value: 'Win',
    keyCode: 'MetaLeft',
  },
  {
    value: 'Alt',
    keyCode: 'AltLeft',
  },
  {
    value: 'Space',
    keyCode: 'Space',
  },
  {
    value: 'Alt',
    keyCode: 'AltRight',
  },
  {
    value: 'Ctrl',
    keyCode: 'ControlRight',
  },
];

let capsLockState = true;


function isLanguage() {
  if (localStorage.getItem('lang') === 'true') {
    return true;
  }
  return false;
}
let lang = isLanguage() || false;

function keysToUp() {
  keysArray.forEach((item) => {
    const key = document.getElementById(item.keyCode);

    if (item.specialValue) {
      key.textContent = item.specialValue;
    } else {
      key.textContent = key.textContent.toLowerCase();
    }
  });
}
function keysToLow() {
  keysArray.forEach((item) => {
    const key = document.getElementById(item.keyCode);

    if (item.specialValue) {
      key.textContent = item.specialValue;
    } else {
      key.textContent = key.textContent.toUpperCase();
    }
  });
}
function actionCapsLock() {
  capsLockState = !capsLockState;
  if (capsLockState) {
    keysToUp();
  } else {
    keysToLow();
  }
}

function actionForButtons(keyCode) {
  const button = document.getElementById(keyCode);
  let text = document.getElementById('textarea-input').value;

  document.getElementById('textarea-input').focus();

  switch (keyCode) {
    case 'Enter':
      text += '\n';
      break;

    case 'Backspace':
      text = text.substring(0, text.length - 1);
      break;

    case 'Space':
      text += ' ';
      break;

    case 'Tab':
      text += '\t';
      break;

    case 'AltLeft':
    case 'AltRight':
    case 'ControlLeft':
    case 'ControlRight':
      break;

    case 'CapsLock':
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }
      actionCapsLock();
      break;

    case 'ShiftLeft':
    case 'ShiftRight':
      if (capsLockState) {
        keysToLow();
      } else {
        keysToUp();
      }
      break;

    default:
      text += button.textContent;
  }
  document.getElementById('textarea-input').value = text;
  if (keyCode !== 'CapsLock') button.classList.add('active');
}

document.addEventListener('keydown', (event) => {
  actionForButtons(event.code);

  if (document.getElementById('ShiftLeft').classList.contains('active')
    && document.getElementById('AltLeft').classList.contains('active')) {
    keysArray.forEach((item) => {
      const key = document.getElementById(item.keyCode);

      if (isLanguage()) {
        key.textContent = item.valueRu || item.value;
      } else {
        key.textContent = item.valueEng || item.value;
      }
    });

    localStorage.setItem('lang', lang = !lang);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock') document.getElementById(event.code).classList.remove('active');
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (capsLockState) {
      keysToUp();
    } else {
      keysToLow();
    }
  }
});


window.addEventListener('load', () => {
  const input = document.createElement('textarea');
  input.rows = 7;
  input.cols = 120;
  const keyboard = document.createElement('div');

  input.setAttribute('id', 'textarea-input');
  keyboard.classList.add('keyboard');

  input.addEventListener('keydown', (event) => {
    event.preventDefault();
  });

  keysArray.forEach((item) => {
    const key = document.createElement('button');

    key.classList.add('keyboard__key');
    key.setAttribute('id', item.keyCode);

    key.addEventListener('mousedown', () => {
      actionForButtons(item.keyCode);
    });
    key.addEventListener('mouseup', () => {
      document.getElementById(item.keyCode).classList.remove('active');
    });

    if (isLanguage()) {
      key.textContent = item.valueRu || item.value;
    } else {
      key.textContent = item.valueEng || item.value;
    }

    keyboard.appendChild(key);
  });

  document.body.appendChild(input);
  document.body.appendChild(keyboard);
});

document.addEventListener('keydown', (e) => {
  document.getElementById(e.code).classList.add('active');
});

document.addEventListener('keyup', (e) => {
  document.getElementById(e.code).classList.remove('active');
});
