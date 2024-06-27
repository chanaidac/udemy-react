import Navbar from './components/Navbar.js';
import Categories from './components/Categories.js';
import Banner from './components/Banner.js';
import Recommended from './components/Recommended.js';
import Topic from './components/Topic.js';
import Popular from './components/Popular.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Banner></Banner>
            <Recommended></Recommended>
            <Topic></Topic>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    );
}
export default App;