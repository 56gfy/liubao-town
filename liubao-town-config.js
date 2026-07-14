/**
 * ============================================
 *  六堡小镇 · 数据配置文件（真实招商数据）
 *  数据来源：商铺营业率统计表 PDF（OCR提取）
 *  修改此文件即可更新页面所有内容
 * ============================================
 */

window.TOWN_CONFIG = {

  // ── 基本信息 ──
  title: '六堡小镇',
  subtitle: '千年古镇 · 智慧新生',
  tagline: 'SMART HERITAGE TOWN',

  // ── 首屏数据面板 ──
  panels: [
    {
      title: '已签商户',
      icon: 'cyan',
      number: '46',
      suffix: '',
      label: '营业率统计表商户',
      sparkType: 'line',
    },
    {
      title: '总面积',
      icon: 'gold',
      number: '12,680',
      suffix: '㎡',
      label: '招商总面积',
      sparkType: 'line',
    },
    {
      title: '招商区块',
      icon: 'teal',
      number: '6',
      suffix: '大区',
      label: 'A1/A2/B1-B4',
      sparkType: 'bar',
    },
  ],

  // ── 关于 ──
  about: {
    title: '千年茶韵\n古镇新篇',
    paragraphs: [
      '六堡镇，始于明清，因六堡茶而闻名天下。青石板路蜿蜒于马头墙之间，古戏台上的粤韵犹在耳畔。',
      '如今，这座千年古镇正以数字化之姿焕发新生——智慧客流分析、沉浸式文旅体验、精准招商平台，让每一片茶叶的故事都能被世界听见。',
    ],
  },

  // ── 六大招商区块 ──
  zones: [
    { num: 'A1', name: 'A1区 · 文创体验',   desc: '小型商铺群，主打手工、陶艺、竹编、蛋拓等非遗体验业态。',     merchantCount: 18 },
    { num: 'A2', name: 'A2区 · 餐饮商业',   desc: '中型商铺群，含餐饮、购物、配套服务，含游客中心。',           merchantCount: 35 },
    { num: 'B1', name: 'B1区 · 入口商业',   desc: '古镇入口门户区域，承接客流导入。',                           merchantCount: 5 },
    { num: 'B2', name: 'B2区 · 茶文化',     desc: '茶文化核心体验区，茶艺、茶道、茶疗养生。',                   merchantCount: 5 },
    { num: 'B3', name: 'B3区 · 综合商业',   desc: '围绕苍秀钱庄的核心商业区。',                                 merchantCount: 5 },
    { num: 'B4', name: 'B4区 · 品牌旗舰',   desc: '大面积旗舰店铺，头部品牌入驻。',                             merchantCount: 5 },
  ],

  // ── 入驻商户列表（OCR提取真实数据）──
  // status: '已入驻' | '签约中' | '意向洽谈' | '待招商'
  merchants: [
    // ═══ 来源：商铺营业率统计表 ═══
    { name: '古排山',               category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序1' },
    { name: '涞百科',               category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序2' },
    { name: '大叶六堡茶',           category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序3' },
    { name: '伶仃洋茶协',           category: '协会',     zone: '茶文化区',  status: '已入驻', unit: '序4' },
    { name: '村姑大堡茶',           category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序5' },
    { name: '中茗',                 category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序6' },
    { name: '恭城古道六佃茶',       category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序7' },
    { name: '六堡茶仓',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序9' },
    { name: '茗丰茶业',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序8' },
    { name: '双贵两六堡茶',         category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序10' },
    { name: '邓家英记',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序11' },
    { name: '供销茶社',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序12' },
    { name: '苍扶茶业合作社',       category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序13' },
    { name: '瀹新大堡茶',           category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序14' },
    { name: '崧州茶馆',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序15' },
    { name: '瑙家禺兰',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序16' },
    { name: '瑙隘茶业',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序17' },
    { name: '不倚贡茶',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序18' },
    { name: '顺冲茶厂',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序19' },
    { name: '葫芦居',               category: '餐饮',     zone: '餐饮区',    status: '已入驻', unit: '序20' },
    { name: '桂人制茶',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序21' },
    { name: '天誉',                 category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序22' },
    { name: '客韵茶行',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序23' },
    { name: '桂小六',               category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序25' },
    { name: '三湘六堡茶旅旗舰店',   category: '品牌',     zone: '品牌区',    status: '已入驻', unit: '序28' },
    { name: '中茗',                 category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序30' },
    { name: '茗山茶厂',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序31' },
    { name: '广西茉莉六堡茶有限公司', category: '品牌',   zone: '品牌区',    status: '已入驻', unit: '序33' },
    { name: '苍梧县白石山茶厂',     category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序34' },
    { name: '金润茶业',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序34b' },
    { name: '中韵(梧州)茶业有限公司', category: '品牌',   zone: '品牌区',    status: '已入驻', unit: '序35' },
    { name: '苍肃茶坊',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序36' },
    { name: '苍梧县大鱼冲秀瑙茶叶专业合作社', category: '茶文化', zone: '茶文化区', status: '已入驻', unit: '序38' },
    { name: '洲掏六堡茶业',         category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序39' },
    { name: '大叶大堡茶',           category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序40' },
    { name: '大中茶业',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序41' },
    { name: '不倚香韵茶厂',         category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序42' },
    { name: '堡茈农业',             category: '农业',     zone: '茶文化区',  status: '已入驻', unit: '序43' },
    { name: '元末六堡',             category: '茶文化',   zone: '茶文化区',  status: '已入驻', unit: '序44' },
    { name: '趣古雅第',             category: '文创',     zone: '文创区',    status: '已入驻', unit: '序45' },
    { name: '六堡茶研究院',         category: '文化',     zone: '文化区',    status: '已入驻', unit: '序46' },
  ],

  // ── 统计数据 ──
  stats: [
    { value: 46,    label: '营业商户' },
    { value: 12680, label: '招商面积 ㎡' },
    { value: 6,     label: '招商区块' },
    { value: 100,   label: '营业率 %' },
  ],

  // ── 页脚 ──
  footer: {
    brand: '六堡小镇 L I U B A O   T O W N',
    copyright: '© 2026 六堡小镇智慧文旅 · 梧州苍梧',
  },
};
