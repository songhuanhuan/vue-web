<template>
    <div class="header clearfix" id="target">
      <img src="../assets/images/header-logo-img.png" alt="百家修"  class="header-logo-img">
      <div class="header-bar">

        <router-link :to="{name:item.path}"  v-for="(item,index) in barData"
                     :class="['header-bar-item', {'active': item.flag}]"
            :key="index"   tag="div">
        {{item.name}}
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Header",
      data(){
        return {
          barData:[
            {
              path:'Home',
              name:'首页',
              flag:0
            },
            {
              path:'Apartment',
              name:'公寓维修',
              flag: 0
            },
            {
              path:'Repast',
              name:'餐饮维修',
              flag: 0
            },
            {
              path:'Fitment',
              name:'装修',
              flag: 0
            },
            {
              path:'College',
              name:'工匠学院',
              flag: 0
            },
            {
              path:'Business',
              name:'商务合作',
              flag: 0
            },
            {
              path:'JoinUs',
              name:'加入我们',
              flag: 0
            },
            {
              path:'AboutUs',
              name:'关于我们',
              flag: 0
            },
          ]
        }
      },
      watch:{
        $route(to,from){
          if(to.name.indexOf('recruit_detail')>-1){
              window.sessionStorage.setItem('indexVal',to.params.id)
          }
          for(let k in this.barData){
            this.$set(this.barData[k], `flag`, 0);
            if(to.path.indexOf(this.barData[k].path)>-1){
              this.$set(this.barData[k], `flag`, 1);
            }
          };
        }
      },
      mounted() {
        for(let k in this.barData){
          this.$set(this.barData[k], `flag`, 0);
          if(this.$route.fullPath.indexOf(this.barData[k].path)>-1){
            this.$set(this.barData[k], `flag`, 1);
          }
        };
      }
    }
</script>

<style scoped>
  .header{
    height: 157px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    /*兼容ie8/ie9*/
    display: block\9;
    padding:0 126px\9;
  }
  .header img.header-logo-img{
    width: 205px;
    height: 79px;

    /*兼容ie8/ie9*/
    float: left\9;
    margin-top: 39px\9;
  }
  .header .header-bar{
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 123px;
    box-sizing:border-box;

    /*兼容ie8/ie9*/
    margin-left: 0\9;
    float: right\9;
  }
  .header .header-bar .header-bar-item{
    /*兼容ie8/ie9*/
    float: left\9;
    margin-right: 30px\9;
    margin-left: 0\9;

    height: 100%;
    line-height: 157px;
    font-size: 26px;
    color: #7d7d7d;
    font-weight: bold;
    margin-right: 62px;
    cursor: pointer;
    padding: 0 13px;
  }
  .header .header-bar .header-bar-item a{
     color: #7d7d7d;
  }
  .header .header-bar .active{
    color: #02AC55;
    /*border-bottom: 6px solid #2BC2A3;*/
    position: relative;
  }
  .header .header-bar .active:after{
    content: '';
    width: 100%;
    height: 6px;
    background: #02AC55;
    position: absolute;
    border-radius: 3px;
    left: 0;
    bottom: 0px;
  }
</style>
