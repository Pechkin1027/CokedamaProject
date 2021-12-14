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
    'MYSQL_PORT':'3306',
    'MYSQL_DATABASE':'cokedama_products',
    'MYSQL_USERNAME':'testuser',
    'MYSQL_PASSWORD':'X;th7h04GN@q',
  }
};
