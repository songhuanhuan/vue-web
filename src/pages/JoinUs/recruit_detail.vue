<template>
  <div class="bg">
      <div class="bgwhite">
           <div class="ins">
             <div class="left">
               <div class="posName">{{positionDetail[index].posName}}</div>
               <div class="city">
                 <em v-for="(item,num) in positionDetail[index].workPlace" :key="num">{{item}}</em>
                 <b class="dot">·</b>  <em>{{positionDetail[index].experience}}</em>
                 <b class="dot">·</b>  <em>{{positionDetail[index].education}}</em>
               </div>
               <div class="fuli">
                 <span v-for="(item,num) in positionDetail[index].welfare" :key="num">{{item}}</span>
               </div>
             </div>
             <div class="right">
                  {{positionDetail[index].sallery}}
             </div>
           </div>
          <ul>
            <li class="title">任职要求：</li>
            <li v-for="k in positionDetail[index].workSkill"> <p>{{k}}</p></li>
          </ul>
          <ul >
            <li class="title">联系方式：</li>
            <li> <pre>联系人：于经理</pre> </li>
            <li> <pre>电   话：136-2114-1695</pre></li>
            <li> <pre>邮   箱：yufei@100jiaxiu.com</pre></li>
          </ul>
      </div>
  </div>
</template>
<script>
    export default {
      data(){
        return{
          positionDetail:this.global.positionDetail,
          index:this.$route.params.id?this.$route.params.id:window.sessionStorage.getItem('indexVal'),
        }
      },
      beforeRouteEnter:function(to, from, next){
        if(window.sessionStorage.getItem('openFlag')=='true'){
          window.sessionStorage.setItem('openFlag','false');
        };
        next();
      },
      beforeRouteLeave:function(to, from, next){
        window.sessionStorage.clear();
        next();
      }
    };
</script>

<style scoped>
.bg{
  background:rgba(249,249,249,1);
  padding: 0 226px;
  background: white;
  border-top: 7Px solid #F9F9F9;
}
.bgwhite{
  padding: 76px 100px;
  margin:0 auto ;
}
.bgwhite ul{
  border-top:1Px solid rgba(224,224,224,1);
  padding:52px 46px;
}
.bgwhite ul li{
  font-size:24px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(125,125,125,1);
  line-height:33px;
}
.bgwhite ul .title{
  font-size:30px;
  font-family:PingFang SC;
  font-weight:bold;
  color:rgba(125,125,125,1);
  line-height:42px;
  margin-bottom: 32px;
}
 .left .posName{
  font-size:40px;
  font-family:PingFang SC;
  font-weight:bold;
  color:rgba(44,44,44,1);
  line-height:56px;
   margin-bottom: 16px;
}
  .left .city em{
    font-size:18px;
    font-style: normal;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(96,96,96,1);
    line-height:25px;
  }
  .left .fuli{
    zoom: 1;
  }
  .left .fuli span{
    float: left;
    text-align: center;
    width:110px;
    height:40px;
    display: block;
    border-radius:20px;
    border:1Px solid rgba(2,172,85,1);
    font-size:20px;
    font-family:PingFang SC-Regular;
    font-weight:400;
    color:rgba(96,96,96,1);
    line-height:41px;
    margin-right: 28px;
  }
.left .fuli:after{
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}
  .ins{
    padding: 76px 46px;
    white-space: nowrap;
  }
  .ins>div{
    display: inline-block;
    vertical-align: top;
  }
  .ins .right{
    width:15%;
    text-align: right;
    font-size:46px;
    font-family:PingFang SC;
    font-weight:bold;
    color:#02AC55;
    vertical-align: middle;
  }
  .ins .left{
   width: 84%;
  }
  .city{
    margin-bottom: 28px;
  }
  .dot{
    font-size: 12px;
    color:rgba(62,199,171,1);
    line-height: 0;
    height: 0;
    margin:0 22px;
  }
  pre,p{
    font-size:24px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(125,125,125,1);
    line-height:48px;
  }
</style>
