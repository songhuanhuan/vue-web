<template>
    <div class="footer">
<!--      <img src="../assets/images/footer-logo-img.png" alt="" class="footer-logo-img">-->
      <div class="footer-bar">
        <div class="footer-top-bar clearfix">
          <router-link :to="{path:'/Apartment'}" tag="div" class="footer-item">
            <div class="item-title">公寓维修<span></span></div>
          </router-link>
          <router-link :to="{path:'/Repast'}" tag="div" class="footer-item">
            <div class="item-title">餐饮维修<span></span></div>
          </router-link>
          <router-link :to="{path:'/Fitment'}" tag="div" class="footer-item">
            <div class="item-title">装修<span></span></div>
          </router-link>
          <router-link :to="{path:'/College'}" tag="div" class="footer-item">
            <div class="item-title">工匠学院<span></span></div>
          </router-link>
          <router-link :to="{path:'/Business'}" tag="div" class="footer-item">
            <div class="item-title">商务合作<span></span></div>
          </router-link>
          <router-link :to="{path:'/JoinUs'}" tag="div" class="footer-item">
            <div class="item-title">加入我们<span></span></div>
          </router-link>
          <router-link :to="{path:'/AboutUs'}" tag="div" class="footer-item">
            <div class="item-title">关于我们</div>
          </router-link>
        </div>
        <div>
          <span class="block">服务热线：400-618-0698</span>
          <span>企业邮箱：Bd@100jiaxiu.com</span>
        </div>
        <div>北京市丰台区外环西路26号院69号楼百家修大厦</div>
        <div>
          <span class="block">京ICP备18057154号-2</span>
          <span>Copyright 2019 百家修, All Rights Reserved.</span>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
      name: "Footer",
    }
</script>

<style scoped>
  .footer{
    height: 296px;
    padding-right: 0\0;

    background:rgba(242,242,242,1);;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 226px 90px;
    box-sizing: border-box;
    position: relative;

    font-family:PingFang SC;
  }
  .footer img.footer-logo-img{
    /*!*兼容ie8/ie9*!*/
    /*float:left\0;*/
    /*margin-right: 0\0;*/

    width: 200px;
    /*margin-right: 116px;*/

    position: absolute;
    left: 200px;
    top: 40px;
  }
  .footer .footer-bar{
    width: 900px;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    position: relative;

    /*兼容ie8/ie9*/
    float:left\0;
  }
  .footer .footer-bar>div{
    width: 100%;
    font-size: 20px;
    font-family:PingFang SC;
    /*font-weight:bold;*/
    color:#4A4A4A;
    line-height:28px;
    margin-bottom: 15px;
    text-align: center;
  }
  .footer .footer-bar>div:last-of-type{
    font-size: 15px;
  }
  .footer .footer-bar .footer-item{
    float: left;
    margin-right: 26px;
  }
  .footer .footer-bar .footer-top-bar .footer-item:last-of-type{
    margin-right: 0;
  }
  .footer .footer-bar .footer-bottom-bar .footer-item{
    margin-right: 26px;
  }
  .footer .footer-bar .footer-bottom-bar .footer-item:last-of-type{
    margin-right: 0;
  }
  .footer .footer-bar .footer-item .item-title{
    display: inline-block;
    font-size: 20px;
    color: #4A4A4A;
    margin-bottom: 34px;
    font-weight: 600;
    cursor: pointer;
    padding-right: 26px;
    position: relative;
  }
  .footer .footer-bar .footer-item span{
    display: inline-block;
    width:2px;
    height:16px;
    background:rgba(74,74,74,.8);;
    margin-left: 26px;
    position: absolute;
    right: 0px;
    top: 6px;
  }
  .footer .footer-bar .footer-item:nth-of-type(6) span{
    width: 1px;
  }
  .footer .footer-bar .block{
    margin-right: 38px;
  }
  .footer .footer-bar .block{
    margin-right: 18px;
  }
</style>
