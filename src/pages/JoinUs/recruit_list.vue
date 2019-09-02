<template>
    <div class="bg">
      <div class="banner">
        <pre class="a">加入我们共赢未来</pre>
        <pre class="b">高薪职位  职等你来</pre>
        <div class="tr">
          <div class="line"></div>
        </div>
        <pre class="c"></pre>
      </div>
      <div class="advantage">
        <div>
          <ul>
            <li>
              具有市场竞争力的薪酬水平  <div class="tran"></div>
            </li>
            <li>
              足以改变人生轨迹的机会  <div class="tran"></div>
            </li>
            <li>
              高速发展的企业平台  <div class="tran"></div>
            </li>
            <li>
              能加速自身成长的工作内容  <div class="tran"></div>
            </li>
            <li>
              优秀的工作团队  <div class="tran"></div>
            </li>
            <li class="line"></li>
          </ul>
        </div>
        <div>
          <div class="rel">
            <img src="../../assets/images/JoinUs/circle.png" alt="">
            <div class="text">我们的优势</div>
          </div>
        </div>
      </div>

      <div class="recruit bgwhite" id="sss">
        <div class="title">招聘信息</div>
        <div class="con bgwhite">
          <div>
            <div class="inblock">
              <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入城市"
              >
              </el-autocomplete>
            </div>
            <div class="inblock"> <button type="button"  @click="handleSelect">区域搜索</button></div>
          </div>
          <div>

              <ul>
                <router-link  :to="{name:'recruit_detail',params:{id:index}}" tag="li" :key="index" v-for="(pos,index) in positionDetail">
                  <div class="fw">
                    <div class="posName">{{pos.posName}}</div>
                    <div>
                      <span class="mra">
                         <em v-if='index!=pos.workPlace.length' v-for="(item,index) in pos.workPlace">{{item}}</em>
                      </span>
                    </div>
                  </div>
                  <div class="one">
                    <img src="../../assets/images/AboutUs/arrow.png" alt="">
                  </div>
                  <div class="one salary">{{pos.sallery}}</div>
                </router-link>
              </ul>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "JoinUs",
        data(){
          return{
            cityArr: [],
            positionDetail:this.global.positionDetail,
            workYearArr:this.global.workYearArr,
            educationArr:this.global.educationArr,
            salaryArr:this.global.salaryArr,
            state: '',
            timeout:  null
          }
        },
        methods:{
          querySearchAsync(queryString, cb) {
            var cityArr = this.cityArr;
            var results = queryString ? cityArr.filter(this.createStateFilter(queryString)) : cityArr;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 10 * Math.random());
          },
          createStateFilter(queryString) {
            return (state) => {
              return (state.cityName.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          handleSelect(item) {
            var that=this;
            that.positionDetail=[];
            for(let k in that.global.positionDetail){
              if(that.global.positionDetail[k].workPlace.toString().indexOf(that.state)>-1){
                that.positionDetail.push(that.global.positionDetail[k]);
              }
            };
          },
        },
        mounted() {
          this.cityArr = this.global.cityArr;
        },
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
  .tr{
    text-align: right;
  }
  .rel{
    position: relative;
  }
  .banner{
    width: 100%;
    height: 826px;
    padding-top: 104px;
    background: url("../../assets/images/JoinUs/house.png");
    background-size: cover;
  }
  .banner pre{
    text-align: right;
    padding-right: 214px;
  }
  .banner .a{
    padding-top: 80px;
    font-size:100px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:140px;
  }
  .banner .tr{
    padding-right: 214px;
  }
  .banner div.line{
    display: inline-block;
    width:80px;
    height:6px;
    min-height: 1Px;
    margin: 55px 0;
    background:rgba(255,255,255,1);
  }
  .banner .b{
    padding-top: 38px;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(44,44,44,1);
    line-height:61px;
  }
  .banner .c{
    font-size:20px;
    font-family:PingFang SC-Regular;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:32px;
  }
  .advantage{
    padding-top: 144px;
    padding-bottom: 180px;
    position: relative;
  }
  .advantage:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .advantage>div:nth-child(1){
    float: left;
  }
  .advantage>div:nth-child(2){
    float: right;
  }
  .advantage img{
    width: 792px;
    height: 1030px;
    margin-top: -144px;
    margin-right:196px;
  }
  .advantage ul{
    width: 616px;
    margin-left: 286px;
    font-size:30px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:42px;
  }
  .advantage ul li{
    height: 42px;
    line-height: 42px;
    padding-bottom:118px;
    text-indent: 56px;
    font-size: 30px;
    position: relative;
  }
  .advantage ul .line{
    position: absolute;
    left:286px;
    top:159px;
    width: 1Px;
    border-left: 1Px dotted #CACACA;
    height: 540px;
    z-index: 0;
  }
  .advantage ul .tran{
    position: absolute;
    left:0;
    top:-6px;
    width:42px;
    height:42px;
    z-index: 8;
    transform: rotate(45deg);
    transform-origin: top left;
    background: #F9F9F9;
    border:1Px solid rgba(135,218,201,1);
  }
  .advantage .text{
    width:860px;
    height:146px;
    line-height: 146px;
    text-indent: 152px;
    background:rgba(2,172,85,1);
    position: absolute;
    right: 0;
    bottom:114px;
    font-size:66px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .recruit{
    padding: 126px 180px;
  }
  .recruit .title{
    text-align: center;
    font-size:66px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    margin-bottom: 100px;
  }
  .inblock{
    display: inline-block;
    vertical-align: text-top;
  }
  .recruit .con>div{
    margin: 0 auto;
  }
  .recruit .con{
    text-align: center;
    padding: 60px 0;
  }
  .recruit .con button{
    font-size:40px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height:100px;
    width:229px;
    height:100px;
    background:rgba(2,172,85,1);
    border-radius:13px;
    margin-left: 20px;
    cursor: pointer;
  }
  .recruit .con button:hover{
    background: #018B45;
  }
  .recruit .con ul li{
    padding: 60px 0;
    border-bottom: 1Px solid #EFEFEF;
    cursor: pointer;
    text-align: left;
  }
  .recruit .con ul li:last-child{
    border-bottom: none;
  }
  .recruit .con ul li>div{
    display: inline-block;
    vertical-align: top;
  }
  .recruit .con ul li div.fw{
    text-align: left;
    padding-left: 58px;
  }
  .recruit .con ul li div.one{
    text-align: right;
    float: right;
    margin-right: 60px;
  }
  .recruit .con ul li div.one img{
    display: inline-block;
    width: 90px;
    height:90px;
    vertical-align: middle;
  }
  .recruit .con ul li .posName{
    font-size:30px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(44,44,44,1);
    line-height:56px;
  }
  .recruit .con ul li span{
    font-size:18px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(125,125,125,1);
    line-height:36px;
  }
  .recruit .con ul li span.mra{
    margin-right: 9px;
  }
  .recruit .con ul li span.mra  em{
    font-size:22px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(96,96,96,1);
    line-height:25px;
  }
  .recruit .con ul li span.mrb{
    margin-right: 48px;
  }
  .recruit .con ul li div.salary{
    width: 150px;
    margin-right: 80px;
    white-space: nowrap;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:#02AC55;
    line-height:92px;
  }
</style>
