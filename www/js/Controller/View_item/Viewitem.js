elephant.controller('ViewController', function($scope, $stateParams, $location, $localStorage, MessageService, $ionicAnalytics, UIfactory, elephantData_URL) {
  $scope.item_name = $stateParams.itemName;
  $scope.item_description = $stateParams.itemDesc;
  $scope.item_date = $stateParams.itemDate;
  $scope.item_img = 'http://service.myelephant.xyz/images/'+$stateParams.itemImg;
  $scope.status = $stateParams.itemStatus;
  $scope.item_ownername = $stateParams.item_owneremail;
  $scope.item_owneremail = $stateParams.item_ownername;
  var itemId = $stateParams.itemId;

  $scope.$storage = $localStorage.$default({
    user_email: null,
    user_username: null,
  })

  $scope.approveItem = function() {
    UIfactory.showSpinner();
    var dataString = {
      itemId: itemId,
      itemname: $scope.item_name,
      username: $scope.item_ownername,
      useremail: $scope.item_owneremail,
      code: $localStorage.user_activation
    }
    var approveRequest = new Submitform(elephantData_URL.APPROVE_ADMIN_ITEM_TYPE, elephantData_URL.APPROVE_ADMIN_ITEM_URL, dataString, false)
    approveRequest.ajaxSubmit(this)
  }

  $scope.declineItem = function() {
    UIfactory.showSpinner();
    var dataString = {
      itemId: itemId,
      itemname: $scope.item_name,
      username: $stateParams.item_owneremail,
      useremail: $stateParams.item_ownername,
      code: $localStorage.user_activation
    }
    var approveRequest = new Submitform(elephantData_URL.DECLINE_ADMIN_ITEM_TYPE, elephantData_URL.DECLINE_ADMIN_ITEM_URL, dataString, false)
    approveRequest.ajaxSubmit(this)
  }

  $scope.onSuccess = function(response) {
    UIfactory.hideSpinner();
    if(response.status == 1) {
      UIfactory.showAlert('Success');
    }
    else{
      UIfactory.showAlert('Error')
    }
  }
  });