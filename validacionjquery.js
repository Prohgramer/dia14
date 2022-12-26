$(document).ready((e)=>{
let validacion = $(".validacion")
let opcion = $(".sel_regex")
    
$(".sel_regex").change(()=>{
    
    $(".validacion").val("")
    if($(".sel_regex").val()=="1"){
        $(".validacion").attr("placeholder","123456789-9")
    }else{
        $(".validacion").attr("placeholder","")
    }
})

$(".validacion").keyup((e)=>{
    if($(".sel_regex").val()=="1"){
        let str= $(".validacion").val()
        let canti_str=str.length;

        if(str.slice(canti_str-2,canti_str-1)=="-" && str.slice(-1)=="-"){ 
            
            $(".validacion").val(str.slice(0,canti_str-1))
        } 
        if(!/\d|[-]/.test(str.slice(-1))){                            
            $(".validacion").val(str.slice(0,canti_str-1))
        }
        if(str.charAt(0)=="-"){
            $(".validacion").val(str.slice(0,canti_str-1))
        }
    }
})
$(".validacion").keypress((e)=>{
    if($(".sel_regex").val()=="1"){
        let str= $(".validacion").val()
        let canti_str=str.length;

        if(/\d+[-]\d{1}$/.test($(".validacion").val())){    //aqui uso el keypress porque aparentemente este no puede leer el ultimo numero que se ingreso solo permite el keyup 
            e.preventDefault()                        //(supongo que el key up lee el numero porque los numeros se registran cuando scas el dedo del teclado) asique en este
        }     

        if(str.slice(canti_str-2,canti_str-1)=="-" && str.slice(-1)=="-"){ 
            
            $(".validacion").val(str.slice(0,canti_str-1))
        } 
        if(!/\d|[-]/.test(str.slice(-1))){                            
            $(".validacion").val(str.slice(0,canti_str-1))
        }
        if(str.charAt(0)=="-"){
            $(".validacion").val(str.slice(0,canti_str-1))
        }
    }
})
})