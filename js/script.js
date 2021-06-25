window.onscroll = function() {
  myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var contador = 0;

window.onload = contarCarrito;


function contarCarrito() {
    
  const botones=document.querySelectorAll(".button-module, .button-list");
  botones.forEach(element => {
    element.addEventListener("click", contar);
  });

  function contar()
  {
      contador++;
      document.getElementById("mostrar").innerHTML = contador
  }
}

var bolsita = [];

function producto1(){
    var producto1 = ["Frostpunk: $"+ 15000+"</br>"];
    bolsita.push(producto1);
}

function producto2(){
    var producto2 = ["GTA: $"+25000+"</br>"];
    bolsita.push(producto2);
}

function producto3(){
    var producto3 = ["Resident Evil 8: $"+59000]+"</br>";
    bolsita.push(producto3);
}

function producto4(){
    var producto4 = ["Monster Hunter: $"+35000+"</br>"];
    bolsita.push(producto4);
}

function producto5(){
    var producto5 = ["Battlefield: $"+45000+"</br>"];
    bolsita.push(producto5);
}

function producto6(){
    var producto6 = ["Mortal Kombat 11: $"+20000+"</br>"];
    bolsita.push(producto6);
}

function producto7(){
    var producto7 = ["Stardew Valley: $"+7000+"</br>"];
    bolsita.push(producto7);
}

function producto8(){
    var producto8 = ["Satisfactory: $"+17000+"</br>"];
    bolsita.push(producto8);
}

function producto9(){
    var producto9 = ["Call of duty Cold War: $"+15000+"</br>"];
    bolsita.push(producto9);
}

function producto10(){
    var producto10 = ["Minecraft: $"+20000+"</br>"];
    bolsita.push(producto10);
}

function producto11(){
    var producto11 = ["Phasmophobia: $"+7000+"</br>"];
    bolsita.push(producto11);
}

function producto12(){
    var producto12 = ["Valheim: $"+8000+"</br>"];
    bolsita.push(producto12);
}

function producto13(){
  var producto14 = ["Control: $"+30000+"</br>"];
  bolsita.push(producto14);
}

function producto14(){
    var producto14 = ["Cyberpunk: $"+45000+"</br>"];
    bolsita.push(producto14);
}

function producto15(){
  var producto14 = ["Slay the Spire: $"+5000+"</br>"];
  bolsita.push(producto14);
}
function producto16(){
  var producto14 = ["The whitcher 3: $"+20000+"</br>"];
  bolsita.push(producto14);
}
function producto17(){
  var producto14 = ["Age of Empire: $"+15000+"</br>"];
  bolsita.push(producto14);
}



function shoppingCartModal(id, data, ok, cancel, input) {
    data=data || {};
    id="modal-"+id;
    if (document.getElementById(id)==null) {
      var d=document.createElement("div");
      d.className="shoppingCartModal";
      d.id=id;
      var p=document.createElement("div");
      p.className="panel";
      var t=document.createElement("div");
      t.className="title";
      var cl=document.createElement("div");
      cl.className="close";
      cl.innerHTML='&times;';
      cl.addEventListener('click',function(ev) {
        ev.preventDefault();
        var dTop=this.parentNode.parentNode;
        dTop.classList.remove("visible");
        dTop.querySelector(".panel .content").innerHTML='';
      });
      var ct=document.createElement("div");
      ct.className="content";
      var f=document.createElement("div");
      f.className="footer";
      p.appendChild(t);p.appendChild(cl);p.appendChild(ct);p.appendChild(f);
      d.appendChild(p);
      document.body.appendChild(d);
    }
    var mod=document.getElementById(id),
    p=mod.querySelector(".panel"),
    t=mod.querySelector(".panel .title"),
    ct=mod.querySelector(".panel .content"),
    f=mod.querySelector(".panel .footer");
    if (f==null) {
      mod.classList.remove("nofooter");
      var f=document.createElement("div");
      f.className="footer";
      p.appendChild(f);
    }
    t.innerHTML=data.title || '';
    ct.innerHTML=bolsita || '';
    f.innerHTML='';
    if (!isNaN(data.width)) p.style.maxWidth=data.width+'px';
    if (!isNaN(data.height)) p.style.maxHeight=data.height+'vh';
    if (ok && ok.length>1) {
      var param={value:null};
      if (input && input.length>0) {
        var ph=document.createElement("p");
        ph.className="action";
        var txt=document.createElement("input");
        txt.className="action";
        txt.setAttribute("placeholder",input[0]);
        txt.addEventListener('keydown',function(ev) {
          if (ev.keyCode==13 || ev.key=="Enter") {
            ev.preventDefault();
            mod.classList.remove("visible");
            ok[1](param.value);
            bolsita = [];
            contador=0;
            location.reload();
          }
        });
        ph.appendChild(txt); 
        ct.appendChild(ph);
        param=ct.querySelector("p.action > input.action");
        setTimeout(function(){
          param.focus();
        },100);
      }
      var bOk=document.createElement("button");
      bOk.className="action";
      bOk.innerHTML=ok[0];
      bOk.addEventListener('click',function(ev) {
        ev.preventDefault();
        mod.classList.remove("visible");
        ok[1](param.value);
        bolsita = [];
        contador= 0;
        location.reload();
      });
      f.appendChild(bOk);
    }
    if (cancel && cancel.length>1) {
      var bCancel=document.createElement("button");
      bCancel.className="action";
      bCancel.innerHTML=cancel[0];
      bCancel.addEventListener('click',function(ev) {
        ev.preventDefault();
        mod.classList.remove("visible");
        cancel[1]();
      });
      f.appendChild(bCancel);
    }
    if (f.innerHTML=='') {
      p.removeChild(f);
      mod.classList.add("nofooter");
    }
    setTimeout(function(){
      mod.classList.add("visible");
    },50);
  }



var usuarios = [];

function agregarUsuario(){

    //Variables init
    var usuario = new Object();
    var fecha = new Date();
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    //Variables del usuario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;


    if(nombre != '' && email != ''){
            if(emailRegex.test(email)){
                usuario["Nombre"] = nombre;
                usuario["Email"] = email;
                usuario["Fecha registro"] = fecha.toLocaleDateString();
                usuarios.push(usuario);
                console.log(usuarios); 
            }else{
                alert("Error en el formato del mail");
            }

    }else{
        alert("A dejado un campo vacio")
    }

    
    
}