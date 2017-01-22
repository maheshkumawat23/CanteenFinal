app.controller('adminController', function ($scope, $http, $ionicPopup, $ionicLoading,$state) {

  $scope.feedbackData = [];
  $scope.dummyfeedbackData = [];
  $scope.getArray;
  $scope.separator = ",";
	$scope.decimalSeparator=".";
  var db = openDatabase('mydb', '1.0', 'Test DB', 5 * 1024 * 1024);
  /*   var dummyfeedback = {
            empId:'1190861',
            location: 'gr',
            vendorName: 'SR',
            taste: 'SR',
            service: 'SR',
            hygine: '1234',
            veriety: '1',
            quality: '12',
            quantity: '121',
            comments: '121',
            submitDate:'121'
          }
	for(var i=0;i<600;i++){
		$scope.dummyfeedbackData.push(dummyfeedback);
	}*/
  
  db.transaction(function (tx) {
    //console.log(db);
    tx.executeSql('SELECT * FROM Canteen', [], function (tx, results) {
      dataset = results.rows;
      console.log(dataset.length);
      if (dataset.length > 0) {
        //orderInfo.orderLength = dataset.length;
        for (var i = 0; i < dataset.length; i++) {
          var data = dataset.item(i);
          var feedback = {
            empId: data['empId'],
            location: data['location'],
            vendorName: data['vendorName'],
            taste: data['taste'],
            service: data['Service'],
            hygine: data['Hygine'],
            veriety: data['veriety'],
            quality: data['quality'],
            quantity: data['quantity'],
            comments: data['comments'],
            submitDate: data['submitDate']
          }
          //console.log(productDetails);
          $scope.feedbackData.push(feedback);

        }
      }
    });
  });
  
  $scope.Logout = function(){
    $state.go('login');
  }
  $scope.sync = function () {
    console.log('clicking sync');
    if ($scope.feedbackData.length === 0) {
      var alertPopup = $ionicPopup.alert({
        title: 'Alert !!!',
        template: 'There is no data to synced'
      });

      alertPopup.then(function (res) {
        console.log('Thank you');
      });
    }
    else {
      $http.post('https://secure-retreat-41635.herokuapp.com/api/posts', $scope.feedbackData).then(successCallback, errorCallback);
      console.log('i am in the post');
      $ionicLoading.show({
        template: 'Syncing...',
        content: 'Loading',
        animation: 'fade-out',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    }
    function successCallback(data) {
      console.log('success');
      function onDeleteSuccess() {
        console.log('Deleted Succesfully');
        $ionicLoading.hide();
        $scope.feedbackData.length = 0;
        var alertPopup = $ionicPopup.alert({
          title: 'Synced',
          template: 'Your data synced to server and deleted from the device'
        });

        alertPopup.then(function (res) {
          console.log('Thank you');
        });
      }
      function onError() {
        console.log("error in deleting the data");
      }
      if (data.data === "OK") {
        //alert('data synced successfullly');

        db.transaction(function (tx) {

          tx.executeSql("DELETE FROM Canteen", [], onDeleteSuccess, onError);
        });

      }
    }
    function errorCallback() {
      console.log('error');
    }
  }
});