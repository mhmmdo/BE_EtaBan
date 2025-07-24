const path = require('path');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/umkms',
    handler: handler.postUmkmHandler,
    options: {
      auth: 'etaban_jwt',
    },
  },
  {
    method: 'GET',
    path: '/umkms',
    handler: handler.getUmkmsHandler,
  },
  {
    method: 'GET',
    path: '/umkms/{id}',
    handler: handler.getUmkmByIdHandler,
  },
  {
    method: 'GET',
    path: '/profile',
    handler: handler.getUmkmByUserHandler,
    options: {
      auth: 'etaban_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/umkms/{id}',
    handler: handler.putUmkmByIdHandler,
    options: {
      auth: 'etaban_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/umkms/{id}',
    handler: handler.deleteUmkmByIdHandler,
    options: {
      auth: 'etaban_jwt',
    },
  },
  {
    method: 'POST',
    path: '/umkms/{id}/covers',
    handler: handler.postUmkmCoverHandler,
    options: {
      auth: 'etaban_jwt',
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 5242880,
      },
    },
  },
  {
    method: 'GET',
    path: '/umkms/{params*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'file'),
      },
    },
  },
  {
    method: 'GET',
    path: '/search',
    handler: handler.searchHandler,
  },
];

module.exports = routes;
