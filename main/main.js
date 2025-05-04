const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
  ];

  let word;
  let loc;
  let score;
  let miss;
  let isPlaying = false;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');

  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  }

  function setWord() {
    word = words[Math.floor(Math.random() * words.length)];
    loc = 0;
    updateTarget();
  }

  window.addEventListener('click', () => {
    if (isPlaying) return;
    isPlaying = true;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    setWord();
  });

  window.addEventListener('keydown', e => {
    if (!isPlaying) return;
    if (e.key === word[loc]) {
      loc++;
      if (loc === word.length) {
        score++;
        scoreLabel.textContent = score;
        setWord();
      } else {
        updateTarget();
      }
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });