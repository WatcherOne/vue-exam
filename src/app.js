import template from './app.html';
require('./app.less');

module.exports = {
    template: template,
    data: function (){
        return {
            message: 'hello word!!'
        };
    }
};
