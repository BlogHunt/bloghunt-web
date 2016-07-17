export default class {
  constructor(searchService) {
    'ngInject';
    searchService.query().then(resp => this.results = resp.data.results);
  }
}
