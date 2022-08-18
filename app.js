const hourt=document.getElementById("hour");
let menute=document.getElementById("menite");
const seconde=document.getElementById("seconde");





function datr(){
    const dr=new Date();

    const sec=dr.getSeconds();
    const menut=dr.getMinutes();
    const hr=dr.getHours();

    // const sec=45;
    // const menut=0;
    // const hr=0;
	console.log(hr*30+menut/2);

    const sect=(sec*6)-45;
    const menutt=(menut*6+sec/10)-45;
    const hrt=(hr * 30 +menut / 2)-45;



seconde.style.transform='rotate('+sect+'deg)';
menute.style.transform='rotate('+menutt+'deg)';
hourt.style.transform='rotate('+hrt+'deg)';
}
setInterval(datr,100);


