import angular from 'angular';
import uiRouter from 'angular-ui-router';

import searchLandingTemplate from './search/landing.jade';
import searchResultsTemplate from './search/results.jade';

export default angular.module('bloghunt', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('search', {
        url: '/',
        template: searchLandingTemplate
      })
      .state('results', {
        url: '/results',
        template: searchResultsTemplate
      })
  })
