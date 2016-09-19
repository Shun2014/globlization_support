var helper = require('../main');


var proFilePath = '/Users/shun/globlization_support/test/nls' ,
    jsonFilePath = '/Users/shun/globlization_support/test/i18n',
    resultFilePath =  '/Users/shun/globlization_support/test/result',
    proKey = 'label.officeName',
    jsonKey = 'OFFICE_NAME';

helper.contentHelper(proFilePath, jsonFilePath, resultFilePath, proKey, jsonKey,function(name1, name2){
    //console.log("name1 = " + name1);
    //console.log("name2 = " + name2);
    var name = name1.split('_')[1].split('.')[0];
    var sourceFileName = name2.split('.')[0].split('_')[0];
    return name == sourceFileName;

});
