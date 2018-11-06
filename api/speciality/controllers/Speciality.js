'use strict';

/**
 * Speciality.js controller
 *
 * @description: A set of functions called "actions" for managing `Speciality`.
 */

module.exports = {

  /**
   * Retrieve speciality records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.speciality.search(ctx.query);
    } else {
      return strapi.services.speciality.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a speciality record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.speciality.fetch(ctx.params);
  },

  /**
   * Count speciality records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.speciality.count(ctx.query);
  },

  /**
   * Create a/an speciality record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.speciality.add(ctx.request.body);
  },

  /**
   * Update a/an speciality record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.speciality.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an speciality record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.speciality.remove(ctx.params);
  }
};
