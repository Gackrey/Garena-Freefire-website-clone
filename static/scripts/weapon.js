const mainicon = document.getElementsByClassName('images');
const hovericon = document.getElementsByClassName('hover');
const weapon = document.getElementsByClassName('weapon');

const launcherweapon = document.getElementsByClassName('launcher');
const lmgweapon = document.getElementsByClassName('lmg');
const shotgunweapon = document.getElementsByClassName('shotgun');
const smgweapon = document.getElementsByClassName('smg');
const pistolweapon = document.getElementsByClassName('pistol');
const meleeweapon = document.getElementsByClassName('melee');
const bowweapon = document.getElementsByClassName('bow');
const arweapon = document.getElementsByClassName('ar');
const sniperweapon = document.getElementsByClassName('sniper');

const launcher = document.querySelector('.gun-launcher');
const lmg = document.querySelector('.gun-lmg');
const shotgun = document.querySelector('.gun-shotgun');
const smg = document.querySelector('.gun-smg');
const pistol = document.querySelector('.gun-pistol');
const melee = document.querySelector('.gun-melee');
const bow = document.querySelector('.gun-bow');
const ar = document.querySelector('.gun-ar');
const sniper = document.querySelector('.gun-sniper');
launcher.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<launcherweapon.length;++i){
        launcherweapon[i].style.display = "block";
    }
    mainicon[0].style.display = "none";
    hovericon[0].style.display = "block";
});

lmg.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<lmgweapon.length;++i){
        lmgweapon[i].style.display = "block";
    }
    mainicon[1].style.display = "none";
    hovericon[1].style.display = "block";
});

smg.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<smgweapon.length;++i){
        smgweapon[i].style.display = "block";
    }
    mainicon[2].style.display = "none";
    hovericon[2].style.display = "block";
});
shotgun.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<shotgunweapon.length;++i){
        shotgunweapon[i].style.display = "block";
    }
    mainicon[3].style.display = "none";
    hovericon[3].style.display = "block";
});

pistol.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<pistolweapon.length;++i){
        pistolweapon[i].style.display = "block";
    }
    mainicon[4].style.display = "none";
    hovericon[4].style.display = "block";
});

melee.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<meleeweapon.length;++i){
        meleeweapon[i].style.display = "block";
    }
    mainicon[5].style.display = "none";
    hovericon[5].style.display = "block";
});

bow.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<bowweapon.length;++i){
        bowweapon[i].style.display = "block";
    }
    mainicon[6].style.display = "none";
    hovericon[6].style.display = "block";
});

ar.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<arweapon.length;++i){
        arweapon[i].style.display = "block";
    }
    mainicon[7].style.display = "none";
    hovericon[7].style.display = "block";
});

sniper.addEventListener('click',()=>{
    for(i = 0;i<mainicon.length;++i){
        mainicon[i].style.display = "block";
    }
    for(i = 0;i<hovericon.length;++i){
        hovericon[i].style.display = "none";
    }
    for(i = 0;i<weapon.length;++i){
        weapon[i].style.display = "none";
    }
    for(i = 1;i<sniperweapon.length;++i){
        sniperweapon[i].style.display = "block";
    }
    mainicon[8].style.display = "none";
    hovericon[8].style.display = "block";
});