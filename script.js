//billentyűzet
window.addEventListener("keyup",jobbra2);
window.addEventListener("keyup",balra2);
window.addEventListener("keyup",enter2);
window.addEventListener("keydown",megallit);

function megallit(event){
    if(event.keyCode=="13"){
        event.preventDefault()
    }
    if(event.keyCode=="32"){
        event.preventDefault()
    }
}

function jobbra2(key){
    if(key.keyCode=="39"){
        jobbra() 

    }
}
function balra2(key){
    if(key.keyCode=="37"){
        balra()   
  
    }
}
function enter2(key){  
    if(key.keyCode=="13"){
        lerak()
    }
    if(key.keyCode=="32"){
        lerak()
    }
}
//minden más
let kezdolap = document.querySelector('#kezdolap')
let szabalyzat = document.querySelector('#szabalyzat')
let nevek =document.querySelector('#nevek')
const statisztika=document.querySelector('#statisztika2')
let game = document.querySelector('#game')
const korong=document.querySelector('#korong')
const jatek=document.querySelector('#jatek')
const jatek2=document.querySelector('#jatek2')
let player1=document.querySelector('#player1')
let player2=document.querySelector('#player2')
const egyes=document.querySelector('#egyes')
const kettes=document.querySelector('#kettes')
const dont=document.querySelector('#dont')
const dontetlen =document.querySelector("#d");
const win =document.querySelector("#w");
const newgame =document.querySelector("#newgame");

//gombok
const Jatekszabalyzat = document.querySelector('#Button1')
const nev = document.querySelector('#Button2')
const play2 = document.querySelector('#Button4')
const play = document.querySelector('#Button5')
const kezdolapButton =document.querySelector('#kezdolap2')
const lerakButton =document.querySelector('#seged')
const jobb =document.querySelector('#seged2')
const ball =document.querySelector('#seged1')

//segédváltozók
let a=0
let b=4
let c=0
let d=10
let e=0
let jat1=0
let jat2=0
let jat11=0
let jat12=0
let WIN =true
let donti=0
let x=0
let y=0
let valtozo=0
let atlos1=0
let atlos2=0
let atlos11=0
let atlos12=0
let jobbos=0
let balos=0
let enteres=0
let jatekok=1
let k=0

//piros pöttyök
const kep1 =document.querySelector('#kep')
const kep2 =document.querySelector('#kep1')
const kep3 =document.querySelector('#kep2')
const kep4 =document.querySelector('#kep3')
const kep5 =document.querySelector('#kep4')
const kep6 =document.querySelector('#kep5')
const kep7 =document.querySelector('#kep6')

//sárga-pöttyök
const kep10 =document.querySelector('#kep10')
const kep20 =document.querySelector('#kep11')
const kep30 =document.querySelector('#kep12')
const kep40 =document.querySelector('#kep13')
const kep50 =document.querySelector('#kep14')
const kep60 =document.querySelector('#kep15')
const kep70 =document.querySelector('#kep16')

//cellák
const tablazat =[]
for (var i = 1; i<7; i++) {   
    tablazat[i]=[]
    for (var j = 0; j<7; j++) {       
        tablazat[i][j]=0
        d+=1
    }
    d+=3
}
d=10
//functions
function szabaly(){
    if(szabalyzat.style.display === 'none'){
        szabalyzat.style.display = 'block';
    }
    else{
        szabalyzat.style.display = 'none';
    }
}
function nevadas(){
    kezdolap.style.display = 'none';
    szabalyzat.style.display = 'none';
    nevek.style.display = 'block';
}
function Play(){
    valtozo =1
    nevek.style.display = 'none';
    game.style.display = 'block';
    jatek.style.display = 'block';
    dontetlen.style.display = 'none';
    kep4.style.display ='block';
    jatek.innerHTML = (`A(z) ${player1.value} nevű játékos következik.`)
    jatek2.innerHTML = (`A(z) ${player2.value} nevű játékos következik.`)
    egyes.innerHTML=(` ${player1.value} : ${x}`)
    kettes.innerHTML=(` ${player2.value} : ${y}`)
    dont.innerHTML=(`DÖNTETLENEK SZÁMA: ${donti} `)
    a=0
    korong.innerHTML=(`Lerakott korongok száma: ${a} `)
    WIN=false

}

