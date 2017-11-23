import Vue from 'vue';
import template from './src/app.html';

const app = new Vue({
  el: '#app',
  components: {
    template: template,
    data: function (){
			return {
				message: 'hello word!!'
			};
	  }
	}
})
