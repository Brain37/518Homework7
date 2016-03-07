var app = angular.module('homeContent', ["firebase"]);
app.controller('contentController', function ($scope, $firebaseArray) {
    var ref = new Firebase("https://518projectsnowman.firebaseio.com/");
    var authData = ref.getAuth();
    if (authData) {
        //if we still alive we are logged in
        $scope.userEmail = authData.password.email;

        //get the data for our pending service requests
        var service_requests = ref.child("service_requests");
        $scope.service_request_data = $firebaseArray(service_requests.orderByChild("user").equalTo(authData.uid));

        $scope.submit = function () {
            //save the new service request to firebase
            service_requests.push({
                user: authData.uid,
                name: $scope.service_name,
                provider: "n/a",
                completed: false
            });
            $scope.service_name = "";
        };

        $scope.logout = function () {
            ref.unauth();
            window.location.href = "index.html";
        };
    }
});
