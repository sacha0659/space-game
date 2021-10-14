$( "#validate" ).click(function() {
   if($("#input1").val()==213 && $("#input2").val()==456 && $("#input3").val()==500) {
    window.location.href="winner.html" 
   }else if($("#input1").val()!="" && $("#input2").val()!="" && $("#input3").val()!="") {
    window.location.href="loose.html" 
   }
  });