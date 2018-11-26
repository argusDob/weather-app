var app = new Vue({
	el: "#app",
	data: {

		city: [],
		image: [],
		newArray:[],
		message: "",
		url: "",
		
	},
	created: function () {       
		this.getData();
		this.cities();
	
	},

//		computed: {
//			filterCities: function () {
//				return this.city.filter((cities)=>{
//					
//					return cities.title.match(this.message)
//				});
//				}

			

//	},
        methods: {
		getData: function () {
			var fetchConfig =
				fetch("https://api.myjson.com/bins/i8run", {
					method: "GET",
					headers: new Headers({})
				}).then(function (response) {
					if (response.ok) {
						return response.json();
					}
				}).then(function (json) {
					console.log("My json", json)

					app.city = json.list;
					console.log(app.city);
      				app.pushAnArr();
			

				})
				.catch(function (error) {
					console.log(error);
				})
		},
			
		cities: function () {
			var fetchConfig =
				fetch("https://pixabay.com/api/?key=10772849-8270b213e517e422b036ea0fd&q=city", {
					method: "GET",
					headers: new Headers({})
				}).then(function (response) {
					if (response.ok) {
						return response.json();
					}
				}).then(function (json) {
					console.log("My json", json)

					app.image = json.hits;
					console.log(app.image);
				

				})
				.catch(function (error) {
					console.log(error);
				})
		},
			
	 pushAnArr: function(){
		for(var i=0; i<app.city.length; i++){
			
			app.newArray.push(app.city[i].weather[0].icon);
		 
			
		}
		 			return app.newArray;

		
	 }
			
			
	}
})

 
