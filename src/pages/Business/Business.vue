<template>
  <div class="bg">
    <div class="banner">
      <p class="title tc">聚英雄  · 创共赢</p>
      <p class="ins tc">协手合作，共赢未来</p>
    </div>
    <div class="advantage tc">
      <div class="title">我们的优势</div>
      <ul>
        <li class="left">
          <div class="tc">
            <span><img src="../../assets/images/zhuanye-icon.png" alt=""></span>
            <span class="wgb fsfouty">专业高效</span>
          </div>
          <div class="tc">
            <span><img src="../../assets/images/anquan-icon.png" alt=""></span>
            <span class="wgb fsfouty">安全透明</span>
          </div>
        </li>
        <li class="right">
          <div class="tc">
            <span><img src="../../assets/images/xingxiang-icon.png" alt=""></span>
            <span class="wgb fsfouty">形象统一</span>
          </div>
          <div class="tc">
            <span><img src="../../assets/images/fuwu-icon.png" alt=""></span>
            <span class="wgb fsfouty">服务保障</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="corperationInfo">
      <div class="title tc">合作信息</div>
      <ul>
        <li class="left tl">
          <div v-for="item in tabData"  class="wgb fsfouty" v-show="state==item.state">
            {{item.title}}
          </div>
          <div class="fsthree">电话：400-618-6098</div>
          <div class="fsthree">邮箱：Bd@100jiaxiu.com</div>
          <div class="wgb fsthree">合作方向：</div>
          <div v-for="item in tabData"  class="fstwenty" v-show="state==item.state">
            {{item.desc}}
          </div>
        </li>
        <li class="right wgb fsfouty tc">
          <div class="bgb">
             <div  :class="['circle', {'active': state==1}]" @mouseover="choiceTab(1)">
               公寓维修
             </div>
          </div>
          <div class="bgb">
            <div :class="['circle', {'active': state==2}]" @mouseover="choiceTab(2)">
              餐饮维修
            </div>
            <div :class="['circle', {'active': state==3}]" @mouseover="choiceTab(3)">
              装修
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="imgBar wgb tc">
      <div class="t">让房屋更有生命力</div>
      <div class="p">企业致力于打造成中国第一维修平台，成为您身边的维修专家</div>
    </div>
    <div class="corperationBrand">
      <div class="title tc">合作的品牌</div>
      <ul>
        <li><img src="../../assets/images/logo_1_1.png" alt="img"></li>
        <li><img src="../../assets/images/logo_2_1.png" alt="img"></li>
        <li><img src="../../assets/images/logo_3_1.png" alt="img"></li>
       </ul>
      <ul>
        <li><img src="../../assets/images/logo_1_2.png" alt="img"></li>
        <li><img src="../../assets/images/logo_2_2.png" alt="img"></li>
        <li><img src="../../assets/images/logo_3_2.png" alt="img"></li>
      </ul>
       <ul>
         <li><img src="../../assets/images/logo_1_3.png" alt="img"></li>
         <li><img src="../../assets/images/logo_2_3.png" alt="img"></li>
         <li class="clear"><img src="../../assets/images/logo_3_3.png" alt="img"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Business",
    data(){
      return {
        state:1,
        tabData:[
          {state:1,title:'公寓维修',desc:'公寓维修行业引领者和推动者，依托O2O线上平台，整合市场现有资源，创新服务模式，构建上门服务、透明维修、在线定价、无忧售后等品质服务体系，打造房屋全生命周期，推动维修服务行业更新换代。'},
          {state:3,title:'装修',desc:'专属设计施工团队，覆盖全国7个城市（北京、成都、武汉、南京、苏州、重庆、无锡），通过O2O的形式，高效承接公寓快装业务、餐饮装修业务；同时与后续维修形成闭环，让装修更具有生命。'},
          {state:2,title:'餐饮维修',desc:'餐饮维修行业一站式服务的开创者，通过B2B形式，降低维修成本；快速、专业的一站式服务，标准化、可视化的系统，解决了传统维修行业规模小、质量差、价格乱、上门慢的弊端，打造了餐饮维修行业的创新未来。'},
        ]
      }
    },
    methods:{
      choiceTab(state){
          this.state=state;
      }
    }
  }
</script>

