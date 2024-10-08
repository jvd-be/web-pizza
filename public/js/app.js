const html=document.querySelector('html')
const btnStatus=document.querySelector("#status")
const menuBtn=document.getElementById('menu-btn')
const listMobile=document.getElementById('list-mobile')
let flag=true


// mobile menu

menuBtn.addEventListener('click',function(){
    if(flag){

        listMobile.style.right="-16px"
        listMobile.style.top='60px'
        flag=false
    }else{
        listMobile.style.right="-228px"
        listMobile.style.top='60px'
        flag=true
    }


})

// dark mode

btnStatus.addEventListener('click',function(){
    
    html.classList.toggle('dark')
    if(html.className==='sr dark'){
        
        btnStatus.innerHTML=''
        btnStatus.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`
localStorage.setItem('them',JSON.stringify('dark'))   
    
    }
    else if(html.className!=="dark"){
        btnStatus.innerHTML=''
        btnStatus.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`
localStorage.setItem('them',JSON.stringify('light'))   
        
    }
    
})

window.addEventListener('load',function(){

    let themSite=JSON.parse(localStorage.getItem('them'))
    console.log(themSite);
      
    if(themSite==='dark'){
        html.classList.add('dark')
        btnStatus.innerHTML=''
        btnStatus.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`     
    }
    
})

// Scroll Reveal animate
const sr = ScrollReveal ({
    origin: 'left',
    distance: '40px',
    duration: 2000,
    reset: true,
    interval:200,
});


sr.reveal(`.main-image , .second-img , .box-pizza , .box-dis` ,{
    interval: 200
})