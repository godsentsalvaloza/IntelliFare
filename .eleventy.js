module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/styles");
  eleventyConfig.addPassthroughCopy("./source/scripts/out");

  return {
    dir: {
      input: "source",
      output: "public",
    },
  };
};
