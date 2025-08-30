import { IoIosInfinite } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import './styles/preFeature.css'

const PremiumFeatures = () => {
    return (
        <div className="pre-features-section">
            <h2 className="pre-feature-header">Premium Features</h2>
            <p className="pre-feature-desc">Powerful tools to accelerate your job search and hiring process</p>
            <div className="pre-features-card">
                <div className="pre-card">
                    <IoIosInfinite style={{
                        backgroundColor:'#ffedd5',
                        fontSize:'5rem',padding:'1rem',
                        borderRadius:'8px',
                        color:'#f58020ff'}}/>
                    <h3 className="pre-card-header">Unlimited Job Postings</h3>
                    <p className="pre-card-desc">Post unlimited jobs and reach millions of qualified candidates</p>
                </div>
                <div className="pre-card">
                    <IoIosInfinite style={{
                        backgroundColor:'#ffedd5',
                        fontSize:'5rem',padding:'1rem',
                        borderRadius:'8px',
                        color:'#f58020ff'}}/>
                    <h3 className="pre-card-header">Unlimited Job Postings</h3>
                    <p className="pre-card-desc">Post unlimited jobs and reach millions of qualified candidates</p>
                </div>
                                <div className="pre-card">
                    <IoIosInfinite style={{
                        backgroundColor:'#ffedd5',
                        fontSize:'5rem',padding:'1rem',
                        borderRadius:'8px',
                        color:'#f58020ff'}}/>
                    <h3 className="pre-card-header">Unlimited Job Postings</h3>
                    <p className="pre-card-desc">Post unlimited jobs and reach millions of qualified candidates</p>
                </div>
                                <div className="pre-card">
                    <IoIosInfinite style={{
                        backgroundColor:'#ffedd5',
                        fontSize:'5rem',padding:'1rem',
                        borderRadius:'8px',
                        color:'#f58020ff'}}/>
                    <h3 className="pre-card-header">Unlimited Job Postings</h3>
                    <p className="pre-card-desc">Post unlimited jobs and reach millions of qualified candidates</p>
                </div>
            </div>
            <button className="pre-features-btn">Explore Premium Features</button>
        </div>
    )
}

export default PremiumFeatures