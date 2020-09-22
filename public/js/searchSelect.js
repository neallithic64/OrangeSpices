$(function() {
    $('#select-ingredient').selectize({
        options: [{ingredientName: "Butter", value: "Butter"}, {ingredientName: "Baking Powder", value: "Baking Powder"},
                  {ingredientName: "Chicken", value: "Chicken"}],
        labelField: 'ingredientName',
        valueField: 'value',
        searchField: ['ingredientName'],
        placeholder: 'Select ingredient',
        maxItems: 1,
        delimiter: ',',
        create: false,
        openOnFocus: true,
        
        load: (query, callback) => {
            if(!query.length)
                return callback();
            $.ajax({
                url: '/getIngredients',
                type: 'GET',
                error: () => callback(),
                success: (res) => {
                    console.log(res),
                    callback(res);
                } 
            });
        }
    });
});