<template>
  <div class="bg">

    <div class="banner bgwhite">
      <img src="../../assets/images/AboutUs/banner.png" alt="">
    </div>

    <div class="instru flex">
      <ul>
        <li class="lf">
          <div class="title">公司介绍</div>
          <div class="line"></div>
          <div class="comCul">
            <em>企业文化：自驱、闭环、正能量</em>
            <em>企业价值：正</em>
          </div>
        </li>
      </ul>
      <p class="a borM">
        百家修品牌成立于2015年，业务围绕在维修和装修两大模块。百家修始终秉持着专业的“匠心”精神锁定行业，期望通过“互联网+”的模式，构建全产业链的行业新生态。
      </p>
      <p class="b">
        百家修以工程建设、装修及维修的房屋全生命周期为基础，为企业和家庭用户提供基于移动端的，全项目流程的动态管理应用。公司开发了适用于全行业的“赤兔”维修中台，可满足不同形态的维修业务使用场景，目前在公寓、餐饮、社区等行业服务。致力于为亿万用户提供一站式维修装修解决方案。
      </p>
      <p class="c">
        百家修现有数千名全能的专业全职维修师傅，业务落地北京、天津、上海、广州、深圳、武汉、杭州、南京、成都、苏州、西安、无锡、重庆等城市，服务百余万用户。
        百家修还创办了工匠学院，系统地培训维修装修服务人员。同时建立了BI数据分析系统，通过数据驱动，为业务赋能，提高服务质量和工作效率。
      </p>
      <p class="d">
        百家修，让房屋更有生命力！
      </p>
    </div>

    <div class="map flex bgwhite">
      <ul>
        <li>
          <img src="../../assets/images/AboutUs/map.png" alt="">
        </li>
        <li class="pl">
          <div class="title">服务规模</div>
          <div class="ins">
            <em class="other">3</em>年内向全国范围，
          </div>
          <div class="ins">
            提供<em class="other">20000</em> 名全职多能师傅
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <div class="smalTitle">团队规模</div>
      <ul>
        <li class="a">
          <div class="cira">
            <div><img src="../../assets/images/AboutUs/logo.png" alt=""></div>
          </div>
          <div class="cirb"></div>
          <div class="circ"></div>
          <div class="cird"></div>
          <div class="b">
            <div class="cirbs">
              <div>
                <div class="gj block">
                  <div>工匠学院</div>
                </div>
                <div class="circle bgy"></div>

                <div class="zx inblock">
                  <div>装修团队 </div>
                </div>
                <div class="circle bgg"></div>

                <div class="yf block">
                  <div>研发团队</div>
                </div>
                <div class="circle bgr"></div>

                <div class="wx inblock">
                  <div>维修团队</div>
                </div>
                <div class="circle bge"></div>

              </div>
            </div>
            <div class="circs">
              <div>
                <div class="service">
                  <div>服务培训中心</div>
                </div>
                <div class="circle bgy serCir"></div>

                <div class="skill">
                  <div>技能培训中心</div>
                </div>
                <div class="circle bgy skiCir"></div>

                <div class="sheji">
                  <div>设计中心</div>
                </div>
                <div class="circle bgg sjCir"></div>

                <div class="shigong">
                  <div>施工中心</div>
                </div>
                <div class="circle bgg shCir"></div>

                <div class="yunying">
                  <div>运营中心</div>
                </div>
                <div class="circle bge yyCir"></div>

                <div class="weiixu">
                  <div>维修中心</div>
                </div>
                <div class="circle bge wxCir"></div>

                <div class="yanfa">
                  <div>研发中心</div>
                </div>
                <div class="circle bgr yfCir"></div>
              </div>
            </div>
            <div class="cirds"></div>
          </div>
        </li>

      </ul>
    </div>
    <div class="progress bgwhite">
      <div class="smalTitle">发展历程</div>
      <div class="data">
        <img src="../../assets/images/AboutUs/line.png" alt="">

        <div class="one">
          <em class="time">2015-10</em><br>
          <em class="desc">百家修成立</em>
        </div>

        <div class="two">
          <em class="time">2016-2</em><br>
          <em class="desc">师傅入驻600人</em>
        </div>

        <div class="three">
          <em class="time">2016-4</em><br>
          <em class="desc">月均1000单</em>
        </div>

        <div class="four">
          <em class="time">2017-10</em><br>
          <em class="desc">承接蛋壳公寓业务</em>
        </div>

        <div class="five">
          <em class="time">2018-4</em><br>
          <em class="desc">开通全国10个城市</em>
        </div>

        <div class="six">
          <em class="time">2018-10</em><br>
          <em class="desc">全国全职师傅1000人</em>
        </div>

        <div class="seven">
          <em class="time">2018-11</em><br>
          <em class="desc">维修订单月均50000单</em>
        </div>

        <div class="eight">
          <em class="time">2019-2</em><br>
          <em class="desc">承接后厨设备维修</em>
        </div>

        <div class="nine">
          <em class="time">2019-4</em><br>
          <em class="desc">维修订单月均100000单</em>
        </div>

        <div class="ten">
          <em class="time">2019-7</em><br>
          <em class="desc">维修平台“赤兔”系统全面上线</em>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AboutUs",
        data(){
          return{
            cityArr:[
              {name:'北京',id:1,class:'bj',flag:false},
              {name:'天津',id:2,class:'tj',flag:false},
              {name:'西安',id:3,class:'xa',flag:false},
              {name:'南京',id:4,class:'nj',flag:false},
              {name:'成都',id:5,class:'cd',flag:false},
              {name:'重庆',id:6,class:'cq',flag:false},
              {name:'武汉',id:7,class:'wh',flag:false},
              {name:'无锡',id:8,class:'wx',flag:false},
              {name:'苏州',id:9,class:'sz',flag:false},
              {name:'杭州',id:10,class:'hz',flag:false},
              {name:'上海',id:11,class:'sh',flag:false},
            ]
          }
        },
      methods:{

      }
    }
