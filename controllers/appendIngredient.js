$(document).ready(function(){

    $(this).on("click", "#addIngredient", function(){
        var html = '<form class="form-inline" id="ingList"><div class="form-group" style="height: 40px;"><select id="selectIng" name="ingredientName" style="width:215px;"><option selected="true" disabled="disabled">Select ingredient</option>{{>ingredientName}}</select></div><div class="form-group"><label for="quantity" class="sr-only">Quantity</label><input type="number" class="form-control" id="qty" style="width:120px; height: 40px; margin-right: 20px; margin-left: 20px;" id="quantity" placeholder="Quantity" min="1"></div> <div class="form-group"> <select class="form-control" style="width:100px; height: 40px;"><option id="unit">Unit</option> {{>units}}</select></div></form><button type="button" style="margin-left: 25px; width: 80px" id="remove" class="btn btn-primary btn-sm can-btn">Remove</button>';
        $(".row").append(html);
    });
    
    $(this).on("click", "#remove", function(){
        $(this).closest('#ingList').remove();
    });

});