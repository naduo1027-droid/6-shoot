const LEVELS = [
  { category: "数字", words: [["one", "最小的正整数。"], ["two", "一双鞋的数量。"], ["three", "三角形有三条边。"], ["four", "一年有四个季节。"], ["five", "一只手通常有五根手指。"]], sentences: [["i am one", "一个非常短的自我表达句。"], ["you have two", "表示你拥有两个东西。"], ["we see three", "表示我们看见三个东西。"]] },
  { category: "颜色", words: [["red", "苹果和消防车常见的颜色。"], ["blue", "天空和海洋常见的颜色。"], ["green", "草地和树叶常见的颜色。"], ["white", "雪和牛奶常见的颜色。"], ["black", "夜晚和墨水常见的颜色。"]], sentences: [["the sky is blue", "描述天空颜色。"], ["the grass is green", "描述草地颜色。"], ["a rose is red", "描述玫瑰颜色。"]] },
  { category: "动物", words: [["cat", "常被养在家里，会喵喵叫。"], ["dog", "常被称为人类朋友。"], ["fish", "生活在水里。"], ["horse", "可以奔跑，也常出现在西部故事里。"], ["tiger", "有条纹的大型猫科动物。"]], sentences: [["a dog can run", "狗会跑。"], ["the horse is fast", "马很快。"], ["a fish lives in water", "鱼生活在水里。"]] },
  { category: "食物", words: [["rice", "亚洲餐桌上常见的主食。"], ["bread", "用面粉烤成。"], ["noodle", "用面粉、米粉或淀粉做成的条状面食。"], ["burger", "肉饼和配料夹在圆面包里。"], ["hotpot", "把食材放进热汤里涮煮。"]], sentences: [["i eat rice", "我吃米饭。"], ["we cook noodles", "我们做面条。"], ["hotpot is warm", "火锅很热。"]] },
  { category: "学校", words: [["book", "用来阅读或学习。"], ["teacher", "在课堂上教学生的人。"], ["student", "在学校学习的人。"], ["homework", "课后要完成的作业。"], ["library", "收藏书籍的地方。"]], sentences: [["students study hard", "学生努力学习。"], ["we read in the library", "我们在图书馆读书。"], ["homework takes time", "作业需要时间。"]] },
  { category: "城市", words: [["tokyo", "这座城市在日本。"], ["paris", "这座城市在法国。"], ["beijing", "这座城市在中国。"], ["london", "这座城市在英国。"], ["madrid", "这座城市在西班牙。"]], sentences: [["tokyo is in japan", "东京在日本。"], ["paris has many museums", "巴黎有很多博物馆。"], ["beijing is very old", "北京历史悠久。"]] },
  { category: "自然", words: [["river", "会流动的水道。"], ["forest", "有许多树木的地方。"], ["mountain", "很高的自然地形。"], ["desert", "降雨很少的地方。"], ["glacier", "缓慢移动的大块冰体。"]], sentences: [["a river moves slowly", "河流缓慢流动。"], ["we climb the mountain", "我们爬山。"], ["a desert can be dry", "沙漠可能很干燥。"]] },
  { category: "科技", words: [["pixel", "屏幕图像中最小的显示单位。"], ["router", "转发网络流量的设备。"], ["browser", "打开网页的软件。"], ["server", "提供数据与服务的系统。"], ["python", "常用于脚本和人工智能的编程语言。"]], sentences: [["a browser opens websites", "浏览器打开网站。"], ["the server sends data", "服务器发送数据。"], ["python can read files", "Python 可以读取文件。"]] },
  { category: "方向", words: [["north", "地图上通常在上方。"], ["south", "和 north 相反。"], ["vertical", "上下方向的。"], ["horizontal", "左右延伸、与地平线平行的。"], ["backward", "向后。"]], sentences: [["the line is horizontal", "这条线是水平的。"], ["move forward carefully", "小心向前移动。"], ["the tower is vertical", "塔是垂直的。"]] },
  { category: "科学", words: [["oxygen", "人类呼吸需要的一种气体。"], ["gravity", "让物体向地球靠近的力。"], ["molecule", "由原子组成的微小结构。"], ["friction", "表面接触运动时产生的阻力。"], ["photosynthesis", "植物利用光制造养分的过程。"]], sentences: [["oxygen helps humans breathe", "氧气帮助人类呼吸。"], ["gravity pulls objects downward", "重力把物体向下拉。"], ["plants use photosynthesis for food", "植物通过光合作用制造养分。"]] },
  { category: "高级词汇", words: [["analyze", "仔细分解并研究。"], ["evidence", "支持观点的证据。"], ["efficient", "用较少资源完成任务。"], ["ambiguous", "含义不清或有多种解释。"], ["hypothesis", "等待验证的解释或猜想。"]], sentences: [["students analyze evidence carefully", "学生仔细分析证据。"], ["an efficient strategy saves time", "高效策略节省时间。"], ["a hypothesis needs careful testing", "假设需要仔细测试。"]] },
  { category: "终极综合", words: [["collaboration", "多人共同完成任务。"], ["interdisciplinary", "跨越多个学科领域的。"], ["sustainability", "长期维持资源和环境平衡。"], ["counterargument", "相反论点或反驳。"], ["contextualization", "把信息放到背景中理解。"]], sentences: [["collaboration improves complex problem solving", "协作提升复杂问题解决能力。"], ["sustainability requires long term planning", "可持续性需要长期规划。"], ["contextualization helps readers understand evidence", "背景化帮助读者理解证据。"]] },
];

