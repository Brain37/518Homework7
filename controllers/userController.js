var app = angular.module('snowmanApp');
app.controller('userController', function ($scope, $firebaseArray) {
    var ref = new Firebase("https://518projectsnowman.firebaseio.com/");
    var authData = ref.getAuth();

    //get the data for our pending service requests
    var service_requests = ref.child("service_requests");
    $scope.service_request_data = $firebaseArray(service_requests.orderByChild("user").equalTo(authData.uid));

    $scope.submitServiceRequest = function () {

        //save the new service request to firebase
        console.log($scope.service_request_data);
        service_requests.push({
            user: authData.uid,
            name: $scope.service_name,
            endTime: $scope.end_time,
            startTime: $scope.start_time,
            startDate: $scope.start_date,
            endDate: $scope.end_date,
            provider: "n/a",
            completed: false
        });
        $scope.service_name = "";
        $scope.start_time = "";
        $scope.end_time = "";
        $scope.start_date = "";
        $scope.end_date = "";

    }
});
