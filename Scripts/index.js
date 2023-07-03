
gsap.from("#page1 h1, h2, p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4
})

gsap.to("#nav", {
    backgroundColor: "rgba(3, 3, 3, 0.97)",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -9%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "rgba(0,0,0, 0.77)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -60%",
        scrub: 1
    }
})


gsap.from("#page2 h1", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 80%",
        end: "top 78%",
        scrub: 2
    }
})
gsap.from("#about .intro", {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
})
gsap.from("#about .info", {
    x: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
})