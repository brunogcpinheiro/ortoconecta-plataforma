'use strict';

/**
 * Professional.js controller
 *
 * @description: A set of functions called "actions" for managing `Professional`.
 */

module.exports = {

  /**
   * Retrieve professional records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.professional.search(ctx.query);
    } else {
      return strapi.services.professional.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a professional record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.professional.fetch(ctx.params);
  },

  /**
   * Count professional records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.professional.count(ctx.query);
  },

  /**
   * Create a/an professional record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.professional.add(ctx.request.body);
  },

  /**
   * Update a/an professional record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.professional.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an professional record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.professional.remove(ctx.params);
  }
};
