import Image1 from "./images/image-retro-pcs.jpg"
import Image2 from "./images/image-top-laptops.jpg"
import Image3 from "./images/image-gaming-growth.jpg"

export default function Popular() {
    return (
        <div className="popular-section">
            <div className="first-pop">
                <img src={Image1} className="img-pop" />
                <div>
                    <h1 className="number-pop">01</h1>
                    <h3 className="title-pop">Reviving Retro PCs</h3>
                    <p className="section-pop">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="second-pop">
                <img src={Image2} className="img-pop" />
                <div>
                    <h1 className="number-pop">02</h1>
                    <h3 className="title-pop">Top 10 Laptops of 2022</h3>
                    <p className="section-pop">Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div>
                <img src={Image3} className="img-pop" />
                <div className="third-pop">
                    <h1 className="number-pop">03</h1>
                    <h3 className="title-pop">The Growth of Gaming</h3>
                    <p className="section-pop">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}