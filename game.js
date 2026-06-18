const LEVELS = [
  {
    category: "数字",
    words: [
      ["one", "最小的正整数。"],
      ["two", "一双鞋的数量。"],
      ["three", "三角形有这么多条边。"],
      ["four", "一年有四个季节。"],
      ["five", "一只手通常有这么多根手指。"],
      ["six", "骰子最大的一面。"],
      ["seven", "一周有这么多天。"],
      ["eight", "横过来看像无限符号的数字。"],
    ],
    sentences: [
      ["i am one", "一个非常短的自我表达句。"],
      ["you have two", "表示你拥有两个东西。"],
      ["we see three", "表示我们看见三个东西。"],
      ["four cats run", "四只猫在跑。"],
      ["five birds fly", "五只鸟在飞。"],
    ],
  },
  {
    category: "颜色",
    words: [
      ["red", "苹果和消防车常见的颜色。"],
      ["blue", "天空和海洋常见的颜色。"],
      ["green", "草地和树叶常见的颜色。"],
      ["black", "夜晚和墨水常见的颜色。"],
      ["white", "雪和牛奶常见的颜色。"],
      ["pink", "樱花和草莓糖常见的颜色。"],
      ["gray", "介于黑色和白色之间。"],
      ["brown", "木头和巧克力常见的颜色。"],
    ],
    sentences: [
      ["the sky is blue", "描述天空颜色的简单句。"],
      ["the grass is green", "描述草地颜色的简单句。"],
      ["my bag is black", "描述书包颜色的句子。"],
      ["a rose is red", "描述玫瑰颜色的句子。"],
      ["snow looks white", "描述雪看起来的颜色。"],
    ],
  },
  {
    category: "动物",
    words: [
      ["cat", "会喵喵叫，常被养在家里。"],
      ["dog", "会汪汪叫，常被称为人类朋友。"],
      ["fish", "生活在水里，用鳃呼吸。"],
      ["bird", "通常有翅膀和羽毛。"],
      ["horse", "可以奔跑，也常出现在西部故事里。"],
      ["tiger", "有条纹的大型猫科动物。"],
      ["panda", "黑白相间，喜欢竹子。"],
      ["rabbit", "耳朵很长，跳着走。"],
    ],
    sentences: [
      ["a dog can run", "描述狗会跑的句子。"],
      ["the cat is small", "描述猫体型的句子。"],
      ["birds can sing", "描述鸟会唱叫的句子。"],
      ["the horse is fast", "描述马速度的句子。"],
      ["a fish lives in water", "描述鱼生活环境的句子。"],
    ],
  },
  {
    category: "食物",
    words: [
      ["rice", "亚洲餐桌上很常见的主食。"],
      ["bread", "用面粉烤成，常做早餐。"],
      ["apple", "一种常见水果，可能是红色或绿色。"],
      ["noodle", "用小麦粉、米粉或淀粉做成的条状面食。"],
      ["cookie", "用面粉、糖和黄油烤成的小甜点。"],
      ["burger", "把肉饼和配料夹在圆面包里。"],
      ["hotpot", "把食材放进热汤里涮煮。"],
      ["pancake", "用面糊在平底锅上煎成的扁圆食物。"],
    ],
    sentences: [
      ["i eat rice", "表示我吃米饭。"],
      ["she likes bread", "表示她喜欢面包。"],
      ["we cook noodles", "表示我们做面条。"],
      ["the cookie is sweet", "描述饼干味道。"],
      ["hotpot is very warm", "描述火锅温度和感觉。"],
    ],
  },
  {
    category: "家庭",
    words: [
      ["mom", "母亲的口语称呼。"],
      ["dad", "父亲的口语称呼。"],
      ["sister", "姐妹中的女性。"],
      ["brother", "兄弟中的男性。"],
      ["family", "由亲人组成的群体。"],
      ["parent", "父亲或母亲。"],
      ["cousin", "堂表兄弟姐妹。"],
      ["grandpa", "祖父或外祖父的口语称呼。"],
    ],
    sentences: [
      ["my mom is kind", "描述妈妈很友善。"],
      ["dad reads a book", "爸爸正在读书。"],
      ["my sister can swim", "姐姐或妹妹会游泳。"],
      ["we love our family", "表达我们爱家人。"],
      ["my brother plays chess", "兄弟在下棋。"],
    ],
  },
  {
    category: "学校",
    words: [
      ["book", "用来阅读或学习。"],
      ["pen", "用来写字。"],
      ["desk", "学生写作业常用的桌子。"],
      ["teacher", "在课堂上教学生的人。"],
      ["student", "在学校学习的人。"],
      ["classroom", "学生上课的房间。"],
      ["homework", "课后要完成的作业。"],
      ["library", "收藏书籍并供人阅读的地方。"],
    ],
    sentences: [
      ["the book is open", "书是打开的。"],
      ["a teacher helps us", "老师帮助我们。"],
      ["students study hard", "学生努力学习。"],
      ["we read in the library", "我们在图书馆读书。"],
      ["homework takes time", "作业需要时间。"],
    ],
  },
  {
    category: "城市",
    words: [
      ["tokyo", "这座城市在日本。"],
      ["london", "这座城市在英国。"],
      ["paris", "这座城市在法国。"],
      ["beijing", "这座城市在中国。"],
      ["sydney", "这座城市在澳大利亚。"],
      ["berlin", "这座城市在德国。"],
      ["seoul", "这座城市在韩国。"],
      ["madrid", "这座城市在西班牙。"],
    ],
    sentences: [
      ["tokyo is in japan", "说明东京所在国家。"],
      ["paris has many museums", "描述巴黎有很多博物馆。"],
      ["beijing is very old", "描述北京历史悠久。"],
      ["london has a famous clock", "描述伦敦的著名钟楼。"],
      ["sydney is near the sea", "描述悉尼靠近海边。"],
    ],
  },
  {
    category: "自然",
    words: [
      ["river", "会流动的水道。"],
      ["forest", "有许多树木的地方。"],
      ["mountain", "比丘陵更高的自然地形。"],
      ["island", "四周被水包围的陆地。"],
      ["desert", "降雨很少、常有沙地的地方。"],
      ["valley", "两山之间较低的地带。"],
      ["volcano", "可能喷出岩浆的山。"],
      ["glacier", "缓慢移动的大块冰体。"],
    ],
    sentences: [
      ["a river moves slowly", "描述河流缓慢流动。"],
      ["the forest is quiet", "描述森林安静。"],
      ["we climb the mountain", "我们爬山。"],
      ["the island is small", "描述岛很小。"],
      ["a desert can be dry", "描述沙漠干燥。"],
    ],
  },
  {
    category: "运动",
    words: [
      ["soccer", "用脚踢球并射门的运动。"],
      ["tennis", "用球拍隔网击球的运动。"],
      ["boxing", "戴手套进行对抗的运动。"],
      ["running", "比走路更快的移动方式。"],
      ["skating", "穿冰鞋或轮滑鞋滑行。"],
      ["cycling", "骑自行车的运动。"],
      ["baseball", "用球棒击球的运动。"],
      ["swimming", "在水中移动的运动。"],
    ],
    sentences: [
      ["he plays soccer", "他踢足球。"],
      ["she swims every day", "她每天游泳。"],
      ["running makes us strong", "跑步让人更强壮。"],
      ["tennis needs quick feet", "网球需要快速脚步。"],
      ["cycling is good exercise", "骑车是不错的锻炼。"],
    ],
  },
  {
    category: "科技",
    words: [
      ["pixel", "屏幕图像中最小的显示单位。"],
      ["router", "把网络流量转发到正确设备。"],
      ["browser", "用来打开网页的软件。"],
      ["server", "给其他设备或程序提供服务。"],
      ["python", "常用于脚本、数据分析和人工智能的编程语言。"],
      ["react", "常用于构建网页界面的 JavaScript 库。"],
      ["kernel", "操作系统中管理硬件和进程的核心部分。"],
      ["cloud", "通过互联网提供计算或存储服务的模式。"],
    ],
    sentences: [
      ["a browser opens websites", "浏览器打开网站。"],
      ["the server sends data", "服务器发送数据。"],
      ["python can read files", "Python 可以读取文件。"],
      ["a router connects devices", "路由器连接设备。"],
      ["the cloud stores photos", "云端存储照片。"],
    ],
  },
  {
    category: "旅行",
    words: [
      ["ticket", "乘车或入场需要的凭证。"],
      ["hotel", "旅行时住宿的地方。"],
      ["passport", "跨国旅行的重要证件。"],
      ["luggage", "旅行时携带的行李。"],
      ["airport", "飞机起降和旅客登机的地方。"],
      ["station", "火车或公交停靠的地方。"],
      ["journey", "一段旅行或路程。"],
      ["tourist", "去外地游览的人。"],
    ],
    sentences: [
      ["i buy a ticket", "我买票。"],
      ["the hotel is clean", "旅馆很干净。"],
      ["bring your passport", "带上你的护照。"],
      ["our luggage is heavy", "我们的行李很重。"],
      ["the airport is busy", "机场很繁忙。"],
    ],
  },
  {
    category: "情绪",
    words: [
      ["happy", "感到开心。"],
      ["angry", "感到生气。"],
      ["afraid", "感到害怕。"],
      ["lonely", "感到孤单。"],
      ["nervous", "感到紧张。"],
      ["excited", "感到兴奋。"],
      ["patient", "能耐心等待。"],
      ["curious", "想知道更多。"],
    ],
    sentences: [
      ["i feel happy today", "我今天感到开心。"],
      ["he is afraid of storms", "他害怕暴风雨。"],
      ["she feels nervous now", "她现在感到紧张。"],
      ["they are excited to win", "他们因为获胜而兴奋。"],
      ["curious minds ask questions", "好奇的人会提问。"],
    ],
  },
  {
    category: "电影",
    words: [
      ["matrix", "和虚拟现实、红蓝药丸有关。"],
      ["avatar", "故事发生在潘多拉星球。"],
      ["frozen", "有会使用冰雪魔法的女王。"],
      ["inception", "围绕梦境、潜意识和植入想法展开。"],
      ["titanic", "和著名远洋客轮有关。"],
      ["gravity", "主要发生在太空轨道上。"],
      ["joker", "聚焦漫画反派的起源故事。"],
      ["dune", "和沙漠星球、香料、家族战争有关。"],
    ],
    sentences: [
      ["avatar has blue people", "这部电影有蓝色外星族群。"],
      ["frozen has an ice queen", "这部动画有冰雪女王。"],
      ["dune happens on a desert planet", "这部电影发生在沙漠星球。"],
      ["gravity follows astronauts in space", "这部电影跟随太空中的宇航员。"],
      ["inception plays with dreams", "这部电影玩转梦境。"],
    ],
  },
  {
    category: "身体",
    words: [
      ["finger", "手上的一部分。"],
      ["shoulder", "连接手臂和躯干的部位。"],
      ["stomach", "消化食物的重要器官。"],
      ["muscle", "帮助身体移动和发力。"],
      ["skeleton", "支撑身体的骨架。"],
      ["eyebrow", "眼睛上方的毛发。"],
      ["heartbeat", "心脏跳动的节奏。"],
      ["breathing", "吸气和呼气的过程。"],
    ],
    sentences: [
      ["my shoulder hurts", "我的肩膀疼。"],
      ["your heartbeat is fast", "你的心跳很快。"],
      ["breathing slowly can help", "慢慢呼吸会有帮助。"],
      ["the skeleton supports the body", "骨架支撑身体。"],
      ["strong muscles need training", "强壮肌肉需要训练。"],
    ],
  },
  {
    category: "方向",
    words: [
      ["north", "地图上通常在上方的方向。"],
      ["south", "和 north 相反的方向。"],
      ["east", "太阳升起的大致方向。"],
      ["west", "太阳落下的大致方向。"],
      ["forward", "向前。"],
      ["backward", "向后。"],
      ["vertical", "上下方向的。"],
      ["horizontal", "左右延伸、与地平线平行的。"],
    ],
    sentences: [
      ["go north after the bridge", "过桥后向北走。"],
      ["the line is horizontal", "这条线是水平的。"],
      ["move forward carefully", "小心向前移动。"],
      ["the tower is vertical", "塔是垂直的。"],
      ["the sun sets in the west", "太阳从西边落下。"],
    ],
  },
  {
    category: "科学",
    words: [
      ["oxygen", "人类呼吸需要的一种气体。"],
      ["gravity", "让物体向地球靠近的力。"],
      ["molecule", "由原子组成的微小结构。"],
      ["electron", "带负电的亚原子粒子。"],
      ["friction", "两个表面接触运动时产生的阻力。"],
      ["organism", "具有生命的个体。"],
      ["photosynthesis", "植物利用光制造养分的过程。"],
      ["evaporation", "液体变成气体的过程。"],
    ],
    sentences: [
      ["oxygen helps humans breathe", "氧气帮助人类呼吸。"],
      ["gravity pulls objects downward", "重力把物体向下拉。"],
      ["friction slows the moving box", "摩擦力让移动的箱子变慢。"],
      ["plants use photosynthesis for food", "植物通过光合作用制造养分。"],
      ["evaporation changes water into vapor", "蒸发把水变成水蒸气。"],
    ],
  },
  {
    category: "文学",
    words: [
      ["poetry", "注重节奏、意象和语言美感的文学形式。"],
      ["metaphor", "不用 like 或 as 的隐喻表达。"],
      ["narrator", "讲述故事的人或声音。"],
      ["chapter", "一本书中的章节。"],
      ["conflict", "推动故事发展的矛盾。"],
      ["symbolism", "用事物代表更深意义的写法。"],
      ["foreshadow", "提前暗示后续情节。"],
      ["protagonist", "故事中的主要角色。"],
    ],
    sentences: [
      ["the narrator hides a secret", "叙述者隐藏了一个秘密。"],
      ["a metaphor compares ideas directly", "隐喻直接比较两个概念。"],
      ["conflict drives the story forward", "冲突推动故事发展。"],
      ["symbolism gives objects deeper meaning", "象征让物体有更深意义。"],
      ["foreshadowing prepares the reader", "伏笔让读者为后文做准备。"],
    ],
  },
  {
    category: "高级词汇",
    words: [
      ["analyze", "仔细分解并研究。"],
      ["contrast", "比较差异。"],
      ["evidence", "支持观点的证据。"],
      ["strategy", "为达成目标制定的方法。"],
      ["efficient", "用较少时间或资源完成任务。"],
      ["ambiguous", "含义不清或有多种解释。"],
      ["accurate", "正确且精确。"],
      ["hypothesis", "等待验证的解释或猜想。"],
    ],
    sentences: [
      ["students analyze evidence carefully", "学生仔细分析证据。"],
      ["the answer seems ambiguous at first", "答案一开始显得模糊。"],
      ["an efficient strategy saves time", "高效策略节省时间。"],
      ["a hypothesis needs careful testing", "假设需要仔细测试。"],
      ["accurate details improve the report", "准确细节让报告更好。"],
    ],
  },
  {
    category: "抽象概念",
    words: [
      ["identity", "一个人或群体如何定义自己。"],
      ["justice", "公平和正义的概念。"],
      ["freedom", "不受不合理限制的状态。"],
      ["memory", "保存和回想经历的能力。"],
      ["perspective", "看待问题的角度。"],
      ["consequence", "行为之后产生的结果。"],
      ["responsibility", "承担义务或后果。"],
      ["interpretation", "对意义的理解或解释。"],
    ],
    sentences: [
      ["perspective changes the meaning", "视角会改变意义。"],
      ["freedom requires responsibility", "自由需要责任。"],
      ["memory shapes personal identity", "记忆塑造个人身份。"],
      ["justice depends on fair rules", "正义依赖公平规则。"],
      ["interpretation can vary between readers", "不同读者的解释可能不同。"],
    ],
  },
  {
    category: "学术挑战",
    words: [
      ["phenomenon", "可观察到的现象。"],
      ["infrastructure", "社会运行所需的基础设施。"],
      ["sustainability", "长期维持资源和环境平衡的能力。"],
      ["interdisciplinary", "跨越多个学科领域的。"],
      ["transformation", "结构或状态的重大改变。"],
      ["misconception", "错误理解或误解。"],
      ["coordination", "让多个部分配合运作。"],
      ["implementation", "把计划付诸执行。"],
    ],
    sentences: [
      ["sustainability requires long term planning", "可持续性需要长期规划。"],
      ["infrastructure supports daily life", "基础设施支撑日常生活。"],
      ["interdisciplinary research connects many fields", "跨学科研究连接多个领域。"],
      ["implementation often reveals hidden problems", "执行常常暴露隐藏问题。"],
      ["a misconception can distort the whole argument", "误解会扭曲整个论证。"],
    ],
  },
  {
    category: "终极综合",
    words: [
      ["collaboration", "多人共同完成任务。"],
      ["characterization", "塑造人物性格的方法。"],
      ["unprecedented", "以前从未发生过的。"],
      ["entrepreneurship", "创建并经营新事业的能力或活动。"],
      ["counterargument", "反驳或回应主张的相反论点。"],
      ["decentralization", "把权力或功能分散到多个部分。"],
      ["accountability", "对行为和结果负责。"],
      ["contextualization", "把信息放到背景中理解。"],
    ],
    sentences: [
      ["collaboration improves complex problem solving", "协作提升复杂问题解决能力。"],
      ["accountability makes leadership more trustworthy", "问责让领导更可信。"],
      ["contextualization helps readers understand evidence", "背景化帮助读者理解证据。"],
      ["a counterargument strengthens a careful essay", "反论点能加强严谨文章。"],
      ["decentralization changes how decisions are made", "去中心化改变决策方式。"],
    ],
  },
];

