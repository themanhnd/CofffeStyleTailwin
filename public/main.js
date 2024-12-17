//Author : ManhNT
const topMenu = document.getElementById('mnt-top-menu')
const toggleTopMenuIcon= document.getElementById('mnt-toggle-top-menu-icon')

document.addEventListener('click',(e)=>{
    if(toggleTopMenuIcon.contains(e.target)){
        //click to Toggle top menu icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('mnt-topmenu-expanded')
    }
    else{
        //click outside from top menu icon
        if(topMenu.classList.contains('mnt-topmenu-expanded')){
            topMenu.classList.remove('mnt-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})