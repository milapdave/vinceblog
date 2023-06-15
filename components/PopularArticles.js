import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";
 
const PopularArtices = ({ blok }) => {
  return (
    <>
    <div className="max-w-7xl mx-auto sm:py-[50px] py-6">
      <div
        className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-3"
        {...storyblokEditable(blok)}
      >
        {blok.articles.map((article) => {
          article.content.slug = article.slug
          return (
            <ArticleTeaser article={article.content} key={article.uuid} />
          )
        })}
      </div>
    </div>
    </>
  );
};
export default PopularArtices;