const MAX_WRONG = 6;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const appShell = document.querySelector(".app-shell");
const stage = document.querySelector(".stage");
const scene = document.querySelector("#scene");
const cowboy = document.querySelector("#cowboy");
const character = document.querySelector("#character");
const revolver = document.querySelector("#revolver");
const wordArea = document.querySelector("#wordArea");
const keyboard = document.querySelector("#keyboard");
const message = document.querySelector("#message");
const wrongCounter = document.querySelector("#wrongCounter");
const categoryName = document.querySelector("#categoryName");
const modeName = document.querySelector("#modeName");
const modeSelect = document.querySelector("#modeSelect");
const hintButton = document.querySelector("#hintButton");
const newGameButtons = [document.querySelector("#newGame"), document.querySelector("#newGameTop")];

let modeKey = "word";
let levelIndex = 0;
let pendingLevelAdvance = false;
let answer = "";
let currentHint = "";
let currentCategory = "";
let guessed = new Set();
let wrong = 0;
let finished = false;
let audioContext;
let audioUnlocked = false;

function pickItem() {
  const level = LEVELS[levelIndex];
  const pool = modeKey === "sentence" ? level.sentences : level.words;
  const [text, hint] = pool[Math.floor(Math.random() * pool.length)];
  return { text, hint, category: level.category };
}

