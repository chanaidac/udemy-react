import bannerImg from '../assets/images/sale-image.jpg';
function Banner() {
    return (
        <div className="sale-image">
            <img src={bannerImg} alt="sale-image" />
            <div className="sale-image__offer">
                <h2>Udemy Flash Sale! 24 hours to dave.</h2>
                <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    );
}
export default Banner;