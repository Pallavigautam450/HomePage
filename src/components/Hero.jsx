import flip from "../../public/flipkart (1).png"
import amazon from "../../public/amazon (1).png"
import shoe from "../../public/shoe_image.png"
const Hero = () => {
    return (<>
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
                    HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE
                    BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>
                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className="sec-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src={flip} alt="not found"></img>
                        <img src={amazon} alt="not found"></img>

                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src={shoe} alt="not found"></img>
            </div>


        </main>




    </>)
}


export default Hero;