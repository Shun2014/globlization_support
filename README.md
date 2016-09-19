# globlization_support

read strings from property files and save them into json files

### contentHelper(proFilePath, jsonFilePath, resultFilePath, proKey, jsonKey, compareFunction)
++ proFilePath location for the property  files
++ jsonFilePath location for the source json files
++ resultFilePath location for the output json files
++ proKey  name of the key in the property file
++ jsonKey name of the key in the json file
++ compareFunction a function to match the property file and the json file by languages

### usage

```javascript
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

#### result

```javascript
list property files: 
[ 'template_en.properties', 'template_zh.properties' ]
list json files: 
[ 'en.json', 'en_US.json', 'zh.json', 'zh_CN.json' ]
write new file to - /Users/shun/globlization_support/test/result/en.json
write new file to - /Users/shun/globlization_support/test/result/en_US.json
write new file to - /Users/shun/globlization_support/test/result/zh.json
write new file to - /Users/shun/globlization_support/test/result/zh_CN.json

