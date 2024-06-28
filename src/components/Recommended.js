import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpg'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.jpg'
let Recommended = () => {
    return (
        <div className="recommended">
            <h1 className="recommended_title">Recommended for you</h1>
            <p>Pick the best fit</p>
            <div className="recommended__container">
                <div className="course-card">
                    <img src={c1} alt="c1" />
                    <h3>Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 INR <del>999 INR</del></p>
                </div>
                <div className="course-card">
                    <img src={c2} alt="c2" />
                    <h3>Basic to Advance Programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>499 INR <del>999 INR</del></p>
                </div>
                <div className="course-card">
                    <img src={c3} alt="c3" />
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col Steele</p>
                    <p>3.1 ⭐⭐⭐</p>
                    <p>499 INR <del>999 INR</del></p>
                </div>
                <div className="course-card">
                    <img src={c4} alt="c4" />
                    <h3>Master UI/UX Designing with Figma0</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 INR <del>999 INR</del></p>
                </div>
            </div>
        </div>
    );
}
export default Recommended;