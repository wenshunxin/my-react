/**
 * @Date:   2019-10-08T17:26:45+08:00
 * @Last modified time: 2019-10-17T11:14:40+08:00
 */

 const path = require('path');
 const { generateTheme, getLessVars } = require('antd-theme-generator');

 const options = {
   stylesDir: path.join(__dirname, './src/styles'),
   antDir: path.join(__dirname, './node_modules/antd'),
   varFile: path.join(__dirname, './src/styles/vars.less'),
   mainLessFile: path.join(__dirname, './src/styles/main.less'),
   themeVariables: [
     '@primary-color',
   ],
   indexFileName: 'index.html',
   outputFilePath: path.join(__dirname, './public/color.less'),
 }

 generateTheme(options).then(less => {
   console.log('Theme generated successfully');
 })
   .catch(error => {
     console.log('Error', error);
   });
