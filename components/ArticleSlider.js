import ArticleSlide from "./ArticaleSlide";
import { storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from 'react';

const PopularArtices = ({ blok }) => {
  const [slides, setSlides] = useState(blok.articles);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="slider-container"
        {...storyblokEditable(blok)}
      >
        <div className={`relative h-screen md:max-h-[500px] max-h-[calc(100vh-120px)] overflow-hidden`}>
          {blok.articles.map((article, index) => {
            article.content.slug = article.slug
            return (
                <ArticleSlide currentSlide={currentSlide} index={index} article={article.content} key={article.uuid} />
            )
          })}
          {/* <!-- Slider controls --> */}
          <button type="button" onClick={()=>nextSlide()} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/30 dark:bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-white/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white/70 group-focus:outline-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button"  onClick={()=>handlePrev()}  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/30 dark:bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-white/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white/70 group-focus:outline-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default PopularArtices;