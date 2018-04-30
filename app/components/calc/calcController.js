(function () {
    app.controller("calcController", ["$scope", function ($scope) {
        var vm = {};

        // properties
        vm.propertyValue = 150000;
        vm.downPaymentPercentage = 20;
        vm.expectedRent = 1250;
        vm.monthlyTax = 100;
        vm.monthlyInsurance = 60;
        vm.montlyMaintenancePercentage = 8;
        vm.montlyManagementPercentage = 10;
        vm.montlyMortgage = 580;
        vm.monthlyHoA = 0;
        vm.capEx = 0;

        vm.downPayment = calcDownPaymentFromPercentage();
        vm.montlyMaintenance = calcMaintenanceFromPercentage();
        vm.monthlyManagement = calcManagementFromPercentage();

        vm.updateDownPaymentPercentage = updateDownPaymentPercentage;
        vm.updateMaintenanceFromPercentage = updateMaintenanceFromPercentage;
        vm.updateManagementFromPercentage = updateManagementFromPercentage;
        vm.getOperatingExpense = getOperatingExpense;
        vm.getOperatingExpensePercentage = getOperatingExpensePercentage;
        vm.getCashOnCash = getCashOnCash;
        vm.getMonthlyOperatingNet = getMonthlyOperatingNet;
        vm.getAnnualOperatingNet = getAnnualOperatingNet;
        vm.getAnnualMaintenance = getAnnualMaintenance;
        vm.getAnnualMaintenanceAsPercentageOfPropertyValue = getAnnualMaintenanceAsPercentageOfPropertyValue;
        vm.recalc = recalc;

        // methods
        vm.updateDownPaymentFromPercentage = updateDownPaymentFromPercentage;

        $scope.vm = vm;

        // view model methods
        function recalc() {
            updateDownPaymentFromPercentage();
            updateMaintenanceFromPercentage();
            updateManagementFromPercentage();
        }

        function updateDownPaymentFromPercentage() {
            vm.downPayment = calcDownPaymentFromPercentage();
        }

        function updateDownPaymentPercentage() {
            vm.downPaymentPercentage = calcDownPaymentPercentage();
            recalc();
        }

        function updateMaintenanceFromPercentage() {
            vm.montlyMaintenance = calcMaintenanceFromPercentage();
        }

        function updateManagementFromPercentage() {
            vm.monthlyManagement = calcManagementFromPercentage();
        }

        function getOperatingExpense() {
            return vm.montlyMortgage + vm.monthlyTax + vm.monthlyInsurance + vm.montlyMaintenance + vm.monthlyManagement + vm.monthlyHoA + vm.capEx;
        }

        function getOperatingExpensePercentage() {
            return (getOperatingExpense() / vm.expectedRent) * 100;
        }

        function getCashOnCash() {
            return 100 * ((vm.expectedRent - getOperatingExpense()) * 12) / vm.downPayment;
        }

        function getMonthlyOperatingNet() {
            return vm.expectedRent - vm.getOperatingExpense();
        }

        function getAnnualOperatingNet() {
            return getMonthlyOperatingNet() * 12;
        }

        function getAnnualMaintenance() {
            return vm.montlyMaintenance * 12;
        }

        function getAnnualMaintenanceAsPercentageOfPropertyValue() {
            return 100 * (getAnnualMaintenance() / vm.propertyValue);
        }

        // internal methods
        function calcDownPaymentFromPercentage() {
            return vm.propertyValue * (vm.downPaymentPercentage / 100);
        }

        function calcDownPaymentPercentage() {
            return (vm.downPayment / vm.propertyValue) * 100;
        }

        function calcMaintenanceFromPercentage() {
            return (vm.expectedRent * vm.montlyMaintenancePercentage) / 100;
        }

        function calcManagementFromPercentage() {
            return (vm.expectedRent * vm.montlyManagementPercentage) / 100;
        }
    }]);
})(app)