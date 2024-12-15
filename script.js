// ease function in the website of gsap
gsap.from('.header',{duration: 2 ,y: '-100' , ease:'bounce'})
gsap.from('.link', {duration: 4, opacity:0,delay:1,stagger: .5 })
gsap.from('.right',{ duration:2, x:'-100vw', delay:1,ease:'power2-in'})
gsap.from('.left',{duration:1,delay:2, x:'-100%'})
gsap.from('.footer',{duration: 2 , x:'-100%', })