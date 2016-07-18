export default class {
  constructor(searchService, tagService, $q) {
    'ngInject';
    this.searchService = searchService;
    this.tagService = tagService;

    this.MAX_STRING_LENGTH = 100;

    this.params = "";
    this.results = [];
    this.tags = [];

    this.getTags();
  };

  /**
   * Query the API for results matching the given query if provided.
   */
  search() {
    if (this.params) {
      this.searchService.query(this.params).then(
        resp => this.results = resp.data.results);
    }
  };

  /**
   * Fetch all the tags and store them.
   */
  getTags() {
     this.tagService.query().then(
       resp => this.tags = resp.data.results);
  };


  /** UI Methods **/

  /**
   * Given a string, return it's trimmed, and presentable form.
   */
  trimmedString(string) {
    if (string.length <= this.MAX_STRING_LENGTH) {
      return string;
    }
    var shortString = string.substr(0, this.MAX_STRING_LENGTH);
    return shortString.substr(0, string.lastIndexOf(' ')) + '...';
  };


  tagForURL(url) {
    const tag = this.tags.filter(
      tag => url.indexOf(tag.slug) > -1)[0];
    console.log(tag);
    return tag;
  };

}
