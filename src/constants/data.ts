import { Question, Prototype } from '../types';

export const PROTOTYPES: Record<string, Prototype> = {
  BLACK_WIDOW: {
    id: 'BLACK_WIDOW',
    titleEn: 'Black Widow',
    titleZh: '黑寡妇',
    tagline: 'You are in no rush to act; you excel at waiting.',
    interpretation: '你对仓促一向没什么好感。太快的东西容易出错，也容易留下痕迹。你更愿意把时间拉长一点，让信任自己长出来，让关系自己变重，让一个人把杯子递给你、把钥匙留给你、把后背也一起交给你。你当然不是那种会把事情闹得满地是血的人。那样太费力，也太不体面。你更喜欢安静一点的处理方式：门照样关着，饭照样吃着，灯照样亮着，别人甚至还能继续叫你太太、妈妈、护士、亲爱的。你知道真正稳妥的控制从来不是袭击，而是渗进去，留下来，直到一切都开始按你的方式运转。',
    characterName: 'Lydia Sherman 莉迪亚·谢尔曼',
    characterYears: '1824–1878',
    crimeProfile: 'Lydia Sherman（1824–1878）活跃于 19 世纪美国，先后以妻子、母亲和护士的身份生活。她先毒死丈夫，又在孩子接连病倒时把砒霜放进茶、水和感冒药里；儿子乔治病后失去劳动能力，她觉得会成为拖累，便在茶里下毒；小女儿安反复感冒发烧，她认定只要摆脱安，日子还能过下去，于是又在药里加了砒霜。后来她再婚，继续把婚姻和屋檐底下的人变成目标：赫尔伯特签下把财产留给她的遗嘱后，她在海鲜浓汤里下毒，待他死后继承遗产；不到一年，她又盯上霍拉肖·谢尔曼，并在婚后两个月毒死他前妻留下的婴儿。她的重点从来不只是下毒，而是把家、照料和亲密关系慢慢处理成自己的处置权。',
    stats: { dominance: 70, empathy: 20, calculation: 95, impulsivity: 10, narcissism: 80 },
    references: [
      'Double Indemnity：亲密关系不是庇护所，而是欲望、保险金和算计最容易长根的地方。',
      'Gone Girl：不是失控，不是歇斯底里，而是把关系本身写成一场由自己操盘的叙事。'
    ],
    theme: {
      accent: '#1a1a1a', // Obsidian
      bg: '#d4cebc',     // Darker parchment
      glow: 'rgba(0, 0, 0, 0.4)',
      muted: 'rgba(26, 26, 26, 0.3)'
    },
    evidenceImages: [
      '/a3f7bafa-f3b7-44b0-a19a-b03297933241.png',
      '/c693f8c5-c354-4873-a07e-cacf8df48bb3.png',
      '/476b822a-036b-44e7-9e6a-c93f33ff6061.png'
    ]
  },
  ANGEL_OF_DEATH: {
    id: 'ANGEL_OF_DEATH',
    titleEn: 'Angel of Death',
    titleZh: '死亡天使',
    tagline: "You don't need to approach death. You only need to stand beside it.",
    interpretation: '最稳妥的危险，往往不该看起来像危险。白色制服、药瓶、温度计、夜班、压低的脚步声——这些东西本来就离死亡很近，近到几乎不需要你再多做什么。你不必像猎手那样追人，也不必像黑寡妇那样把一整段关系养熟。你的舞台已经准备好了：病床边、关上门的卧室、需要照料的人、正在衰弱的身体，以及所有人都默认你会照顾好一切的那种时刻。你知道最有效的控制通常看起来像帮助。别人把脉搏交给你，把剂量交给你，把夜里最安静的几个小时也交给你。说到底，这一型从不需要制造混乱。混乱本来就在病房里，在老人越来越慢的呼吸里。',
    characterName: 'Jane Toppan 简·托潘',
    characterYears: '1854–1938',
    crimeProfile: 'Jane Toppan（1854–1938）是美国最臭名昭著的护士型连环杀手之一。她幼年经历破碎，成年后长期担任护士、私人看护和管家，表面上讨人喜欢，病人和医生都觉得她热情、专业、富有同情心。另一面却完全不同：她酗酒、撒谎、挑拨离间，对自己不满的人怀恨在心，并不断试验毒药和剂量。到 1901 年，戴维斯一家四具尸体被挖出验尸，体内均检出致命剂量砒霜；同年 10 月 29 日，她在新罕布什尔州被捕。她后来承认，1880 至 1901 年间自己共杀死 31 名受害者。她的受害者最初多是病人和老人，后来也扩大到与自己关系密切、妨碍自己或者让自己厌烦的人。她靠的不是一把刀，而是剂量、权限和别人对护理这件事的天然信任。',
    stats: { dominance: 90, empathy: 15, calculation: 85, impulsivity: 5, narcissism: 90 },
    references: [
      'Misery：照料并不总是温柔，它有时只是控制的另一种姿势。',
      'Sharp Objects：最像关怀的东西，往往最容易绕过防备，直接进入身体。'
    ],
    theme: {
      accent: '#af0000', // Fresh Blood
      bg: '#ffffff',     // Cold Clinical White
      glow: 'rgba(175, 0, 0, 0.3)',
      muted: 'rgba(175, 0, 0, 0.2)'
    },
    evidenceImages: [
      '/a46e4a0a-af81-4112-840b-77ededa95bf6.png',
      '/daff5d57-ae93-4a42-b155-5a7468e60fe4.png',
      '/67492a56-5cbd-4a68-8e24-decef8955562.png'
    ]
  },
  REVENGE_KILLER: {
    id: 'REVENGE_KILLER',
    titleEn: 'Revenge Killer',
    titleZh: '复仇杀手',
    tagline: 'You never forget. You simply hold that breath for a long time.',
    interpretation: '你对很多事都能忍。轻慢、羞辱，你都未必当场发作。你知道当场翻脸很难看。你更擅长把那些东西收起来。你心里有个地方不会自己愈合。时间一长，连很小的冒犯都会开始长刺。等到哪一天你终于决定动手，事情在别人眼里也许突兀，在你这里却已经拖得够久了。真正起作用的不是火气，是记性。不是你有多恨，而是你从来没真正放下。',
    characterName: '张宗琴',
    characterYears: '现代案例',
    crimeProfile: '张宗琴是一名中国乡村女性，于 2006 年被缉拿归案。在此之前的十年里，她接连毒杀七名受害者，全部是家族成员，其中包括儿童。她没有离开熟人网络，也没有去外面寻找猎物；相反，饭桌、厨房和家里那些最熟悉的人已经够用了。驱动她的不是复杂的权谋，也不只是钱，而是那些在心里积了太久的羞辱、怨气和被轻慢的感觉。她把轻微冒犯记得很久，久到最后连报复也变得像日常生活的一部分。',
    stats: { dominance: 60, empathy: 40, calculation: 70, impulsivity: 50, narcissism: 60 },
    references: [
      'Promising Young Woman：驱动人的并不总是眼前的怒火，而是迟到的清算。'
    ],
    theme: {
      accent: '#7b0000', // Dried Blood / Rust
      bg: '#dfc9b5',     // Charred Paper
      glow: 'rgba(123, 0, 0, 0.2)',
      muted: 'rgba(123, 0, 0, 0.3)'
    },
    evidenceImages: [
      '/8cab639c-b816-4a58-88d9-11b6b15b70b4.png',
      '/37a52787-2b3c-4ac6-86a1-20aa4cf620b6.png',
      '/f3cec753-cf46-48e6-b09c-dad14309ef37.png'
    ]
  },
  POWER_SEEKER: {
    id: 'POWER_SEEKER',
    titleEn: 'Power Seeker',
    titleZh: '权力追逐型',
    tagline: "It's not the position you seek, but the power to make others live by your will.",
    interpretation: '你迷恋的是局面开始向你倾斜的那一刻。你更想决定谁配得到、谁必须失去。感情、婚姻、忠诚，在你这里都是通道。你更喜欢看见秩序被悄悄改写，看见门一扇一扇合上。这一型常常看上去最像有格局的人。毕竟只有足够体面的人，才有机会把别人的命运处理得如此周到。',
    characterName: 'Agrippina the Younger 小阿格里皮娜',
    characterYears: '公元 15/16–59',
    crimeProfile: 'Agrippina the Younger（公元 15/16–59）是罗马帝国权力斗争中最著名的女性人物之一。她是卡利古拉的姐姐、克劳狄乌斯的妻子、尼禄的母亲。她先在流放与复出之间周旋，随后设法嫁给克劳狄乌斯，在 33 岁时坐上皇后位置，开始用更系统的方式清除障碍：竞争者被指控、财产被没收、对手被流放乃至被迫自杀。她不断催促克劳狄乌斯把尼禄确认为长子和继承人；等到布里塔尼居斯将成年、克劳狄乌斯又动了废掉尼禄的念头，局面立刻变得危险起来。许多古代史家认为，她最终把毒药混进克劳狄乌斯最爱的蘑菇菜肴里，让皇帝中毒身亡，为尼禄登基铺平道路。她的重点不是简单的隐蔽杀人，而在于把婚姻、血缘、皇位、指控和毒杀全都纳入同一场长期的权力工程。',
    stats: { dominance: 100, empathy: 5, calculation: 90, impulsivity: 15, narcissism: 100 },
    references: [
      'The Favourite：亲密关系从来不是终点，它只是改写秩序的另一条走廊。'
    ],
    theme: {
      accent: '#5d6d31', // Poison Ivy / Arsenic Green
      bg: '#e6dfcf',
      glow: 'rgba(93, 109, 49, 0.2)',
      muted: 'rgba(93, 109, 49, 0.3)'
    },
    evidenceImages: [
      '/ab985865-3b37-41b4-bc88-e55b12660121.png',
      '/c66733ed-82fc-4bed-88f9-831fa7c1f7af.png',
      '/7069025f-554c-4ebb-8abd-1a51468bc501.png'
    ]
  },
  CULT_FOLLOWER: {
    id: 'CULT_FOLLOWER',
    titleEn: 'Cult Follower',
    titleZh: '狂热信徒',
    tagline: 'You don’t necessarily want to lead; you simply long to belong to something greater.',
    interpretation: '你一旦把某个人、某套话语认成了自己的归宿，就会开始主动拆掉自己的边界。你会替他理解，替他辩护。忠诚、启示、爱——词总是很多，血通常更简单。这一型的人经常看起来最不像凶手。她们只是太相信了。',
    characterName: 'Susan Atkins 苏珊·阿特金斯',
    characterYears: '1948–2009',
    crimeProfile: 'Susan Atkins（1948–2009）成长于一个长期酗酒、失衡、缺乏安全感的家庭。她年轻时离开原有生活，进入曼森家族，被查尔斯·曼森重新命名、重塑。1969 年 7 月，她已卷入加里·欣曼案的折磨与残杀；到切洛大道案里，她和其他追随者被派去执行命令，在草坪上追赶并杀死逃跑的受害者，随后返回屋内，活活刺死已怀孕八个半月的莎朗·塔特。她犯案时只有 21 岁。真正让她可怕的，不只是残忍，而是那种把自我一点点交出去之后的执行力：目标不是由她独立挑选，意义也不是由她自己定义，可一旦领袖开口，她就能把别人的幻觉变成自己的手。',
    stats: { dominance: 30, empathy: 50, calculation: 40, impulsivity: 80, narcissism: 20 },
    references: [
      'Heavenly Creatures：当一群人共享同一种幻觉，现实很快就会失去约束力。'
    ],
    theme: {
      accent: '#4a3d54', // Nightshade / Muted Purple
      bg: '#d5d0e0',
      glow: 'rgba(74, 61, 84, 0.2)',
      muted: 'rgba(74, 61, 84, 0.3)'
    },
    evidenceImages: [
      '/be686f3d-3162-493a-873e-3c908464190e.png',
      '/e77205a3-c454-488d-b6ef-daa059067809.png',
      '/689ef5ba-2f15-4e5e-a5d0-462911c7f831.png'
    ]
  },
  PREDATOR: {
    id: 'PREDATOR',
    titleEn: 'Predator',
    titleZh: '猎杀者',
    tagline: 'You don’t hide the danger. You bring it into the crowds and onto the highways.',
    interpretation: '你更外放，也更流动。你喜欢在门刚打开、陌生人刚把你当成无害对象的那一刻开始控制局面。人群、公路和偶遇是最好的遮蔽物。谁会认真记住一个路边的女人呢？',
    characterName: 'Aileen Wuornos 艾琳·沃尔诺斯',
    characterYears: '1956–2002',
    crimeProfile: 'Aileen Wuornos（1956–2002）是美国最知名的女性连环杀手之一。她不是以妻子、护士、保姆或房东的身份靠近受害者，也不把尸体留在屋里、床上或后院；她在佛罗里达州的公路、休息站和停车区活动，目标多是陌生男性。她射杀理查德·马洛里后，把尸体掩在树林里，用毯子盖住遗物，又把受害者的相机和雷达探测仪拿去典当；正是当铺收据上的真实指纹，最终让警方确认了她的身份。警方后来找到被遗弃的凯迪拉克，在血迹、钱包和尸体位置之间拼出第一起案子的轮廓：衣冠完整的受害者躺在离车数英里的空地里，胸口连中四枪。她的不同之处不在于更狠，而在于她把危险直接带到路上，把陌生接触本身变成了猎场。',
    stats: { dominance: 80, empathy: 10, calculation: 60, impulsivity: 95, narcissism: 70 },
    references: [
      'Monster：路边、车门、陌生人、一下子失控的夜。'
    ],
    theme: {
      accent: '#2c3e50', // Cold Steel / Midnight Blue
      bg: '#cfd8dc',
      glow: 'rgba(44, 62, 80, 0.2)',
      muted: 'rgba(44, 62, 80, 0.3)'
    },
    evidenceImages: [
      '/bf499697-f871-4c7a-9666-6f53e9c0c777.png',
      '/f0653af8-128e-4d68-833a-cf150f2531f5.png',
      '/2261ca0e-7646-4a6f-8418-3b7f8e1e11cc.png'
    ]
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    chapter: "CHAPTER I: THE THRESHOLD / 阈限",
    chapterImage: "/136f37c8-0f67-46fa-944a-07dc66334298.png",
    text: "一位陌生人递给你一封封好的信。火漆依然温热。你的直觉是...",
    options: [
      { text: "保留封印；在看内容前先看来源。", scores: { BLACK_WIDOW: 2, POWER_SEEKER: 1 } },
      { text: "立刻撕开。情报就是生存。", scores: { PREDATOR: 2, REVENGE_KILLER: 1 } },
      { text: "对着光看，寻找里面可能藏着的阴影。", scores: { ANGEL_OF_DEATH: 2, CULT_FOLLOWER: 1 } }
    ]
  },
  {
    id: 2,
    text: "在安静的花园里，你发现一只翅膀折断的小鸟。你决定...",
    options: [
      { text: "照顾它，直到它能——或不能——离开。它的命在你手里。", scores: { ANGEL_OF_DEATH: 3, BLACK_WIDOW: 1 } },
      { text: "结束它的痛苦。仁慈应该是高效的。", scores: { REVENGE_KILLER: 2, POWER_SEEKER: 1 } },
      { text: "看着它挣扎。自然法则总是令人着迷。", scores: { PREDATOR: 2, CULT_FOLLOWER: 1 } }
    ]
  },
  {
    id: 3,
    text: "有人深深地背叛了你。时间流逝，他们已淡忘。而你...",
    options: [
      { text: "有一本账本。这笔债正在生利息。", scores: { REVENGE_KILLER: 3, BLACK_WIDOW: 1 } },
      { text: "等生活击碎他们，然后以他们唯一的慰藉出现。", scores: { ANGEL_OF_DEATH: 2, BLACK_WIDOW: 2 } },
      { text: "将他们从你的世界抹除，仿佛从未存在过。", scores: { POWER_SEEKER: 3 } }
    ]
  },
  {
    id: 4,
    chapter: "CHAPTER II: THE INNER ROOM / 暗房",
    chapterImage: "/241aab65-cf7d-4d82-926f-bb00cb7702ac.png",
    text: "你理想的工作空间是...",
    options: [
      { text: "一个凌乱的档案馆，闻起来有旧墨水和秘密的味道。", scores: { CULT_FOLLOWER: 2, BLACK_WIDOW: 1 } },
      { text: "一间无菌的纯白房间，所有东西都触手可及。", scores: { ANGEL_OF_DEATH: 3, POWER_SEEKER: 1 } },
      { text: "午夜里一辆行驶中汽车的驾驶座。", scores: { PREDATOR: 3 } }
    ]
  },
  {
    id: 5,
    text: "什么声音最动听？",
    options: [
      { text: "锁扣咬合就位的嗒哒声。", scores: { POWER_SEEKER: 2, BLACK_WIDOW: 2 } },
      { text: "拱形空间里集体咏唱的回响。", scores: { CULT_FOLLOWER: 3 } },
      { text: "某人入睡前最后的、有节奏的长叹。", scores: { ANGEL_OF_DEATH: 3 } }
    ]
  },
  {
    id: 6,
    text: "你被邀请参加假面舞会。你会选择哪种面具？",
    options: [
      { text: "一张模糊世界的精致蕾丝面纱。", scores: { BLACK_WIDOW: 3 } },
      { text: "一张毫无表情、瓷砖般的惨白面具。", scores: { ANGEL_OF_DEATH: 2, POWER_SEEKER: 2 } },
      { text: "一张用深色木头雕刻出的咆哮怪兽。", scores: { PREDATOR: 3 } }
    ]
  },
  {
    id: 7,
    chapter: "CHAPTER III: THE HARVEST / 获益",
    chapterImage: "/871e0d58-e724-4be8-9dc7-933d7ca66039.png",
    text: "财富是...",
    options: [
      { text: "隔绝后果的终极绝缘体。", scores: { POWER_SEEKER: 3, BLACK_WIDOW: 1 } },
      { text: "需要从强者口中夺走的生存资料。", scores: { BLACK_WIDOW: 3, PREDATOR: 1 } },
      { text: "完成使命过程中的某种必然沉淀。", scores: { CULT_FOLLOWER: 3 } }
    ]
  },
  {
    id: 8,
    text: "一面镜子在你面前破碎。你看到...",
    options: [
      { text: "一千个不同版本的自我真相。", scores: { BLACK_WIDOW: 1, REVENGE_KILLER: 1, POWER_SEEKER: 1 } },
      { text: "由于缺乏敬畏而导致的必然混乱。", scores: { CULT_FOLLOWER: 3 } },
      { text: "可以被派上更好用途的锋利尖角。", scores: { PREDATOR: 2, POWER_SEEKER: 1 } }
    ]
  },
  {
    id: 9,
    text: "你最‘爱’的人目前正...",
    options: [
      { text: "在你的皮肤之下，与你不可分割。", scores: { CULT_FOLLOWER: 2, ANGEL_OF_DEATH: 1 } },
      { text: "作为一项资产，需要细心维护。", scores: { BLACK_WIDOW: 3, POWER_SEEKER: 1 } },
      { text: "处于你最密集的审视之下。", scores: { PREDATOR: 2, REVENGE_KILLER: 1 } }
    ]
  },
  {
    id: 10,
    chapter: "CHAPTER IV: THE DEBT / 债",
    chapterImage: "/8e1b581e-9845-4809-8de0-9a001ae3fdd1.png",
    text: "如果你能见证历史上的一个瞬间，那将是...",
    options: [
      { text: "死刑执行令签署的圆点处。", scores: { POWER_SEEKER: 3, REVENGE_KILLER: 1 } },
      { text: "一段宏大、悲剧性罗曼史的最高潮。", scores: { BLACK_WIDOW: 3 } },
      { text: "人类第一次在暗夜中生起火。 ", scores: { PREDATOR: 3 } }
    ]
  },
  {
    id: 11,
    text: "一扇门锁住了。你...",
    options: [
      { text: "找到拿钥匙的人，让他们交出来。", scores: { POWER_SEEKER: 3, BLACK_WIDOW: 1 } },
      { text: "在外面等；总会有人出来的。", scores: { PREDATOR: 2, REVENGE_KILLER: 1 } },
      { text: "温和地敲门，声称你是来帮忙的。", scores: { ANGEL_OF_DEATH: 3 } }
    ]
  },
  {
    id: 12,
    text: "你的影子代表了...",
    options: [
      { text: "那个替你完成你不敢承认的工作的部分。", scores: { BLACK_WIDOW: 2, ANGEL_OF_DEATH: 1 } },
      { text: "你打算征服的不断扩张的领地。", scores: { POWER_SEEKER: 3 } },
      { text: "一个从过去一直跟随你的幽灵。", scores: { REVENGE_KILLER: 3 } }
    ]
  },
  {
    id: 13,
    chapter: "CHAPTER V: THE SILENCE / 寂静",
    chapterImage: "/a8a746b8-9c31-4328-8fe4-3226facaebad-1.png",
    text: "秘密是...",
    options: [
      { text: "货币。你只在价格合适时支付。", scores: { BLACK_WIDOW: 3, POWER_SEEKER: 1 } },
      { text: "毒药。它更适合分给别人。", scores: { ANGEL_OF_DEATH: 2, REVENGE_KILLER: 2 } },
      { text: "唯一真正属于你自己的东西。", scores: { CULT_FOLLOWER: 2, PREDATOR: 1 } }
    ]
  },
  {
    id: 14,
    text: "你站在高架桥上。你在想...",
    options: [
      { text: "风可以多么轻易地带走一个人。", scores: { PREDATOR: 3, ANGEL_OF_DEATH: 1 } },
      { text: "从这里看比在下面看视野更好。", scores: { POWER_SEEKER: 3 } },
      { text: "如果我开口，谁会随我一跃而下？", scores: { CULT_FOLLOWER: 3 } }
    ]
  },
  {
    id: 15,
    text: "哪种气味最能描述你？",
    options: [
      { text: "苦杏仁和冰冷的雨水。", scores: { BLACK_WIDOW: 3, ANGEL_OF_DEATH: 1 } },
      { text: "金属铜和旧皮革。", scores: { PREDATOR: 2, REVENGE_KILLER: 2 } },
      { text: "焚香和点燃的鼠尾草。", scores: { CULT_FOLLOWER: 3 } }
    ]
  },
  {
    id: 16,
    chapter: "CHAPTER VI: THE ARCHIVE / 归档",
    chapterImage: "/e9a4d06a-8725-4ccd-925e-fb096a372f82-1.png",
    text: "今晚的月亮是...",
    options: [
      { text: "为你表演准备的聚光灯。", scores: { POWER_SEEKER: 2, BLACK_WIDOW: 1 } },
      { text: "一个永远不会开口的见证者。", scores: { PREDATOR: 3, BLACK_WIDOW: 1 } },
      { text: "审判不洁者的冰冷眼睛。", scores: { REVENGE_KILLER: 2, CULT_FOLLOWER: 2 } }
    ]
  },
  {
    id: 17,
    text: "当你离开房间时，人们会感觉到...",
    options: [
      { text: "一种突然的、无法解释加的寒意。", scores: { ANGEL_OF_DEATH: 2, PREDATOR: 2 } },
      { text: "仿佛卸下了一幅沉重的枷锁。", scores: { POWER_SEEKER: 3 } },
      { text: "一种挥之不去的被注视感。", scores: { BLACK_WIDOW: 3 } }
    ]
  },
  {
    id: 18,
    text: "你档案的最后一页应该是...",
    options: [
      { text: "一份‘已完成’事项清单。", scores: { POWER_SEEKER: 2, REVENGE_KILLER: 2 } },
      { text: "为了下一章而刻意留出的空白。", scores: { PREDATOR: 3, BLACK_WIDOW: 1 } },
      { text: "用褪色的墨水印上的‘机密’戳记。", scores: { ANGEL_OF_DEATH: 2, CULT_FOLLOWER: 2 } }
    ]
  }
];
