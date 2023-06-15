import Navigation from "./Navigation";
import Footer from "./Footer";
 
const Layout = ({ children, blok  }) => (
  <>
    <div className={`${blok.content.layout === 'constrained' ? 'max-w-7xl mx-auto px-6' : ''} flex flex-col min-h-screen px-6 sm:px-0`}>
      <Navigation  blok={blok.content}/>
        {children}
    </div>
    <Footer />
  </>
);
 
export default Layout;