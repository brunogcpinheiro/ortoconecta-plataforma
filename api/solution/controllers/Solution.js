'use strict';

/**
 * Solution.js controller
 *
 * @description: A set of functions called "actions" for managing `Solution`.
 */

module.exports = {

  /**
   * Retrieve solution records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.solution.search(ctx.query);
    } else {
      return strapi.services.solution.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a solution record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.solution.fetch(ctx.params);
  },

  /**
   * Count solution records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.solution.count(ctx.query);
  },

  /**
   * Create a/an solution record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.solution.add(ctx.request.body);
  },

  /**
   * Update a/an solution record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.solution.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an solution record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.solution.remove(ctx.params);
  }
};