<style scoped>
  .bg{
    background: #F9F9F9;
  }
  .tl{
    text-align: left;
  }
  .tc{
    text-align: center;
  }
  .tr{
    text-align: right;
  }
  .wgb{
    font-weight: bold;
  }
  .fsfouty{
    font-size: 40px;
  }
  .fsthree{
    font-size: 30px;
  }
  .title{
    font-size:66px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:92px;
    padding:120px 0;
  }
  .banner{
    width: 100%;
    height: 826px;
    padding-top: 104px;
    background: url("../../assets/images/business/banner.png");
    background-size: cover;
  }
  .banner .title{
    height:135px;
    font-size:100px;
    font-family:PingFang SC;
    font-weight:bold;
    color:#02AC55;
    line-height:135px;
    padding: 0;
  }
  .banner .ins{
    height:61px;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(42,42,42,1);
    line-height:61px;
  }
  .advantage{
    background: white;
  }
 .corperationInfo ul{
    margin: 0 225px;
    white-space: nowrap;
  }
  .corperationBrand ul{
    margin: 0 200px;
    white-space: nowrap;
  }
  .advantage ul li.clear:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .advantage ul li{
    display: inline-block;
    width: 49%;
    zoom: 1;
  }
  .advantage ul li>div{
    width: 195px;
    margin: 0 109px;
  }
  .advantage ul li.left>div{
    float: right;
  }
  .advantage ul li.right>div{
    float: left;
  }
  .advantage ul li span{
    display: block;
  }
  .advantage ul li span:nth-child(2){
    line-height:196px;
    padding-bottom: 112px;
  }
  .advantage img{
    width:187px;
    height:187px;
  }
  .advantage ul li span div{
    width:187px;
    height:187px;
    margin: 0 26px;
  }
  .corperationBrand{
    padding-bottom: 132px;
    background: white;
  }
  .corperationBrand img{
    width:458px;
    height:257px;
    margin-bottom: 63px;
  }
  .imgBar{
    width: 100%;
    height: 140px;
    padding: 110px 0;
    background: url("../../assets/images/business/black_white_bm.png");
    background-size: cover;
    margin-top: 214px;
    font-family:PingFang SC-Bold;
  }
  .imgBar .t{
    font-size:50px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:70px;
    margin-bottom: 20px;
  }
  .imgBar .p{
    font-size:30px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:42px;
  }
  .corperationInfo ul li{
    display: inline-block;
    width: 50%;
    vertical-align: top;
  }
  .corperationBrand ul:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .corperationBrand ul li{
    float: left;
    vertical-align: top;
    margin: 0 19px;
  }
  .corperationInfo ul li.left{
    margin-left: 70px;
    font-family:PingFang SC;
  }
  .corperationInfo ul li.left .fsfouty{
    line-height: 56px;
    margin-bottom: 29px;
  }
  .corperationInfo ul li.left .fsthree{
    line-height: 50px;
    font-family:PingFang SC;
  }
  .corperationInfo ul li.left .wgb{
    line-height: 50px;
    margin: 30px 0 18px;
  }
  .corperationInfo ul li.left .fstwenty{
    font-size:20px;
    font-family:PingFang SC;
    font-weight:400;
    line-height:47px;
    white-space: normal;
  }
  .corperationInfo ul li.right .circle{
    display: inline-block;
    width:220px;
    height:220px;
    line-height: 220px;
    box-shadow:0px 53px 133px 0px rgba(0,0,0,0.1);
    border-radius:333px;
  }
  .corperationInfo ul li.right .bgb{
    justify-content: center;
  }
  .corperationInfo ul li.right .bgb .circle{
    background:white;
    color: #2C2C2C;
    margin: 0px 18px;
  }
  .corperationInfo ul li.right .bgb .circle:hover {
    transform: scale(1.01);
    cursor: pointer;
    background:#02AC55;
    color:white;
    -webkit-transition: all 0.6s ease;
    -moz-transition: all 0.6s ease;
    -ms-transition: all 0.6s ease;
    -o-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
  .corperationInfo ul li.right .bgb .active {
    transform: scale(1.01);
    cursor: pointer;
    background:#02AC55;
    color:white;
    -webkit-transition: all 0.6s ease;
    -moz-transition: all 0.6s ease;
    -ms-transition: all 0.6s ease;
    -o-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
</style>
