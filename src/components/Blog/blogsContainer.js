import React from "react";
import Fade from "react-reveal/Fade";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BlogsContainer = ({ data }) => {
  const posts = data?.map(item => ({
    featuredimage: item.node.frontmatter.featuredimage,
    title: item.node.frontmatter.title,
    description: item.node.frontmatter.description,
    slug: item.node.fields.slug,
  }));

  return (
    <div className="max-w-7xl xxs:mx-4 sm:mx-auto mt-10 text-black">
      {posts.map((blog, i) => {
        const image = getImage(blog.featuredimage);
        return (
          <Fade key={i} duration={2200}>
            <div className="flex flex-row justify-between xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-5">
              {/* Bagian teks */}
              <div className="flex flex-col justify-center bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-xl lg:m-5 xxs:w-full xs:w-full sm:w-full lg:w-full shadow-md">
                <Link
                  to={blog.slug}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h1 className="text-black text-2xl font-semibold">
                    {blog.title}
                  </h1>
                </Link>
                <p className="text-lg mt-4 text-black opacity-70 xxs:text-sm sm:text-lg">
                  {blog.description}
                </p>
              </div>

              {/* Bagian gambar */}
              <div className="my-5 mr-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
                <div className="overflow-hidden rounded-xl xxs:w-full">
                  {blog.featuredimage && (
                    <Link
                      to={blog.slug}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <div className="max-h-80 w-auto h-full object-cover flex justify-center">
                        <GatsbyImage
                          image={image}
                          alt={blog.title}
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
        );
      })}
    </div>
  );
};

export default BlogsContainer;
