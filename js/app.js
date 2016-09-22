angular.module('app', ['jpkraemer.angularSignatureField'])

.controller("SignatureController", function ($scope) {
  $scope.signatureFunctions = {};

  $scope.clearSignature = function () {
    $scope.signatureFunctions.clear();
  }

  $scope.saveSignature = function () {
    $scope.signature = $scope.signatureFunctions.toDataURL();
  }
});