</script>

<style scoped>
  em{
    font-style: normal;
  }
  .bg{
    background: #F9F9F9;
  }
  .bgwhite{
    background: white;
  }
  .bgy{
    background:rgba(245,166,35,1);
  }
  .bgg{
    background:rgba(74,144,226,1);
  }
  .bgr{
    background:rgba(208,2,27,1);
  }
  .bge{
    background:#02AC55;
  }
  .banner{
    width: 100%;
    height: 930px;
  }
  .banner img{
    width: 100%;
    height: 930px;
  }
  .pl{
    padding-left: 122px;
  }
  .tr{
    text-align: right;
  }
  .flex ul{
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
    /* 09版 */
    -webkit-box-orient: horizontal;
    /* 12版 */
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    -o-flex-direction: row;
    flex-direction: row;
    white-space: nowrap;
    zoom: 1;
  }
  .flex ul:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .flex ul>li{
    -webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1;         /* OLD - Firefox 19- */
    width: 50%\9;               /* For old syntax, otherwise collapses. */
    float: left\9;               /* For old syntax, otherwise collapses. */
    -webkit-flex: 1;          /* Chrome */
    -ms-flex: 1;              /* IE 10 */
    flex: 1;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */
  }
  .instru{
    background: url("../../assets/images/AboutUs/ins.png") 0 0 no-repeat;
    background-size: cover;
    height: 1670px;
    padding: 109px 366px 0;
  }
  .instru p{
    font-family:PingFang SC;
    color:rgba(44,44,44,1);
    line-height:44px;
    font-size:20px;
    font-weight:400;
    line-height:44px;
    margin: 0 auto 32px;
    text-align: justify;
  }
  .instru p.borM{
    padding-top: 50px;
    border-top: 2Px solid rgba(180,180,180,1);
  }
  .instru>ul{
    padding-bottom:50px;
  }
  .lf .title{
    font-size:66px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:92px;
  }
  .lf .line{
    width:105px;
    height:10px;
    margin:42px 0;
    background:rgba(2,172,85,1);
  }
  .lf .comCul{
    font-size:35px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:49px;
    margin-top: 48px;
  }
  .lf .comCul em{
    margin-right:45px;
  }
  .map{
    padding: 194px 0 208px 276px;
  }
  .map img{
    width:712px;
    height:599px;
  }
  .map .title{
    font-size:66px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:92px;
    padding: 100px 0;
  }
  .map .ins{
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:#2C2C2C;
    line-height:84px;
    margin-bottom: 16px;
  }
  .map .ins em{
    font-size:60px;
    color:#02AC55;
    line-height:84px;
    margin: 0 8px;
  }
