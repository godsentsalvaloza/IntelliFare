module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/styles");
  eleventyConfig.addPassthroughCopy("./source/scripts/out");
  eleventyConfig.addPassthroughCopy("./source/resources/main");

  return {
    dir: {
      input: "source",
      output: "public",
    },
  };
};
