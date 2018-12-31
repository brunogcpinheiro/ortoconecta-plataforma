'use strict';

/**
 * Subscriber.js controller
 *
 * @description: A set of functions called "actions" for managing `Subscriber`.
 */

module.exports = {

  /**
   * Retrieve subscriber records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.subscriber.search(ctx.query);
    } else {
      return strapi.services.subscriber.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a subscriber record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.subscriber.fetch(ctx.params);
  },

  /**
   * Count subscriber records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.subscriber.count(ctx.query);
  },

  /**
   * Create a/an subscriber record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.subscriber.add(ctx.request.body);
  },

  /**
   * Update a/an subscriber record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.subscriber.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an subscriber record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.subscriber.remove(ctx.params);
  }
};
