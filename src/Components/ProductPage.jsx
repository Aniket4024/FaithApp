import { useEffect, useState } from "react";
import "../CSS/ProductPage.css";
import AboutInstructor from "./AboutInstructor";
import Carousel from "./Carousel";
import axios from "axios";
import { MdChatBubbleOutline, MdOutlineOndemandVideo } from "react-icons/md";



const ProductPage = ()=>{

    const [heroData,setHeroData] = useState([]);
    const [CourseData,setCourseData] = useState([]);
    const [courseContent,setCourseContent] = useState([]);
    const [courseExpect,setCourseExpect] = useState([]);
    const [courseKeyPointsList,setCourseKeypointsList] = useState([]);
    const [courseIncludes,setCourseIncludes] = useState([]);
    const [instructorData,setInstructorData] = useState([]);
    const [reviewsData,setReviwesData] = useState([]);


    const HeroDataFeatch = ()=>{
        axios.get("http://localhost:3001/hero")
        .then(res=>{
            setHeroData(res.data);
        })
        
    };
    const CourseDataFetch = ()=>{
        axios.get("http://localhost:3001/aboutCourse")
        .then(res=>{
            setCourseData(res.data);
            setCourseContent(res.data.content);
            setCourseExpect(res.data.expection);
            setCourseKeypointsList(res.data.keypointList);
            setCourseIncludes(res.data.includes);
        })
        
    };
    const InstructorDataFetch = ()=>{
        axios.get("http://localhost:3001/instructor")
        .then((res)=>{
            setInstructorData(res.data);
        })
    }

    const ReviewsDataFetch = ()=>{
        axios.get("http://localhost:3001/testimonial")
        .then((res)=>{
            setReviwesData(res.data);
        })
    }



    useEffect(() => {
        
        HeroDataFeatch();
        CourseDataFetch();
        InstructorDataFetch();
        ReviewsDataFetch();

    },[]);

    return <div id="ProductPage">
        
        {/* Hero */}
        
        <div 
            id="PP-Hero"
            style={{
                backgroundImage:`url(${heroData?.backgroundImage})`,
            }}
        >
            <div>
                <div id="PP-Hero-Content">
                    <p>{heroData?.instructorName}</p>
                    <h1>{heroData?.courseTitle}</h1>
                </div>
            </div>
        </div>
        
        {/* Course Details */}
        <div id="PP-Course">
            <div>
                <div id="Query-bar">
                    <div><a href="#about-course">ABOUT</a></div>
                    <div><a href="#AboutInstructor">INSTRUCTOR</a></div>
                    <div><a href="#carousel">REVIEWS</a></div>
                </div>
                <div id="about-course">
                    <h1>About the course</h1>
                    {
                        courseContent.map((e,i)=><p key={i}>{e}</p>)
                    }
                </div>
                <div id="course-expect">
                    <h1>What to expect from the course</h1>
                    <ul>
                        {
                            courseExpect.map((e,i)=><li key={i}><span>{e}</span></li>)
                        }
                    </ul>
                </div>
                <div id="key-topics">
                    <h1>Key topics covered</h1>
                    <p>{CourseData.keypointContent}</p>
                    <ul>
                        {
                            courseKeyPointsList.map((e,i)=><li key={i}><p><span>{e?.highlight}</span> {e?.content}</p></li>)
                        }
                        
                        
                    </ul>
                </div>
            </div>
            <div>
                <p>Course Fees</p>
                <h1>{CourseData?.currency} {CourseData?.fees}</h1>
                <h4>What's Included:</h4>
                <ul>
                    {
                        courseIncludes?.map((e,i)=><li key={i} >
                            {
                                i===0 || i===1? <MdOutlineOndemandVideo style={{marginTop:"4px"}}/> : <MdChatBubbleOutline style={{marginTop:"4px"}}/>

                            }
                            <span>{e}</span> 
                        </li>)
                    }
                    
                </ul>
                <a href={CourseData?.registrationLink} target="black"><button id="register-button">Register today</button></a>
            </div>
        </div>
        <AboutInstructor data={instructorData} />
        <Carousel data={reviewsData}/>

    </div>

}

export default ProductPage;