// create a parralax part 
const translate = document.querySelectorAll(".translate");
const liana1 = document.querySelector(".liana1");
const topParallax = document.querySelector(".top-parallax");

//geting the height of top-parallax part
let topParallax_height = topParallax.offsetHeight;
window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;

    })
    liana1.style.opacity = - scroll / (topParallax_height*1.5)+1.2
});

// create a counter for counter section
const counters = document.querySelectorAll('.counter');
const speed = 100;

counters.forEach(counter => {
    const updateCount = () =>{
        // add the data target to a target variable as number with using +
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText
        // here creating speed to all numbers can finnish together
        const increment = target/speed;
        if(count<(target-increment+1)){
            counter.innerText = Math.round(count + increment);
            setTimeout(updateCount, 80)
        }else {
            count.innerText = target;

        }
        
    }
    updateCount();
});