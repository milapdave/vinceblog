import { StoryblokComponent } from "@storyblok/react";
import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";
 
const ArticleTeaser = ({ article, currentSlide, index }) => {
return (
    <div className={`absolute left-0 right-0 h-full w-full transition-opacity ease-in duration-700 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <Image
            className="object-cover object-center w-full h-full"
            src={article.image.filename}
            alt={article.title}
            width={1920}
            height={1080}
        />
        <div className="absolute sm:bottom-10 bottom-4 left-0 w-full  text-white sm:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-slate-200 mb-4">{moment(article.date).format('Do MMMM YYYY')}</div>
                <h1 className="mx-auto mb-8 md:text-3xl text-2xl font-semibold leading-none tracking-tighter">
                    {article.title}
                </h1>
            </div>
        </div>
    </div>
)
};
export default ArticleTeaser;