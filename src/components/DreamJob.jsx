import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import './styles/dreamJob.css'

const DreamJob = () => {
    return (
        <div className="dream-job-section">
            <div className="dream-job-layer"></div>
            <div className="dream-job-content">
            <h1 className="dream-job-header">Find Your Dream Job</h1>
            <p className="dream-job-desc">Connect with top companies and discover opportunities that match your skills and aspirations</p>
            <form className="dream-job-form">
            <div className="dream-job-card">
                <div className="dream-job-input-card">
                    <CiSearch fontSize={'25px'}/>
                    <input type="text"/>
                </div>
                <div className="dream-job-input-card">
                    <CiLocationOn fontSize={'25px'}/>
                    <input type="text"/>
                </div>
                <input value='Search jobs' className="dreamjob-sub" type="submit"/>
            </div>
                <p className="popular-search">Popular searches:
                <span>Software Engineer</span>
                <span>Data Scienist</span>
                <span>Product Manager</span>
                <span>Marketing</span>
                <span>Remote</span></p>
            </form>
            <div className="dreamjob-info">
                <div className="job-status-info">
                <BsSuitcaseLg/>
                <span>50,000+ Active Jobs</span>
                </div>
                <div className="job-status-info">
                    <FaRegBuilding/>
                    <span>10,000+ Companies</span>  
                </div>
                <div className="job-status-info">
                <RxAvatar/>
                <span>7M+ Job Seekers</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DreamJob