import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
const Config = ({blok}) => {
  return (
    <div className="relative bg-white border-b-2 border-gray-100" {...storyblokEditable(blok)}>
      
    </div>
  );
};
export default Config;