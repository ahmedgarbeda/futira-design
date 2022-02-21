// document.querySelectorAll('.navigation__menu li a').forEach(function(){
//     this.addEventListener('click',function(e){
//         e.preventDefault()
//         const target = document.getElementById(this.dataset.target).getBoundingClientRect();
//         console.log(target);
//         window.screenTop({
//             top: target.y,
//             left: target.x,
//             behavior: 'smooth'
//         })
//     })
// })

//const { default: gsap } = require("gsap")

$(document).ready(function(){
    gsap.registerPlugin(Flip)
    document.querySelectorAll('.navigation__menu li a').forEach(function(ele){
        ele.addEventListener('click',function(e){
            e.preventDefault()
            const target = document.getElementById(this.dataset.target).offsetTop - 100 ;
            window.scrollTo({
                top: target,
                left: 0,
                behavior: 'smooth'
            })
        })
    })
    document.querySelector('#mob-toggle').addEventListener('click', function(){
        this.classList.toggle('active')
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        margin:0,
        rtl: document.documentElement.dir == 'rtl' ,
        autoplayHoverPause:true,
        nav:true,
        dots: true,
        autoplay:true,
        autoplayTimeout:2000,
        navText:[
            '<i class="fal fa-angle-left"></i>',
            '<i class="fal fa-angle-right"></i>'
        ],
        
    })
    document.querySelectorAll('.what__grad-top__col').forEach(ele=>{
        ele.addEventListener('click' , function(){
            const children = Array.from(this.children);
            const state = Flip.getState(children)
            const toElement = document.querySelector('.to')
            let newParent = null
            const img = document.querySelector(this.dataset.img)
            const p = document.querySelector(this.dataset.p)

            if(children.includes(img)){
                newParent = toElement
                p.style.display = "block";
                p.style.height= 50% +"px";
                this.classList.add(this.dataset.class)
            }else{
                newParent = this 
                p.style.display = "none"
                p.style.height= 0 +"px";
                this.classList.remove(this.dataset.class)
            }
            
            newParent.append(img)
            Flip.from(state,{duration:1 , ease: 'power1.easeInOut'})
            


        })
    })
})