
// STARTMENU 
start = document.getElementById('start');
startmenu = document.getElementsByClassName('startmenu')[0];

start.addEventListener('click', ()=>{
    if(startmenu.style.bottom == "-650px" || newswindow.style.left == "0px" || searchwindow.style.bottom == "50px")
    {
        
      
        searchwindow.style.bottom = "-650px";
        newswindow.style.left = "-607px";
        startmenu.style.bottom = "-650px";
        startmenu.style.bottom = "50px";
        

    }
    else{
        startmenu.style.bottom = "-650px";
    }
})
// SEARCH
search = document.getElementById('search');
searchwindow = document.getElementsByClassName('searchwindow')[0];
search.addEventListener('click', ()=>{
    if(searchwindow.style.bottom == "-650px" || newswindow.style.left == "0px" || startmenu.style.bottom == "50px")
    {
     
        startmenu.style.bottom = "-650px";
        newswindow.style.left = "-607px";
        startmenu.style.bottom = "-650px";
        searchwindow.style.bottom = "50px";

    }
    else{
        searchwindow.style.bottom = "-650px";
    }
})

// NEWS
news = document.getElementById('news');
newswindow = document.getElementsByClassName('newswindow')[0];
news.addEventListener('click', ()=>{
    if(newswindow.style.left == "-607px" || searchwindow.style.bottom == "50px" || startmenu.style.bottom == "50px"){
        
        startmenu.style.bottom = "-650px";
        searchwindow.style.bottom = "-650px";
        storewindow.style.bottom = "-650px";
        newswindow.style.left = "0px";
        
    }
    else{
        newswindow.style.left = "-607px";
    }
})

// EDGE
edge = document.getElementById('edge');
edgewindow = document.getElementsByClassName('edgewindow')[0];
edge.addEventListener('click', ()=>{
    if(edgewindow.style.display == "none"  || newswindow.style.left == "0px" || searchwindow.style.bottom == "50px" || startmenu.style.bottom == "50px"){
        storewindow.style.bottom = "-650px";
        startmenu.style.bottom = "-650px";
        searchwindow.style.bottom = "-650px";
        newswindow.style.left = "-607px";
        edgewindow.style.display = "block";
        
    }
    else{
        edgewindow.style.display = "none";
    }
})

// STORE 
store = document.getElementById('store');
storewindow = document.getElementsByClassName('storewindow')[0];
store.addEventListener('click', ()=>{
    if(storewindow.style.display == "none" || newswindow.style.left == "0px" || searchwindow.style.bottom == "50px" || startmenu.style.bottom == "50px"){
       
        startmenu.style.bottom = "-650px";
        searchwindow.style.bottom = "-650px";
        newswindow.style.left = "-607px";
        storewindow.style.display = "block";
        
    }
    else{
        storewindow.style.display = "none";
    }
})

// TIME FUNCTION 
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();
let timetext = document.getElementById('time');
timetext.innerText = (time);
if(today.getHours() <= 12){
    document.getElementById('format').innerText = ("AM");
}
else if(today.getHours() >= 12){
    document.getElementById('format').innerText = ("PM");

}


let closebtn = document.getElementById('close');
closebtn.addEventListener("mouseover", ()=>{
    closebtn.style.background = "red";
})
closebtn.addEventListener("mouseout", ()=>{
    closebtn.style.background = "rgb(240, 240, 240)";
})
closebtn.addEventListener("click", ()=>{
    edgewindow.style.display = "none";
})

let Sclosebtn = document.getElementById('sclose');
Sclosebtn.addEventListener("mouseover", ()=>{
    Sclosebtn.style.background = "red";
})
Sclosebtn.addEventListener("mouseout", ()=>{
    Sclosebtn.style.background = "rgb(240, 240, 240)";
})
Sclosebtn.addEventListener("click", ()=>{
    storewindow.style.display = "none";
})

