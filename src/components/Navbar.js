let Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for" />
            </div>
            <div className="navbar__s3">
                <p>Course</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-sharp fa-solid fa-bell"></i>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="navbar__s4">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}
export default Navbar;