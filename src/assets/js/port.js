import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


console.log("GSAP Version:", gsap.version);
console.log("ScrollTrigger Version:", ScrollTrigger.version);
export function port(){

    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port_item");
    
    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top 56px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
   
}