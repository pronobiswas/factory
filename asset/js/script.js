let isFixed = false;
let ScrollToTop = window.scrollY;
let scrollUpCount = 0;
let scrollDownCount = 0;
const line = document.querySelector('.line');
const pro_indicator = document.querySelectorAll('.pro_indicator');

let what_do_i_do = document.getElementById("what_do_i_do");
const what_do_i_do_image = document.getElementById('what_do_i_do_image');
const what_do_i_do_heading = document.getElementById('what_do_i_do_heading');
const what_do_i_do_pragraph = document.getElementById('what_do_i_do_pragraph');

window.addEventListener("wheel", function(event) {
  console.log(event.deltaY); // Changed to `deltaY` for clarity

  if (event.deltaY < 0) {
    scrollUpCount++;
  } else {
    scrollDownCount++;
  }

  console.log("Up:", scrollUpCount, "Down:", scrollDownCount);
});




window.addEventListener("scroll", () => {
  let ScrollToTop = window.scrollY;
  console.log("Scroll Top:", window.scrollY);
  // console.log(scrollUpCount);
  console.log("scrollDownCounts",scrollDownCount);
  console.log("scrollUpCount",scrollUpCount);
  
  
  
  let topValue;
  if (ScrollToTop > 800) {
    topValue = Math.round(ScrollToTop - 800);
    console.log(topValue);
  }

  // ===change the ball position===
  if (ScrollToTop > 857) {
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
  // =====relese what do i do====
  if(ScrollToTop > 1700){
    what_do_i_do.style.position = "static";
    pro_indicator[0].style.width = "20px";
    pro_indicator[0].style.height = "20px";
    pro_indicator[0].style.border = "1px solid transparent";
    line.style.backgroundSize ='100% 100%'
    pro_indicator[1].innerHTML=''
}
  // ====fixed what do i do ====
  if(ScrollToTop > 1785){
      what_do_i_do.style.position = "fixed";
      what_do_i_do.style.width = "100%";
      what_do_i_do.style.top = "0";
      what_do_i_do.style.left = "0";
      what_do_i_do.style.zIndex = "999";
      what_do_i_do.style.backgroundColor = "black";
      what_do_i_do_heading.innerHTML = "Highlights and Challenges";
      what_do_i_do_image.src = "./asset/images/60.jpeg";

      pro_indicator[0].style.backgroundColor ="gray";
      pro_indicator[0].innerHTML ="";
  }
//  ==1900==discover
  if(ScrollToTop >= 1885){
    document.querySelector('.line').style.backgroundSize ='100% 200%'
    pro_indicator[0].style.width = "40px";
    pro_indicator[0].style.height = "40px";
    pro_indicator[0].style.border = "3px solid red";
    pro_indicator[0].innerHTML='01';
    pro_indicator[1].innerHTML='';
    pro_indicator[1].style.backgroundColor ="gray";
  }
  // ==2000==
  if(ScrollToTop >= 1985){
    document.querySelector('.line').style.backgroundSize ='100% 300%';
    // --change first indicaator--
    pro_indicator[0].innerHTML='';
    pro_indicator[0].style.backgroundColor ="red";
    pro_indicator[0].style.width ="20px";
    pro_indicator[0].style.height ="20px";
    resetIndicator(pro_indicator[1])
  }
  // ==2100==design
  if(ScrollToTop >= 2085){
    document.querySelector('.line').style.backgroundSize ='100% 400%';
    pro_indicator[1].style.width = "40px";
    pro_indicator[1].style.height = "40px";
    pro_indicator[1].style.border = "3px solid red";
    pro_indicator[1].innerHTML='02';
    what_do_i_do_heading.innerHTML = "Plan and Plot";
    what_do_i_do_image.src = "./asset/images/62.jpeg";

  }
  // ==2200==
  if(ScrollToTop >= 2185){
    document.querySelector('.line').style.backgroundSize ='100% 500%';
    resetIndicator(pro_indicator[2])
  }
  // ==2300==develop
  if(ScrollToTop >= 2285){
    document.querySelector('.line').style.backgroundSize ='100% 600%';
    pro_indicator[2].style.width = "40px";
    pro_indicator[2].style.height = "40px";
    pro_indicator[2].style.border = "3px solid red";
    pro_indicator[2].style.backgroundColor = "gray";
    pro_indicator[2].innerHTML='03';

    pro_indicator[1].innerHTML='';
    pro_indicator[1].style.border = "1px solid transparent";
    pro_indicator[1].style.width = "20px";
    pro_indicator[1].style.height = "20px";
    pro_indicator[1].style.backgroundColor = "red";

    what_do_i_do_heading.innerHTML = "Shape and Mold";
    what_do_i_do_image.src = "./asset/images/63.jpeg";
    
  }
// ==2400==
  if(ScrollToTop >= 2385){
    document.querySelector('.line').style.backgroundSize ='100% 650%'
    
  }
  // ==2500==direct
  if(ScrollToTop >= 2485){
    document.querySelector('.line').style.backgroundSize ='100% 800%';
    resetIndicator(pro_indicator[3])
    pro_indicator[3].innerHTML='';
  }
  // ==2600==
  if(ScrollToTop >= 2585){
    document.querySelector('.line').style.backgroundSize ='100% 900%';
    pro_indicator[3].style.width = "40px";
    pro_indicator[3].style.height = "40px";
    pro_indicator[3].style.border = "3px solid red";
    pro_indicator[3].innerHTML='04';
    what_do_i_do_heading.innerHTML = "Guide and Assist";
    what_do_i_do_image.src = "./asset/images/64.jpeg";
    resetIndicator(pro_indicator[2]);
    pro_indicator[2].style.backgroundColor = "red";
  }
  // ==2700==
  if(ScrollToTop >= 2685){
    document.querySelector('.line').style.backgroundSize ='100% 1000%';
  }
  // ==2800==
  if(ScrollToTop >= 2785){
    what_do_i_do.style.position = "static";
  }

  
  
 

  
  
  
});



function resetIndicator(item){
  item.style.width = "20px";
  item.style.height = "20px";
  item.style.border = "1px solid transparent";
  item.innerHTML = "";
}
