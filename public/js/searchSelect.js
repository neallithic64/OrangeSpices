$(function() {
    $('#select-ingredient').selectize({
        options: [],
        labelField: 'name',
        valueField: 'value',
        searchField: ['name'],
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