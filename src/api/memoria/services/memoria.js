'use strict';

/**
 * memoria service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::memoria.memoria');
