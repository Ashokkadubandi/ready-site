import { FaCode } from "react-icons/fa";
import { RiHealthBookLine } from "react-icons/ri";
import { LuCircleDollarSign } from "react-icons/lu";
import { HiSpeakerphone } from "react-icons/hi";
import { MdColorLens } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";
import { LuBook } from "react-icons/lu";

import './styles/category.css'

const CategorySec = () => {
    return (
        <div className="category-sec">
            <h1 className="category-header">Browse by Category</h1>
            <p className="category-desc">Explore opportunities in your field</p>
            <ul className="categ-con">
                <li className="categ-card">
                    <div className="cate-logo-card">
                        <FaCode/>
                    </div>
                    <h2 className="categ-card-name">Technology</h2>
                    <p className="categ-card-jobs">15,234 jobs</p>
                </li>
                <li className="categ-card">
                    <div className="cate-logo-card">
                        <RiHealthBookLine/>
                    </div>
                    <h2 className="categ-card-name">Healthcare</h2>
                    <p className="categ-card-jobs">8567 jobs</p>
                </li>
                <li className="categ-card">
                    <div className="cate-logo-card">
                        <LuCircleDollarSign/>
                    </div>
                    <h2 className="categ-card-name">Finance</h2>
                    <p className="categ-card-jobs">6,890 jobs</p>
                </li>
                <li className="categ-card">
                    <div className="cate-logo-card">
                        <HiSpeakerphone/>
                    </div>
                    <h2 className="categ-card-name">Marketing</h2>
                    <p className="categ-card-jobs">4,321 jobs</p>
                </li>
                <li className="categ-card">
                    <div className="cate-logo-card">
                        <MdColorLens/>
                    </div>
                    <h2 className="categ-card-name">Design</h2>
                    <p className="categ-card-jobs">3,456 jobs</p>
                </li>
                <li className="categ-card">
                    <div className="cate-logo-card">
                        <BsGraphUp/>
                    </div>
                    <h2 className="categ-card-name">Sales</h2>
                    <p className="categ-card-jobs">7,890 jobs</p>
                </li>
                <li className="categ-card">
                    <div className="cate-logo-card">
                        <RiSettingsLine/>
                    </div>
                    <h2 className="categ-card-name">Engineering</h2>
                    <p className="categ-card-jobs">9,123 jobs</p>
                </li>
                <li className="categ-card">
                    <div className="cate-logo-card">
                        <LuBook/>
                    </div>
                    <h2 className="categ-card-name">Education</h2>
                    <p className="categ-card-jobs">2,345 jobs</p>
                </li>
            </ul>
        </div>
    )
}

export default CategorySec