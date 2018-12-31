'use strict';

/**
 * Tip.js controller
 *
 * @description: A set of functions called "actions" for managing `Tip`.
 */

module.exports = {

  /**
   * Retrieve tip records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tip.search(ctx.query);
    } else {
      return strapi.services.tip.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tip record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tip.fetch(ctx.params);
  },

  /**
   * Count tip records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tip.count(ctx.query);
  },

  /**
   * Create a/an tip record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tip.add(ctx.request.body);
  },

  /**
   * Update a/an tip record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tip.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tip record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tip.remove(ctx.params);
  }
};
