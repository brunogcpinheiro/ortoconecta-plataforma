'use strict';

/**
 * Tips.js controller
 *
 * @description: A set of functions called "actions" for managing `Tips`.
 */

module.exports = {

  /**
   * Retrieve tips records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tips.search(ctx.query);
    } else {
      return strapi.services.tips.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tips record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tips.fetch(ctx.params);
  },

  /**
   * Count tips records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tips.count(ctx.query);
  },

  /**
   * Create a/an tips record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tips.add(ctx.request.body);
  },

  /**
   * Update a/an tips record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tips.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tips record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tips.remove(ctx.params);
  }
};
