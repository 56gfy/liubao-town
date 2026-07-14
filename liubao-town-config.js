/**
 * ============================================
 *  六堡小镇 · 数据配置文件（真实数据）
 *  数据来源：商铺营业率统计表（46家商户）
 * ============================================
 */

window.TOWN_CONFIG = {

  title: '六堡小镇',
  subtitle: '千年古镇 · 智慧新生',
  tagline: 'SMART HERITAGE TOWN',

  panels: [
    {
      title: '入驻商户',
      icon: 'cyan',
      number: '46',
      suffix: '家',
      label: '统计表在营商户',
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

  about: {
    title: '千年茶韵\n古镇新篇',
    paragraphs: [
      '六堡镇，始于明清，因六堡茶而闻名天下。青石板路蜿蜒于马头墙之间，古戏台上的粤韵犹在耳畔。',
      '如今，这座千年古镇正以数字化之姿焕发新生——智慧客流分析、沉浸式文旅体验、精准招商平台，让每一片茶叶的故事都能被世界听见。',
    ],
  },

  zones: [
    { num: 'A1', name: 'A1区 · 文创体验', desc: '小型商铺群，非遗体验业态。', merchantCount: 18 },
    { num: 'A2', name: 'A2区 · 餐饮商业', desc: '中型商铺群，含餐饮购物配套。', merchantCount: 35 },
    { num: 'B1', name: 'B1区 · 入口商业', desc: '古镇入口门户区域。', merchantCount: 5 },
    { num: 'B2', name: 'B2区 · 茶文化',   desc: '茶文化核心体验区。', merchantCount: 5 },
    { num: 'B3', name: 'B3区 · 综合商业', desc: '核心商业区。', merchantCount: 5 },
    { num: 'B4', name: 'B4区 · 品牌旗舰', desc: '头部品牌入驻。', merchantCount: 5 },
  ],

  merchants: [
    { name: '古排山',                                 category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '大营六堡茶',                             category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '村姑六堡茶',                             category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '茶船古道六堡茶',                         category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '六堡茶仓',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '双贵顶六堡茶',                           category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '供销茶社',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '濡菲六堡茶',                             category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '瑶家雪兰',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '不倚贡州',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '葫芦居',                                 category: '餐饮',   zone: '餐饮区',   status: '已入驻' },
    { name: '天誉',                                   category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '圣源',                                   category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '润袍',                                   category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '沁怡',                                   category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '茗山茶厂（臻茗堂）',                     category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '广西茉莉六堡茶有限公司（金润堂）',       category: '品牌',   zone: '品牌区',   status: '已入驻' },
    { name: '中韵(梧州)茶业有限公司',                 category: '品牌',   zone: '品牌区',   status: '已入驻' },
    { name: '沛露',                                   category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '清梅六堡茶业',                           category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '大中茶业',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '堡盛农业',                               category: '农业',   zone: '农业区',   status: '已入驻' },
    { name: '趣古雅集',                               category: '文创',   zone: '文创区',   status: '已入驻' },
    { name: '六堡茶研究院',                           category: '文化',   zone: '文化区',   status: '已入驻' },
    { name: '彪百科',                                 category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '铃娜茶坊',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '中茶',                                   category: '品牌',   zone: '品牌区',   status: '已入驻' },
    { name: '仓晋',                                   category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '茗丰茶业',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '邓家英记',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '苍扶茶业合作社',                         category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '恭州茶馆',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '瑞隆茶业',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '顺冲茶厂',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '桂人制茶',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '容韵茶行',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '桂小六',                                 category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '三源六堡茶旗舰店',                       category: '品牌',   zone: '品牌区',   status: '已入驻' },
    { name: '中茗',                                   category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '乔一',                                   category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '苍梧县白石山茶厂',                       category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '素素茶坊',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '苍梧县六堡镇秀珊茶叶专业合作社',         category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '大泽六堡茶',                             category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '不倚香韵茶厂',                           category: '茶文化', zone: '茶文化区', status: '已入驻' },
    { name: '元素六堡',                               category: '茶文化', zone: '茶文化区', status: '已入驻' },
  ],

  stats: [
    { value: 46,    label: '在营商户' },
    { value: 12680, label: '招商面积 ㎡' },
    { value: 6,     label: '招商区块' },
    { value: 46,    label: '总商户数' },
  ],

  footer: {
    brand: '六堡小镇 L I U B A O   T O W N',
    copyright: '© 2026 六堡小镇智慧文旅 · 梧州苍梧',
  },
};
