module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/styles");
  eleventyConfig.addPassthroughCopy("./source/scripts/out");
  eleventyConfig.addPassthroughCopy("./source/resources/main");
  eleventyConfig.addPassthroughCopy("./source/admin");

  return {
    dir: {
      input: "source",
      output: "public",
    },
  };
};
