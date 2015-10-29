var BanTimeline = {
  glowBtn: 0,
  rainOn: 0,
  container: document.getElementById("container"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
    document.getElementById("container").style.display = "block";
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },

  glow: function() {
    if(BanTimeline.glowBtn == 1){
      TweenLite.to(switch_now, 0, {display: 'block',opacity:1});
      container.onmouseover = function(){
        TweenLite.to(switch_glow1, 0.2, {display: 'block',opacity:.5});
        TweenLite.to(switch_glow2, 0.2, {display: 'block',opacity:.5, delay:.1});
        TweenLite.to(switch_glow3, 0.2, {display: 'block',opacity:.5, delay:.15});
        TweenLite.to(switch_glow4, 0.2, {display: 'block',opacity:.5, delay:.2});
        TweenLite.to(switch_glow5, 0.2, {display: 'block',opacity:.5, delay:.25});
        TweenLite.to(switch_glow1, 0.2, {opacity:0, delay:.25});
        TweenLite.to(switch_glow2, 0.2, {opacity:0, delay:.2});
        TweenLite.to(switch_glow3, 0.2, {opacity:0, delay:.3});
        TweenLite.to(switch_glow4, 0.2, {opacity:0, delay:.4});
        TweenLite.to(switch_glow5, 0.2, {opacity:0, delay:.5});     
      }
    }
  },


  rain: function () {
      TweenLite.to(rain1, 0, {display:"block", top:-520,left:-150});  
      TweenLite.to(rain2, 0, {display:"block", top:-520,left:-150});
      TweenLite.to(rain3, 0, {display:"block", top:-520,left:-150});
      TweenLite.to(rain4, 0, {display:"block", top:-520,left:-150});
      TweenLite.to(rain5, 0, {display:"block", top:-520,left:-150});
      TweenLite.to(rain6, 0, {display:"block", top:-520,left:-150});
      TweenLite.to(rain7, 0, {display:"block", top:-520,left:-150});
      TweenLite.to(rain8, 0, {display:"block", top:-520,left:-150});
      TweenLite.to(rain9, 0, {display:"block", top:-520,left:-150});
      TweenLite.to(rain10, 0, {display:"block", top:-520,left:-150, delay:1});
      TweenLite.to(rain11, 0, {display:"block", top:-520,left:-150, delay:1});
      TweenLite.to(rain12, 0, {display:"block", top:-520,left:-150, delay:1});
      TweenLite.to(rain13, 0, {display:"block", top:-520,left:-150, delay:1});
      TweenLite.to(rain14, 0, {display:"block", top:-520,left:-150, delay:1});
    if(BanTimeline.rainOn == 1)
    {
      TweenLite.to(rain1, 1.3, {display:"block", top:300,left:-260, delay:0});  
      TweenLite.to(rain2, 1.3, {display:"block", top:300,left:-260, delay:.2});
      TweenLite.to(rain3, 1.3, {display:"block", top:300,left:-260, delay:.4});
      TweenLite.to(rain4, 1.3, {display:"block", top:300,left:-260, delay:.6});
      TweenLite.to(rain5, 1.3, {display:"block", top:300,left:-260, delay:.8});
      TweenLite.to(rain6, 1.3, {display:"block", top:300,left:-260, delay:1});
      TweenLite.to(rain7, 1.3, {display:"block", top:300,left:-260, delay:1.2});
      TweenLite.to(rain8, 1.3, {display:"block", top:300,left:-260, delay:1.4});
      TweenLite.to(rain9, 1.3, {display:"block", top:300,left:-260, delay:1.6});
      TweenLite.to(rain10, 1.3, {display:"block", top:300,left:-260, delay:1.8});
      TweenLite.to(rain11, 1.3, {display:"block", top:300,left:-260, delay:2});
      TweenLite.to(rain12, 1.3, {display:"block", top:300,left:-260, delay:2.2});
      TweenLite.to(rain13, 1.3, {display:"block", top:300,left:-260, delay:2.4});
      TweenLite.to(rain14, 1.3, {display:"block", top:300,left:-260, delay:2.6});
    }
    TweenLite.delayedCall(2.3, BanTimeline.rain);
  },

  frame1: function () {
    BanTimeline.glowBtn = 1;
    BanTimeline.rainOn = 1; 
    TweenLite.delayedCall(0, BanTimeline.rain);
    TweenLite.delayedCall(1, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(flick2, .1, {display:"block", delay:.3});
    TweenLite.to(flick2, .1, {display:"none", delay:.45});
    TweenLite.to(flick2, .1, {display:"block", delay:.6});
    //clouds flickering
    TweenLite.to(left_cloud, .1, {display:"block", opacity:.9, delay:.3});
    TweenLite.to(left_cloud, .1, {display:"block", opacity:.6, delay:.4});
    TweenLite.to(left_cloud, 1, {display:"block", opacity:0, delay:1});
    //left lightning
    TweenLite.to(left_light1, .1, {display:"block", delay:.3});
    TweenLite.to(left_light2, .1, {display:"block", delay:.35});
    TweenLite.to(left_light3, .1, {display:"block", delay:.4});
    TweenLite.to(left_light1, .3, {display:"none",opacity:0, delay:.4});
    TweenLite.to(left_light2, .3, {display:"none",opacity:0, delay:.4});
    TweenLite.to(left_light3, .3, {display:"none",opacity:0, delay:.4});
    //right lightning
    TweenLite.to(right_cloud, .1, {display:"block", opacity:.9, delay:.6});
    TweenLite.to(right_cloud, .1, {display:"block", opacity:.6, delay:.7});
    TweenLite.to(right_cloud, 1, {display:"block", opacity:0, delay:1.3});
    TweenLite.to(right_light1, .1, {display:"block", delay:.6});
    TweenLite.to(right_light2, .1, {display:"block", delay:.65});
    TweenLite.to(right_light3, .1, {display:"block", delay:.7});
    TweenLite.to(right_light1, .3, {display:"none",opacity:0, delay:.7});
    TweenLite.to(right_light2, .3, {display:"none",opacity:0, delay:.7});
    TweenLite.to(right_light3, .3, {display:"none",opacity:0, delay:.7});



    TweenLite.to(flick2, .1, {display:"none", delay:.7});
    TweenLite.to(flick2, .05, {display:"block", delay:.75});
    TweenLite.to(flick2, .03, {display:"none", delay:.8});
    TweenLite.to(flick2, .05, {display:"block", delay:.9});



    // TweenLite.delayedCall(3, BanTimeline.frame3);
  },
  frame3: function () {
    // TweenLite.to(f3_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});

    // TweenLite.delayedCall(3, BanTimeline.frame4);
  },
  frame4: function () {
    // TweenLite.to(f4_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    
    // TweenLite.delayedCall(3, BanTimeline.frame5);
  },
  frame5: function () {
    // TweenLite.to(f5_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
  }
};

BanTimeline.init();
BanTimeline.glow();


