const getPath = () =>
  process.env.REPO_NAME ? `/${process.env.REPO_NAME}` : ``;

module.exports = {
  pageExtensions: ["js", "jsx"],
  assetPrefix: getPath() + "/",
  basePath: getPath(),
};
