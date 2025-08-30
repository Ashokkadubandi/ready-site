import { useEffect, useState } from "react";
import { timeAgo } from "../utils/dateFormat";
import { FaLocationDot } from "react-icons/fa6";
import { GiSuitcase } from "react-icons/gi";
import { LuCircleDollarSign } from "react-icons/lu";
import { FcLike } from "react-icons/fc";
import './styles/feature.css'

const FeaturedJob = () => {
    const [featuredJonArr,setFeaturedJob] = useState([])
    const getFeaturedApi = async () => {
        const opt = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({url:'https://solr.jobsnprofiles.com/solr/jnp_jobs_v6/select?q=(*:*)&rows=10&start=0&fq=status:(1)&fq=industry_type:(\"IT\")&sort=modified%20desc&wt=json'})
        }
        const res = await fetch('https://api.jobsnprofiles.com/solr/solr-home-page-jobs',opt)
        const data = await res.json()
        const {response} = data.data
        const {docs} = response
        setFeaturedJob(docs)
    }

    useEffect(() => {
        getFeaturedApi()
    })


    return (
        <div className="featured-section">
            <h2 className="featured-section-header">Featured Jobs</h2>
            <p className="featured-section-desc">Discover the latest opportunities from top companies</p>
            <ul className="featured-job-section">
                {featuredJonArr.length && 
                    featuredJonArr.map(each => {
                        return (
                            <div key={each.id} className="featured-job-card">
                                <img alt="NO" src={each.company_logo} className="featured-card-logo"/>
                                <div className="text-content">
                                    <h3 className="featured-job-title">{each.title}</h3>
                                    {/* <span>{timeAgo(each.created)}</span> */}
                                    <p className="featured-job-company">{each.company_name}</p>
                                    <div className="featured-job-card-info">
                                        <>
                                            <FaLocationDot fontSize={'15px'}/>
                                            <span className="featured-job-card-info-span">{each.city_name}</span>
                                            ,<span className="featured-job-card-info-span">{each.short_region}</span>
                                        </>
                                        <>
                                            <GiSuitcase fontSize={'15px'}/>
                                            <span className="featured-job-card-info-span">Fulltime</span>
                                        </>
                                        <>
                                            <LuCircleDollarSign fontSize={'15px'}/>
                                            <span className="featured-job-card-info-span">$120k-$160k</span>
                                        </>
                                    </div>
                                </div>
                                <div className="posted-like-card">
                                    <span className="job-post-time">{timeAgo(each.created)}</span>
                                    <FcLike/>
                                </div>
                            </div> 
                        )
                    })}
                
            </ul>
            <button className="featured-view-all">View all jobs</button>
        </div>
    )
}


export default FeaturedJob