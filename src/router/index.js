import Vue from 'vue'
import Router from 'vue-router'

import '../assets/css/common.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ()=>import('../pages/Index/Index'),
      redirect:'/Home',
      children:[
        {
          path: '/Home',
          name: 'Home',
          component: ()=>import('../pages/Home/Home'),
        },
        {
          path: '/Apartment',
          name: 'Apartment',
          component: ()=>import('../pages/Apartment/Apartment'),
        },
        {
          path: '/Repast',
          name: 'Repast',
          component: ()=>import('../pages/Repast/Repast'),
        },
        {
          path: '/Fitment',
          name: 'Fitment',
          component: ()=>import('../pages/Fitment/Fitment'),
        },
        {
          path: '/Business',
          name: 'Business',
          component: ()=>import('../pages/Business/Business'),
        },
        {
          path: '/College',
          name: 'College',
          component: ()=>import('../pages/CraftsmanCollege/CraftsmanCollege'),
        },
        {
          path: '/JoinUs',
          name: 'JoinUs',
          redirect:'/JoinUs/recruit_list',
          component: ()=>import('../pages/JoinUs/JoinUs'),
          children:[
            {
              path: '/JoinUs/recruit_list',
              name: 'recruit_list',
              component: ()=>import('../pages/JoinUs/recruit_list'),
            },
            {
              path: '/JoinUs/recruit_detail',
              name: 'recruit_detail',
              component: ()=>import('../pages/JoinUs/recruit_detail'),
            },
          ]
        },
        {
          path: '/AboutUs',
          name: 'AboutUs',
          component: ()=>import('../pages/AboutUs/AboutUs'),
        },
      ]
    },
  ],
  scrollBehavior(to,from){
    if(to.name.indexOf('recruit_list')>-1 && window.sessionStorage.getItem('openFlag')=='true'){
     let s=document.getElementsByClassName('recruit');
     let topVal=s[0].offsetTop;
      return{x:0,y:topVal}
    }else{
      return{x:0,y:0}
    }
  }
})
