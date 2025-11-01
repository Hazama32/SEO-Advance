import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Fade from "react-reveal/Fade";

const BlogHeader = ({ post }) => {
  const image = getImage(post.node.frontmatter.featuredimage);

  return (
    <div className="max-w-7xl xxs:mx-4 sm:mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-between xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-5">
          {/* Bagian Teks */}
          <div className="max-h-80 w-11/12 flex flex-col justify-center bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-xl lg:m-5 xxs:w-full xs:w-full sm:w-full lg:w-full shadow-md">
            <Link to={post.node.fields.slug} style={{ textDecoration: "none" }}>
              <h1 className="text-black text-2xl font-semibold">
                {post.node.frontmatter.title}
              </h1>
            </Link>
            <p className="text-lg mt-4 text-black opacity-70 xxs:text-sm sm:text-lg">
              {post.node.frontmatter.description}
            </p>
          </div>

          {/* Bagian Gambar */}
          <div className="my-5 mr-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <div className="overflow-hidden rounded-xl xxs:w-full">
              {post.node.frontmatter.featuredimage && (
                <Link
                  to={post.node.fields.slug}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="max-h-80 w-auto h-full object-cover flex justify-center">
                    <GatsbyImage
                      image={image}
                      alt={post.node.frontmatter.title}
                      placeholder="none"
                      backgroundColor="none"
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                      quality={100}
                      className="img"
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default BlogHeader;