function Play2(){
    valtozo =0
    kezdolap.style.display = 'none';
    szabalyzat.style.display = 'none';
    nevek.style.display = 'none';
    game.style.display = 'block';
    jatek.style.display = 'block';
    dontetlen.style.display = 'none';
    kep4.style.display ='block';
    jatek.innerHTML = (`Az 1.játékos következik.`)
    jatek2.innerHTML = (`Az 2.játékos következik.`)
    egyes.innerHTML=(` 1.játékos : ${x}`)
    player1.value = '1. játékos'
    player2.value = '2. játékos'
    kettes.innerHTML=(`2.játékos : ${y}`)
    dont.innerHTML=(`DÖNTETLENEK SZÁMA: ${donti} `)
    a=0
    korong.innerHTML=(`Lerakott korongok száma: ${a} `)
    WIN=false
}

function lerak(){
    if(WIN===false){
        //kiküszöbljük hogyha tele van az az oszlop akkor is lehessen rá rakni
        if (tablazat[6][b-1]===1){
            k=1
        }
        if (tablazat[6][b-1]===2){
            k=1
        }
        if (k===0){
            //lerakja a piros-sárga labdákat
            var table = document.getElementById("tábla");
            for (var i = 1, row; row = table.rows[i]; i++) {
                for (var j = 0, col; col = row.cells[j]; j++) {  
                    if (j+1===b){ 
                        if (tablazat[i][j]===0){
                            if (c===0){
                                const alma =document.querySelector(`#td${d+1}`)
                                alma.classList.add('piros')
                                tablazat[i][j]=1
                                e=1
                            }
                            if (c===1){
                                const alma =document.querySelector(`#td${d+1}`)                 
                                alma.classList.add('sárga')
                                tablazat[i][j]=2
                                e=1
                            }    
                        }   
                    }
                    d+=1
                }
                d+=3
                if(e===1){
                    break;
                }
            }
            d=10
            e=0
            //eltüntetés + ladbaváltakozás
            if (c===0){
                c=1
                kep1.style.display ='none';
                kep2.style.display ='none';
                kep3.style.display ='none';
                kep4.style.display ='none';
                kep5.style.display ='none';
                kep6.style.display ='none';
                kep7.style.display ='none';
                if (b===1){
                    kep10.style.display ='block';
                }
                if (b===2){
                    kep20.style.display ='block';
                }
                if (b===3){
                    kep30.style.display ='block';
                }
                if (b===4){
                    kep40.style.display ='block';
                }
                if (b===5){
                    kep50.style.display ='block';
                }
                if (b===6){
                    kep60.style.display ='block';
                }
                if (b===7){
                    kep70.style.display ='block';
                }

            }
            else{
                c=0
                kep10.style.display ='none';
                kep20.style.display ='none';
                kep30.style.display ='none';
                kep40.style.display ='none';
                kep50.style.display ='none';
                kep60.style.display ='none';
                kep70.style.display ='none';
                if (b===1){
                    kep1.style.display ='block';
                }
                if (b===2){
                    kep2.style.display ='block';
                }
                if (b===3){
                    kep3.style.display ='block';
                }
                if (b===4){
                    kep4.style.display ='block';
                }
                if (b===5){
                    kep5.style.display ='block';
                }
                if (b===6){
                    kep6.style.display ='block';
                }
                if (b===7){
                    kep7.style.display ='block';
                }
            }
            if(a<42){
                a+=1
                korong.innerHTML=(`Lerakott korongok száma: ${a} `)
                if(jatek.style.display === 'block'){
                    jatek.style.display = 'none';
                    jatek2.style.display = 'block'
                }
                else{
                    jatek2.style.display = 'none';
                    jatek.style.display = 'block'
                }
            }
            if(a===42){
                dontetlen.style.display = 'block';
                jatek2.style.display = 'none';
                jatek.style.display = 'none';
                WIN=true
                donti+=1
            }
            //win
            for (var i = 1; i<7; i++) {            
                for (var j = 0; j<7; j++) {  
                    d+=1
                    // függőleges
                    if(i<=3){
                        if (tablazat[i][j]===1){
                            if (tablazat[i+1][j]===1){
                                if (tablazat[i+2][j]===1){
                                    if (tablazat[i+3][j]===1){
                                        const körte =document.querySelector(`#t${d}`)
                                        körte.classList.add('piros')
                                        const körte2 =document.querySelector(`#t${d+10}`)
                                        körte2.classList.add('piros')
                                        const körte3 =document.querySelector(`#t${d+20}`)
                                        körte3.classList.add('piros')
                                        const körte4 =document.querySelector(`#t${d+30}`)
                                        körte4.classList.add('piros')
                                    }
                                }
                            }    
                        }
                        if (tablazat[i][j]===2){
                            if (tablazat[i+1][j]===2){
                                if (tablazat[i+2][j]===2){
                                    if (tablazat[i+3][j]===2){
                                        const körte =document.querySelector(`#t${d}`)
                                        körte.classList.add('sárga')
                                        const körte2 =document.querySelector(`#t${d+10}`)
                                        körte2.classList.add('sárga')
                                        const körte3 =document.querySelector(`#t${d+20}`)
                                        körte3.classList.add('sárga')
                                        const körte4 =document.querySelector(`#t${d+30}`)
                                        körte4.classList.add('sárga')
                                    }
                                }
                            }    
                        }
                    }
                    //vízszintes
                    if (j<=4){
                        if (tablazat[i][j]===1){
                            if (tablazat[i][j+1]===1){
                                if (tablazat[i][j+2]===1){
                                    if (tablazat[i][j+3]===1){
                                        const körte =document.querySelector(`#t${d}`)
                                        körte.classList.add('piros')
                                        const körte2 =document.querySelector(`#t${d+1}`)
                                        körte2.classList.add('piros')
                                        const körte3 =document.querySelector(`#t${d+2}`)
                                        körte3.classList.add('piros')
                                        const körte4 =document.querySelector(`#t${d+3}`)
                                        körte4.classList.add('piros')
                                    }
                                }
                            }    
                        }
                        if (tablazat[i][j]===2){
                            if (tablazat[i][j+1]===2){
                                if (tablazat[i][j+2]===2){
                                    if (tablazat[i][j+3]===2){
                                        const körte =document.querySelector(`#t${d}`)
                                        körte.classList.add('sárga')
                                        const körte2 =document.querySelector(`#t${d+1}`)
                                        körte2.classList.add('sárga')
                                        const körte3 =document.querySelector(`#t${d+2}`)
                                        körte3.classList.add('sárga')
                                        const körte4 =document.querySelector(`#t${d+3}`)
                                        körte4.classList.add('sárga')
                                    }
                                }
                            }    
                        }
                    }
                    if(i>=4){
                        if (tablazat[i][j]===1){
                            if(tablazat[i-1][j+1]===1){
                                if(tablazat[i-2][j+2]===1){
                                    if(tablazat[i-3][j+3]===1){
                                        const körte =document.querySelector(`#t${d}`)
                                        körte.classList.add('piros')
                                        const körte2 =document.querySelector(`#t${d-9}`)
                                        körte2.classList.add('piros')
                                        const körte3 =document.querySelector(`#t${d-18}`)
                                        körte3.classList.add('piros')
                                        const körte4 =document.querySelector(`#t${d-27}`)
                                        körte4.classList.add('piros')
                                    }
                                }
                            }
                        }
                        if (tablazat[i][j]===2){
                            if(tablazat[i-1][j+1]===2){
                                if(tablazat[i-2][j+2]===2){
                                    if(tablazat[i-3][j+3]===2){
                                        const körte =document.querySelector(`#t${d}`)
                                        körte.classList.add('sárga')
                                        const körte2 =document.querySelector(`#t${d-9}`)
                                        körte2.classList.add('sárga')
                                        const körte3 =document.querySelector(`#t${d-18}`)
                                        körte3.classList.add('sárga')
                                        const körte4 =document.querySelector(`#t${d-27}`)
                                        körte4.classList.add('sárga')
                                    }
                                }
                            }
                        }
                    }
                    else{
                        if(j<=3){
                            if (tablazat[i][j]===1){
                                if(tablazat[i+1][j+1]===1){
                                    if(tablazat[i+2][j+2]===1){
                                        if(tablazat[i+3][j+3]===1){
                                            const körte =document.querySelector(`#t${d}`)
                                            körte.classList.add('piros')
                                            const körte2 =document.querySelector(`#t${d+11}`)
                                            körte2.classList.add('piros')
                                            const körte3 =document.querySelector(`#t${d+22}`)
                                            körte3.classList.add('piros')
                                            const körte4 =document.querySelector(`#t${d+33}`)
                                            körte4.classList.add('piros')
                                        }
                                    }
                                }
                            }
                            if (tablazat[i][j]===2){
                                if(tablazat[i+1][j+1]===2){
                                    if(tablazat[i+2][j+2]===2){
                                        if(tablazat[i+3][j+3]===2){
                                            const körte =document.querySelector(`#t${d}`)
                                            körte.classList.add('sárga')
                                            const körte2 =document.querySelector(`#t${d+11}`)
                                            körte2.classList.add('sárga')
                                            const körte3 =document.querySelector(`#t${d+22}`)
                                            körte3.classList.add('sárga')
                                            const körte4 =document.querySelector(`#t${d+33}`)
                                            körte4.classList.add('sárga')
                                        }
                                    }
                                }
                            }
                        }            
                    }         
                }
                d+=3
            }
            d=10
            //győzelem-e vízszintes és függőleges player1
            for (var i = 1; i<7; i++) {            
                for (var j = 0; j<7; j++) {  
                    if (tablazat[i][j]===1){
                        jat11+=1
                    }
                    //vízszintes
                    if(jat11===4){
                        win.style.display = 'block';
                        win.innerHTML=(`${player1.value} győzött!`)
                        jatek2.style.display = 'none';
                        jatek.style.display = 'none';  
                        if (WIN===false){
                            x+=1
                        }
                        WIN=true
                    }
                    if (j+1===b){ 
                        if (tablazat[i][j]===1){
                            jat1+=1
                            jat2=0
                        }
                        if (tablazat[i][j]===2){
                            jat1=0
                        }
                    }
                    if (tablazat[i][j]!=1){
                        jat11=0
                    }
                }          
                jat11=0
            }
            //függőleges
            if(jat1===4){
                win.style.display = 'block';
                win.innerHTML=(`${player1.value} győzött!`)
                jatek2.style.display = 'none';
                jatek.style.display = 'none';  
                if (WIN===false){
                    x+=1
                }
                WIN=true
            }
            jat1=0
            jat11=0
            //győzelem-e vízszintes és függőleges player2
            for (var i = 1, row; row = table.rows[i]; i++) {
                for (var j = 0, col; col = row.cells[j]; j++) { 
                    if (tablazat[i][j]===2){
                        jat12+=1
                    } 
                    if(jat12===4){
                        win.style.display = 'block';
                        win.innerHTML=(`${player2.value} győzött!`)
                        jatek2.style.display = 'none';
                        jatek.style.display = 'none';  
                        if (WIN===false){
                            y+=1
                        }
                        WIN=true
                    }
                    if (j+1===b){ 
                        if (tablazat[i][j]===2){
                            jat2+=1
                            jat1=0
                        }
                        if (tablazat[i][j]===1){
                            jat2=0
                        }
                    }
                    if (tablazat[i][j]!=2){
                        jat12=0
                    }
                }
                jat12=0
            }
            if(jat2===4){
                win.style.display = 'block';
                win.innerHTML=(`${player2.value} győzött!`)
                jatek2.style.display = 'none';
                jatek.style.display = 'none';  
                if (WIN===false){
                    y+=1
                }
                WIN=true
            }
            jat2=0
            // átlósan
            for (var i = 1; i<7; i++) {            
                for (var j = 0; j<7; j++) {  
                    if (tablazat[i][j]===1){
                        if(i>=4){
                            if(tablazat[i-1][j+1]===1){
                                if(tablazat[i-2][j+2]===1){
                                    if(tablazat[i-3][j+3]===1){
                                        win.style.display = 'block';
                                        win.innerHTML=(`${player1.value} győzött!`)
                                        jatek2.style.display = 'none';
                                        jatek.style.display = 'none';  
                                        if (WIN===false){
                                            x+=1
                                        }
                                        WIN=true
                                    }
                                }
                            }
                        }
                        if(j<=3){
                            if(tablazat[i+1][j+1]===1){
                                if(tablazat[i+2][j+2]===1){
                                    if(tablazat[i+3][j+3]===1){
                                        win.style.display = 'block';
                                        win.innerHTML=(`${player1.value} győzött!`)
                                        jatek2.style.display = 'none';
                                        jatek.style.display = 'none';  
                                        if (WIN===false){
                                            x+=1
                                        }
                                        WIN=true
                                    }
                                }
                            }
                        }
                        else{                                                 
                        }  
                    }                     
                    if (tablazat[i][j]===2){
                        if(i>=4){
                            if(tablazat[i-1][j+1]===2){
                                if(tablazat[i-2][j+2]===2){
                                    if(tablazat[i-3][j+3]===2){
                                        win.style.display = 'block';
                                        win.innerHTML=(`${player2.value} győzött!`)
                                        jatek2.style.display = 'none';
                                        jatek.style.display = 'none';  
                                        if (WIN===false){
                                            y+=1
                                        }
                                        WIN=true
                                    }
                                }
                            }
                        }
                        else{
                            if(j<=3){
                                if(tablazat[i+1][j+1]===2){
                                    if(tablazat[i+2][j+2]===2){
                                        if(tablazat[i+3][j+3]===2){
                                            win.style.display = 'block';
                                            win.innerHTML=(`${player2.value} győzött!`)
                                            jatek2.style.display = 'none';
                                            jatek.style.display = 'none';  
                                            if (WIN===false){
                                                y+=1
                                            }
                                            WIN=true
                                        }
                                    }
                                }
                            }
                        }                 
                    }
                }
            }
        }
    }
}
function kezdolapfunction(){
    var table = document.getElementById("tábla");
    for (var i = 1, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]+1; j++) {  
            const alma =document.querySelector(`#td${d+1}`)                            
            alma.classList.remove('piros')     
            alma.classList.remove('sárga')       
            d+=1
        }
        d+=3
    }
    d=10
    if(jatek.style.display === 'block'){
        jatek.style.display = 'none';
    }
    else{
        jatek2.style.display = 'none';
    }
    game.style.display = 'none';
    kezdolap.style.display = 'block';
    win.style.display = 'none';
    player1.value="";
    player2.value="";
    kep10.style.display ='none';
    kep20.style.display ='none';
    kep30.style.display ='none';
    kep40.style.display ='none';
    kep50.style.display ='none';
    kep60.style.display ='none';
    kep70.style.display ='none';
    kep1.style.display ='none';
    kep2.style.display ='none';
    kep3.style.display ='none';
    kep4.style.display ='none';
    kep5.style.display ='none';
    kep6.style.display ='none';
    kep7.style.display ='none';
    b=4
    c=0
    for (var i = 1; i<7; i++) {   
        tablazat[i]=[]
        for (var j = 0; j<7; j++) {       
            tablazat[i][j]=0
            d+=1
        }
        d+=3
    }
    d=10
    WIN=false
    a=0
    x=0
    y=0
    donti=0
}
function jobbra(){  
    if(WIN===false){
        if (b<7){
            if (c===0){
                b+=1
                if (b===2){
                    kep1.style.display ='none';
                    kep2.style.display ='block';
                    kep3.style.display ='none';
                }
                if (b===3){
                    kep2.style.display ='none';
                    kep3.style.display ='block';
                    kep4.style.display ='none';
                }
                if (b===4){
                    kep3.style.display ='none';
                    kep4.style.display ='block';
                    kep5.style.display ='none';
                }
                if (b===5){
                    kep4.style.display ='none';
                    kep5.style.display ='block';
                    kep6.style.display ='none';
                }
                if (b===6){
                    kep5.style.display ='none';
                    kep6.style.display ='block';
                    kep7.style.display ='none';
                }
                if (b===7){
                    kep6.style.display ='none';
                    kep7.style.display ='block';
                }
            }
            else{
                b+=1
                if (b===2){
                    kep10.style.display ='none';
                    kep20.style.display ='block';
                    kep30.style.display ='none';
                }
                if (b===3){
                    kep20.style.display ='none';
                    kep30.style.display ='block';
                    kep40.style.display ='none';
                }
                if (b===4){
                    kep30.style.display ='none';
                    kep40.style.display ='block';
                    kep50.style.display ='none';
                }
                if (b===5){
                    kep40.style.display ='none';
                    kep50.style.display ='block';
                    kep60.style.display ='none';
                }
                if (b===6){
                    kep50.style.display ='none';
                    kep60.style.display ='block';
                    kep70.style.display ='none';
                }
                if (b===7){
                    kep60.style.display ='none';
                    kep70.style.display ='block';
                }
            }
        }
        if (tablazat[6][b-1]===0){
            k=0
        }
    }
}
function balra(){
    if(WIN===false){
        if (b>1){
            if (c===0){
                b-=1
                if (b===1){
                    kep1.style.display ='block';
                    kep2.style.display ='none';
                }
                if (b===2){
                    kep1.style.display ='none';
                    kep2.style.display ='block';
                    kep3.style.display ='none';
                }
                if (b===3){
                    kep2.style.display ='none';
                    kep3.style.display ='block';
                    kep4.style.display ='none';
                }
                if (b===4){
                    kep3.style.display ='none';
                    kep4.style.display ='block';
                    kep5.style.display ='none';
                }
                if (b===5){
                    kep4.style.display ='none';
                    kep5.style.display ='block';
                    kep6.style.display ='none';
                }
                if (b===6){
                    kep5.style.display ='none';
                    kep6.style.display ='block';
                    kep7.style.display ='none';
                }
            }
            else{
                b-=1
                if (b===2){
                    kep10.style.display ='none';
                    kep20.style.display ='block';
                    kep30.style.display ='none';
                }
                if (b===3){
                    kep20.style.display ='none';
                    kep30.style.display ='block';
                    kep40.style.display ='none';
                }
                if (b===4){
                    kep30.style.display ='none';
                    kep40.style.display ='block';
                    kep50.style.display ='none';
                }
                if (b===5){
                    kep40.style.display ='none';
                    kep50.style.display ='block';
                    kep60.style.display ='none';
                }
                if (b===6){
                    kep50.style.display ='none';
                    kep60.style.display ='block';
                    kep70.style.display ='none';
                }
                if (b===1){
                    kep10.style.display ='block';
                    kep20.style.display ='none';
                }
            }
        }
        if (tablazat[6][b-1]===0){
            k=0
        }
    }
}
function newgamefunction(){
    var table = document.getElementById("tábla");
    for (var i = 1, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]+1; j++) {  
            const alma =document.querySelector(`#td${d+1}`)                            
            alma.classList.remove('piros')     
            alma.classList.remove('sárga')       
            d+=1
            const körte=document.querySelector(`#t${d}`)  
            körte.classList.remove('piros')     
            körte.classList.remove('sárga')     
        }
        d+=3
    }
    d=10
    if(jatek.style.display === 'block'){
        jatek.style.display = 'none';
    }
    else{
        jatek2.style.display = 'none';
    }
    win.style.display = 'none';
    b=4
    c=0
    for (var i = 1; i<7; i++) {   
        tablazat[i]=[]
        for (var j = 0; j<7; j++) {       
            tablazat[i][j]=0
            d+=1
        }
        d+=3
    }
    d=10
    WIN=false
    kep10.style.display ='none';
    kep20.style.display ='none';
    kep30.style.display ='none';
    kep40.style.display ='none';
    kep50.style.display ='none';
    kep60.style.display ='none';
    kep70.style.display ='none';
    kep1.style.display ='none';
    kep2.style.display ='none';
    kep3.style.display ='none';
    kep4.style.display ='block';
    kep5.style.display ='none';
    kep6.style.display ='none';
    kep7.style.display ='none';
    dontetlen.style.display = 'none';
    b=4
    a=0
    egyes.innerHTML=(` ${player1.value} : ${x}`)
    kettes.innerHTML=(` ${player2.value} : ${y}`)
    dont.innerHTML=(`DÖNTETLENEK SZÁMA: ${donti} `)
    korong.innerHTML=(`Lerakott korongok száma: ${a} `)    
    jatek.style.display = 'block';
}

//ezeket nem tom, hogy nevezzem :)
korong.innerHTML=(`Lerakott korongok száma:${a} `)

//oldalak közötti lépegetés gombok
Jatekszabalyzat.addEventListener('click', szabaly)
nev.addEventListener('click', nevadas)
play.addEventListener('click', Play)
play2.addEventListener('click', Play2)
kezdolapButton.addEventListener('click', kezdolapfunction)

//jatek gombok
lerakButton.addEventListener('click', lerak)
jobb.addEventListener('click', jobbra)
ball.addEventListener('click', balra)
newgame.addEventListener('click', newgamefunction)
