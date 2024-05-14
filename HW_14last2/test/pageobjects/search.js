const Base = require('./Base');

class Search {
    get searchButtonLink() {
        return $('button.DocSearch.DocSearch-Button');
    }

    get hitContainerLocatorLink() {
        return $('.DocSearch-Hit-Container');
    }
}

module.exports = new Search();