module.exports = {
    client: {
      service: {
        name: 'peta',
        // URL to the GraphQL API
        url: 'http://localhost:3000/query',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
        'src/**/*.ts',
      ],
    },
  }