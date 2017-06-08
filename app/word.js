'use strict'
module.export = {
    words = (word_string)=> {
    word_count_json = {};
    words_array = word_string.split(' ');
  let i = 0;
        while (i < words_array.length){
            if (typeof word_count_json[words_array[i]] ==='undefined'){
                word_count_json[words_array[i]] = 1;
            }
            else {
                word_count_json[words_array[i]]+=1;
             }
         i++ ;
    }
    return word_count_json;
}
}
        