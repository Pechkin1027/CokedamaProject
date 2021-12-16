module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    "MYSQL_HOST":"192.168.64.2",
    "MYSQL_DATABASE":"cokedama_products",
    "MYSQL_USERNAME":"cokedama_user1",
    "MYSQL_PASSWORD":"nospecialchars123",
  }
};
