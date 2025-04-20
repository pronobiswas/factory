let isFixed = false;
let what_do_i_do = document.getElementById("what_do_i_do");
let ScrollToTop = window.scrollY;
const pro_indicator = document.querySelectorAll('.pro_indicator');

window.addEventListener("scroll", () => {
  console.log("Scroll Top:", window.scrollY);
  let ScrollToTop = window.scrollY;

  let topValue;
  if (ScrollToTop > 857) {
    topValue = Math.round(ScrollToTop - 857);
    console.log(topValue);
  }

  // ===change the ball position===
  if (ScrollToTop > 857 && ScrollToTop < 957) {
    document.getElementById("ball").style.top = `${topValue}px`;
  }
//   ===increse the ball size===
  if (ScrollToTop > 957 && ScrollToTop < 1550) {
      document.getElementById("ball").style.width = `${topValue * 12}px`;
      document.getElementById("ball").style.height = `${topValue * 12}px`;
  }else{
      document.getElementById("ball").style.width = `${topValue }px`;
      document.getElementById("ball").style.height = `${topValue }px`;
  }
  if(ScrollToTop < 1550){
      document.getElementById("Disrupt").style.position = "static";
  }
//   if(ScrollToTop < 1725){
//       let what_do_i_do = document.getElementById("what_do_i_do");
//       what_do_i_do.style.position = "static";
//   }
  //-------------------------------
  console.log(pro_indicator[0]);
  
  if(ScrollToTop > 1725){
      console.log(ScrollToTop);
      what_do_i_do.style.position = "fixed";
      what_do_i_do.style.top = "0";
      what_do_i_do.style.left = "0";
      what_do_i_do.style.zIndex = "999";
      what_do_i_do.style.width = "100%";
  }
 
  if(ScrollToTop >= 1740){
    document.querySelector('.line').style.backgroundSize ='100% 200%'
    pro_indicator[0].style.width = "40px";
    pro_indicator[0].style.height = "40px";
    pro_indicator[0].style.border = "3px solid red";
  }
  if(ScrollToTop >= 1790){
    document.querySelector('.line').style.backgroundSize ='100% 300%';
    pro_indicator[1].style.width = "20px";
    pro_indicator[1].style.height = "20px";
    pro_indicator[1].style.border = "1px solid transparent";
  }
  if(ScrollToTop >= 1840){
    document.querySelector('.line').style.backgroundSize ='100% 400%';
    pro_indicator[1].style.width = "40px";
    pro_indicator[1].style.height = "40px";
    pro_indicator[1].style.border = "3px solid red";

  }
  if(ScrollToTop >= 1890){
    document.querySelector('.line').style.backgroundSize ='100% 500%';
    pro_indicator[2].style.width = "20px";
    pro_indicator[2].style.height = "20px";
    pro_indicator[2].style.border = "1px solid transparent";
  }
  if(ScrollToTop >= 1940){
    document.querySelector('.line').style.backgroundSize ='100% 600%';
    pro_indicator[2].style.width = "40px";
    pro_indicator[2].style.height = "40px";
    pro_indicator[2].style.border = "3px solid red";
  }
  if(ScrollToTop >= 1990){
    document.querySelector('.line').style.backgroundSize ='100% 700%'
    
  }
  if(ScrollToTop >= 2040){
    document.querySelector('.line').style.backgroundSize ='100% 800%';
    pro_indicator[3].style.width = "20px";
    pro_indicator[3].style.height = "20px";
    pro_indicator[3].style.border = "1px solid transparent";
  }
  if(ScrollToTop >= 2090){
    document.querySelector('.line').style.backgroundSize ='100% 900%';
    pro_indicator[3].style.width = "40px";
    pro_indicator[3].style.height = "40px";
    pro_indicator[3].style.border = "3px solid red";
  }
  if(ScrollToTop >= 2140){
    document.querySelector('.line').style.backgroundSize ='100% 1000%'
  }
// if(isFixed == "true" && ScrollToTop < 1750){
//     isFixed = "false"
//   }
  
  
  
  console.log(isFixed);
  if(isFixed =="true"){
    what_do_i_do.style.position = "fixed";
  what_do_i_do.style.top = "0";
  what_do_i_do.style.zIndex = "999";
  }
  if(isFixed =="false"){
    what_do_i_do.style.position = "static";
  }
  
  
});

function fixedWhatDo() {
  what_do_i_do.style.position = "fixed";
  what_do_i_do.style.top = "0";
  what_do_i_do.style.zIndex = "999";
}
function staticWhatDo(){
    what_do_i_do.style.position = "static";
}

// window.addEventListener("scroll",()=>{
//     console.log("Scroll Top:", window.scrollY);
//     let ScrollToTop = window.scrollY;
//     let topValue ;
//     if(ScrollToTop > 857){
//          topValue =   Math.round(ScrollToTop - 857 );
//         console.log(topValue);
//         document.getElementById("Disrupt").style.position = "fixed";
//         document.getElementById("Disrupt").style.overflowX = "hidden";

//     }else{
//         document.getElementById("Disrupt").style.position = "static";
//         document.getElementById("ball").style.top = "-50px";
//     }

//     if(ScrollToTop > 857 && ScrollToTop < 957){
//         document.getElementById("ball").style.top = `${topValue}px`;
//     }

//     if (ScrollToTop > 957 && ScrollToTop < 1200) {
//         document.getElementById("ball").style.width = `${topValue * 12}px`;
//         document.getElementById("ball").style.height = `${topValue * 12}px`;
//         document.getElementById("ball").style.top = "50%";
//         document.getElementById("ball").style.translateY = "-50%";
//     }else{
//         document.getElementById("ball").style.width = `${topValue }px`;
//         document.getElementById("ball").style.height = `${topValue }px`;
//     }
//     if(ScrollToTop < 1200){
//         document.getElementById("Disrupt").style.position = "static";
//     }
// });
