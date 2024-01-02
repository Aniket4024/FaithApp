import style from "../CSS/ProductPage.css";
import HeroImage from "../Media/NityanandCharanDas.jpeg"

const ProductPage = ()=>{

    const PPHeroStyle={
        backgroundImage:`url(${HeroImage})`,
        
    }

    return <div id="ProductPage">
        
        {/* Hero */}
        
        <div 
            id="PP-Hero"
            style={{
                backgroundImage:`url(${HeroImage})`,
            }}
        >
            <div>
                <div id="PP-Hero-Content">
                    <p> NITYANANA CHARAN DAS</p>
                    <h1>Learn key life lessons from the Gita: mind control and conflict resolution</h1>
                </div>
            </div>
        </div>
        
        {/* Course Details */}
        <div id="PP-Course">
            <div>
                <div id="Query-bar">
                    <div>ABOUT</div>
                    <div>INSTRUCTOR</div>
                    <div>REVIEWS</div>
                </div>
                <div id="about-course">
                    <h1>About the course</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, architecto sint dignissimos nihil ullam sed perspiciatis nisi fugit et fuga maxime minima quaerat consequuntur doloribus hic mollitia atque explicabo odio, optio repellat quis commodi. Accusantium, perspiciatis! Pariatur doloribus facilis officia quod possimus consequuntur deleniti harum! Architecto, alias, amet perferendis laudantium ex earum quo soluta consequuntur, quas distinctio illum vero corrupti vitae. Dolor quibusdam eligendi aliquam officia quia soluta magni perferendis, itaque at eius impedit, nulla optio.</p>
                    <p>Dolor quibusdam eligendi aliquam officia quia soluta magni perferendis, itaque at eius impedit, nulla optio. Tempore unde maxime repellat accusantium quo. Similique reprehenderit vel laborum provident, praesentium accusamus animi beatae porro hic alias! Ducimus quaerat quis praesentium officiis aliquam.</p>
                    <p>Accusantium, perspiciatis! Pariatur doloribus facilis officia quod possimus consequuntur deleniti harum! Architecto, alias, amet perferendis laudantium ex earum quo soluta consequuntur, quas distinctio illum vero corrupti vitae. Dolor quibusdam eligendi aliquam officia quia soluta magni perferendis, itaque at eius impedit, nulla optio.</p>
                </div>
                <div id="course-expect">
                    <h1>What to expect from the course</h1>
                    <ul>
                        <li><span>Learn to manage your relationships</span></li>
                        <li><span>Better communication</span></li>
                        <li><span>Time Management</span></li>
                        <li><span>Forgiveness</span></li>
                    </ul>
                </div>
                <div id="key-topics">
                    <h1>Key topics covered</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero magni fuga quibusdam totam, molestias repudiandae quaerat cum veritatis cupiditate eum? Iure, iste? Quibusdam consequuntur excepturi magnam, quasi nostrum corporis accusantium et quis adipisci laborum soluta recusandae odit quaerat dicta alias assumenda sunt neque cupiditate expedita explicabo dolores commodi! Laboriosam nisi quasi ab culpa quam voluptatibus architecto ut mollitia eum tempore.</p>
                    <ul>
                        <li><p><span>10 written and audio sessions</span> guide you in decoding the language of numbers so that you can easily receive their signs and messages.</p></li>
                        <li><p><span>Intuitive exercises and homework</span> walk you through the energies and values of numbers and number sequences so you can become your own authority.</p></li>
                        <li><p><span>A handy reference </span> to numerical meanings so you can uncover your soul's gifts, challenges, lessons, and purpose - and receive spiritual guidance along your path.</p></li>
                        <li><p><span>Expert techniques </span> for manifestation offer simple ways to use numbers to co-create with the universe.</p></li>
                    </ul>
                </div>
            </div>
            <div>
                <p>Course Fees</p>
                <h1>₹5,000</h1>
                <h4>What's Included:</h4>
                <ul>
                    <li><span>5 on-demand video</span> </li>
                    <li><span>2 Livestream sessions</span> </li>
                    <li><span>Live FAQ Sessions with Nityanand Chran Das</span> </li>
                    <li><span>An Active Whatsapp community</span> </li>
                </ul>
                <button id="register-button">Register today</button>
            </div>
        </div>

    </div>

}

export default ProductPage;