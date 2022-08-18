const seconde=document.getElementById("second");
const minute=document.getElementById("minute");
const hour=document.getElementById("hour");

function dattime(){
    const dr=new Date();
    const sec=dr.getSeconds();
    const min=dr.getMinutes();
    const hr=dr.getHours();
    let sect=(sec*6)-45;
    let mint=(min*6+sec/10)-45;
    let hrt=(hr*30+min/2)-45;

    hour.style.transform='rotate('+hrt+'deg)';
    minute.style.transform='rotate('+mint+'deg)';
    seconde.style.transform='rotate('+sect+'deg)';

}
setInterval(dattime,100);




