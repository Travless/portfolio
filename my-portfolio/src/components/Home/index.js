import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['T', 'r', 'a', 'v', 'i', 's', ' ', 'W', 'h', 'i', 't', 'e'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15}/>
                </h1>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={jobArray}
                    idx={22} />
                </h1>
                <h2>Frontend Developer with Full Stack Aspirations</h2>
                <h2>Javascript | HTML | CSS | Node.js & more</h2>
                <Link to='/contact' className="flat-button">CONTACT  ME</Link>
            </div>
        </div>
    )
}

export default Home;