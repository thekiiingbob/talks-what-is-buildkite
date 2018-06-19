import React from "react";

const colors = {
  color1: "rgba(283, 1, 228, 0.5)",
  color2: "rgba(14, 134, 178, 0.5)",
  color3: " rgba(21, 124, 17, 0.5)",
  color4: "rgba(5, 8, 216, 0.5)",
  color5: "rgba(255, 231, 24, 0.5)"
};

export default ({ data, pathContext, transition }) => (
  <div
    id="contents"
    style={{
      background: `linear-gradient(${235 -
        Number.parseInt(data.markdownRemark.frontmatter.angle)}deg, ${
        colors.color1
      }, ${colors.color2} 30%, ${colors.color3}),
      linear-gradient(${Number.parseInt(data.markdownRemark.frontmatter.angle) +
        25}deg, ${colors.color5}, ${colors.color4} 60%, ${
        colors.color3
      }), url(${data.markdownRemark.frontmatter.image}) no-repeat center`,
      backgroundSize: "100%"
    }}
  >
    <div
      style={transition && transition.style}
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  </div>
);

export const pageQuery = graphql`
  query SlideByPath($absolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $absolutePath }) {
      html
      frontmatter {
        image
        angle
      }
    }
  }
`;