.smalTitle{
  font-size:66px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(44,44,44,1);
  line-height:92px;
  padding: 120px 0;
  text-align: center;
}
.group{
  padding: 0 421px 240px;
}
.group ul li{
  position: relative;
  height:1083px;
}
 .cira{
    position: absolute;
    width:264px;
    height:265px;
    background: #02AC55;
    margin-left: -132px;
    margin-top: -132px;
    z-index: 7;
  }
  .cirb,.cirbs {
    width:544px;
    height:546px;
    margin-left: -272px;
    margin-top: -273px;
  }
  .cirb{
    box-shadow: 0 0 120px 30px rgba(50, 196, 166, 0.07) inset;
    background:rgba(2,172,85,0.07);
    z-index: 6;
    -webkit-animation: waterBanimate 2s ease-out infinite;
    animation: waterBanimate 2s ease-out infinite;
  }
  .circ,.circs{
    width:804px;
    height:807px;
    margin-left: -402px;
    margin-top: -403px;
  }
  .circ{
    box-shadow: 0 0 120px 30px rgba(50, 196, 166, 0.05) inset;
    background:rgba(2,172,85,0.05);
    z-index: 5;
    -webkit-animation: waterCanimate 2s 2s ease-out infinite;
    animation: waterCanimate 2s 2s ease-out infinite;
  }
  .cird {
    box-shadow: 0 0 120px 30px rgba(50, 196, 166, 0.03) inset;
    width:1078px;
    height:1083px;
    background:rgba(2,172,85,0.03);
    margin-left: -539px;
    margin-top: -541px;
    -webkit-animation: waterDanimate 2s 4s ease-out infinite;
    animation: waterDanimate 2s 4s ease-out infinite;
    z-index: 4;
  }
  .cira, .cirb, .circ, .cird,.cirbs, .circs{
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 100%;
  }
  .cirb, .circ, .cird{
    opacity: 0.4;
  }
  @-webkit-keyframes waterBanimate {
    0% {
      -webkit-transform: scale(0.48);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0.6;
    }
  }
  @keyframes waterBanimate {
    0% {
      -webkit-transform: scale(0.48);
      transform: scale(0.48);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0.6;
    }
  }
  @-webkit-keyframes waterCanimate {
    0% {
      -webkit-transform: scale(0.68);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0.6;
    }
  }
  @keyframes waterCanimate {
    0% {
      -webkit-transform: scale(0.68);
      transform: scale(0.68);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0.6;
    }
  }
  @-webkit-keyframes waterDanimate {
    0% {
      -webkit-transform: scale(0.75);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0.6;
    }
  }
  @keyframes waterDanimate {
    0% {
      -webkit-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0.6;
    }
  }
  .cira img{
    display: block;
    width:204px;
    height: auto;
    margin: 33% auto 0;
  }
  .cirbs>div,.circs>div{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .cirbs>div>div{
    position: absolute;
    font-size:30px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(44,44,44,1);
    line-height:42px;
  }
  .cirbs>div  .circle,.circs  .circle{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
  }
  .cirbs>div .gj{
    left: 50%;
    top:0;
  }
  .cirbs>div .zx{
    top: 50%;
    right: 0;
  }
  .cirbs>div .yf{
    bottom: 0;
    left: 50%;
  }
  .cirbs>div .wx{
    left: 0;
    top: 50%;
  }
  .cirbs>div .bgy{
    left: 50%;
    top:-13px;
    margin-left: -6px;
  }
  .cirbs>div .bgg{
    top: 50%;
    right: -13px;
    margin-top: -13px;
  }
  .cirbs>div .bgr{
    bottom: -13px;
    left: 50%;
    margin-left: -6px;
  }
  .cirbs>div .bge{
    left: -13px;
    top: 50%;
    margin-top: -13px;
  }
  .block>div{
    margin-left: -50%;
  }
  .inblock>div{
    margin-top: -25%;
  }
  .circs>div>div{
    position: absolute;
    font-size:25px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:36px;
  }
  .circs .service{
       top:5%;
       right: 25%;
     }
  .circs .skill{
    top:5%;
    left: 25%;
  }
  .circs .serCir{
    top:5%;
    right: 23%;
    margin-top: 13px;
  }
  .circs .skiCir{
    top:5%;
    left: 23%;
    margin-top: 13px;
  }
  .circs .sheji{
    top:35%;
    right: 2%;
  }
  .circs .shigong{
    top:58%;
    right: 2%;
  }
  .circs .sjCir{
    top:35%;
    right: -1%;
    margin-top: 13px;
  }
  .circs .shCir{
    top:58%;
    right: -1%;
    margin-top: 13px;
  }
  .circs .yunying{
    top:35%;
    left: 2%;
  }
  .circs .weiixu{
    top:58%;
    left: 2%;
  }
  .circs .yyCir{
    top:35%;
    left: -1%;
    margin-top: 13px;
  }
  .circs .wxCir{
    top:58%;
    left: -1%;
    margin-top: 13px;
  }
  .circs .yanfa{
    bottom: 0;
    left:50%;
  }
  .circs .yanfa div{
    margin-left: -50%;
  }
  .circs .yfCir{
    bottom:-13px;
    left: 50%;
    margin-left: -6px;
  }
  /*div:hover{*/
  /*  color: #32C4A6;*/
  /*}*/
  .progress img{
    width:1299px;
    height:469px;
    display: block;
    margin-left: 298px;
  }
  .progress .data{
    position: relative;
    padding-bottom: 281px;
  }
  .progress .data div{
    position: absolute;
    text-align: center;
  }
  .progress .data .time{
    font-size:30px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(44,44,44,1);
    line-height:42px;
  }
  .progress .data .desc{
    font-size:24px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(125,125,125,1);
    line-height:33px;
  }
  .progress .data div.one{
    left:252px;
    bottom:180px;
  }
  .progress .data div.two{
    left:322px;
    top:178px;
  }
  .progress .data div.three{
    left:512px;
    top:378px;
  }
  .progress .data div.four{
    left:602px;
    top:78px;
  }
  .progress .data div.five{
    left:742px;
    top:308px;
  }
  .progress .data div.six{
    left:873px;
    top:60px;
  }
  .progress .data div.seven{
    right:663px;
    top:225px;
  }
  .progress .data div.eight{
    right:555px;
    top:15px;
  }
  .progress .data div.nine{
    right:373px;
    top:218px;
  }
  .progress .data div.ten{
    right:238px;
    top:-82px;
  }

</style>
