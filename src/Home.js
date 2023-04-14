import React from "react"
import Web from "./images/image-web-3-desktop.jpg"
import WebMobile from "./images/image-web-3-mobile.jpg"

export default function Home() {
    return (
        <main>
            <div className="grid-container">
                <img src={Web} alt="web" className="img_web" id="grid-item1" />
                <img src={WebMobile} alt="web" className="img_web-mobile" id="grid-item1" />
                <div className="news" id="grid-item2">
                    <div className="news-text">
                        <h1 className="news-text_title">New</h1>
                        <div>
                            <h3 className="news-text_sectitle">Hydrogen VS Electric Cars</h3>
                            <p className="news-text_para">Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </div>
                        <hr className="line"/>
                        <div>
                            <h3 className="news-text_sectitle">The Downsides of AI Artistry</h3>
                            <p className="news-text_para">What are the possible adverse effects of on-demand AI image generation?</p>
                        </div>
                        <hr className="line"/>
                        <div>
                            <h3 className="news-text_sectitle">Is VC Funding Drying Up?</h3>
                            <p className="news-text_para">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                        </div>
                    </div>
                </div>
                <h1 id="grid-item3" className="news-title">The Bright Future of Web 3.0?</h1>
                <div id="grid-item4" className="news-para">
                    <p>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className="news-btn" href="#">READ MORE</button>
                </div>
            </div>
        </main>
    )
}
