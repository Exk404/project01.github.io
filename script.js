var food = ["img/EDA.png", "img/morkoVka.gif"];
var rows = 10
var steps = 0;
var bonus=0;
pole10_0.src = "img/Igrok.gif"
function pacmen_move(event) {
   
    switch (event.key) {
        case 'ArrowRight':
             idImg = document.getElementById('pole' + rows + '_' + (steps+1));
             switch(idImg.src){
               case food[0]:
                    bonus--;
                    break;
                case food[1]:
                    bonus++;
                    break;
                default:
                    break;}
            if (steps < 16) {
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/spacer.gif";
                steps++;
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/Igrok.gif";
            }
        

            break;
    
        case 'ArrowLeft':
            idImg = document.getElementById('pole' + rows + '_' + (steps-1));
            switch(idImg.src){
              case food[0]:
                   bonus--;
                   break;
               case food[1]:
                   bonus++;
                   break;
               default:
                   break;}
            if (steps > 0) {
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/spacer.gif";
                steps--;
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/Igrok.gif";
            }
            break;

            case 'ArrowDown':
                idImg = document.getElementById('pole' + (rows-1) + '_' + steps);
                switch(idImg.src){
                  case food[0]:
                       bonus--;
                       break;
                   case food[1]:
                       bonus++;
                       break;
                   default:
                       break;
                    }
                if (rows > 0) {
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/spacer.gif";
                rows--;
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/Igrok.gif";
            }
            break;

            case 'ArrowUp':
                idImg = document.getElementById('pole' + (rows+1) + '_' + steps);
                switch(idImg.src){
                  case food[0]:
                       bonus--;
                       break;
                   case food[1]:
                       bonus++;
                       break;
                   default:
                       break;}
                if (rows < 10) {
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/spacer.gif";
                rows++;
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/Igrok.gif";
            }
            break;
        
    }
}
document.addEventListener('keydown', pacmen_move)
 


function not_eda(){
    idImg.src="img/spacer.gif";
    clearInterval(interval1);
}

function eda(){
    r=Math.floor(Math.random()*11)
    c=Math.floor(Math.random()*17)
    idImg=document.getElementById('pole'+r+'_'+c);
    idImg.src=food[Math.floor(Math.random()*2)];
    interval1=setInterval(not_eda,2000);
}
interval=setInterval(eda,2500)
var t=60
function time_count(){
    if (t>0){
        t--;
        timing.innerHTML=t;
    } 
    if (t==0){
        alert("KTO_DVINETCY_TOT_GEY!")
        document.removeEventListener('keydown', pacmen_move)
        clearInterval(Interval3);
        //alert("NAMA-NAMA" +bonus+' !')
    }
}
Interval3=setInterval(time_count,1000)