import { storyblokEditable } from "@storyblok/react";
const PageHeader = ({ blok }) => {
  return (
    <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-28 relative">
            <h2 className="text-7xl font-medium" {...storyblokEditable(blok)}>{blok.page_title}</h2>            
        </div>
    </div>
  )
};
export default PageHeader;