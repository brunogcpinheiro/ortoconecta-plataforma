'use strict';

/**
 * Actual.js controller
 *
 * @description: A set of functions called "actions" for managing `Actual`.
 */

module.exports = {

  /**
   * Retrieve actual records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.actual.search(ctx.query);
    } else {
      return strapi.services.actual.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a actual record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.actual.fetch(ctx.params);
  },

  /**
   * Count actual records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.actual.count(ctx.query);
  },

  /**
   * Create a/an actual record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.actual.add(ctx.request.body);
  },

  /**
   * Update a/an actual record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.actual.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an actual record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.actual.remove(ctx.params);
  }
};
