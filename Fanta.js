var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#Fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"169%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"170%",
    left: "60%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "30% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    right: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#sprite",{
    rotate: "100deg",
    top: "110%",
    right: "180%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "207%"
}, 'ca')
tl2.to("#fanta2",{
    width:"32%",
    top: "217%",
    left: "35%",
}, 'ca')

tl2.to("#leaf",{
    top:"220%",
    rotate: "340deg",
    left: "0%"
}, 'ca')
tl2.to("#leaf2",{
    top:"220%",
    rotate: "300deg",
    left: "88%"
}, 'ca')


let loader = document.querySelector(".preloader");

window.addEventListener("load", function() {
    loader.style.display = "none"
})