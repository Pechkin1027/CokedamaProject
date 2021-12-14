module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    'MYSQL_HOST':'127.0.0.1',
    'MYSQL_DATABASE':'products',
    'MYSQL_USERNAME':'root',
    'MYSQL_PASSWORD':'',
  }
};
