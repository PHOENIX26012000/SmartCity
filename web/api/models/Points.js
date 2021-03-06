/**
 * Points.js
 *
 * @description :: Model for interest points. It reads from an aggregated view.
 */

module.exports = {
  tableName: 'v_interest_points_agregated',
  meta: {
    schemaName: 'ip'
  },
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      columnName: 'id'
    },
    name: {
      type: 'string',
      columnName: 'name'
    },
    category: {
      type: 'string',
      columnName: 'type'
    },
    latitude: {
      type: 'string',
      columnName: 'coordinates_lat'
    },
    longitude: {
      type: 'string',
      columnName: 'coordinates_long'
    },
    address: {
      type: 'string',
      columnName: 'address'
    },
    email: {
      type: 'string',
      columnName: 'email'
    },
    phone: {
      type: 'string',
      columnName: 'telephone'
    },
    web: {
      type: 'string',
      columnName: 'website'
    },
    facebook: {
      type: 'string',
      columnName: 'facebook'
    },
    schedule: {
      type: 'string',
      columnName: 'open_hours'
    },
    image: {
      type: 'string',
      columnName: 'image_url'
    },
    rating: {
      type: 'float',
      columnName: 'average_rating'
    },
    create_date: {
      type: 'date',
      columnName: 'source_create_date'
    },
    update_date: {
      type: 'date',
      columnName: 'last_update_date'
    },
    commune: {
      type: 'string',
      columnName: 'commune'
    }
  }
};
