import '@/styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import HeaderMenu from '@/components/HeaderMenu';
import MenuLink from '@/components/MenuLink';
import Layout from '@/components/Layout';
import Config from '@/components/Config';
import PageHeader from '@/components/PageHeader';
import Article from '@/components/Article';
import AllArticles from '@/components/AllArticles';
import PopularArtices from '@/components/PopularArticles';
import ArticleSlider from '../components/ArticleSlider'
const components = {
  config: Config,
  'featured-articles-slider': ArticleSlider,
  "page_header": PageHeader,
  "header_menu": HeaderMenu,
  "menu_link": MenuLink,
  "Article": Article,
  "all-articles": AllArticles,
  "popular-articles": PopularArtices,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "wfkZ9ttCT8b2Z6YngicUCwtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us",
  },
})

export default function App({ Component, pageProps }) {
  return (
    <Layout blok={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  )
}
