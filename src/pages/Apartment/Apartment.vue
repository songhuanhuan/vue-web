<template>
    <div>
      <div class="apartment-banner">
        <h2>难得一寓</h2>
        <p>专业维修 品质保障</p>
        <router-link :to="{path:'/Business'}" tag="button" class="apartment-teamwork-btn">
          商务合作
        </router-link>
      </div>

      <div class="apartment-service-cate-box">
        <h2>服务类目</h2>
        <div class="apartment-service-cate-item-box clearfix">
          <div
            v-for="(item,index) in apartmentServiceCateData"
            :key="index"
            class="apartment-service-cate-item"
          >
            <div
              :class="['apartment-service-cate-item-content',{'mouseenter':item.flag==1},{'mouseleave':item.flag==2}]"
               @mouseenter.stop="apartmentItemMouseenter(item)"
               @mouseleave.stop="apartmentItemMouseleave(item)"
            >
              <img :src="item.imgSrc" alt="">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="manage-system">
        <h2>专业的管理系统</h2>
        <div class="manage-system-btn-box">
          <button
            v-for="(item,index) in apartmentManageData"
            :key="index"
            :class="{'active':item.btnFlag}"
            @click="apartmentManageBtnClick(item)"
          >
            {{item.btnText}}
          </button>
        </div>
        <div class="manage-system-item-content-box">
          <div
            v-for="(item,index) in apartmentManageData"
            :key="index"
            :class="['manage-system-item-content',' clearfix',{'show-this':item.btnFlag},{'hide-this': !item.btnFlag}]">
            <img :src="item.content.imgSrc" alt="">
            <div class="manage-system-item-text-box">
              <h3>{{item.content.title}}</h3>
              <p>{{item.content.intro}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="apartment-service">
        <h2>严格的服务保障</h2>
        <div class="apartment-service-item-box clearfix">
          <div v-for="(item,index) in apartmentServiceData" :key="index" class="apartment-service-item">
            <img :src="item.imgSrc" alt="">
            <h4>{{item.name}}</h4>
            <p>{{item.intro1}}</p>
            <p>{{item.intro2}}</p>
          </div>
        </div>
      </div>

      <div class="apartment-data">
        <h2>以数据为驱动</h2>
        <div class="apartment-data-item-box clearfix">
          <div v-for="(item,index) in apartmentData1" :key="index" class="apartment-data-item">
            <div class="apartment-data-data">
                <span>{{item.data}}</span>
                <span v-if="item.unit">{{item.unit}}</span>
            </div>
            <div class="apartment-data-intro">{{item.intro}}</div>
          </div>
        </div>
        <div class="apartment-data-item-box clearfix">
          <div v-for="(item,index) in apartmentData2" :key="index" class="apartment-data-item">
            <div class="apartment-data-data">
              <span>{{item.data}}</span>
              <span v-if="item.unit">{{item.unit}}</span>
            </div>
            <div class="apartment-data-intro">{{item.intro}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Apartment",
      data(){
        return {
          apartmentServiceCateData:[
            {
              imgSrc: require('../../assets/images/dengju_icon.png'),
              name: "灯具",
              flag: 0
            },
            {
              imgSrc: require('../../assets/images/menchuang_icon.png'),
              name: "门窗",
              flag: 0
            },
            {
              imgSrc: require('../../assets/images/jiadian_icon.png'),
              name: "家电",
              flag: 0
            },
            {
              imgSrc: require('../../assets/images/jieju_icon.png'),
              name: "洁具",
              flag: 0
            },
            {
              imgSrc: require('../../assets/images/shuidian_icon.png'),
              name: "水电",
              flag: 0
            },
            {
              imgSrc: require('../../assets/images/dimian_icon.png'),
              name: "地面",
              flag: 0
            },
            {
              imgSrc: require('../../assets/images/jiaju_icon.png'),
              name: "家具",
              flag: 0
            },
            {
              imgSrc: require('../../assets/images/mensuo_icon.png'),
              name: "门锁",
              flag: 0
            },
            {
              imgSrc: require('../../assets/images/dianlu_icon.png'),
              name: "电路",
              flag: 0
            },
          ],
          apartmentServiceData:[
            {
              imgSrc: require('../../assets/images/apartment_worker1.png'),
              name:'技能培训',
              intro1:'定期专业线上线下培训',
              intro2:'提升师傅专业维修技能'
            },
            {
              imgSrc: require('../../assets/images/apartment_worker2.png'),
              name:'维修质量',
              intro1:'维修工单完成后',
              intro2:'专业监理现场验收'
            },
            {
              imgSrc: require('../../assets/images/apartment_worker3.png'),
              name:'专业工具',
              intro1:'配备专业技能工具',
              intro2:'应对各种疑难问题'
            },
            {
              imgSrc: require('../../assets/images/apartment_worker4.png'),
              name:'及时响应',
              intro1:'24小时提供',
              intro2:'迅捷高效的上门服务'
            },
            {
              imgSrc: require('../../assets/images/apartment_worker5.png'),
              name:'仪容仪表',
              intro1:'统一着装，干净整洁',
              intro2:'礼貌耐心，微笑服务'
            },
            {
              imgSrc: require('../../assets/images/apartment_worker6.png'),
              name:'知名团队',
              intro1:'国内知名团队管理',
              intro2:'创新服务管理方向'
            },
          ],
          apartmentManageData:[
            {
              btnText:"高效下单",
              btnFlag:1,
              content:{
                imgSrc:require('../../assets/images/apartment-service-item1-img.png'),
                title:"高效下单",
                intro:"租户在APP下单后，1分钟内系统自动认领并就近分配到维修师傅手中。"
              }
            },
            {
              btnText:"订单管理",
              btnFlag:0,
              content:{
                imgSrc:require('../../assets/images/apartment-service-item2-img.png'),
                title:"订单管理",
                intro:"从下单到完成，各维修环节均有专人进行全流程处理，确保在工单时效期内完成。"
              }
            },
            {
              btnText:"实时跟进",
              btnFlag:0,
              content:{
                imgSrc:require('../../assets/images/apartment-service-item3-img.png'),
                title:"实时跟进",
                intro:"从专业维修师上门到维修结束，及时准确对租户的问题进行有效解决。"
              }
            },
            {
              btnText:"系统对接",
              btnFlag:0,
              content:{
                imgSrc:require('../../assets/images/apartment-service-item4-img.png'),
                title:"系统对接",
                intro:"与蛋壳无缝对接，实现高效化、流程化管理。"
              }
            },
          ],
          apartmentData1:[
            {
              data:'1000',
              unit:'天',
              intro:'平台安全运营'
            },
            {
              data:'189',
              unit:'个',
              intro:'服务覆盖全国区县'
            },
            {
              data:'1000',
              unit:'位',
              intro:'专业维修师'
            },
          ],
          apartmentData2:[
            {
              data:'99%',
              intro:'预约客户及时率'
            },
            {
              data:'99%',
              intro:'师傅上门及时率'
            },
            {
              data:'99%',
              intro:'订单完成好评率'
            },
          ]
        }
      },
      methods:{
        apartmentItemMouseenter(item){
          item.flag=1;
        },
        apartmentItemMouseleave(item){
          item.flag=2;
        },
        apartmentManageBtnClick(item){
          this.apartmentManageData.forEach(function (i,k) {
            i.btnFlag=0;
          })
          item.btnFlag=1;
        },
      }
    }
</script>

<style scoped>
  .apartment-banner{
    height: 936px;
    background: url("../../assets/images/apartment-banner-bg.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .apartment-banner h2{
    font-size:100px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(44,44,44,1);
    line-height:140px;
    position: absolute;
    left: 211px;
    top: 261px;
  }
  .apartment-banner p{
    font-size:40px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(44,44,44,1);
    line-height:56px;
    position: absolute;
    left: 212px;
    top: 405px;
  }
  .apartment-banner .apartment-teamwork-btn{
    width:238px;
    height:66px;
    background:rgba(2,172,85,1);
    border-radius:5px;
    position: absolute;
    left: 214px;
    bottom: 312px;
    font-size: 36px;
    color: #fff;
    cursor: pointer;
    transition: all .5s;
  }
  .apartment-banner .apartment-teamwork-btn:hover{
    background:#018B45;
    transition: all .5s;
  }

  .apartment-service-cate-box{
    background:rgba(249,249,249,1);
    padding: 118px 260px 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .apartment-service-cate-box h2{
    font-size: 66px;
    color: #2C2C2C;
    font-weight: normal;
    margin-bottom: 114px;
    text-align: center;
  }
  .apartment-service-cate-box .apartment-service-cate-item-box{
    width: 1420px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .apartment-service-cate-box .apartment-service-cate-item-box .apartment-service-cate-item{
    width: 472px;
    padding: 16px;
    height: 332px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(249,249,249,1);
    /*border-right: 1px solid #edeef4;*/
    /*border-bottom: 1px solid #edeef4;*/
    position: relative;

    float: left\0;
  }
  .apartment-service-cate-box .apartment-service-cate-item-box .apartment-service-cate-item .apartment-service-cate-item-content{
    width: 440px;
    height: 300px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute\0;
    top: 16px\0;
    left: 16px\0;
  }
  .apartment-service-cate-box .apartment-service-cate-item-box .apartment-service-cate-item .apartment-service-cate-item-content.mouseenter{
    width: 480px;
    height: 320px;
    position: absolute;
    left: -4px;
    top: 4px;
    z-index: 999;
    box-shadow:0px 39px 54px -5px rgba(125,125,125,0.27);

    /*top: 6px\0;*/
    /*left: -4px\0;*/
    /*margin: 0\0;*/
    transition: all 0.5s;
  }
  .apartment-service-cate-box .apartment-service-cate-item-box .apartment-service-cate-item .apartment-service-cate-item-content.mouseleave{
    width: 440px;
    height: 300px;
    position: static;
    box-shadow: none;
    transition: all .5s;
    position: absolute\0;
  }
  .apartment-service-cate-box .apartment-service-cate-item-box .apartment-service-cate-item-content img{
    display: block\0;
    margin: 0 auto 0\0;
    margin-top: 83px\0;

    height: 87px;
  }
  .apartment-service-cate-box .apartment-service-cate-item-box .apartment-service-cate-item-content p{
    font-size: 30px;
    color: #2C2C2C;
    text-align: center;
    margin-top: 30px;
  }

  .manage-system{
    padding: 120px 225px 180px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .manage-system h2{
    font-size: 66px;
    color: #2C2C2C;
    font-weight: normal;
    margin-bottom: 120px;
    text-align: center;
  }
  .manage-system .manage-system-btn-box{
    margin: 0 auto 110px\0;
    padding-top: 6px\0;

    width:930px;
    height:80px;
    background:rgba(255,255,255,1);
    border-radius:40px;
    border:2px solid rgba(220,220,220,1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*padding: 0 8px;*/
    padding-left: 8px;
    padding-right: 8px;
    box-sizing: border-box;
    margin-bottom: 110px;
  }
  .manage-system .manage-system-btn-box button{
    width:220px;
    height:64px;
    background:rgba(249,249,249,1);
    border-radius:32px;
    font-size: 30px;
    color: #2C2C2C;
    margin-right: 13px\0;
  }
  .manage-system .manage-system-btn-box button:last-of-type{
    margin-right: 0\0;
  }
  .manage-system .manage-system-btn-box button.active{
    background:rgba(2,172,85,1);
    color: #fff;
  }
  .manage-system .manage-system-item-content-box{
    position: relative;
    width: 1470px;
    height: 500px;
  }
  .manage-system .manage-system-item-content{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    opacity: 0;
  }
  .manage-system .manage-system-item-content.show-this{
    opacity: 1;
    transition: all .8s;
  }
  .manage-system .manage-system-item-content.hide-this{
    opacity: 0;
    transition: all .8s;
  }
  .manage-system .manage-system-item-content img{
    width: 625px;
    height: 500px;

    float: left\0;
  }
  .manage-system .manage-system-item-content .manage-system-item-text-box{
    width: 845px;
    height: 500px;
    background: #EDFFF6;
    padding-top: 150px;
    padding-left: 90px;
    padding-right: 100px;
    box-sizing: border-box;

    float: right\0;
  }
  .manage-system .manage-system-item-content .manage-system-item-text-box h3{
    font-size: 40px;
    color: #2C2C2C;
    margin-bottom: 41px;
  }
  .manage-system .manage-system-item-content .manage-system-item-text-box p{
    font-size: 30px;
    color: #2C2C2C;
    line-height: 50px;
    word-break: break-all;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .apartment-service{
    background:rgba(249,249,249,1);
    padding: 120px 225px 180px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .apartment-service h2{
    font-size: 66px;
    color: #2C2C2C;
    font-weight: normal;
    margin-bottom: 114px;
    text-align: center;
  }
  .apartment-service .apartment-service-item-box{
    width: 1470px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .apartment-service .apartment-service-item-box .apartment-service-item{
    width: 470px;
    height: 700px;
    background: #fff;
    border-radius:10px;
    margin-right: 20px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    float: left\0;
    padding-top: 86px\0;
  }
  .apartment-service .apartment-service-item-box .apartment-service-item:nth-of-type(3n){
    margin-right: 0;
  }
  .apartment-service .apartment-service-item-box .apartment-service-item img{
    display: block\0;
    margin: 0 auto 80px\0;

    width: 250px;
    height: 250px;
    margin-bottom: 80px;
  }
  .apartment-service .apartment-service-item-box .apartment-service-item h4{
    font-size: 30px;
    color: #2C2C2C;
    margin-bottom: 28px;
    text-align: center;
  }
  .apartment-service .apartment-service-item-box .apartment-service-item p{
    font-size: 18px;
    color: #2C2C2C;
    line-height: 30px;
    text-align: center;
  }

  .apartment-data{
    padding: 120px 225px 180px;
    box-sizing: border-box;
  }
  .apartment-data h2{
    font-size: 66px;
    color: #2C2C2C;
    font-weight: normal;
    margin-bottom: 114px;
    text-align: center;
  }
  .apartment-data .apartment-data-item-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .apartment-data .apartment-data-item-box .apartment-data-item{
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /*margin-right: 270px;*/
    margin-bottom: 120px;

    float: left\0;
    margin-right: 270px\0;
  }
  .apartment-data .apartment-data-item-box .apartment-data-item:last-of-type{
    margin-right: 0\0;
  }
  .apartment-data .apartment-data-item-box .apartment-data-item>div{
    text-align: center;
  }
  .apartment-data .apartment-data-item-box .apartment-data-item:nth-of-type(3n){
    margin-right: 0;
  }
  .apartment-data .apartment-data-item-box .apartment-data-item span:nth-of-type(1){
    font-size: 80px;
    color: #02AC55;
    margin-right: 16px;
    /*font-weight:bold;*/
  }
  .apartment-data .apartment-data-item-box .apartment-data-item span:nth-of-type(2){
    font-size: 30px;
    color: #2C2C2C;
  }
  .apartment-data .apartment-data-item-box .apartment-data-item .apartment-data-intro{
    font-size: 30px;
    color: #2C2C2C;
    font-weight: bold;
    margin-top: 36px;
  }
</style>

