import { useEffect, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import './styles/companyhiring.css'

const CompanyHiring = () => {
    const [companyData,setCompanies] = useState([])

    const getCompanyHiring = async () => {
        const opt = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({limit:6, page:2})
        }
        const res = await fetch('https://apps.jobsnprofiles.com/company/companies',opt)
        const data = await res.json()
        const {companies} = data.data
        console.log(companies)
        setCompanies(companies)
    }

    useEffect(() => {
        getCompanyHiring()
    },[])

    return (
        <div className="compnay-hiring-section">
            <h1 className="hiring-comp-header">Top Companies Hiring </h1>
            <p className="hiring-comp-desc">Join thousands of professionals at leading companies</p>
            <ul className="hiring-companies-con">
                {companyData.length && 
                companyData.map(each => {
                    return (
                        <li key={each.company_id} className="hiring-comp-card">
                            <p className="hiring-comp-name">{each.company_name}</p>
                            <p>10 Openings</p>
                        </li>
                    )
                })
                }
            </ul>
            <div className="view-all-card">
                <span className="view-all">View all companies</span>
                <FaArrowRightLong/>
            </div>   
        </div>
    )
}

export default CompanyHiring