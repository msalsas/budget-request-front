import Constants from './Constants';

export default {
    createUrl: Constants.apiUrl + 'budget',
    updateUrl: Constants.apiUrl + 'budget/{id}',
    suggestCategory: Constants.apiUrl + 'budget/suggest-category/{id}',
};