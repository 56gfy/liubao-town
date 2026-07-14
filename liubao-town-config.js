/**
 * ============================================
 *  六堡小镇 · 数据配置文件
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
      title: '招商入驻',
      icon: 'cyan',       // cyan | gold | teal
      number: '50',
      suffix: '+',
      label: '优质商铺已入驻',
      sparkType: 'line',  // line | bar
    },
    {
      title: '客流量预测',
      icon: 'gold',
      number: '12,000',
      suffix: '+',
      label: '日均预测客流',
      sparkType: 'line',
    },
    {
      title: '商铺分布',
      icon: 'teal',
      number: '8',
      suffix: '大',
      label: '主题特色街区',
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

  // ── 八大主题街区 ──
  zones: [
    { num: '01', name: '茶韵长街',  desc: '六堡茶品牌旗舰店、茶艺体验馆、茶文化博物馆，沉浸式茶道之旅。',       merchantCount: 12 },
    { num: '02', name: '古巷食肆',  desc: '汇集梧州地道美食，龟苓膏到纸包鸡，一条街吃遍岭南味。',             merchantCount: 8 },
    { num: '03', name: '匠心工坊',  desc: '非遗传承人驻场，竹编、陶艺、蜡染，亲手触摸千年技艺。',             merchantCount: 6 },
    { num: '04', name: '云间民宿',  desc: '马头墙下的精品民宿群，推窗见山、开门入画，枕茶香入眠。',           merchantCount: 5 },
    { num: '05', name: '数字体验馆', desc: 'AR/VR 沉浸式体验六堡茶制作工艺，科技讲述古老故事。',              merchantCount: 3 },
    { num: '06', name: '文创市集',  desc: '原创设计与本土匠人联动，打造六堡IP文创产品。',                   merchantCount: 7 },
    { num: '07', name: '茶旅驿站',  desc: '游客服务中心、研学基地、茶旅路线规划，一站式深度游。',             merchantCount: 4 },
    { num: '08', name: '夜游长廊',  desc: '灯光秀、夜间市集、古戏台夜场演出，点亮古镇夜经济。',             merchantCount: 5 },
  ],

  // ── 入驻商户列表 ──
  //  status: '已入驻' | '签约中' | '意向洽谈'
  merchants: [
    { name: '六堡茶韵旗舰店',       category: '茶文化',   zone: '茶韵长街',  status: '已入驻',  area: '120㎡' },
    { name: '陈氏老茶仓',           category: '茶文化',   zone: '茶韵长街',  status: '已入驻',  area: '85㎡' },
    { name: '茶圣居体验馆',         category: '茶文化',   zone: '茶韵长街',  status: '已入驻',  area: '200㎡' },
    { name: '苍梧纸包鸡',           category: '餐饮',     zone: '古巷食肆',  status: '已入驻',  area: '90㎡' },
    { name: '六堡豆腐酿',           category: '餐饮',     zone: '古巷食肆',  status: '已入驻',  area: '65㎡' },
    { name: '岭南龟苓膏铺',         category: '餐饮',     zone: '古巷食肆',  status: '已入驻',  area: '50㎡' },
    { name: '竹韵手作工坊',         category: '非遗手作', zone: '匠心工坊',  status: '已入驻',  area: '75㎡' },
    { name: '苍梧蜡染坊',           category: '非遗手作', zone: '匠心工坊',  status: '已入驻',  area: '60㎡' },
    { name: '马头墙精品民宿',       category: '民宿',     zone: '云间民宿',  status: '已入驻',  area: '350㎡' },
    { name: '茶山居客栈',           category: '民宿',     zone: '云间民宿',  status: '已入驻',  area: '280㎡' },
    { name: '六堡数字体验中心',     category: '科技体验', zone: '数字体验馆', status: '已入驻',  area: '400㎡' },
    { name: '茶乡文创设计室',       category: '文创',     zone: '文创市集',  status: '已入驻',  area: '55㎡' },
    { name: '梧州非遗展示馆',       category: '文创',     zone: '文创市集',  status: '已入驻',  area: '150㎡' },
    { name: '茶旅集散中心',         category: '服务',     zone: '茶旅驿站',  status: '已入驻',  area: '300㎡' },
    { name: '研学教育基地',         category: '教育',     zone: '茶旅驿站',  status: '已入驻',  area: '500㎡' },
    { name: '古镇灯光艺术团',       category: '演艺',     zone: '夜游长廊',  status: '已入驻',  area: '200㎡' },
    { name: '六堡夜市运营管理',     category: '运营',     zone: '夜游长廊',  status: '已入驻',  area: '800㎡' },
    { name: '匠心陶艺馆',           category: '非遗手作', zone: '匠心工坊',  status: '签约中',  area: '45㎡' },
    { name: '瑶乡油茶铺',           category: '餐饮',     zone: '古巷食肆',  status: '签约中',  area: '40㎡' },
    { name: '茶香花艺工作室',       category: '文创',     zone: '文创市集',  status: '意向洽谈', area: '35㎡' },
    { name: '六堡茶电商直播基地',   category: '电商',     zone: '数字体验馆', status: '签约中',  area: '600㎡' },
    { name: '古戏台粤剧团',         category: '演艺',     zone: '夜游长廊',  status: '意向洽谈', area: '250㎡' },
  ],

  // ── 统计数据（数字滚动区）──
  stats: [
    { value: 50,   label: '签约商铺' },
    { value: 12000, label: '日均客流' },
    { value: 8,    label: '主题街区' },
    { value: 96,   label: '入驻率 %' },
  ],

  // ── 页脚 ──
  footer: {
    brand: '六堡小镇 L I U B A O   T O W N',
    copyright: '© 2026 六堡小镇智慧文旅 · 梧州苍梧',
  },
};