const MAX_WRONG = 6;
const RAGE_DURATION_MS = 90_000;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const appShell = document.querySelector(".app-shell");
const stage = document.querySelector(".stage");
const scene = document.querySelector("#scene");
const cowboy = document.querySelector("#cowboy");
const targetPerson = document.querySelector("#targetPerson");
const revolver = document.querySelector("#revolver");
const rageFill = document.querySelector("#rageFill");
const rageValue = document.querySelector("#rageValue");
const rageMark = document.querySelector("#rageMark");
const wordArea = document.querySelector("#wordArea");
const keyboard = document.querySelector("#keyboard");
const message = document.querySelector("#message");
const wrongCounter = document.querySelector("#wrongCounter");
const categoryName = document.querySelector("#categoryName");
const modeName = document.querySelector("#modeName");
const modeSelect = document.querySelector("#modeSelect");
const hintButton = document.querySelector("#hintButton");
const toast = document.querySelector("#toast");

let modeKey = "word";
let levelIndex = 0;
let answer = "";
let currentHint = "";
let guessed = new Set();
let wrong = 0;
let finished = false;
let roundTimer;
let rageFrame;
let rageStartedAt = 0;
let audioContext;

function pickItem() {
  const level = LEVELS[levelIndex];
  const pool = modeKey === "sentence" ? level.sentences : level.words;
  const [text, hint] = pool[Math.floor(Math.random() * pool.length)];
  return { text: text.toLowerCase(), hint, category: level.category };
}

function unlockAudio() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!audioContext) audioContext = new Ctx();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone(freq, start = 0, duration = 0.16, type = "sine", gain = 0.1, slideTo) {
  const ctx = unlockAudio();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const env = ctx.createGain();
  const t = ctx.currentTime + start;
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + duration);
  env.gain.setValueAtTime(0.0001, t);
  env.gain.exponentialRampToValueAtTime(gain, t + 0.015);
  env.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(env);
  env.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + duration + 0.03);
}

function playLoadingSound() {
  playTone(170, 0, 0.06, "square", 0.12, 90);
  playTone(390, 0.06, 0.05, "triangle", 0.1);
  playTone(82, 0.12, 0.1, "sawtooth", 0.08, 55);
}

function playWinMusic() {
  [523, 659, 784, 1047, 1175, 1319, 1568].forEach((f, i) => playTone(f, i * 0.09, 0.18, "triangle", 0.11));
  [262, 330, 392, 523].forEach((f) => playTone(f, 0.72, 0.48, "sine", 0.055));
}

function playLoseMusic() {
  [392, 349, 311, 262, 208, 165, 131, 98].forEach((f, i) => playTone(f, i * 0.18, 0.36, "sine", 0.12, f * 0.82));
  playTone(92, 0.72, 1.1, "sawtooth", 0.06, 43);
}

function hintText(prefix = "") {
  return `${prefix ? `${prefix} ` : ""}提示：${currentHint}`;
}

function renderKeyboard() {
  keyboard.innerHTML = "";
  ALPHABET.forEach((letter) => {
    const button = document.createElement("button");
    button.className = "key";
    button.type = "button";
    button.dataset.letter = letter;
    button.textContent = letter;
    button.addEventListener("click", () => guessLetter(letter));
    keyboard.append(button);
  });
}

function renderWord() {
  wordArea.innerHTML = "";
  wordArea.classList.toggle("sentence-mode", modeKey === "sentence");
  answer.split("").forEach((letter) => {
    const slot = document.createElement("span");
    if (letter === " ") {
      slot.className = "space-slot";
    } else {
      slot.className = "letter-slot";
      slot.textContent = guessed.has(letter) || finished ? letter : "";
    }
    wordArea.append(slot);
  });
}

function renderStatus() {
  const won = appShell.classList.contains("won");
  stage.dataset.wrong = String(wrong);
  wrongCounter.textContent = `${wrong} / ${MAX_WRONG}`;
  cowboy.classList.add("visible");
  targetPerson.classList.add("visible");
  revolver.classList.add("visible");
  document.querySelectorAll(".bullet").forEach((bullet, index) => bullet.classList.toggle("loaded", index < wrong));
  document.querySelectorAll(".key").forEach((button) => {
    const letter = button.dataset.letter;
    button.disabled = guessed.has(letter) || finished;
    button.classList.toggle("correct", guessed.has(letter) && answer.includes(letter));
    button.classList.toggle("wrong", guessed.has(letter) && !answer.includes(letter));
  });
}

