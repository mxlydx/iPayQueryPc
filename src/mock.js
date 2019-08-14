import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let data = [] // 用于接受生成数据的数组
let size = [
  '300x250', '250x250', '240x400', '336x280',
  '180x150', '720x300', '468x60', '234x60',
  '88x31', '120x90', '120x60', '120x240',
  '125x125', '728x90', '160x600', '120x600',
  '300x600'
] // 定义随机值
for(let i = 0; i < 10; i ++) { // 可自定义生成的个数
  let template = {
    'Boolean': Random.boolean, // 可以生成基本数据类型
    'Natural': Random.natural(1, 10), // 生成1到100之间自然数
    'Integer': Random.integer(1, 100), // 生成1到100之间的整数
    'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    'Character': Random.character(), // 生成随机字符串,可加参数定义规则
    'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
    'Range': Random.range(0, 10, 2), // 生成一个随机数组
    'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
    'Color': Random.color(), // 生成一个颜色随机值
    'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
    'Name': Random.name(), // 生成姓名
    'Url': Random.url(), // 生成web地址
    'Address': Random.province() // 生成地址
  }
  data.push(template)
}

Mock.mock('/data/index', 'get', data) // 根据数据模板生成模拟数据
Mock.mock('/q', 'get', {
  "news": [
    {
      "aid": "1910",
      "author": "之家哥",
      "title": "中汇支付100%股权被冻结",
      "summary": "支付之家网（ZFZJ.CN）",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201908/09/094927w3hnafindifdalsf.jpg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1910"
    },
    {
      "aid": "1857",
      "author": "小漾",
      "title": "警惕“循环信用卡”骗局｜中汇代理商等分润“等到头秃”｜PingPong发布严正声明 ...",
      "summary": "财付通与网联合作，上半年接入49家村镇银行",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201907/16/111542cypyny4qoyqpq7q6.jpeg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1857"
    },
    {
      "aid": "1845",
      "author": "之家哥",
      "title": "中汇支付欠了上市公司2.25亿元",
      "summary": "不过也不用过于担心，因为奥马电器已经将这笔钱100%的计提坏账准备了。",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201906/28/095614hqfcgfcgcfggtz2c.png)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1845"
    },
    {
      "aid": "1723",
      "author": "之家哥",
      "title": "中汇支付或推新品，“中汇我刷woshuapay.com”备案成功",
      "summary": "“我刷”与上海“喔刷”读音以及拼音上都比较相像，对品牌认知会有一定影响。",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201904/23/094115kl80a8kkc80djrh6.jpg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1723"
    },
    {
      "aid": "1684",
      "author": "代理商网",
      "title": "突发！中汇掌富通在Apple Store“消失”，苹果手机目前无法下载安装 ...",
      "summary": "有网友分析认为，不排除被苹果下架的可能，也有可能是中汇支付方面主动下架。",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201904/10/143729b9zvvtwnvm0tm6u9.png)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1684"
    },
    {
      "aid": "1631",
      "author": "小漾",
      "title": "早茶：中汇支付违规遭青岛人行处罚丨嘉联支付母公司新国都业绩大增 ...",
      "summary": "中国银协发布关于银行业专业人员职业资格考试的郑重声明",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201903/26/102211dphbp770sp93p378.jpeg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1631"
    },
    {
      "aid": "1476",
      "author": "之家哥",
      "title": "中汇支付卷入多起诉讼纠纷，法院认为注册地无管辖权",
      "summary": "“分润拿不到，这个年怎么过？”",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201901/03/012339e7t7i80c7g8vskge.png)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1476"
    },
    {
      "aid": "1362",
      "author": "张盒子",
      "title": "“逼宫事件”后，中汇支付发布声明！",
      "summary": "中汇支付“逼宫事件”最新进展，有人回来上班有人被连夜抓捕",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201810/16/003723utx7r6t7tmmd7xrn.png)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1362"
    },
    {
      "aid": "1361",
      "author": "张盒子",
      "title": "独家！中汇支付控制权疑易主，多名高管考勤机前被当场开除 ...",
      "summary": "据悉，数名高管均是在考勤打卡的时候被新团队现场“扣下”并告知“被开除”的消息。",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201810/12/014400bljlqbll3llzboll.jpg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1361"
    },
    {
      "aid": "1274",
      "author": "之家哥",
      "title": "3亿重复到账事件后，中汇支付高层首度发声",
      "summary": "近期将组建中汇支付代理商交流群，有意向进群的请扫码加好友或添加zfzjff，然后发送“中汇”二字给小编，等待后续邀请",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201808/28/013753z8h6d8ozn6isou8a.jpg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1274"
    },
    {
      "aid": "1265",
      "author": "张盒子",
      "title": "中汇支付再现数亿重复到账，暴露的或是内部管理的混乱！",
      "summary": "中汇啊，走到今天不容易，你就长点心吧！",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201808/20/015730xh280g8ddh789v8t.jpg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1265"
    },
    {
      "aid": "1225",
      "author": "之家哥",
      "title": "中汇支付发布重要声明，谴责不实消息捕风捉影、断章取义、夸大事实 ...",
      "summary": "作为行业的参与者，应对支付怀有敬畏之心。",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201807/27/034345mir86wz5hpzbxjwn.jpg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1225"
    },
    {
      "aid": "1216",
      "author": "小漾",
      "title": "早茶｜中汇支付发布声明；融钰集团收关注函；哈罗单车新一轮10亿美元融资即将落地 ...",
      "summary": "小米集团推荐的P2P相继爆雷",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201807/23/210609fod2s7swbsehcc2o.jpeg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1216"
    },
    {
      "aid": "1167",
      "author": "宓迪 陈诗怡",
      "title": "支付罚单超50张，中汇智付等遭点名！",
      "summary": "今年央行（含各地分支行）对支付公司开出超过50张罚单，合计罚没金额超过3000万元。",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201806/28/012711yypwccju99kwa9cj.jpg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1167"
    },
    {
      "aid": "1092",
      "author": "李冰",
      "title": "中汇支付屡“吃”央行罚单，一大波第三方支付新规在路上",
      "summary": "央行加强监管、打击违规、规范市场的整治力度将会继续延续。",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201805/14/094539czgg5vyh77uwhg3m.jpg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=1092"
    },
    {
      "aid": "948",
      "author": "杨烁",
      "title": "中汇电子支付浙江分公司因违规被央行罚款6万元",
      "summary": "合计处6万元罚款",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201802/26/095335k4v50fr03yowzwf4.png)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=948"
    },
    {
      "aid": "946",
      "author": "小漾",
      "title": "早茶｜拉卡拉支付及中汇支付双双遭央行处罚 羊城通+闪付信用卡会重复扣费 ...",
      "summary": "微信辟谣：“一张微信截图就能刷光你银行卡“",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201802/26/093815ikc62w8ovcd92s24.jpeg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=946"
    },
    {
      "aid": "559",
      "author": "陈晨",
      "title": "上海德颐，北京海科，中汇三家违规被央行处罚",
      "summary": "中国人民银行长沙中心支行公示一则行政处罚",
      "pic": "height:40vw;background-image:url(http://www.zfzj.cn/data/attachment/portal/201709/22/111757r6j93qg966aoy13j.jpeg)",
      "url": "http://www.zfzj.cn/portal.php?mod=view&aid=559"
    }
  ],
  "list": [
    {
      "category": "支付牌照",
      "infoArr": [
        {
          "label": "批次",
          "seen": true,
          "text": "第五批",
          "txtSeen": true
        },
        {
          "label": "许可证编号",
          "seen": true,
          "text": "Z2020112000012",
          "txtSeen": true
        },
        {
          "label": "公司名称",
          "seen": true,
          "text": "中汇电子支付有限公司",
          "txtSeen": true
        },
        {
          "label": "法人",
          "seen": true,
          "text": "尹宏伟",
          "txtSeen": true
        },
        {
          "label": "业务类型",
          "seen": false,
          "text": "银行卡收单（上海、天津、辽宁（不含大连）、江苏、山东（含青岛）、湖北、广东 （不含深圳）、\n四川、陕西、北京、重庆、河北、山西、内蒙古、浙江 （不含宁波）、\n福建（不含厦门）、安徽、河南、江西、湖南、广西、贵州、云南）",
          "txtSeen": true
        },
        {
          "label": "有效期",
          "seen": true,
          "text": "2013-01-06-2023-1-5",
          "txtSeen": true
        }
      ],
      "key": "中汇",
      "keyword": "中汇电子支付有限公司",
      "moreList": [
        {
          "category": "支付牌照",
          "infoArr": [
            {
              "label": "批次",
              "seen": true,
              "text": "第六批",
              "txtSeen": true
            },
            {
              "label": "许可证编号",
              "seen": true,
              "text": "Z2022811000012",
              "txtSeen": true
            },
            {
              "label": "公司名称",
              "seen": true,
              "text": "北京中汇金电子商务有限公司",
              "txtSeen": true
            },
            {
              "label": "法人",
              "seen": true,
              "text": "曲爱萍",
              "txtSeen": true
            },
            {
              "label": "业务类型",
              "seen": false,
              "text": "预付卡发行与受理（北京市）",
              "txtSeen": true
            },
            {
              "label": "有效期",
              "seen": true,
              "text": "2013-07-06-2018-7-5",
              "txtSeen": true
            }
          ],
          "key": "中汇",
          "keyword": "北京中汇金电子商务有限..",
          "moreList": []
        }
      ],
      "index": 0
    },
    {
      "category": "收单机构号",
      "infoArr": [
        {
          "label": "机构号",
          "seen": true,
          "text": "868",
          "txtSeen": true
        },
        {
          "label": "机构名称",
          "seen": true,
          "text": "中汇电子支付有限公司",
          "txtSeen": true
        },
        {
          "label": "机构类型",
          "seen": false,
          "text": "第三方收单机构",
          "txtSeen": true
        }
      ],
      "key": "中汇",
      "keyword": "中汇电子支付有限公司",
      "moreList": [],
      "index": 1
    },
    {
      "category": "开户行联行号",
      "infoArr": [
        {
          "label": "所属银行",
          "seen": true,
          "text": "中国农业银行",
          "txtSeen": true
        },
        {
          "label": "银行全称",
          "seen": true,
          "text": "中国农业银行股份有限公司盐城中汇支行",
          "txtSeen": true
        },
        {
          "label": "联行号",
          "seen": true,
          "text": "103311040015",
          "txtSeen": true
        },
        {
          "label": "联系电话",
          "seen": false,
          "text": "95599",
          "txtSeen": true
        }
      ],
      "key": "中汇",
      "keyword": "中国农业银行股份有限公司盐..",
      "moreList": [
        {
          "category": "开户行联行号",
          "infoArr": [
            {
              "label": "所属银行",
              "seen": true,
              "text": "中国银行",
              "txtSeen": true
            },
            {
              "label": "银行全称",
              "seen": true,
              "text": "中国银行晋中汇通路支行",
              "txtSeen": true
            },
            {
              "label": "联行号",
              "seen": true,
              "text": "104175006976",
              "txtSeen": true
            },
            {
              "label": "联系电话",
              "seen": false,
              "text": "95566",
              "txtSeen": true
            }
          ],
          "key": "中汇",
          "keyword": "中国银行晋中汇通路支行",
          "moreList": []
        }
      ],
      "index": 2
    },
    {
      "category": "服务商评级",
      "infoArr": [
        {
          "label": "公司名",
          "seen": true,
          "text": "深圳市中汇付电子商务有限公司",
          "txtSeen": true
        },
        {
          "label": "营业执照编号",
          "seen": true,
          "text": "91440300060262176C",
          "txtSeen": true
        },
        {
          "label": "2018年度",
          "seen": false,
          "text": "C+",
          "txtSeen": true
        }
      ],
      "key": "中汇",
      "keyword": "深圳市中汇付电子商务有限公司",
      "moreList": [],
      "index": 3
    }
  ],
  "key": "中汇"
});
Mock.mock('/cq', 'get', {
  "queryResult": {
    "keyword": "财付通支付科技有限公司",
    "infoArr": [
      {
        "label": "批次",
        "text": "第一批",
        "txtSeen": true,
        "seen": true
      },
      {
        "label": "许可证编号",
        "text": "Z2000444000013",
        "txtSeen": true,
        "seen": true
      },
      {
        "label": "公司名称",
        "text": "财付通支付科技有限公司",
        "txtSeen": true,
        "seen": true
      },
      {
        "label": "法人",
        "text": "马化腾",
        "txtSeen": true,
        "seen": true
      },
      {
        "label": "业务类型",
        "text": "互联网支付、移动电话支付、银行卡收单",
        "txtSeen": true,
        "seen": false
      },
      {
        "label": "有效期",
        "text": "2011-05-03至2021-5-2",
        "txtSeen": true,
        "seen": true
      }
    ],
    "category": "支付牌照",
    "key": "通",
    "moreList": [
      {
        "keyword": "通联支付网络服务股份有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第一批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2000531000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "通联支付网络服务股份有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "肖风",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、固定电话支付、银行卡收单、预付卡受理（全国）、预付卡发行（上海市、北京市、江苏省、广东省、山西省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-05-03至2021-5-2",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "开联通支付服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第一批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2000611000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "开联通支付服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "熊文森",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理、互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-05-03至2021-5-2",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海盛付通电子支付服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第一批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2001031000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海盛付通电子支付服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "王静颖",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、预付卡发行与受理（仅限于为本机构开立的个人网上实名支付账户充值使用）、移动电话支付、固定电话支付、银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-05-03至2021-5-2",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "深圳市快付通金融网络科技服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第一批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2001344000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "深圳市快付通金融网络科技服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "张建",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、预付卡发行与受理（广东省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-05-03至2021-5-2",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海付费通信息服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第一批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2002631000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海付费通信息服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "张琦",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、移动电话支付、银行卡收单、预付卡发行与受理业务 （上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-05-03至2021-5-2",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "连连银通电子支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第二批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2002933000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "连连银通电子支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "康玲",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、移动电话支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-08-29至2021-8-28",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "捷付睿通股份有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第二批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2003215000014",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "捷付睿通股份有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "武军",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、移动电话支付、银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-08-29至2021-8-28",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "山东鲁商一卡通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第二批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2003537000015",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "山东鲁商一卡通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "李明",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、银行卡收单、预付卡发行与受理（山东省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-08-29至2021-8-28",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "四川商通实业有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第二批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2003851000013",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "四川商通实业有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "罗廷",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（四川省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-08-29至2021-8-28",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "联通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2004211000016",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "联通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "戴任飞",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、移动电话支付、固定电话支付、预付卡发行与受理（仅限线上实名支付账户充值）、银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "天津城市一卡通有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2004512000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "天津城市一卡通有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "张军",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（天津市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "广东银结通电子支付结算有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2004844000011",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "广东银结通电子支付结算有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "罗晓勤",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "银行卡收单（广东省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "河北一卡通电子支付服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2005213000011",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "河北一卡通电子支付服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "徐建新",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（河北省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "哈尔滨华通支付网络科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2005423000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "哈尔滨华通支付网络科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "宋炘垚",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（黑龙江省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "安徽华夏通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2005634000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "安徽华夏通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "金明",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（安徽省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "贵州汇联通电子商务服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2005852000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "贵州汇联通电子商务服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "杨志",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（贵州省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "厦门易通卡运营有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2006135000014",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "厦门易通卡运营有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "沈海波",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（福建省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京海科融通信息技术有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2006511000018",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京海科融通信息技术有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "刘雷",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "深圳市腾付通电子支付科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2006844000016",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "深圳市腾付通电子支付科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "乔海",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、移动电话支付、银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "东方付通信息技术有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2006931000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "东方付通信息技术有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "曾杰",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "顺丰恒通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2007244000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "顺丰恒通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": " 吴建国",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京中欣银宝通商业服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2008711000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京中欣银宝通商业服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "徐建胜",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（北京市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京市政交通一卡通有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2008911000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京市政交通一卡通有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "燕清",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（北京市、河北省、天津市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海便利通电子商务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2009631000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海便利通电子商务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "时玮康",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海申城通商务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2009931000014",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海申城通商务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "徐若海",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海大众交通商务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2010031000011",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海大众交通商务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "赵思渊",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2021-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "银视通信息科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2010531000016",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "银视通信息科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "张大钟",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "数字电视支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "深圳市神州通付科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2011144000013",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "深圳市神州通付科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "李享成 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、移动电话支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "汇元银通（北京）在线支付技术有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2011611000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "汇元银通（北京）在线支付技术有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "吴妍冰 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（仅限为本机构开立的个人网上实名支付账户充值使用）、互联网支付(全国）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "福建国通星驿网络科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2012235000011",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "福建国通星驿网络科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "林锋 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "广西恒大万通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2012445000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "广西恒大万通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "符小霞 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、预付卡发行与受理（广西壮族自治区）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海金诚通商务服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2013331000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海金诚通商务服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "洪远富 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市、江苏省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "中钢银通信息技术服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2013431000011",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "中钢银通信息技术服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "金天安 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海润通实业投资有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2013631000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海润通实业投资有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "吴红军 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "江苏旅通商务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2014432000018",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "江苏旅通商务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "唐华亮  ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（江苏省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "山东城联一卡通有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2014737000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "山东城联一卡通有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "王连忠",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（山东省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "成都天府通金融服务股份有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2014851000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "成都天府通金融服务股份有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "温丽萍 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（四川省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "汇通宝支付有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2014944000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "汇通宝支付有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "柯宗耀 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市、广东省、福建省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "陕西易通商联网络科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2015361000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "陕西易通商联网络科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "李跃平 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（陕西省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京恒信通电信服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2015511000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京恒信通电信服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "张彬 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "银行卡收单（北京市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京和融通支付科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2015611000018",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京和融通支付科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "黄师田 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "银行卡收单（北京市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京银通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2015711000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京银通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "潘广鹏 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（北京市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京高汇通商业管理有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2016211000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京高汇通商业管理有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "闫晓田 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（北京市、上海市、浙江省、广东省、辽宁省）、互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "重庆城市通卡有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2016950000015",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "重庆城市通卡有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "曾靖 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（重庆市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "重庆市公众城市一卡通有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2017050000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "重庆市公众城市一卡通有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "刘发明 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（重庆市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "吉林城市通卡股份有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2017522000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "吉林城市通卡股份有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "孙继彦 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（吉林省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "浙江银付通信息科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2017933000015",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "浙江银付通信息科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "徐小春 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（浙江省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "福建一卡通网络有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2018035000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "福建一卡通网络有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "颜远岩 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（福建省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "福建省掌财通支付服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2018135000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "福建省掌财通支付服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "林雪红 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（福建省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "安徽省万事通金卡通科技信息服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2018434000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "安徽省万事通金卡通科技信息服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "张帆 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（安徽省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "江西缴费通信息技术有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2018736000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "江西缴费通信息技术有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "李清 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（江西省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "广西支付通商务服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2019045000016",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "广西支付通商务服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "刘怡 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（广西壮族自治区）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "兰州易家万通企业服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2019562000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "兰州易家万通企业服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "马文才 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（甘肃省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "青岛百森通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2019637000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "青岛百森通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "王明霞",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（青岛市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "青岛百达通支付服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2019737000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "青岛百达通支付服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "李建国",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（青岛市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2022-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "成都支付通新信息技术服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第五批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2020651000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "成都支付通新信息技术服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "杨俊",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "银行卡收单（四川省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-01-06至2023-1-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "河北北人冀通支付服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第五批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2020913000013",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "河北北人冀通支付服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "白珊",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（河北省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-01-06至2023-1-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海商旅通商务服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第五批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2021631000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海商旅通商务服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "王煜",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-01-06至2023-1-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "银盈通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第五批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2022011000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "银盈通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "陈忠",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（仅限北京市、山西省、云南省、贵州省）、互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-01-06至2023-1-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京全顺通商贸有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第五批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2022111000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京全顺通商贸有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "文跃然",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（北京市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-01-06至2023-1-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "云南银通企业服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第六批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2022653000013",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "云南银通企业服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "汪从波",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（云南省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-07-06至2018-7-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "杭州通策会综合服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第六批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2023433000018",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "杭州通策会综合服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "臧焕华",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（浙江省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-07-06至2018-7-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海索迪斯万通服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第六批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2023531000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海索迪斯万通服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "MARC, GUY LOUIS ROLLAND",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-07-06至2018-7-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "福建省银通商务服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第六批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2023835000012",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "福建省银通商务服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "林财火",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（福建省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-07-06至2018-7-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "武汉城市一卡通有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第六批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2024642000013",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "武汉城市一卡通有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "胡汉友",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（湖北省、湖南省、江西省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-07-06至2018-7-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "快捷通支付服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第六批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2024733000013",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "快捷通支付服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "展波",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-07-06至2018-7-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "金运通网络支付股份有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第七批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2026437000017",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "金运通网络支付股份有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "王金鑫",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2014-07-10至2019-7-9",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京理房通支付科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第七批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2026711000014",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京理房通支付科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "单一刚",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2014-07-10至2019-7-9",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "北京畅捷通支付技术有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第七批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2026811000013",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "北京畅捷通支付技术有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "王文京",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2014-07-10至2019-7-9",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "广州商物通网络科技有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第七批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2025844000016",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "广州商物通网络科技有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "李金平",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2014-07-10至2019-7-9",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "重庆联付通网络结算科技有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第七批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2025550000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "重庆联付通网络结算科技有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "刘波",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2014-07-10至2019-7-9",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "西安城市一卡通有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第七批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2025161000011",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "西安城市一卡通有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "高满石",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理(陕西省)",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2014-07-10至2019-7-9",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "新疆一卡通商务服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第七批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2025265000016",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "新疆一卡通商务服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "蔡天佑",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理(新疆维吾尔自治区)",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2014-07-10至2019-7-9",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "易通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第六批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2024137000015",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "易通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "李明",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "互联网支付、银行卡收单",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-07-06至2018-7-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "通联商务服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2009031000013",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "通联商务服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "兰奇",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市、北京市、江苏省、广东省、山西省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2016-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海付费通企业服务有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2008531000010",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海付费通企业服务有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "方坚",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2016-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "海南海岛一卡通支付网络有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2019146000014",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "海南海岛一卡通支付网络有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "刘江涛 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（海南省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2017-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "上海通卡投资管理有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第三批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2009231000011",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "上海通卡投资管理有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "马乙",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市、浙江省、安徽省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2011-12-22至2016-12-21",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "普天银通支付有限公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2013731000018",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "普天银通支付有限公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "丛惠生 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（上海市）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2017-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "西安银信商通网络科技有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第四批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2015261000011",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "西安银信商通网络科技有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "付振兴 ",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（陕西省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2012-06-27至2017-6-26",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      },
      {
        "keyword": "湖南财信金通电子商务有限责任公司",
        "infoArr": [
          {
            "label": "批次",
            "text": "第五批",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "许可证编号",
            "text": "Z2019943000019",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "公司名称",
            "text": "湖南财信金通电子商务有限责任公司",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "法人",
            "text": "李宝财",
            "txtSeen": true,
            "seen": true
          },
          {
            "label": "业务类型",
            "text": "预付卡发行与受理（湖南省）",
            "txtSeen": true,
            "seen": false
          },
          {
            "label": "有效期",
            "text": "2013-01-06至2018-1-5",
            "txtSeen": true,
            "seen": true
          }
        ],
        "category": "支付牌照",
        "key": "通",
        "moreList": []
      }
    ]
  }
});
