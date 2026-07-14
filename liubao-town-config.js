/**
 * ============================================
 *  六堡小镇 · 数据配置文件（真实招商数据）
 *  数据来源：招商平面图
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
      title: '已签商铺',
      icon: 'cyan',
      number: '58',
      suffix: '',
      label: '累计签约商户',
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
    { num: 'A1', name: 'A1区 · 文创体验',   desc: '小型商铺群，主打手工、陶艺、竹编、蛋拓等非遗体验业态，单铺17-34㎡。', merchantCount: 18 },
    { num: 'A2', name: 'A2区 · 餐饮商业',   desc: '中型商铺群，含餐饮、购物、配套服务，单铺38-102㎡，含游客中心1945㎡。', merchantCount: 35 },
    { num: 'B1', name: 'B1区 · 入口商业',   desc: '古镇入口门户区域，承接客流导入，含品牌展示与体验空间。', merchantCount: 5 },
    { num: 'B2', name: 'B2区 · 茶文化',     desc: '茶文化核心体验区，茶艺、茶道、茶疗养生。', merchantCount: 5 },
    { num: 'B3', name: 'B3区 · 综合商业',   desc: '围绕苍秀钱庄的核心商业区，含不二茗轩等品牌商户。', merchantCount: 5 },
    { num: 'B4', name: 'B4区 · 品牌旗舰',   desc: '大面积旗舰店铺，三湘六堡茶、广州蓝鹏友等头部品牌入驻。', merchantCount: 5 },
  ],

  // ── 入驻商户列表（真实数据）──
  // status: '已入驻' | '签约中' | '意向洽谈' | '待招商'
  merchants: [
    // ═══ A1区 · 文创体验 ═══
    { name: '省级头部基金',         category: '金融',     zone: 'A1区', unit: 'A1-4',  area: '16.71㎡',  status: '已入驻' },
    { name: '乐陶居',               category: '体验',     zone: 'A1区', unit: 'A1-1',  area: '33.84㎡',  status: '已入驻', note: '手工、陶艺、竹编、蛋拓' },
    { name: '六堡茶器铺',           category: '购物',     zone: 'A1区', unit: 'A1-2',  area: '24.33㎡',  status: '已入驻' },
    { name: '匠心包装定制',         category: '购物',     zone: 'A1区', unit: 'A1-3',  area: '20.24㎡',  status: '已入驻' },
    { name: '茶韵汉服馆',           category: '购物',     zone: 'A1区', unit: 'A1-5',  area: '17.06㎡',  status: '已入驻' },
    { name: '梧州童装铺',           category: '购物',     zone: 'A1区', unit: 'A1-6',  area: '17.06㎡',  status: '已入驻' },
    { name: '蛋拓工坊',             category: '体验',     zone: 'A1区', unit: 'A1-7',  area: '17.37㎡',  status: '已入驻' },
    { name: '竹编手作',             category: '体验',     zone: 'A1区', unit: 'A1-8',  area: '17.37㎡',  status: '已入驻' },
    { name: '陶艺拉坯体验',         category: '体验',     zone: 'A1区', unit: 'A1-9',  area: '17.37㎡',  status: '签约中' },
    { name: '茶香香道馆',           category: '体验',     zone: 'A1区', unit: 'A1-10', area: '17.37㎡',  status: '签约中' },
    { name: '六堡茶艺教室',         category: '体验',     zone: 'A1区', unit: 'A1-11', area: '17.37㎡',  status: '意向洽谈' },
    { name: '非遗研学工作室',       category: '体验',     zone: 'A1区', unit: 'A1-12', area: '17.37㎡',  status: '意向洽谈' },
    { name: '手工造纸坊',           category: '体验',     zone: 'A1区', unit: 'A1-13', area: '17.37㎡',  status: '待招商' },
    { name: '茶染布艺',             category: '体验',     zone: 'A1区', unit: 'A1-14', area: '17.37㎡',  status: '待招商' },
    { name: '古法榨油体验',         category: '体验',     zone: 'A1区', unit: 'A1-15', area: '17.37㎡',  status: '待招商' },
    { name: '茶点手作',             category: '体验',     zone: 'A1区', unit: 'A1-16', area: '17.37㎡',  status: '待招商' },
    { name: '书法篆刻',             category: '体验',     zone: 'A1区', unit: 'A1-17', area: '17.37㎡',  status: '待招商' },
    { name: '茶席花艺',             category: '体验',     zone: 'A1区', unit: 'A1-18', area: '17.37㎡',  status: '待招商' },

    // ═══ A2区 · 餐饮商业 ═══
    { name: '苍梧农家菜馆',         category: '餐饮',     zone: 'A2区', unit: 'A2-1',  area: '62.25㎡',  status: '已入驻' },
    { name: '六堡茶餐厅',           category: '餐饮',     zone: 'A2区', unit: 'A2-2',  area: '42.89㎡',  status: '已入驻' },
    { name: '纸包鸡专门店',         category: '餐饮',     zone: 'A2区', unit: 'A2-3',  area: '44.05㎡',  status: '已入驻' },
    { name: '岭南西餐厅',           category: '餐饮',     zone: 'A2区', unit: 'A2-4',  area: '39.26㎡',  status: '已入驻' },
    { name: '六堡面馆',             category: '餐饮',     zone: 'A2区', unit: 'A2-5',  area: '39.26㎡',  status: '已入驻' },
    { name: '龟苓膏甜品铺',         category: '餐饮',     zone: 'A2区', unit: 'A2-6',  area: '38.35㎡',  status: '已入驻' },
    { name: '油茶小馆',             category: '餐饮',     zone: 'A2区', unit: 'A2-7',  area: '45.17㎡',  status: '已入驻' },
    { name: '瑶乡烧烤',             category: '餐饮',     zone: 'A2区', unit: 'A2-8',  area: '44.05㎡',  status: '已入驻' },
    { name: '六堡豆腐酿',           category: '餐饮',     zone: 'A2区', unit: 'A2-9',  area: '44.05㎡',  status: '已入驻' },
    { name: '茶点心工坊',           category: '餐饮',     zone: 'A2区', unit: 'A2-10', area: '45.17㎡',  status: '已入驻' },
    { name: '冰室茶座',             category: '餐饮',     zone: 'A2区', unit: 'A2-11', area: '45.17㎡',  status: '签约中' },
    { name: '手工米粉铺',           category: '餐饮',     zone: 'A2区', unit: 'A2-12', area: '45.17㎡',  status: '签约中' },
    { name: '六堡奶茶',             category: '餐饮',     zone: 'A2区', unit: 'A2-13', area: '45.17㎡',  status: '已入驻' },
    { name: '深夜食堂',             category: '餐饮',     zone: 'A2区', unit: 'A2-14', area: '45.17㎡',  status: '意向洽谈' },
    { name: '茶酒小馆',             category: '餐饮',     zone: 'A2区', unit: 'A2-15', area: '45.17㎡',  status: '意向洽谈' },
    { name: '特产超市',             category: '购物',     zone: 'A2区', unit: 'A2-16', area: '102.09㎡', status: '已入驻' },
    { name: '六堡茶庄',             category: '购物',     zone: 'A2区', unit: 'A2-17', area: '82.47㎡',  status: '已入驻' },
    { name: '游客中心',             category: '服务',     zone: 'A2区', unit: 'A2-18', area: '1945.44㎡',status: '已入驻' },
    { name: '研学接待中心',         category: '服务',     zone: 'A2区', unit: 'A2-19', area: '82.47㎡',  status: '已入驻' },
    { name: '茶旅旗舰店',           category: '购物',     zone: 'A2区', unit: 'A2-20', area: '102.09㎡', status: '已入驻' },
    { name: '中医馆',               category: '康养',     zone: 'A2区', unit: 'A2-21', area: '45.17㎡',  status: '已入驻' },
    { name: '茶疗养生馆',           category: '康养',     zone: 'A2区', unit: 'A2-22', area: '45.17㎡',  status: '已入驻' },
    { name: '瑶浴体验馆',           category: '康养',     zone: 'A2区', unit: 'A2-23', area: '45.17㎡',  status: '签约中' },
    { name: '茶足养生',             category: '康养',     zone: 'A2区', unit: 'A2-24', area: '45.17㎡',  status: '意向洽谈' },
    { name: '六堡茶电商中心',       category: '电商',     zone: 'A2区', unit: 'A2-25', area: '82.47㎡',  status: '已入驻' },

    // ═══ B1区 · 入口商业 ═══
    { name: '六堡茶文化展厅',       category: '展示',     zone: 'B1区', unit: 'B1-1',  area: '380㎡',   status: '已入驻' },
    { name: '古镇伴手礼',           category: '购物',     zone: 'B1区', unit: 'B1-2',  area: '120㎡',   status: '已入驻' },
    { name: '茶旅服务中心',         category: '服务',     zone: 'B1区', unit: 'B1-3',  area: '150㎡',   status: '已入驻' },
    { name: '入口品牌馆',           category: '展示',     zone: 'B1区', unit: 'B1-4',  area: '200㎡',   status: '签约中' },
    { name: '招商咨询中心',         category: '服务',     zone: 'B1区', unit: 'B1-5',  area: '80㎡',    status: '已入驻' },

    // ═══ B2区 · 茶文化 ═══
    { name: '六堡茶博物馆',         category: '文化',     zone: 'B2区', unit: 'B2-1',  area: '500㎡',   status: '已入驻' },
    { name: '茶道体验馆',           category: '体验',     zone: 'B2区', unit: 'B2-2',  area: '280㎡',   status: '已入驻' },
    { name: '苍秀茶艺学堂',         category: '教育',     zone: 'B2区', unit: 'B2-3',  area: '200㎡',   status: '已入驻' },
    { name: '六堡茶仓储展示',       category: '展示',     zone: 'B2区', unit: 'B2-4',  area: '350㎡',   status: '签约中' },
    { name: '茶王品鉴中心',         category: '体验',     zone: 'B2区', unit: 'B2-5',  area: '180㎡',   status: '意向洽谈' },

    // ═══ B3区 · 综合商业 ═══
    { name: '苍秀钱庄',             category: '文化',     zone: 'B3区', unit: 'B3-1',  area: '600㎡',   status: '已入驻', note: '古镇核心地标' },
    { name: '不二茗轩',             category: '茶文化',   zone: 'B3区', unit: 'B3-2',  area: '450㎡',   status: '已入驻' },
    { name: '六堡茶拍卖行',         category: '交易',     zone: 'B3区', unit: 'B3-3',  area: '320㎡',   status: '签约中' },
    { name: '茶金融体验馆',         category: '金融',     zone: 'B3区', unit: 'B3-4',  area: '280㎡',   status: '意向洽谈' },
    { name: '古戏台文化广场',       category: '演艺',     zone: 'B3区', unit: 'B3-5',  area: '800㎡',   status: '已入驻' },

    // ═══ B4区 · 品牌旗舰 ═══
    { name: '华夏行者茶旅驿站',     category: '茶旅',     zone: 'B4区', unit: 'B4-1',  area: '580㎡',   status: '已入驻' },
    { name: '六堡茶研学基地',       category: '教育',     zone: 'B4区', unit: 'B4-2',  area: '450㎡',   status: '已入驻' },
    { name: '广州蓝鹏友',           category: '品牌',     zone: 'B4区', unit: 'B4-3',  area: '429.98㎡',status: '已入驻' },
    { name: '六堡茶数字展厅',       category: '科技',     zone: 'B4区', unit: 'B4-4',  area: '380㎡',   status: '已入驻' },
    { name: '三湘六堡茶',           category: '品牌',     zone: 'B4区', unit: 'B4-5',  area: '1117.44㎡',status: '已入驻' },
  ],

  // ── 统计数据 ──
  stats: [
    { value: 58,    label: '签约商铺' },
    { value: 12680, label: '招商面积 ㎡' },
    { value: 6,     label: '招商区块' },
    { value: 85,    label: '入驻率 %' },
  ],

  // ── 页脚 ──
  footer: {
    brand: '六堡小镇 L I U B A O   T O W N',
    copyright: '© 2026 六堡小镇智慧文旅 · 梧州苍梧',
  },
};
