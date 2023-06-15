import moment from "moment";
import Link from "next/link";
import { render } from 'storyblok-rich-text-react-renderer';
 
const ArticleTeaser = ({ article }) => {
return (
    <div className="border overflow-hidden rounded-md shadow-sm">
        <Link href={`/blog/${article.slug}`}>
            <img
                className="object-cover object-center w-full mb-2 lg:h-64 md:h-64 "
                src={article.image.filename}
                alt="blog"
            />
        </Link>
        <div className="p-4">
            <div className="mb-4 text-xs">{moment(article.date).format('Do MMMM YYYY')}</div>
            <Link href={`/blog/${article.slug}`} className="block mb-4 text-lg font-semibold leading-relaxed tracking-tighter">
                {article.title}
            </Link>
            <div className="mx-auto text-sm leading-relaxed line-clamp-2">
                {render(article.teaser)}
            </div>
        </div>
    </div>
)
};
export default ArticleTeaser;