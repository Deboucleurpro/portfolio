let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById(\"question\").textContent = q.question;
  q.options.forEach((opt, i) => {
    document.getElementById(\"opt\" + i).textContent = opt;
  });
}

function checkAnswer(selected) {
  const q = questions[current];
  const isCorrect = selected === q.answer;
  if (isCorrect) score++;
  alert((isCorrect ? \"✅ Bonne réponse ! \" : \"❌ Mauvaise réponse. \") + q.explanation);
  current++;
  if (current < questions.length) showQuestion();
  else document.body.innerHTML = `<h2>Score : ${score}/${questions.length}</h2>`;
}

window.onload = showQuestion;
