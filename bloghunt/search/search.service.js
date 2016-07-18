export default class {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  query(params) {
    const a = this.$http.get('/api/feeds.json', {
      params: {
        search: params
      }
    });
    a.then(resp => console.log(resp));
    return a;
  }
}
