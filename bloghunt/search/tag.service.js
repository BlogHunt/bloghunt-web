export default class {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  query(params) {
    const a = this.$http.get('/api/tags.json');
    return a;
  }
}
