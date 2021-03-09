//录入数据用
module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Article = mongoose.model('Article')
    const Category = mongoose.model('Category')
    const Hero = mongoose.model('Hero')
    const Ad = mongoose.model('Ad')

    //导入新闻数据
    router.get('/news/init',async (req,res) => {
        const parent = await Category.findOne({
            name:'新闻中心'
        })
        const categories = await Category.find().where({
            parent
        }).lean()
        const title = ["《目标》·新英雄澜CG", "嫦娥皮肤创意赏析第四期，又是被美到的一天~", "重磅合作华为，王者荣耀开启合作新篇章", "嫦娥皮肤设计创意赏析第二期，女神新装抢先看！", "【获奖公示】设计、视频、音乐赛道获奖名单——王者荣耀风物志共创大赛", "如果有一个可以跟王者策划零距离“对线”交流的机会，你会……", "【获奖公示】云阁绮霞 -王者荣耀风物志插画漫画大赛", "新皮肤爆料｜守护万千星河，云上仙君新装登场！", "顺风局主题语音票选活动结果公告", "这大唐盛世如你所愿 《乱世王者》喜迎公测三周年庆", "创意互动营互动小任务第三期开启公告", "《御龙在天手游》全新资料篇“天下一统”震撼上线", "12月26日体验服停机更新公告", "12月25日全服不停机更新公告", "12月24日体验服不停机更新公告", "12月24日体验服停机更新公告", "12月23日净化游戏环境声明及处罚公告", "12月23日“演员”惩罚名单", "12月23日外挂专项打击公告", "12月23日全服不停机更新公告", "12月22日体验服停机更新公告", "12月22日英雄平衡性调整丨孙策、玄策、达摩等多位英雄增强", "12月22日全服不停机更新公告", "12月21日体验服停机更新公告", "恭喜DYG夺得KPL秋季赛冠军！冠军回馈来袭，双旦福利开启！", "参与活动免费解锁KPL限定皮肤个人专属购买6折特权", "【手Q独家】好友助力赢现金好礼", "【看KPL总决赛 赢豪华大礼】活动公告", "【手Q独家】商城限时免单", "冬至聚峡谷，应援KPL得好礼", "新英雄澜登场，冬日聚峡谷对战赢好礼", "王者创意互动周好礼来袭 云中君-纤云弄巧限时秒杀", "【手Q独家】商城限时免单", "感恩节快乐，参与活动领缤纷好礼", "挑战绝悟赢荣誉称号，S17赛季战令限时返场", "【手Q独家】商城限时免单", "【战报】摘冠称王！恭喜虎牙XYG 4:1 企鹅秦 获得全国大赛总冠军！", "前瞻丨全国大赛冠军之争 昔日冠军守擂佛山之巅 破刃之师欲夺至高荣誉", "全国大赛半决赛开启，今日猫神&佛山GK正式登场解说！", "25日战报：虎牙XYG势如破竹，成都TG攻守兼备，全国大赛四强队伍诞生", "【战报】乘胜追击！成都TG 3:1 上海9EZ 拿下最后一张全国四强入场券！", "【战报】掌控全场！虎牙XYG 3:0 战胜无锡YC 晋级全国四强！", "【战报】巅峰对决！嵊州SZG 3:2 杭州VP 成为首个晋级全国四强的战队！", "2020王者荣耀冬季冠军杯1月7日郑州打响，全新2V2赛趣味来袭！", "[战报] 力克强敌！无锡YC 3比0击败广州GTT挺进全国八强！", "2020KPL秋季赛最佳阵容公布，新科冠军DYG全队入选！", "[战报]首胜在手状态我有!嵊州SZG 3比0 战胜桂林NT.hea咖晋级全国8强", "2020KPL秋季赛赛季最佳阵容候选人名单出炉，最终结果12月24日公布！", "揭秘鲁班七号-电玩小子全新回城特效【老亚瑟的答疑时间】", "小乔缤纷独角兽（包括星元部件）体型优化完成【老亚瑟的答疑时间】", "鲁班七号-电玩小子全新回城揭秘！伽罗貂蝉皮肤BUG修复【老亚瑟的答疑时间】", "部分皮肤及英雄Bug的修复进展【老亚瑟的答疑时间】", "仲夏夜之梦、凤凰于飞优化计划抢先看【老亚瑟的答疑时间】", "“我的英雄”界面BUG修复&天鹅之梦头像框抢先看【老亚瑟的答疑时间】", "周年庆返场皮肤票选规则优化，武陵仙君最新消息【老亚瑟的答疑时间】", "天鹅之梦、龙胆修复&优化，英雄展示界面调整答疑【老亚瑟的答疑时间】", "大版本更新时间曝光，小乔-天鹅之梦优化即将上线【老亚瑟的答疑时间】", "露娜英雄及皮肤特效优化&最新bug修复进展【老亚瑟的答疑时间】", "铠技能异常问题修复，小乔体型优化进展【老亚瑟的答疑时间】", "宫本重塑后美术设计稿&最新bug修复进展【老亚瑟的答疑时间】"]
        const newsItems = title.map(title => {
            const randomCat = categories.slice(0).sort((a,b) => Math.random() - 0.5)
            return {
                categories:randomCat.slice(0,2),
                title: title

            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsItems)
        res.send(newsItems)
    })

    //新闻列表接口
    router.get('/news/list',async(req,res) => {
        const parent = await Category.findOne({
            name:'新闻中心'
        })
        const cats = await Category.aggregate([
            {
                $match: {  parent:parent._id }
            },
            {
                $lookup:{
                    from:'articles',
                    localField:'_id',
                    foreignField:'categories', //article的关联外键
                    as:'newsList'
                }
            },
            {
                $addFields:{
                    newsList:{$slice:['$newsList',5]}
                }
            }
        ])
        const children = cats.map(v => v._id)
        cats.unshift({
            name:'热门',
            newsList:await Article.find().where({
                categories:{$in:children}
            }).populate('categories').lean().limit(5)
        })
        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = cat.name === '热门'? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })
  
    //英雄列表接口
    router.get('/heroes/list',async(req,res) => {
        const parent = await Category.findOne({
            name:'英雄'
        })
        const cats = await Category.aggregate([
            {
                $match: {  parent:parent._id }
            },
            {
                $lookup:{
                    from:'heros',
                    localField:'_id',
                    foreignField:'categories', //heores的关联外键
                    as:'heroList'
                }
            },
        ])
        const children = cats.map(v => v._id)
        cats.unshift({
            name:'热门',
            heroList:await Hero.find().where({
                categories:{$in:children}
            }).populate('categories').lean().limit(10)
        })
        cats.map(cat => {
            cat.heroList.map(news => {
                news.categoryName = cat.name === '热门'? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })

    //富文本编辑器内容接口
    router.get('/articles/:id',async(req,res) => {
        const data = await Article.findById(req.params.id).lean()
        data.related = await Article.find().where({
            categories:{ $in : data.categories},
            title:{$ne:data.title}
        }).limit(2)
        console.log('相关筛选'+ data.related)
        res.send(data)
    })


    //英雄详情
    router.get(`/heroes/:id`,async(req,res) => {
        const data = await Hero.findById(req.params.id)
        .populate('categories leading_weapons losing_weapons partners.hero')
        .lean()
        res.send(data)
    })

    //首页轮播图详情
    router.get('/ads/:id',async(req,res) => {
        const data = await Ad.findById(req.params.id)
        res.send(data)
    })

    //首页轮播图列表
    router.get('/ads',async(req,res) => {
        const data = await Ad.findOne({
            name:'首页活动入口'
        })
        res.send(data)
    })

    app.use('/web/api',router)

}