import "../CSS/AboutInstructor.css";
import facebookIMG from "../Media/facebook.png"
import twitterIMG from "../Media/twitter.png"
import youtubeIMG from "../Media/youtube.png"
import instagramIMG from "../Media/instagram.png"

const AboutInstructor = ({data})=>{

    const {name,about,littleInfo,extraInfo,socialMedia,photo}=data;

    return <div id="AboutInstructor">
        <h1>About the Instructor</h1>
        <div id="aboutSection">
            <div>
                <img src={photo?photo:"https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"} alt="" />
                <h2>{name}</h2>
                <hr />
                <p>{about}</p>
                <p>{littleInfo}</p>
            </div>
            <div>
                <p>{extraInfo}</p>
            </div>
        </div>
        <div id="socialMedia">
            <div>
                <a href="" target="blank">
                    <img src={facebookIMG} alt="" />
                    Facebook
                </a>
            </div>
            <div>
                <a href="/" target="blank">
                    <img src={twitterIMG} alt=""/>
                    Twitter
                </a>
            </div>
            <div>
                <a href="/" target="blank">
                    <img src={youtubeIMG} alt="" />
                    Youtube
                </a>
            </div>
            <div>
                <a href="/" target="blank">
                    <img src={instagramIMG} alt="" />
                    Instagram
                </a>
            </div>
        </div>
    </div>

}

export default AboutInstructor;