import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react"
import Head from 'next/head'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function Home({story}) {
  story = useStoryblokState(story, {
    resolveRelations: ["popular-articles.articles"],
  });

  return (
    <main className='grow'>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </main>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    resolve_links: "url",
    resolve_relations: ["popular-articles.articles", "featured-articles-slider.articles"],
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get('cdn/stories/config', sbParams);

 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

// export async function getServerSideProps(context) {
//   // get the query object
//   const insideStoryblok = context.query._storyblok;
 
//   let slug = "home";
 
//   let sbParams = {
//     version: "published", // or 'draft'
//   };
 
//   if (insideStoryblok) {
//     sbParams.version = "draft";
//   }
 
//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//     },
//   };
// }