function hintMessage(prefix = "") {
  return `${prefix ? `${prefix} ` : ""}提示：${currentHint}`;
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  return audioContext;
}

function unlockAudio() {
  const context = getAudioContext();
  if (!context || audioUnlocked) return;
  if (context.state === "suspended") context.resume();
  audioUnlocked = true;
}

function playTone({ frequency, start = 0, duration = 0.15, type = "sine", gain = 0.12, slideTo }) {
  const context = getAudioContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const envelope = context.createGain();
  const startAt = context.currentTime + start;
  const endAt = startAt + duration;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  if (slideTo) oscillator.frequency.exponentialRampToValueAtTime(slideTo, endAt);
  envelope.gain.setValueAtTime(0.0001, startAt);
  envelope.gain.exponentialRampToValueAtTime(gain, startAt + 0.015);
  envelope.gain.exponentialRampToValueAtTime(0.0001, endAt);
  oscillator.connect(envelope);
  envelope.connect(context.destination);
  oscillator.start(startAt);
  oscillator.stop(endAt + 0.03);
}

function playLoadingSound() {
  unlockAudio();
  playTone({ frequency: 170, duration: 0.055, type: "square", gain: 0.13, slideTo: 95 });
  playTone({ frequency: 390, start: 0.055, duration: 0.045, type: "triangle", gain: 0.1 });
  playTone({ frequency: 82, start: 0.11, duration: 0.1, type: "sawtooth", gain: 0.08, slideTo: 55 });
}

