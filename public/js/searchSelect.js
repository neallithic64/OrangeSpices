$(function() {
    $('#select-ingredient').selectize({
        options: [],
        labelField: 'ingredientName',
        valueField: '_id',
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
                method: 'GET',
                data: {
                    name : query
                },
                error: () => callback(),
                success: a => callback(a)
            });
        }
    });
});