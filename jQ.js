// const bbyjQ = jQuery.noConflict();

$(function(){
$("#emailsection .form-select").change(function(){
             //console.log($(this).val())
if( $(this).val() == '직접입력' || $(this).val() == '' ){
    $("#emailsection").addClass("act");
    $("#emailsection .directW").focus();
}
    })
})