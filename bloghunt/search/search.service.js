export default class {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  query() {
    const a = this.$http.get('/api/feeds.json', {
      params: {
        search: 'brian'
      }
    });
    a.then(resp => console.log(resp));
    return a;
  }
}
