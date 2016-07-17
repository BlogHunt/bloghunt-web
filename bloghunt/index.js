import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import searchService from './search/search.service';

import SearchController from './search/search.controller';

import searchLandingTemplate from './search/landing.jade';
import searchResultsTemplate from './search/results.jade';

export default angular.module('bloghunt', [
    uiRouter,
    ngResource
  ])
  .service('searchService', searchService)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('search', {
        url: '/',
        template: searchLandingTemplate,
        controller: SearchController,
        controllerAs: 'search'
      })
      .state('results', {
        url: '/results',
        template: searchResultsTemplate
      })
  })
