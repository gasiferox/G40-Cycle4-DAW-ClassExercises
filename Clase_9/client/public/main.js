var ngApp = angular.module('AppClase9', [])

ngApp.controller('controlador', ($scope, $http) => {

    $scope.calcular = () => {

        /* var numero1 = $scope.formData.numero1

        var numero2 = $scope.formData.numero2

        $scope.resultado =numero1 * numero2 */

        $http
        .post('http://localhost:8000/multiplicacion', $scope.formdata).then(function successCallback(response) {
            $scope.resultado = response.data
            console.log(response)
        })
        
    }
})

