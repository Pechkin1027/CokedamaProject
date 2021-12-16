module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    "MYSQL_HOST":"localhost",
    "MYSQL_DATABASE":"products",
    "MYSQL_USERNAME":"cokedama_user1",
    "MYSQL_PASSWORD":"nospecialchars123",
  }
};