function playWinMusic() {
  unlockAudio();
  const melody = [523.25, 659.25, 783.99, 1046.5, 1174.66, 1318.51, 1567.98, 1318.51];
  melody.forEach((frequency, index) => {
    playTone({ frequency, start: index * 0.095, duration: 0.18, type: "triangle", gain: 0.11 });
  });
  [261.63, 329.63, 392, 523.25].forEach((frequency) => {
    playTone({ frequency, start: 0.78, duration: 0.46, type: "sine", gain: 0.055 });
  });
}

function playLoseMusic() {
  unlockAudio();
  const descent = [392, 349.23, 311.13, 261.63, 207.65, 164.81, 130.81, 98];
  descent.forEach((frequency, index) => {
    playTone({ frequency, start: index * 0.18, duration: 0.36, type: "sine", gain: 0.12, slideTo: frequency * 0.82 });
  });
  playTone({ frequency: 92, start: 0.74, duration: 1.1, type: "sawtooth", gain: 0.06, slideTo: 43 });
  playTone({ frequency: 61.74, start: 1.05, duration: 0.9, type: "triangle", gain: 0.08 });
}

function renderKeyboard() {
  keyboard.innerHTML = "";
  ALPHABET.forEach((letter) => {
    const button = document.createElement("button");
    button.className = "key";
    button.type = "button";
    button.textContent = letter;
    button.dataset.letter = letter;
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
      wordArea.append(slot);
      return;
    }
    slot.className = "letter-slot";
    slot.textContent = guessed.has(letter) || finished ? letter : "";
    wordArea.append(slot);
  });
}

