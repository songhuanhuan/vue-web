<template>
    <div>
      <div class="home-banner">
        <h2>寻找探索者</h2>
        <p>师傅招聘 职等你来</p>
        <router-link :to="{path:'/JoinUs'}" tag="button" class="home-joinUs-btn">
          加入我们
        </router-link>
      </div>

      <div class="home-business-box">
        <h2>三大业务</h2>
        <div class="home-business-item-box clearfix">
          <div
            v-for="(item,index) in businessItemData"
            :key="index"
            :class="['home-business-item',{'mouseenter':item.hoverFlag==1},{'mouseout':item.hoverFlag==2}]"
            @mouseenter="businessItemMouseenter(item)"
            @mouseleave="businessItemMouseout(item)"
          >
            <img :src="item.imgSrc">
            <div class="home-business-item-text clearfix">
              <h3>{{item.name}}</h3>
              <p>{{item.intro}}</p>
              <router-link :to="{path:item.path}" tag="a" href="javascript:;">
                点击查看 >
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="home-advantage-box">
        <h2>我们的优势</h2>
        <div class="home-advantage-item-box clearfix">
          <div class="home-advantage-item">
            <img src="../../assets/images/zhuanye-icon.png" alt="">
            <p>专业高效</p>
          </div>
          <div class="home-advantage-item">
            <img src="../../assets/images/anquan-icon.png" alt="">
            <p>安全透明</p>
          </div>
          <div class="home-advantage-item">
            <img src="../../assets/images/xingxiang-icon.png" alt="">
            <p>形象统一</p>
          </div>
          <div class="home-advantage-item" style="margin-right: 0;">
            <img src="../../assets/images/fuwu-icon.png" alt="">
            <p>服务保障</p>
          </div>
        </div>
      </div>

      <div class="home-partner-box">
        <h2>合作的品牌</h2>
        <div class="home-partner-item-box">
          <img src="../../assets/images/partner1.png" alt="">
          <img src="../../assets/images/partner2.png" alt="">
          <img src="../../assets/images/partner3.png" alt="">
          <img src="../../assets/images/partner4.png" alt="">
          <img src="../../assets/images/partner5.png" alt="">
          <img src="../../assets/images/partner6.png" alt="">
          <img src="../../assets/images/partner7.png" alt="">
          <img src="../../assets/images/partner8.png" alt="">
          <img src="../../assets/images/partner9.png" alt="">
        </div>
      </div>

      <div class="home-city-box clearfix">
        <div class="home-map-box">
          <div
            v-for="(item,index) in mapData"
            :key="index"
            :class="['home-map-point',{'active': item.flag}]"
            @mouseenter="mapHover(item)"
          ></div>
        </div>
        <div class="home-city-text-box">
          <p>覆盖13大城市</p>
          <div class="home-city-text-box-content">
            <div class="clearfix">
              <span>· 北京</span>
              <span>· 上海</span>
              <span>· 广州</span>
              <span>· 深圳</span>
              <span>· 天津</span>
              <span>· 成都</span>
              <span>· 杭州</span>
              <span>· 南京</span>
              <span>· 苏州</span>
              <span>· 武汉</span>
              <span>· 无锡</span>
              <span>· 重庆</span>
              <span>· 西安</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        businessItemData:[
          {
            tabIndex: 1,
            imgSrc:require('../../assets/images/home-business1.png'),
            name:'公寓维修',
            path:'/Apartment',
            intro:'暖心及时的高水平服务，维修让房屋更有生命力',
            hoverFlag:0
          },
          {
            tabIndex: 2,
            imgSrc:require('../../assets/images/home-business2.png'),
            name:'餐饮维修',
            path:'/Repast',
            intro:'餐饮设备维修，一站式解决方案',
            hoverFlag:0
          },
          {
            tabIndex: 3,
            imgSrc:require('../../assets/images/home-business3.png'),
            name:'装修',
            path:'/Fitment',
            intro:'快速迭代用工方式，引领一个细分行业快速上升',
            hoverFlag:0
          },
        ],
        mapData:[
          {name:'北京',flag:1},
          {name:'天津',flag:0},
          {name:'西安',flag:0},
          {name:'南京',flag:0},
          {name:'成都',flag:0},
          {name:'重庆',flag:0},
          {name:'武汉',flag:0},
          {name:'无锡',flag:0},
          {name:'苏州',flag:0},
          {name:'上海',flag:0},
          {name:'杭州',flag:0},
          {name:'广州',flag:0},
          {name:'深圳',flag:0},
        ]
      }
    },
    methods: {
      businessItemMouseenter(item){
        item.hoverFlag=1;
      },
      businessItemMouseout(item){
        item.hoverFlag=2;
      },
      mapHover(item){
        this.mapData.forEach(function (i,k) {
          i.flag=0;
        });
        item.flag=1;
      },
    },
  }
