import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './styles/footer.css'



const FooterSec = () => {
    return (
        <div className="footer-sec">
            <div className="footer-one">
                <div className="foo-company-info">
                    <img className="foo-logo" src="https://static.readdy.ai/image/56a5d8212b13d1ce045b44e5c0818b7e/7fa7a51b8d714edcb471a319ad6e4ff5.png"/>
                    <p className="foo-comp-desc">
                        The leading job portal connecting talented professionals with top companies across the United States. Find your dream job or hire the perfect candidate today.
                    </p>
                    <div className="foo-comp-logo-card">
                        <div className="foo-comp-mini-logo">
                            <FaFacebookF/>
                        </div>
                        <div className="foo-comp-mini-logo">
                            <FaTwitter/>
                        </div>
                        <div className="foo-comp-mini-logo">
                            <FaLinkedinIn/>
                        </div>    
                        <div className="foo-comp-mini-logo">
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
                <div className="foo-job-seekers">
                    <p>Job Seekers</p>
                    <ul className="foo-job-ul">
                        <li>Browse Jobs</li>
                        <li>Browse Companies</li>
                        <li>My Dashboard</li>
                        <li>My Profile</li>
                        <li>Resume Builder</li>
                    </ul>
                </div>
                <div className="foo-job-seekers">
                    <p>For Employers</p>
                    <ul className="foo-job-ul">
                        <li>Post a Job</li>
                        <li>Browse Candidates</li>
                        <li>Pricing Plans</li>
                        <li>Employer Dashboard</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
            <hr/>
                <div className="foo-policy">
                    <p>© 2024 Jobs 'N' Profiles. All rights reserved.</p>
                    <div className="foo-policy-card">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Contact Us</p>
                    </div>
                </div>
        </div>
    )
}

export default FooterSec
