function Profile(update) {
  prueba();
  var container = $('<div class="container"></div>');
  var div1 = $('<div class="profile"></div>');
  var h1= $('<h1>El perfil del cliente: </h1>')
  var h2= $('<h2>Su perfil es: '+ perfil +' </h2>')
  var h3=$('<h3>Te sugerimos este plan de inversión: </h3>')
  var div3 = $('<div class="informacion"></div>');
  var img = $('<img src="assets/img/chartpie.jpg">')
  var span1=$('<span class="texto"><i></i>  Rentabilidad:4.3%  </span>');
  var span2=$('<span class="texto"><i></i> Mejor Año:27% </span>');
  var span3=$('<span class="texto"><i></i>Peor Año:16.09%</span>');
  var btnReviewPerfil = $('<button type="button" class="btn btn-primary" id="reviewPerfil">Review perfil</button>');
  var btnRegister = $('<button type="button" class="btn btn-primary" id="enviarMail">Generar pdf</button>');

  container.append(div1);
  container.append(div3);
  div1.append(h1);
  div1.append(h2);
  div1.append(h3);
  div1.append(img);
  div3.append(span1);
  div3.append(span2);
  div3.append(span3);

  div3.append(btnReviewPerfil);
  div3.append(btnRegister);

  btnRegister.on('click', function(e) {
        //console.log(state.cliente);
    var doc = new jsPDF();
    doc.text(documento, 10, 10);
    doc.text(perfil, 10, 20);
    doc.save('perfil-cliente.pdf');
    /*$.post( state.url,{vchCodCliente:codigoCliente,vchrTipoDoc:userValue,vchDocIdentidad:documento,
                vchSector:sector,intResultadoPerfil:0,vchrPortafolio:"",chrResp01:option1,
                chrResp02:option2,chrResp03:option3,chrResp04:option4,chrResp05:option5,                chrResp06:option6,
                chrResp07:option7,chrResp08:option8,vchNomPDF: "perfil-cliente"
               });*/
    /*var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", state.url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("vchCodCliente="+codigoCliente+"&vchrTipoDoc="+userValue+
                "vchDocIdentidad="+documento+"vchSector="+sector+
                "intResultadoPerfil=0"+"vchrPortafolio=hola"+"chrResp01="+option1+
                "chrResp02="+option2+"chrResp03="+option3+"chrResp04="+option4+
                "chrResp05="+option5+"chrResp06="+option6+"chrResp07="+option7+
                "chrResp08="+option8+"vchNomPDF="+option7+"perfil-cliente="+option8);*/
                
    /*var dataJson = {vchCodCliente:codigoCliente,vchrTipoDoc:userValue,vchDocIdentidad:documento,
                vchSector:sector,intResultadoPerfil:0,vchrPortafolio:"",chrResp01:option1,
                chrResp02:option2,chrResp03:option3,chrResp04:option4,chrResp05:option5,                chrResp06:option6,
                chrResp07:option7,chrResp08:option8,vchNomPDF: "perfil-cliente"
               }
    $.post( state.url, function(data){
      json2xml(data);
    });*/

});
  btnReviewPerfil.on('click', function(e) {
    pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8 = 0;
    state.screenView = "question-1";
    update();
  });

  return container;
}
