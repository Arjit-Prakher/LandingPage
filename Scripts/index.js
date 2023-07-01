



gsap.to("#nav", {
    backgroundColor: "rgba(3, 3, 3, 0.97)",
    // backgroundImage: "url(./img/Camero.jpg)",
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
    // backgroundImage: "url(./img/DodgeChallenger.jpg)",
    objectFit: "cover",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -60%",
        scrub: 1
    }
})