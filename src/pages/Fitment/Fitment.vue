<template>
    <div>
      <div class="fitment-banner">
        <div class="fitment-banner-text">
          <h2>专注做好公寓装修</h2>
          <div></div>
          <p>快速迭代用工方式 </p>
          <p>引领一个细分行业快速上升 </p>
        </div>
      </div>

      <div class="fitment-service">
        <h2>服务介绍</h2>
        <div class="fitment-service-content">
          <div class="fitment-service-content-item single">
            <div class="img">
              <img src="../../assets/images/fitment-service1.png" alt="">
            </div>
            <h4>公寓装修</h4>
            <p>公寓设计、施工、供应链完整链条服务</p>
            <p>快速装修，轻松入住</p>
          </div>
          <div class="fitment-service-content-item double">
            <div class="img">
              <img src="../../assets/images/fitment-service2.png" alt="">
            </div>
            <h4>餐饮装修</h4>
            <p>餐饮设计、施工、其他相关施工项目总包</p>
            <p>与后期维修、后厨巡检、保养形成完整的服务闭环</p>
          </div>
        </div>
      </div>

      <div class="fitment-advantage">
        <h2>服务优势</h2>
        <div class="fitment-advantage-content clearfix">
          <div class="fitment-advantage-content-item single clearfix">
            <img src="../../assets/images/fitment_advantage1.png" alt="">
            <div class="fitment-advantage-content-text">
                <p>设计施工管理团队达<span>8个</span>城市团队（北京、天津、成都、武汉、南京、苏州、重庆、无锡）</p>
                <p>下辖直属百名设计师、百名工长，近千产业工人</p>
                <p>月完成<span>4-5千套</span>公寓快装服务，通过互联网信息方式同步管理，<span>高效的服务</span>为公寓快装保驾护航</p>
            </div>
          </div>
          <div class="fitment-advantage-content-item double clearfix">
            <div class="fitment-advantage-content-text">
              <p>拥有<span>清华美院毕业设计师</span>团队</p>
              <p>拥有<span>15年以上餐饮施工团队组</span></p>
              <p>能保证<span>高质量、高效率</span>完成甲方托付</p>
            </div>
            <img src="../../assets/images/fitment_advantage2.png" alt="">
          </div>
          <div class="fitment-advantage-content-item single clearfix">
            <img src="../../assets/images/fitment_advantage3.png" alt="">
            <div class="fitment-advantage-content-text">
              <p>自建<span>专业餐饮设计施工团队</span></p>
              <p>为各大餐饮企业提供<span>专业、优质</span>的装修设计与施工服务</p>
              <p>与维修服务形成<span>有效闭环</span>，能服务于餐饮全生命周期</p>
            </div>
          </div>
        </div>
      </div>

      <div class="fitment-invite">
        <h3>招聘工长</h3>
        <p>招<span>强</span>人，招<span>年轻</span>人，招比我强的人，招想变强的新人，</p>
        <p>招<span>简单直接实在</span>人，招挺直腰板挣钱的人，招<span>立即行动说干就干</span>的人</p>
        <button @click="enterClick()">查看招聘 <img src="../../assets/images/fitment_arrow.png" alt=""></button>
      </div>
    </div>
</template>

<script>
    import JoinUs from "../JoinUs/JoinUs";

    export default {
        name: "Fitment",
        methods:{
          enterClick(){
            window.sessionStorage.setItem('openFlag',true);
            this.$router.push('JoinUs');
          }
        },
    }
</script>

