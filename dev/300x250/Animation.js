var BanTimeline = {
  // f1_img1: document.getElementById("f1_img1"),
  // f1_img2: document.getElementById("f1_img2"),
  // f2_img1: document.getElementById("f2_img1"),
  // f3_img1: document.getElementById("f3_img1"),
  // f4_img1: document.getElementById("f4_img1"),
  // f5_img1: document.getElementById("f5_img1"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
    document.getElementById("container").style.display = "block";
    // run animation after init is done. 
    BanTimeline.frame1();
  },

  reset: function () {
    
  },
  btnGlow: function () {
    
  },
  frame1: function () {
    glow=1;
    // TweenLite.to(f1_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut, yoyo: true});
    // TweenLite.to(f1_img2, 2, {opacity:1, display: 'block', delay: 1, ease: Quad.easeOut, yoyo: true});
  
    // TweenLite.delayedCall(3, BanTimeline.frame2);
  },
  frame2: function () {
    // TweenLite.to(f2_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});

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
container.onmouseover = function() {
  if(glow = 1){
      TweenLite.to(switch_glow1, 0.2, {opacity:.5});
      TweenLite.to(switch_glow2, 0.2, {opacity:.5, delay:.1});
      TweenLite.to(switch_glow3, 0.2, {opacity:.5, delay:.15});
      TweenLite.to(switch_glow4, 0.2, {opacity:.5, delay:.2});
      TweenLite.to(switch_glow5, 0.2, {opacity:.5, delay:.25});

      TweenLite.to(switch_glow1, 0.2, {opacity:0, delay:.25});
      TweenLite.to(switch_glow2, 0.2, {opacity:0, delay:.2});
      TweenLite.to(switch_glow3, 0.2, {opacity:0, delay:.3});
      TweenLite.to(switch_glow4, 0.2, {opacity:0, delay:.4});
      TweenLite.to(switch_glow5, 0.2, {opacity:0, delay:.5}); 
  }
};
BanTimeline.init();


