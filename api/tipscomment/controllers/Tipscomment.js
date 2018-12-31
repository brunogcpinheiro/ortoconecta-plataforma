'use strict';

/**
 * Tipscomment.js controller
 *
 * @description: A set of functions called "actions" for managing `Tipscomment`.
 */

module.exports = {

  /**
   * Retrieve tipscomment records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tipscomment.search(ctx.query);
    } else {
      return strapi.services.tipscomment.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tipscomment record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tipscomment.fetch(ctx.params);
  },

  /**
   * Count tipscomment records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tipscomment.count(ctx.query);
  },

  /**
   * Create a/an tipscomment record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tipscomment.add(ctx.request.body);
  },

  /**
   * Update a/an tipscomment record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tipscomment.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tipscomment record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tipscomment.remove(ctx.params);
  }
};
