<template>
    <div>
      <div class="repast-banner">
        <div class="repast-banner-text">
          <h2>餐厅无忧</h2>
          <div></div>
          <p>3-5公里覆盖全能师傅</p>
          <p>让维修不再有距离</p>
        </div>
      </div>

      <div class="repast-cate">
        <h2>服务类目</h2>
        <div class="repast-cate-item-box clearfix">
          <div class="repast-cate-item" v-for="(item,index) in repastCateData" :key="index">
            <div class="repast-cate-item-content">
              <div class="repast-cate-item-main">
                <img :src="item.main.imgSrc">
                <p>{{item.main.name}}</p>
              </div>
              <div class="repast-cate-item-back">
                <h4>{{item.back.name}}</h4>
                <p>{{item.back.intro}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="repast-advantage">
        <div class="repast-advantage-title">
          <p>服务优势</p>
        </div>
        <div class="repast-advantage-content clearfix">
          <div class="repast-advantage-left-box">
            <div>
              <div
                v-for="(item, index) in advantageData"
                :key="index"
                :class="{isShow:item.isShow}"
                @click="thisAdvantageShow(item)"
              >
                <div class="repast-advantage-left-box-item-content clearfix">
                  <i></i>
                  <p>{{item.title}}</p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="repast-advantage-right-box" v-for="(item, index) in advantageData" :key="index" v-show="item.isShow">
            <img :src="item.imgSrc" alt="">
            <div>
              <p v-for="(introItem,introIndex) in item.intro" :key="introIndex">{{introItem}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="repast-code">
        <div class="repast-code-bg"></div>
        <div class="repast-code-main">
          <div class="repast-code-left-box">
            <h3>公众账号</h3>
            <p>扫码获取更多服务！</p>
            <router-link :to="{path:'/Business'}" tag="p">
              商务合作<img src="../../assets/images/repast_arrow.png" alt="">
            </router-link>
          </div>
          <div class="repast-code-right-box">
            <img src="../../assets/images/repast_code.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Repast",
      data(){
        return {
          repastCateData: [
            {
              main:{
                imgSrc: require('../../assets/images/repast_pengren.png'),
                name: "烹饪设备"
              },
              back: {
                name:'烹饪设备',
                intro:"蒸箱、电磁煲仔炉、煲仔炉、电磁炒灶、双眼炒灶、单眼炒灶、低汤灶电、烤箱、电炸炉、电暖汤池、肠粉炉、蒸灶、多孔蒸灶、低汤灶、烤炉、开水箱"
              }
            },
            {
              main:{
                imgSrc: require('../../assets/images/repast_zhileng.png'),
                name: "制冷设备"
              },
              back: {
                name:'制冷设备',
                intro:"四门冰箱、两门冰箱、保鲜柜"
              }
            },
            {
              main:{
                imgSrc: require('../../assets/images/repast_tiaoli.png'),
                name: "调理设备"
              },
              back: {
                name:'调理设备',
                intro:"制冰机、煮面炉、和面机、压面机、电饼铛、醒发箱"
              }
            },
            {
              main:{
                imgSrc: require('../../assets/images/repast_xidi.png'),
                name: "洗涤设备"
              },
              back: {
                name:'洗涤设备',
                intro:"消毒柜、洗碗机、三槽水池、双槽水池、单槽水池、电热水器"
              }
            },
            {
              main:{
                imgSrc: require('../../assets/images/repast_qita.png'),
                name: "空调设备"
              },
              back: {
                name:'空调设备',
                intro:"中央空调风机盘管、壁挂空调、柜机空调"
              }
            },
            {
              main:{
                imgSrc: require('../../assets/images/repast_teshu.png'),
                name: "专项服务"
              },
              back: {
                name:'专项服务',
                intro:"高压疏通"
              }
            },
          ],
          advantageData:[
            {
              title:'互联网新维修模式价值',
              imgSrc:require('../../assets/images/repast_advantage_bg1.png'),
              intro:[
                "降低人员成本",
                "降低维修率 ",
                "保证设备正常运行",
                "解决上门时效问题"
              ],
              isShow:1
            },
            {
              title:'大量专业全能型师傅',
              imgSrc:require('../../assets/images/repast_advantage_bg2.png'),
              intro:[
                "师傅严格资质认证",
                "定期专业线上线下培训",
                "携带专业工具 ",
                "统一着装规范",
              ],
              isShow:0
            },
            {
              title:'餐饮设备维修一站式解决方案',
              imgSrc:require('../../assets/images/repast_advantage_bg3.png'),
              intro:[
                "后厨设备巡保养",
                "制冷设备专修 ",
                "管道定期疏通",
              ],
              isShow:0
            }
          ]
        }
      },
      methods: {
        thisAdvantageShow(item){
          this.advantageData.forEach(function (i,k) {
            i.isShow=0
          })
          item.isShow=1;
        },
      }
    }
</script>

<style scoped>
  .repast-banner{
    height: 932px;
    background: url("../../assets/images/repast_banner_bg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .repast-banner .repast-banner-text{
    width: 417px;
    position: absolute;
    left: 269px;
    top: 400px;
  }
  .repast-banner .repast-banner-text h2{
    font-size:100px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
    line-height:140px;
    margin-bottom: 26px;
    text-align: right;
  }
  .repast-banner .repast-banner-text div{
    width:90px;
    height:10px;
    background:rgba(2,172,85,1);
    position: absolute;
    right: 0;
  }
  .repast-banner .repast-banner-text p{
    font-size:40px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:70px;
    text-align: right;
  }
  .repast-banner .repast-banner-text p:first-of-type{
    margin-top: 91px;
  }

  .repast-cate{
    padding: 118px 260px 180px;
    background:#f9f9f9;
  }
  .repast-cate h2{
    font-size: 66px;
    color: #2C2C2C;
    text-align: center;
  }
  .repast-cate .repast-cate-item-box{
    width: 1404px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 120px;
    box-sizing: border-box;
  }
  .repast-cate .repast-cate-item{
    width: 440px;
    height: 300px;
    padding: 20px;

    float: left\0;
  }
  .repast-cate .repast-cate-item:nth-of-type(1){
    padding-left: 0;
  }
  .repast-cate .repast-cate-item:nth-of-type(4){
    padding-left: 0;
  }
  .repast-cate .repast-cate-item:nth-of-type(3){
    padding-right: 0;
  }
  .repast-cate .repast-cate-item:nth-of-type(6){
    padding-right: 0;
  }
  .repast-cate .repast-cate-item-content{
    width: 440px;
    height: 300px;
    background: #fff;
    position: relative;
    perspective: 800px;
  }
  .repast-cate .repast-cate-item-content .repast-cate-item-main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transition: 1s;
    position: absolute;
    left: 0;
    top: 0;

    display: block\0;
  }
  .repast-cate .repast-cate-item-content .repast-cate-item-main img{
    display: block\0;
    margin: 0px auto 0px\0;
    margin-top: 60px\0;

    height: 96px;
    /*margin-bottom: 30px;*/
  }
  .repast-cate .repast-cate-item-content .repast-cate-item-main p{
    font-size: 30px;
    color: #2C2C2C;
    text-align: center;
    margin-top: 30px;
  }
  .repast-cate .repast-cate-item-content .repast-cate-item-back{
    width: 100%;
    height: 100%;
    background:rgba(2,172,85,1);
    box-shadow:0px 39px 54px -5px rgba(125,125,125,0.27);
    padding: 37px 34px;
    box-sizing: border-box;
    color: #fff;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    transition: 1s;
    position: absolute;
    left: 0;
    top: 0;

    display: none\0;
  }
  .repast-cate .repast-cate-item-content .repast-cate-item-back h4{
    font-size: 30px;
    margin-bottom: 19px;
  }
  .repast-cate .repast-cate-item-content .repast-cate-item-back p{
    font-size: 18px;
  }
  .repast-cate .repast-cate-item-content:hover .repast-cate-item-main{
    transform: rotateY(180deg);

    display: none\0;
  }
  .repast-cate .repast-cate-item-content:hover .repast-cate-item-back{
    transform: rotateY(0deg);

    display: block\0;
  }

  .repast-advantage .repast-advantage-title p{
    width: 1042px;
    height: 332px;
    background:rgba(237,255,246,1);
    font-size: 66px;
    color: #2C2C2C;
    line-height: 332px;
    padding-left: 284px;
    box-sizing: border-box;
    text-align: left;
  }
  .repast-advantage .repast-advantage-content{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 220px;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-left-box{
    width: 1042px;
    height: 608px;
    padding:108px 30px 108px 314px;
    box-sizing: border-box;
    float: left\0;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-left-box>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-left-box div{
    width: 100%;
    margin-bottom: 112px;
    font-size:40px;
    font-family:PingFang SC;
    color:rgba(44,44,44,1);
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-left-box .isShow .repast-advantage-left-box-item-content{
    color: #02AC55;
    position: relative;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-left-box div.isShow .repast-advantage-left-box-item-content i{
    /*content: "";*/
    width:3px;
    height:51px;
    background:#02AC55;
    position: absolute;
    left: -27px;
    top: 0;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-left-box div.isShow p{
    float: left\0;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-left-box div.isShow span{
    flex: 1;
    height:4px;
    background:#02AC55;
    margin-left: 30px;
    float: right\0;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-left-box div:last-of-type{
    margin-bottom: 0;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-right-box{
    flex: 1;
    position: relative;
    width: 642px;
    height: 608px;
    float: right\0;
    /*margin-right: 200px\0;*/
  }
  .repast-advantage .repast-advantage-content .repast-advantage-right-box img{
    width: 100%;
    height: 100%;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-right-box div{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(255,255,255,0.3);
    z-index: 99;
    font-size: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    box-sizing: border-box;
  }
  .repast-advantage .repast-advantage-content .repast-advantage-right-box div p{
    margin-bottom: 54px;
    text-align: center;
  }

  .repast-code{
    /*display: flex;*/
    /*justify-content: flex-start;*/
    /*align-items: center;*/
    /*!*background: #F9F9F9;*!*/
    /*padding: 120px 0 250px 284px;*/
    /*box-sizing: border-box;*/
    padding-top: 121px;
    padding-bottom: 120px;
    margin-top: 172px;

    position: relative;
  }
  /*.repast-code:before{*/
  /*  content: "";*/
  /*  width:1548px;*/
  /*  height:1px;*/
  /*  background:#eee;*/
  /*  position: absolute;*/
  /*  top: 0;*/
  /*  left: 186px;*/
  /*}*/
  .repast-code-bg{
    width:1920px;
    height:415px;
    background:rgba(237,255,246,1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .repast-code .repast-code-main{
    width:1334px;
    height:480px;
    background:rgba(255,255,255,1);
    box-shadow:0px 20px 36px -13px rgba(125,125,125,0.12);
    margin: 0 auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    /*background: #F9F9F9;*/
    padding: 120px 0 250px 284px;
    box-sizing: border-box;
  }
  .repast-code .repast-code-left-box{
    padding-top: 86px;
  }
  .repast-code .repast-code-left-box h3{
    font-size: 66px;
    color: #2C2C2C;
    margin-bottom: 18px;
    font-weight: normal;
    position: relative;
  }
  .repast-code .repast-code-left-box h3:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width:85px;
    height:4px;
    background:rgba(2,172,85,1);
  }
  .repast-code .repast-code-left-box p{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 40px;
    color: #2C2C2C;
    margin-top: 50px;
  }
  .repast-code .repast-code-left-box p span{
    width:43px;
    height:2px;
    background:rgba(44,44,44,1);
    margin-right: 12px;
  }
  .repast-code .repast-code-left-box p img{
    width: 39px;
    margin-left: 12px;
  }
  .repast-code .repast-code-left-box p:last-of-type{
    font-size: 30px;
    color: #02AC55;
    margin-top: 57px;
    cursor: pointer;
  }
  .repast-code .repast-code-right-box{
    height: 320px;
    flex: 1;
    position: relative;
    margin-left: 222px;
    /*margin-top: 81px;*/
    padding-top: 81px;

    position: absolute\0;
    margin-left: 0\0;
    top: 204px\0;
    left: 841px\0;
  }
  .repast-code .repast-code-right-box img{
    width: 320px;
    /*position: absolute;*/
    /*z-index: 2;*/
    /*box-shadow:0px 39px 54px -5px rgba(125,125,125,0.27);*/
  }
  .repast-code .repast-code-right-box div{
    position: absolute;
    width:876px;
    height:396px;
    background:rgba(237,255,246,1);
    right: 0;
    bottom: -71px;
    /*z-index: -1;*/
    left: 203px\0;
  }
</style>
