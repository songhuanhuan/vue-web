function refreshRem(){
  var width = docEl.getBoundingClientRect().width;
  if (width / dpr < 1200) {
    width = 1200 * dpr;//当屏幕宽度小于1200的时候我们应设置最小计算,PC
  }
  var rem = width / 10;
  docEl.style.fontSize = rem + 'px';
  flexible.rem = win.rem = rem;
};
win.addEventListener('resize',function(){
  clearTimeout(tid);
  tid=setTimeout(refreshRem,300);
},false);
win.addEventListener('pageshow',function(e){
  if(e.persisted){
    clearTimeout(tid);
    tid=setTimeout(refreshRem,300);
  };
},false);