<style scoped>
  .fitment-banner{
    height: 932px;
    background: url("../../assets/images/fitment_banner_bg.png") no-repeat;
    -webkit-background-size:100% 100%;
    background-size: 100% 100%;
    position: relative;
  }
  .fitment-banner .fitment-banner-text{
    position: absolute;
    left: 242px;
    top: 265px;
  }
  .fitment-banner .fitment-banner-text h2{
    font-size:100px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
    line-height:140px;
    margin-bottom: 24px;
  }
  .fitment-banner .fitment-banner-text div{
    width:90px;
    height:10px;
    background:rgba(2,172,85,1);
    margin-bottom: 41px;
  }
  .fitment-banner .fitment-banner-text p{
    font-size:40px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:70px;
  }

  .fitment-service{
    background: #F9F9F9;
    padding: 118px 280px 129px;
  }
  .fitment-service h2{
    font-size: 66px;
    color: #2C2C2C;
    text-align: center;
    margin-bottom: 120px;
    text-align: center;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item{
    width: 1390px;
    height: 250px;
    background: #ffffff;
    margin: 0 auto 86px;
    padding-top: 48px;
    position: relative;
    box-sizing: border-box;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item.single{
    padding-left: 302px;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item.double{
    padding-left: 0;
    padding-right: 302px;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item .img{
    width: 125px;
    height: 250px;
    background: #F9F9F9;
    position: absolute;
    top: 0;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item.single .img{
    left: 0;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item.double .img{
    right: 0;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item img{
    width: 250px;
    height: 250px;
    box-shadow:0px 0px 26px 5px rgba(50,234,196,0.19);
    border-radius: 50% ;
    position: absolute;
    top: 0;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item.single img{
    left: 0px;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item.double img{
    right: 0px;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item h4{
    font-size: 40px;
    color: #333;
    margin-bottom: 30px;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item.double h4{
    text-align: right;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item p{
    font-size: 24px;
    color: #333333;
    margin-bottom: 10px;
  }
  .fitment-service .fitment-service-content .fitment-service-content-item.double p{
    text-align: right;
  }

  .fitment-advantage{
    padding: 120px 226px 180px;
  }
  .fitment-advantage h2{
    font-size: 66px;
    color: #2C2C2C;
    text-align: center;
    margin-bottom: 120px;
    text-align: center;
  }
  .fitment-advantage .fitment-advantage-content-item{
    width: 1400px;
    height: 537px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #F9F9F9;
    margin-bottom: 30px;
    position: relative;
  }
  .fitment-advantage .fitment-advantage-content-item img{
    width: 812px;
    /*height: 537px;*/
  }
  .fitment-advantage .fitment-advantage-content-item.single img{
    margin-right: 0\0;
    margin-right: 86px;
    float: left;
  }
  .fitment-advantage .fitment-advantage-content-item.double img{
    /*margin-left: 0\0;*/
    /*margin-right: 0;*/
    /*margin-left: 140px;*/
    float: right;
    position: absolute;
    right: 0;
    top: 0;
  }
  .fitment-advantage .fitment-advantage-content-item .fitment-advantage-content-text{
    width: 406px\0;
    height: 537px\0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute\0;
    top: 0\0;
    bottom: 0\0;
    display: block\0;
    padding-top: 159px\0;
  }
  .fitment-advantage .fitment-advantage-content-item.single .fitment-advantage-content-text{
    width: 406px;
    padding-right: 164px;
    float: right\0;
    padding-left: 86px\0;
    padding-right: 100px\0;
    right: 0\0;
  }
  .fitment-advantage .fitment-advantage-content-item.double .fitment-advantage-content-text{
    padding-left: 164px;
    float: left\0;
    left: 0\0;
  }
  .fitment-advantage .fitment-advantage-content-item .fitment-advantage-content-text p{
    font-size: 18px;
    color: #333;
    margin-bottom: 44px;
    line-height: 30px;

    width: 100%\0;
    word-wrap: break-word\0;
    word-break: break-all\0;
  }
  .fitment-advantage .fitment-advantage-content-item .fitment-advantage-content-text p:last-of-type{
    margin-bottom: 0;
  }
  .fitment-advantage .fitment-advantage-content-item .fitment-advantage-content-text p span{
    color: #02AC55;
  }

  .fitment-invite{
    width: 100%;
    height: 1000px;
    background: url("../../assets/images/fitment_invite_bg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    padding: 258px 226px;
    box-sizing: border-box;
  }
  .fitment-invite h3{
    font-size: 66px;
    color: #000;
    margin-bottom: 58px;
  }
  .fitment-invite p{
    font-size: 30px;
    color: #000;
    margin-bottom: 12px;
  }
  .fitment-invite p span{
    font-size: 36px;
    font-weight: 600;
  }
  .fitment-invite button{
    width:420px;
    height:90px;
    background:rgba(243,243,243,1);
    font-size: 40px;
    color: #000;
    /*text-align: center;*/
    /*line-height: 90px;*/
    margin-top: 98px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fitment-invite button img{
    width: 54px;
    margin-left: 18px;
  }
</style>