</script>

<style scoped>
  .home-banner{
    height: 936px;
    background: url("../../assets/images/home-banner-bg.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
   }
  .home-banner h2{
    font-size:100px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(44,44,44,1);
    line-height:140px;
    position: absolute;
    left: 245px;
    top: 231px;
  }
  .home-banner p{
    font-size:40px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:56px;
    position: absolute;
    left: 246px;
    top: 376px;
  }
  .home-banner .home-joinUs-btn{
    width:238px;
    height:66px;
    background: #02AC55;
    border-radius:5px;
    position: absolute;
    left: 248px;
    bottom: 312px;
    font-size: 36px;
    color: #fff;
    cursor: pointer;
    transition: all .5s;
  }
  .home-banner .home-joinUs-btn:hover{
    background:#018B45;
    transition: all .5s;
  }


  .home-business-box{
    background:rgba(249,249,249,1);
    padding: 118px 200px 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home-business-box h2{
    font-size: 66px;
    color: #2C2C2C;
    font-weight: normal;
    margin-bottom: 114px;
    text-align: center;
  }
  .home-business-box .home-business-item-box,
  .home-business-box .home-business-item-box>span{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .home-business-box .home-business-item-box .home-business-item{
    width:470px;
    height:680px;
    background:rgba(255,255,255,1);
    border-radius:10px;

    float: left\0;
    margin-right: 30px\0;
  }
  .mouseenter{
    /*box-shadow:0px 39px 54px -5px rgba(125,125,125,0.27);*/
    animation: home-business-item-mouseenter .5s ease forwards;
  }
  .mouseout{
    /*box-shadow: none;*/
    animation: home-business-item-mouseout .5s ease forwards;
  }
  .home-business-box .home-business-item-box .home-business-item img{
    width: 100%;
    height: 500px;
  }
  .home-business-box .home-business-item-box .home-business-item .home-business-item-text{
    padding: 24px 36px 22px;
    background: #fff;
  }
  .home-business-box .home-business-item-box .home-business-item .home-business-item-text h3{
    font-weight: normal;
    font-size: 30px;
    color: #2C2C2C;
    margin-bottom: 12px;
  }
  .home-business-box .home-business-item-box .home-business-item .home-business-item-text p{
    font-size: 18px;
    color: #2C2C2C;
    margin-bottom: 14px;
  }
  .home-business-box .home-business-item-box .home-business-item .home-business-item-text a{
    font-size: 18px;
    color: #02AC55;
    float: right;
  }
  @keyframes home-business-item-mouseenter {
    0%{
      box-shadow: none;
      margin-top: 0;
    }
    100%{
      box-shadow:0px 39px 54px -5px rgba(125,125,125,0.2);
      margin-top: -20px;
    }
  }
  @keyframes home-business-item-mouseout {
    0%{
      box-shadow:0px 39px 54px -5px rgba(125,125,125,0.2);
      margin-top: -20px;
    }
    100%{
      box-shadow: none;
      margin-top: 0px;
    }
  }


  .home-advantage-box{
    padding: 120px 248px 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home-advantage-box h2{
    font-size: 66px;
    color: #2C2C2C;
    font-weight: normal;
    margin-bottom: 117px;
    text-align: center;
  }
  .home-advantage-box .home-advantage-item-box{
    width: 1425px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .home-advantage-box .home-advantage-item-box .home-advantage-item{
    float: left\0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 217px;
  }
  .home-advantage-box .home-advantage-item-box .home-advantage-item img{
    width: 195px;
    height: 195px;
    margin-bottom: 67px;
  }
  .home-advantage-box .home-advantage-item-box .home-advantage-item p{
    font-size: 40px;
    color: #2C2C2C;
    text-align: center;
  }


  .home-partner-box{
    background: #f9f9f9;
    padding: 121px 225px 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home-partner-box h2{
    font-size: 66px;
    color: #2C2C2C;
    font-weight: normal;
    margin-bottom: 114px;
    text-align: center;
  }
  .home-partner-box .home-partner-item-box{
    width: 1470px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .home-partner-box .home-partner-item-box img{
    width: 458px;
    height: 239px;
    margin-bottom: 69px;
    margin-right: 37px;
  }
  .home-partner-box .home-partner-item-box img:nth-of-type(3n){
    margin-right: 0;
  }


  .home-city-box{
    display: box;              /* OLD - Android 4.4- */
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 120px 224px;
  }
  /*.home-city-box>div{*/
  /*  -webkit-box-flex: 1;      !* OLD - iOS 6-, Safari 3.1-6 *!*/
  /*  -moz-box-flex: 1;         !* OLD - Firefox 19- *!*/
  /*  -webkit-flex: 1;          !* Chrome *!*/
  /*  -ms-flex: 1;              !* IE 10 *!*/
  /*  flex: 1;                  !* NEW, Spec - Opera 12.1, Firefox 20+ *!*/
  /*}*/
  .home-city-box .home-map-box{
    width: 858px;
    height: 701px;
    background: url("../../assets/images/map_bg.png") no-repeat;
    background-size: 100% 100%;
    margin-right: 180px;
    position: relative;

    float: left\0;
  }
  .home-city-box .home-map-box .home-map-point{
    position: absolute;
    width: 40px;
    height: 31px;
    background: url("../../assets/images/dizhi_hui.png") no-repeat;
    background-size: 100% 100%;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(1){
    right: 199px;
    bottom: 443px;
  }

  .home-city-box .home-map-box .home-map-point:nth-of-type(2){
    right: 192px;
    bottom: 410px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(3){
    right: 313px;
    bottom: 320px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(4){
    right: 186px;
    bottom: 289px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(5){
    right: 393px;
    bottom: 254px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(6){
    right: 360px;
    bottom: 232px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(7){
    right: 229px;
    bottom: 248px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(8){
    right: 155px;
    bottom: 297px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(9){
    right: 159px;
    bottom: 266px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(10){
    right: 126px;
    bottom: 268px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(11){
    right: 139px;
    bottom: 231px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(12){
    right: 249px;
    bottom: 118px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(13){
    right: 220px;
    bottom: 106px;
  }
  .home-city-box .home-map-box .home-map-point.active{
    width: 64px;
    height: 51px;
    background: url("../../assets/images/dizhi.png") no-repeat;
    background-size: 100% 100%;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(1).active{
    right: 178px;
    bottom: 443px;
  }

  .home-city-box .home-map-box .home-map-point:nth-of-type(2).active{
    right: 180px;
    bottom: 410px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(3).active{
    right: 301px;
    bottom: 320px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(4).active{
    right: 174px;
    bottom: 289px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(5).active{
    right: 381px;
    bottom: 254px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(6).active{
    right: 348px;
    bottom: 232px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(7).active{
    right: 217px;
    bottom: 248px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(8).active{
    right: 143px;
    bottom: 297px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(9).active{
    right: 147px;
    bottom: 266px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(10).active{
    right: 114px;
    bottom: 268px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(11).active{
    right: 127px;
    bottom: 231px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(12).active{
    right: 237px;
    bottom: 118px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(13).active{
    right: 208px;
    bottom: 106px;
  }
  .home-city-box .home-map-box .home-map-point.active:before{
    content: '';
    display: block;
    width: 131px;
    height: 59px;
    font-size: 30px;
    color: #2C2C2C;
    text-align: center;
    line-height: 50px;
    background: url("../../assets/images/dizhi_text_bg.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: -40px;
    bottom: 50px;
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(1).active:before{
    content: "北京";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(2).active:before{
    content: "天津";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(3).active:before{
    content: "西安";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(4).active:before{
    content: "南京";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(5).active:before{
    content: "成都";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(6).active:before{
    content: "重庆";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(7).active:before{
    content: "武汉";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(8).active:before{
    content: "无锡";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(9).active:before{
    content: "苏州";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(10).active:before{
    content: "上海";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(11).active:before{
    content: "杭州";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(12).active:before{
    content: "广州";
  }
  .home-city-box .home-map-box .home-map-point:nth-of-type(13).active:before{
    content: "深圳";
  }

  .home-city-box .home-city-text-box{
    float: right\0;
    padding-top: 247px\0;
    box-sizing: border-box;
  }
  .home-city-box .home-city-text-box p{
    color: #2C2C2C;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 23px;
  }
  .home-city-box .home-city-text-box div{
    width: 390px;
  }
  .home-city-box .home-city-text-box .home-city-text-box-content>div{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .home-city-box .home-city-text-box div span{
    font-size: 30px;
    color: #7d7d7d;
    margin-right: 20px;
    margin-bottom: 10px;
    float: left\0;
  }
</style>



