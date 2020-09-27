$(document).ready(function(){

    $(this).on("click", "#addIngredient", function(){
        var html = '<div class="row"><span>'+ $("#selectIng").val() + '</span> <span>' + $("#quantity").val() + '</span><span>'+ $("#unit").val() +'</span><button type="button" style="margin-left: 25px; width: 80px" id="remove" class="btn btn-primary btn-sm can-btn">Remove</button></div>';
        $(".col-12").append(html);
    });
    
    $(this).on("click", "#remove", function(){
        $(this).parent().remove();
    });
    
});