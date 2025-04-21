let isFixed = false;
let what_do_i_do = document.getElementById("what_do_i_do");
let ScrollToTop = window.scrollY;
const pro_indicator = document.querySelectorAll('.pro_indicator');
let text = "Plan and Plot";
const what_do_i_do_image = document.getElementById('what_do_i_do_image');
const what_do_i_do_heading = document.getElementById('what_do_i_do_heading');
const what_do_i_do_pragraph = document.getElementById('what_do_i_do_pragraph');

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
  if(ScrollToTop > 1700){
    what_do_i_do.style.position = "static";
}
  
  if(ScrollToTop > 1725){
      what_do_i_do.style.position = "fixed";
      what_do_i_do.style.width = "100%";
      what_do_i_do.style.top = "0";
      what_do_i_do.style.left = "0";
      what_do_i_do.style.zIndex = "999";
      what_do_i_do.style.width = "100%";
      what_do_i_do.style.backgroundColor = "black";
      what_do_i_do_heading.innerHTML = "Highlights and Challenges";
      what_do_i_do_image.src = "./asset/images/60.jpeg";
      pro_indicator[0].style.backgroundColor ="gray";
  }
 
  if(ScrollToTop >= 1740){
    document.querySelector('.line').style.backgroundSize ='100% 200%'
    pro_indicator[0].style.width = "40px";
    pro_indicator[0].style.height = "40px";
    pro_indicator[0].style.border = "3px solid red";
    pro_indicator[1].innerHTML=''
  }
  if(ScrollToTop >= 1790){
    document.querySelector('.line').style.backgroundSize ='100% 300%';
    pro_indicator[1].style.width = "20px";
    pro_indicator[1].style.height = "20px";
    pro_indicator[1].style.border = "1px solid transparent";
    pro_indicator[1].innerHTML='02';
    // --change first indicaator--
    pro_indicator[0].innerHTML='';
    pro_indicator[0].style.backgroundColor ="red";
    pro_indicator[0].style.width ="20px";
    pro_indicator[0].style.height ="20px";
  }
  if(ScrollToTop >= 1840){
    document.querySelector('.line').style.backgroundSize ='100% 400%';
    pro_indicator[1].style.width = "40px";
    pro_indicator[1].style.height = "40px";
    pro_indicator[1].style.border = "3px solid red";
    what_do_i_do_heading.innerHTML = "Plan and Plot";
    what_do_i_do_image.src = "./asset/images/62.jpeg";

  }
  if(ScrollToTop >= 1890){
    document.querySelector('.line').style.backgroundSize ='100% 500%';
    pro_indicator[2].style.width = "20px";
    pro_indicator[2].style.height = "20px";
    pro_indicator[2].style.border = "1px solid transparent";
    pro_indicator[2].innerHTML=''
  }
  if(ScrollToTop >= 1940){
    document.querySelector('.line').style.backgroundSize ='100% 600%';
    pro_indicator[2].style.width = "40px";
    pro_indicator[2].style.height = "40px";
    pro_indicator[2].style.border = "3px solid red";
    pro_indicator[2].innerHTML='03';
    what_do_i_do_heading.innerHTML = "Shape and Mold";
    what_do_i_do_image.src = "./asset/images/63.jpeg";
    
  }
  if(ScrollToTop >= 1990){
    document.querySelector('.line').style.backgroundSize ='100% 700%'
    
  }
  if(ScrollToTop >= 2040){
    document.querySelector('.line').style.backgroundSize ='100% 800%';
    pro_indicator[3].style.width = "20px";
    pro_indicator[3].style.height = "20px";
    pro_indicator[3].style.border = "1px solid transparent";
    pro_indicator[3].innerHTML=''
  }
  if(ScrollToTop >= 2090){
    document.querySelector('.line').style.backgroundSize ='100% 900%';
    pro_indicator[3].style.width = "40px";
    pro_indicator[3].style.height = "40px";
    pro_indicator[3].style.border = "3px solid red";
    pro_indicator[3].innerHTML='04';
    what_do_i_do_heading.innerHTML = "Guide and Assist";
    what_do_i_do_image.src = "./asset/images/64.jpeg";
  }
  if(ScrollToTop >= 2140){
    document.querySelector('.line').style.backgroundSize ='100% 1000%';
  }
  if(ScrollToTop >= 2190){
    what_do_i_do.style.position = "static";
  }

  
  
 

  
  
  
});

