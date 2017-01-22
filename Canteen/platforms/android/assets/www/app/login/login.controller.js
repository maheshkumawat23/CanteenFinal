/* created IIFE function to avoid collison */
(function () {
    angular.module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', '$ionicModal', '$state', '$ionicPopup','getDeviceInfo'];

    function loginController($scope, $ionicModal, state, $ionicPopup,getDeviceInfo) {

/*******************************************************************************************************************/
        var vm = this;
        vm.login = login;
        vm.changeData = changeData;
        vm.adminLogin = adminLogin;
        vm.checked = true;
        vm.locationNames = ["Abhilash", "Dhara", "Global Axis","ITPL", 
        "Jal", "L Center", "Manyata","Pioneer","PSN","SJM Towers","Think campus","Vydehi"];
        vm.vendorNames = [];
        vm.data = {};
        vm.canteenData = [{
	"Abhilash": {
		"location": [{
			"Amba Cool Corner": "Fast Food Services"
		}, {
			"Manoj Catering ": "Beverage services"
		}, {
			"Ideal Solutions": "Main Caterer"
		}, {
			"Coffee Day": "Fast Food services"
		}, {
			"Sai Sarvana Foods": "Fast Food services"
		}]
	},
	"Dhara": {
		"location": [{
			"Sri Sai Caterers": "Main Caterer"},
			{"Manoj Catering": "Beverage services"},
			{"Kitchen Bells": "Fast Food Services"}
		]
	},
	"Global Axis": {
		"location": [{
			"Sri Sai Caterers": "Main Caterer"
		}, {
			"Kitchen Bells  ": "Fast Food Services"
		}, {
			"Chai Point": "Beverage services"
		}, {
			"Ideal Solutions": "Main Caterer"
		}, {
			"SRI KANAN STORE  ": "Main Caterer"
		}, {
			"MDP COFFEE COUNTER": "Fast Food Services"
		}, {
			"Royal Star Services(Idli)  ": "Fast Food services"
		}, {
			"Fresh Makers  ": "Beverage services"
		}]
	},
	"ITPL": {
		"location": [{
			"S R Enterprises": "Beverage services"
		}]
	},
	"Jal": {
		"location": [{
			"Abus Hospitality Services  ": "Main Caterer"
		}, {
			"Chai Point": "Beverage services"
		}, {
			"Green Enterprises (Give Me 5)": "Fast Food services"
		}, {
			"Coffee Day": "Fast Food services"
		}]
	},
	"L Center": {
		"location": [{
			"Sai Sarvana Foods": "Fast Food Services"
		}, {
			"Ideal Solutions": "Main Caterer"
		}, {
			"S R Enterprises": "Beverage services"
		}, {
			"Coffee Day": "Fast Food services"
		}]
	},
	"Manyata": {
		"location": [{
			"Fresh Makers": "Beverage services"
		}]
	},
	"Pioneer": {
		"location": [{
			"S R Enterprises": "Beverage services"
		}, {
			"Abus Hospitality Services": "Main Caterer"
		}, {
			"Kitchen Bells": "Fast Food services"
		}, {
			"Coffee Day": "Fast Food services"
		}]
	},
	"PSN": {
		"location": [{
			"Abus Hospitality Services  ": "Main Caterer"
		}, {
			"Kitchen Bells": "Fast Food Services & Beverage services"
		}]
	},
	"SJM Towers": {
		"location": [{
			"Coffee day": "Fast Food services"},
            {
			"Heramba Refreshments": "Main Caterer & Beverages Counter"},
            {
			"Fresh Makers": "Beverage services"
		}]
	},
	"Think campus": {
		"location": [{
			"Kitchen Bells ": "Main Caterer"
		}, {
			"Fresh Makers ": "Beverage services"
		}, {
			"SS Caterers": "Main Caterer"
		}, {
			"Coffee Day": "Fast Food services"
		}, {
			"Green Enterprises (Give Me 5)": "Fast Food services"
		}, {
			"Chai Point": "Beverage services"
		}]
	},
	"Vydehi": {
		"location": [{
			"Poorva Hospitalities": "Main Caterer"
		}, {
			"Srivari Enterprises": "Beverage services"
		}]
	}
}];

/********************************************************************************************************************/

        /* login function to check user credentials */
        function changeData(){
            console.log(vm.selectedLocationName);
             console.log(Object.keys(vm.canteenData[0].Dhara.location[0]));
            switch(vm.selectedLocationName){
                case "Abhilash":
                    vm.vendorNames =[];
                     for(var i=0;i<vm.canteenData[0].Abhilash.location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0].Abhilash.location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Dhara" :
                     vm.vendorNames =[];
                     for(var i=0;i<vm.canteenData[0].Dhara.location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0].Dhara.location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Global Axis":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Global Axis'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Global Axis'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "ITPL":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0].ITPL.location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0].ITPL.location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Jal":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0].Jal.location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0].Jal.location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "L Center":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['L Center'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['L Center'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Manyata":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Manyata'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Manyata'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Pioneer":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Pioneer'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Pioneer'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "PSN":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['PSN'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['PSN'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "SJM Towers":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['SJM Towers'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['SJM Towers'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Think campus":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Think campus'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Think campus'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Vydehi":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Vydehi'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Vydehi'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                
            default :
                vm.vendorNames = [];

            }
           // console.log(Object.keys(vm.canteenData[0]).length);
            
           // console.log(vm.canteenData[0].Abhilash.location);
        }
        function login() {
            console.log(this.username + "," + this.selectedLocationName + "," + this.selectedVendorName);
            var username = vm.username;
            var selectedLocationName = vm.selectedLocationName;
            var selectedVendorName = vm.selectedVendorName;
            
            if (username === undefined || selectedLocationName === undefined || selectedVendorName === undefined) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Warning',
                    template: 'Please fill all the field'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for submitting your respone in warning popup');
                });
            }
            else {
                localStorage.setItem("username", username);
                localStorage.setItem("location", selectedLocationName);
                localStorage.setItem("vendor", selectedVendorName);
                state.go('home');
            }

        }
        function adminLogin() {
           // console.log(vm.adminUserName + "," + vm.adminPassword);
            if (vm.adminUserName === undefined || vm.adminPassword === undefined) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Warning',
                    template: 'Please fill all the field'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for submitting your respone in warning popup');
                });

            }
            else {
				var getOnlineStatusService = getDeviceInfo.deviceInfo();
				//alert(getOnlineStatusService.connectionStatus);
				if(vm.adminUserName == "admin" && vm.adminPassword =="Tcs@1234")
                state.go('admin');
			    else
				{
					var alertPopup = $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Please check your credentials'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for submitting your respone in warning popup');
                });
				}
            }
        }

        $ionicModal.fromTemplateUrl('app/login/adminlogin.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function () {
            //alert('hello');
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });

        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });

        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

    }
})();
/*app.controller('loginController', function($scope,$ionicModal,$state){
    $scope.locationNames = ["location1","location2","location3","location4","location5","location6","location7","location8"];
    $scope.vendorNames = ["location1","location2","location3","location4","location5","location6","location7","location8"];
    $scope.data ={};
    console.log($scope.data.username);
    $scope.login = function() {
         localStorage.setItem("username",$scope.data.username);
        localStorage.setItem("location",$scope.data.selectedLocationName);
        localStorage.setItem("vendor",$scope.data.selectedVendorName);
        
            $state.go('home');
    };
    $scope.adminLogin = function() {
        $state.go('admin');
    }

    $ionicModal.fromTemplateUrl('app/login/adminlogin.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        //alert('hello');
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });

    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });

});*/