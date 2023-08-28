let btnMenu = document.getElementById('menu-btn') 
let nav = document.getElementById('nav')
let link = document.querySelectorAll('.header nav a')
let sections = document.querySelectorAll('section')
let spin = document.getElementById('spin');


btnMenu.onclick = function(){
    btnMenu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}


window.onscroll = function(){
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let hight = sec.offsetHeight
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + hight){
            link.forEach(item => {
                    item.classList.remove('active');

                    document.querySelector('.header nav a[href*='+ id +']').classList.add('active');
                });
                sec.classList.add('active')
                if(top>100){
                    spin.style.display = 'flex';
                }else{
                    spin.style.display = 'none';
                }
                spin.onclick = function(){
                    window.scrollTo({
                        left:0,
                        top: 0,
                        behavior: "smooth"
                    })
                }
        }
        else{
            sec.classList.remove('active')
        }
    });


    btnMenu.classList.remove('bx-x');
    nav.classList.remove('active');
}