function renderStatus() {
  const won = appShell.classList.contains("won");
  stage.dataset.wrong = String(wrong);
  wrongCounter.textContent = `${wrong} / ${MAX_WRONG}`;
  cowboy.classList.toggle("visible", wrong >= 1);
  character.classList.toggle("visible", wrong >= 1 || won);
  revolver.classList.toggle("visible", wrong >= 1);
  document.querySelectorAll(".bullet").forEach((bullet, index) => {
    bullet.classList.toggle("loaded", index < wrong);
  });

  document.querySelectorAll(".key").forEach((button) => {
    const letter = button.dataset.letter;
    button.disabled = guessed.has(letter) || finished;
    button.classList.toggle("correct", guessed.has(letter) && answer.includes(letter));
    button.classList.toggle("wrong", guessed.has(letter) && !answer.includes(letter));
  });
}

function isWon() {
  return answer.split("").every((letter) => letter === " " || guessed.has(letter));
}

function fireAnimation() {
  scene.classList.remove("fired");
  void scene.offsetWidth;
  scene.classList.add("fired");
}

function endGame(won) {
  finished = true;
  appShell.classList.toggle("won", won);
  appShell.classList.toggle("lost", !won);
  if (won) {
    pendingLevelAdvance = true;
    playWinMusic();
    const nextLevel = Math.min(levelIndex + 2, LEVELS.length);
    message.textContent = hintMessage(`猜中了，下一局进入 Level ${nextLevel}。`);
  } else {
    fireAnimation();
    playLoseMusic();
    message.textContent = `六发已满，答案是 ${answer.toUpperCase()}。`;
  }
  renderWord();
  renderStatus();
}

