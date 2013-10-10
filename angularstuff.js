function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var temp = new obj.constructor(); 
    for(var key in obj)
        temp[key] = clone(obj[key]);

    return temp;
}

angular.module('xapidemoApp', ['ui.bootstrap'])

.factory('ADLService', function () {
	var verbs = [];
	(function (x) {
		var cpy = clone(x);
		for (vidx in cpy) {
			verbs.push(cpy[vidx]);
		}})(ADL.verbs);
	var wapi = [
		{
			"func":"sendStatement(statement, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#send-statement"
		},
		{
			"func":"sendStatements(statementArray, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#send-statements"
		},
		{
			"func":"getStatements(searcharams, more, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#get-statements"
		},
		{
			"func":"getActivities(activityId, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#get-activity"
		},
		{
			"func":"sendState(activityId, agent, stateId, registration, stateValue, matchHash, noneMatch, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#activity-state"
		},
		{
			"func":"getState(activityId, agent, stateId, registration, since, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#activity-state"
		},
		{
			"func":"sendActivityProfile(activityId, profileId, profileValue, matchHash, noneMatch, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#activity-state"
		},
		{
			"func":"getActivityProfile(activityId, profileId, since, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#activity-state"
		},
		{
			"func":"getAgents(agent, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#agents"
		},
		{
			"func":"sendAgentProfile(agent, profileId, profileValue, matchHash, noneMatch, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#agent-profile"
		},
		{
			"func":"getAgentProfile(agent, profileId, since, callback)",
			"readme":"https://github.com/adlnet/xAPIWrapper#agent-profile"
		}	
	];

	return {
		verbs:verbs,
		wrapperapi:wapi
	};
})

.controller('ADLCtrl', function ($scope, ADLService) {
	$scope.verbs = {};
	$scope.verbs = ADLService.verbs;
	$scope.wrapperapi = ADLService.wrapperapi;
})
