import { Link } from "react-router-dom";
import './index.scss';

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br /></h1>
                <h1>I'm Travis White</h1>
                <h1>Web Developer</h1>
                <h2>Frontend Developer with Full Stack Aspirations</h2>
                <h2>Javascript | HTML | CSS | Node.js & more</h2>
                <Link to='/contact' className="flat-button">CONTACT  ME</Link>
            </div>
        </div>
    )
}

export default Home;