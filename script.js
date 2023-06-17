var navmenuanchortags=document.querySelectorAll('.navbar-nav a');
var interval;
for(var i=0;i<navmenuanchortags.length;i++)
{
    navmenuanchortags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionid=this.textContent.trim();
        var targetsection=document.getElementById(targetsectionid);
         //interval=setInterval(verticallyscrollbar,20,targetsection)
         interval=setInterval(function(){
            verticallyscrollbar(targetsection);
         },20)
    });

}
function verticallyscrollbar(targetsection){
    var targetsectioncoordinates=targetsection.getBoundingClientRect();
            if(targetsectioncoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,30);
}
var progressbar=document.querySelectorAll(".skill-container>div");
var skillscontainer=document.getElementById("skill-progress");
window.addEventListener('scroll',checkSrcoll);
var animationdone=false;
function initialisebars(){
    for(let bar of progressbar){
        bar.style.width = 0 +'%';
    }
}
initialisebars();
function fillbars(){
    for(let bar of progressbar){
        let targetwidth=bar.getAttribute('data-bar-width');
        let currentwidth=0;
        let interval=setInterval(function(){
            if(currentwidth>targetwidth){
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width=currentwidth+"%";
        },5);
    }
}

function checkSrcoll(){
    var coordinates=skillscontainer.getBoundingClientRect();
    if(!animationdone && coordinates.top <= window.innerHeight){
        animationdone=true;
        fillbars();
     }else if(coordinates.top > window.innerHeight){
        animationdone=false;
        initialisebars();
     }
}