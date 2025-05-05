
gsap.registerPlugin(ScrollTrigger);

const what_do_i_do = document.getElementById("what_do_i_do");
const what_do_i_do_image = document.getElementById("what_do_i_do_image");
const what_do_i_do_heading = document.getElementById("what_do_i_do_heading");
const pro_indicator = document.querySelectorAll(".pro_indicator");
const line = document.querySelector(".line");

function resetIndicator(item) {
  gsap.to(item, {
    width: "20px",
    height: "20px",
    border: "1px solid #999", 
    backgroundColor: "transparent",
    duration: 0.3,
  });
  item.innerHTML = "";
}

let currentStep = -1;

// === ScrollTrigger to pin and track progress ===
// ScrollTrigger.create({
//   trigger: "#what_do_i_do",
//   start: "top top",
//   end: "+=1800",
//   pin: true,
//   scrub: true,
//   markers: true,
//   onUpdate: (self) => {
//     const p = self.progress;

//     if (p < 0.25) {
//       updateIndicator(0, "Highlights and Challenges", "./asset/images/60.jpeg", "200%");
//     } else if (p < 0.5) {
//       updateIndicator(1, "Plan and Plot", "./asset/images/62.jpeg", "400%");
//     } else if (p < 0.75) {
//       updateIndicator(2, "Shape and Mold", "./asset/images/63.jpeg", "620%");
//     } else {
//       updateIndicator(3, "Guide and Assist", "./asset/images/64.jpeg", "800%");
//     }
//   },
// });
ScrollTrigger.create({
  trigger: "#what_do_i_do",
  start: "top top",
  end: "+=1800",
  pin: true,
  scrub: true,
  markers: true,
  onUpdate: (self) => {
    const p = self.progress;

    if (p < 0.25) {
      updateIndicator(0, "Highlights and Challenges", "./asset/images/60.jpeg", "200%");
    } else if (p < 0.5) {
      updateIndicator(1, "Plan and Plot", "./asset/images/62.jpeg", "400%");
    } else if (p < 0.75) {
      updateIndicator(2, "Shape and Mold", "./asset/images/63.jpeg", "620%");
    } else {
      updateIndicator(3, "Guide and Assist", "./asset/images/64.jpeg", "800%");
    }
  },
});

// === Main Update Function ===
function updateIndicator(index, label, imgSrc, bgSizeY) {
  if (currentStep === index) return;
  currentStep = index;

  // Animate background line fill
  gsap.to(line, {
    backgroundSize: `100% ${bgSizeY}`,
    duration: 0.5,
    ease: "power1.out",
  });

  // Animate indicators
  pro_indicator.forEach((el, i) => {
    if (i === index) {
      gsap.to(el, {
        width: "40px",
        height: "40px",
        border: "3px solid red",
        backgroundColor: "gray",
        duration: 0.4,
        ease: "back.out(1.7)",
      });
      el.innerHTML = `0${index + 1}`;
    } else {
      gsap.to(el, {
        width: "20px",
        height: "20px",
        border: "1px solid transparent",
        backgroundColor: i < index ? "red" : "gray",
        duration: 0.3,
      });
      el.innerHTML = "";
    }
  });

  // Smooth image transition
  gsap.to(what_do_i_do_image, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      what_do_i_do_image.src = imgSrc;
      gsap.to(what_do_i_do_image, { opacity: 1, duration: 0.3 });
    },
  });

  // Smooth heading transition
  gsap.to(what_do_i_do_heading, {
    x:-100,
    opacity: 0,
    duration: 0.1,
    onComplete: () => {
      what_do_i_do_heading.textContent = label;
      gsap.to(what_do_i_do_heading, { x:0 ,opacity: 1, duration: 0.5 });
    },
  });
}
