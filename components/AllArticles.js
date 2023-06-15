import ArticleTeaser from "./ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";

const AllArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // Number of articles to display per page

  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "draft", // or 'published'
        starts_with: 'blog/',
        is_startpage: false
      });

      setArticles((prev) => data.stories.map((article) => {
        article.content.slug = article.slug;
        return article;
      }));
    };

    getArticles();
  }, []);

  // Calculate the index range of articles to display based on the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Function to handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="py-6">
        <h2 className="text-3xl">{blok.title}</h2>
      </div>
      <div
        className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3"
        {...storyblokEditable(blok)}
      >
        {currentArticles.map((article) => (
          <ArticleTeaser article={article.content} key={article.uuid} />
        ))}
      </div>
      <div className="flex justify-center mt-6 mb-20">
        {/* Pagination component */}
        {articles.length > articlesPerPage && (
          <div className="flex">
            {Array.from(Array(Math.ceil(articles.length / articlesPerPage)).keys()).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber + 1)}
                className={`px-3 py-1 rounded-full mx-1 ${
                  currentPage === pageNumber + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArticles;
