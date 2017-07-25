import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import searchService from './search/search.service';
import tagService from './search/tag.service';

import SearchController from './search/search.controller';

import searchLandingTemplate from './search/landing.jade';
import searchResultsTemplate from './search/results.jade';

import css from './site.css';

export default angular.module('bloghunt', [
    uiRouter,
    ngResource
  ])
  .service('searchService', searchService)
  .service('tagService', tagService)
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