function renderRage(percent) {
  const clamped = Math.max(0, Math.min(100, percent));
  rageFill.style.width = `${clamped}%`;
  rageValue.textContent = `${Math.floor(clamped)}%`;
  rageMark.style.opacity = String(Math.max(0.08, clamped / 100));
  rageMark.style.transform = `scale(${0.65 + clamped / 145}) rotate(${-10 + clamped / 8}deg)`;
}

function stopRageTimer() {
  if (rageFrame) cancelAnimationFrame(rageFrame);
  rageFrame = undefined;
}

function startRageTimer() {
  stopRageTimer();
  rageStartedAt = performance.now();
  renderRage(0);

  const tick = (now) => {
    if (finished) return;
    const percent = ((now - rageStartedAt) / RAGE_DURATION_MS) * 100;
    renderRage(percent);
    if (percent >= 100) {
      endRound(false, "rage");
      return;
    }
    rageFrame = requestAnimationFrame(tick);
  };

  rageFrame = requestAnimationFrame(tick);
}

function isWon() {
  return answer.split("").every((letter) => letter === " " || guessed.has(letter));
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toast.hideTimer);
  toast.hideTimer = setTimeout(() => toast.classList.remove("show"), 1350);
}

function startRound({ advance = false } = {}) {
  clearTimeout(roundTimer);
  stopRageTimer();
  if (advance) levelIndex = Math.min(levelIndex + 1, LEVELS.length - 1);
  const item = pickItem();
  answer = item.text;
  currentHint = item.hint;
  guessed = new Set();
  wrong = 0;
  finished = false;
  appShell.classList.remove("won", "lost");
  scene.classList.remove("fired");
  categoryName.textContent = `Level ${levelIndex + 1} · ${item.category}`;
  modeName.textContent = modeKey === "sentence" ? "句子" : "词语";
  message.textContent = hintText();
  hintButton.disabled = false;
  renderWord();
  renderStatus();
  startRageTimer();
}

function endRound(won, reason = "mistakes") {
  finished = true;
  stopRageTimer();
  appShell.classList.toggle("won", won);
  appShell.classList.toggle("lost", !won);
  if (won) {
    playWinMusic();
    showToast("恭喜！");
    message.textContent = levelIndex === LEVELS.length - 1 ? hintText("恭喜，已经到达最高 Level。") : hintText(`恭喜！即将进入 Level ${levelIndex + 2}。`);
    roundTimer = setTimeout(() => startRound({ advance: true }), 1800);
  } else {
    scene.classList.add("fired");
    playLoseMusic();
    showToast("哦不！");
    renderRage(reason === "rage" ? 100 : Number(rageValue.textContent.replace("%", "")) || 0);
    message.textContent = reason === "rage"
      ? `哦不！愤怒值已满，答案是 ${answer.toUpperCase()}。即将重试本关。`
      : `哦不！六发已满，答案是 ${answer.toUpperCase()}。即将重试本关。`;
    roundTimer = setTimeout(() => startRound(), 2400);
  }
  renderWord();
  renderStatus();
}

function guessLetter(letter) {
  unlockAudio();
  if (finished || guessed.has(letter)) return;
  guessed.add(letter);
  if (answer.includes(letter)) {
    message.textContent = hintText("命中一个字母。");
  } else {
    wrong += 1;
    playLoadingSound();
    message.textContent = hintText(wrong === MAX_WRONG ? "最后一发。" : `错了，上膛第 ${wrong} 发。`);
  }
  renderWord();
  renderStatus();
  if (isWon()) endRound(true);
  if (wrong >= MAX_WRONG) endRound(false);
}

function revealHint() {
  unlockAudio();
  if (finished) return;
  const hidden = [...new Set(answer.split("").filter((letter) => letter !== " " && !guessed.has(letter)))];
  const letter = hidden[Math.floor(Math.random() * hidden.length)];
  if (!letter) return;
  guessed.add(letter);
  hintButton.disabled = true;
  message.textContent = hintText("已揭示一个字母。");
  renderWord();
  renderStatus();
  if (isWon()) endRound(true);
}

modeSelect.addEventListener("change", (event) => {
  unlockAudio();
  modeKey = event.target.value;
  levelIndex = 0;
  startRound();
});
hintButton.addEventListener("click", revealHint);
document.addEventListener("pointerdown", unlockAudio, { once: true });
window.addEventListener("keydown", (event) => {
  const letter = event.key.toLowerCase();
  if (ALPHABET.includes(letter)) guessLetter(letter);
});

renderKeyboard();
startRound();
