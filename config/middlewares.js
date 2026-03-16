module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: (ctx) => {
        const allowed = [
          'https://chiletransporte.cl',
          'https://www.chiletransporte.cl',
          'http://localhost:5173',
          'http://localhost:3000'
        ];
        if (allowed.includes(ctx.request.header.origin)) {
          return ctx.request.header.origin;
        }
        return false;
      },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