function guessLetter(letter) {
  if (finished || guessed.has(letter)) return;

  guessed.add(letter);
  if (answer.includes(letter)) {
    message.textContent = hintMessage("命中一个字母。");
  } else {
    wrong += 1;
    playLoadingSound();
    message.textContent = hintMessage(wrong === MAX_WRONG ? "最后一发。" : `错了，上膛第 ${wrong} 发。`);
  }

  renderWord();
  renderStatus();

  if (isWon()) {
    endGame(true);
  } else if (wrong >= MAX_WRONG) {
    endGame(false);
  }
}

function newGame() {
  if (pendingLevelAdvance) {
    levelIndex = Math.min(levelIndex + 1, LEVELS.length - 1);
    pendingLevelAdvance = false;
  }
  const picked = pickItem();
  answer = picked.text.toLowerCase();
  currentHint = picked.hint;
  currentCategory = picked.category;
  guessed = new Set();
  wrong = 0;
  finished = false;
  appShell.classList.remove("won", "lost");
  scene.classList.remove("fired");
  categoryName.textContent = `Level ${levelIndex + 1} · ${currentCategory}`;
  modeName.textContent = modeKey === "sentence" ? "句子" : "词语";
  message.textContent = hintMessage();
  hintButton.disabled = false;
  renderWord();
  renderStatus();
}

function revealHint() {
  if (finished) return;

  const hiddenLetters = answer.split("").filter((letter) => letter !== " " && !guessed.has(letter));
  const uniqueHidden = [...new Set(hiddenLetters)];
  const freeLetter = uniqueHidden[Math.floor(Math.random() * uniqueHidden.length)];
  if (!freeLetter) return;
  guessed.add(freeLetter);
  hintButton.disabled = true;
  message.textContent = hintMessage("已揭示一个字母。");
  renderWord();
  renderStatus();
  if (isWon()) endGame(true);
}

modeSelect.addEventListener("change", (event) => {
  unlockAudio();
  modeKey = event.target.value;
  pendingLevelAdvance = false;
  newGame();
});

hintButton.addEventListener("click", revealHint);
newGameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    unlockAudio();
    newGame();
  });
});
document.addEventListener("pointerdown", unlockAudio, { once: true });
window.addEventListener("keydown", (event) => {
  unlockAudio();
  const letter = event.key.toLowerCase();
  if (ALPHABET.includes(letter)) guessLetter(letter);
});

renderKeyboard();
newGame();
