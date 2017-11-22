/**
 * SNS
 */
(function() {
  //'use strict';

  var app = angular.module('sns', []);

  app.value('appState', {
    messages: []
  });

  app.service('TimelineService', ['$http', 'appState', function($http, appState) {
    this.getMessages = function() {
      this.message = {
        "message": "aaa"
      };
      postDateTime: new Date();
      this.message = {
        "postDateTime": "aaa"
      };
      appState.messages.push(this.message);

    };

    this.updateMessage = function() {
      alert(1);
    };
    /*
            this.getMessages = function () {
                $http.get('/api/messages').then(function (response) {
                    appState.messages = response.data;
                    console.log('***** Messages received! *****');
                    console.log(appState.messages);
                }, function (response) {
                    console.log('***** Error! *****');
                    appState.messages = [];
                });
            };
            */

    /*
            this.postMessage = function (message) {
                $http.post('/api/messages', {
                    message: message,
                    postDateTime: new Date()
                }).then(function (response) {
                    console.log('***** Message posted! *****');
                }, function (response) {
                    console.log('***** Error! *****');
                });
            };
    */
  }]);

  app.controller('TimelineController', ['appState', 'TimelineService', function(appState, timelineService) {

    this.message = '';
    this.appState = appState;

    this.postMessage = function() {
      timelineService.updateMessage(this.message);
      timelineService.getMessages();
      this.message = '';
    };

    // 初期データの取得
    timelineService.getMessages();

  }]);

})();
