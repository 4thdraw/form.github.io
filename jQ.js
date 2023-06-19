// const bbyjQ = jQuery.noConflict();

$(function(){
    $("#emailsection .form-select").change(function(){
            // console.log($(this).val())
        if( $(this).val() == '직접입력' || $(this).val() == '' ){
            $("#emailsection").addClass("act");
            $("#emailsection .directW").focus();
        }else{
            $("#emailsection").removeClass("act");
        }
    })
    $("#lenSection input").change(function(){
        //console.log($(this).val())
        if( $("#lengall").prop('checked') ){ // $("#lengall").is(':checked')
            $("#lenSection input:checkbox").prop('checked',true) 
        }else{
            $("#lenSection input:checkbox").prop('checked',false) 
        }
        //all을 제외한 나머지 checkbox가 checked라면 all을 체크해라.
    })
})