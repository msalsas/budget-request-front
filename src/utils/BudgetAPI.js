import request from 'request';
import config from '../config';

export function createBudget(budget, callback) {
    request({
        method: 'POST',
        url: config.createUrl,
        body: JSON.stringify(budget),
    }, callback);
}

export function updateBudget(budgetId, budget, callback) {
    request({
        method: 'PUT',
        url: config.updateUrl.replace('{id}', budgetId),
        body: JSON.stringify(budget),
    }, callback);
}

export function suggestCategory(budgetId, callback) {
    request({
        method: 'GET',
        url: config.suggestCategory.replace('{id}', budgetId),
    }, callback);
}