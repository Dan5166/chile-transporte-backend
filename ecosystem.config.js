module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "/home/danyael/apps/strapi-backend",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
