import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/blog/navigation-strategy-image.jpg", 
      title: "Navigating into the Future: Strategies for Digital Transform...",
      description:
        "Explore key strategies that businesses can adopt to effectively navigate digital transformation.",
      link: "/blog/tech-advisory-blog-series-1/navigating-into-the-future-strategies-for-digital-transformation-1",
    },
    {
      id: 2,
      image: "/blog/maximize-roi-image.jpg", 
      title: "Maximizing ROI: Leveraging Artificial Intelligence for Growth",
      description:
        "Learn how to make the most of your digital investments with insights on resource allocation",
      link: "/blog/tech-advisory-blog-series-1/maximizing-roi-leveraging-artificial-intelligence-for-growth-2",
    },
    {
      id: 3,
      image: "/blog/customer-centric-image.jpg", 
      title: "Customer Centric Design: Building Products People Love",
      description:
        "Discover why focusing on customer needs is crucial for successful product development",
      link: "/blog/tech-advisory-blog-series-1/customer-centric-design-building-products-people-love-3",
    },
  ];

  return (
    <section className="blog">
      <div className="blog__container">
        <h2 className="blog__heading">Industry Expertise</h2>
        <p className="blog__subheading">
          Explore insights from our experts and engage with the broader
          discussions we're leading.
        </p>

        <div className="blog__grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog__card">
              <div className="blog__image-wrapper">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog__image"
                />
              </div>
              <div className="blog__content">
                <h3 className="blog__title">{blog.title}</h3>
                <p className="blog__description">{blog.description}</p>
                <a href={blog.link} className="blog__link">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
