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
    const Dir = document.documentElement.dir === 'rtl' 
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
        rtl: Dir ,
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
            const toElement = document.querySelector(this.dataset.to)
            let newParent = null
            const img = document.querySelector(this.dataset.img)
            const text = document.querySelector(this.dataset.text)
            const state = Flip.getState([...children , img ,text ,this])
            
            if(children.includes(img)){
                newParent = toElement
                text.style.display = "block";
                this.classList.add(this.dataset.class)
                children[0].style.alignSelf='flex-start'

            }else{
                newParent = this 
                text.style.display = "none"
                children[0].style.alignSelf='unset'
                this.classList.remove(this.dataset.class)
            }
            newParent.append(img)
            Flip.from(state,{duration:.8 , ease: 'power1.easeInOut' ,scale:true})
            
        })
    })
    $('.what__cards__item[data-slide = "true"]').each(function(index,ele){
        $(ele).on('click' , function(){
            $($(this).data('target')).slideToggle('slow');
        })
    });
    function counter (){
        const timeDifference = new Date('25 feb, 2022 23:59:59').getTime() - new Date().getTime();
        const day = timeDifference / (1000 * 60 * 60 *24 )
        const hour=  timeDifference % (1000 * 60 * 60 *24 ) / (1000 * 60 * 60) ;
        const minute = timeDifference % (1000 * 60 * 60  ) / (1000 * 60 )
        document.querySelector('#day').innerText = Math.floor(day);
        document.querySelector('#hour').innerText = Math.floor(hour);
        document.querySelector('#minute').innerText = Math.floor(minute)
    }
    counter()
    const interval = setInterval(counter,60000)
    

})