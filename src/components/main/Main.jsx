// import pictures
import { Link } from 'react-router-dom'
import FoundationLogo from '../../images/foundation.webp'
function Main() {
  return (
    <div>
        <div className="container">
            <div className="content">
                <div className="content__box">
                    <h1 className="content__title">MERN Stack <span>Bootcamp</span></h1>
                    <p className="parag__info">
                        Haqiqiy startup loyihalarda ishtrok etib ozingiz toliq biznes startup dasturingizni murakkab texnologiyalar yordamida yasashni istaysizmi?
                    </p>
                    <p className="parag__info">
                        <span>Admin jamoasi</span> sizga ajoyib taklif beradi. MERN Stack bootcamp kursimizda siz aynan haqiqiy biznes startup dasturingizni yozishingiz mumkin.
                    </p>
                    <p className="parag__info">
                        Startup loyihada qanday texnologiyalar va mavzularni ushbu havolaga otib korishingiz mumkin boladi.
                        <br />
                        <a href="#">MERN Mavzular</a>
                    </p>
                    <div className="content__close-icon">
                        <i className='bx bx-x-circle'></i>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="content__box">
                    <h1 className="content__title">MERN Stack <span>Bootcamp</span></h1>
                    <p className="parag__info">
                        Haqiqiy startup loyihalarda ishtrok etib ozingiz toliq biznes startup dasturingizni murakkab texnologiyalar yordamida yasashni istaysizmi?
                    </p>
                    <p className="parag__info">
                        <span>Admin jamoasi</span> sizga ajoyib taklif beradi. MERN Stack bootcamp kursimizda siz aynan haqiqiy biznes startup dasturingizni yozishingiz mumkin.
                    </p>
                    <p className="parag__info">
                        Startup loyihada qanday texnologiyalar va mavzularni ushbu havolaga otib korishingiz mumkin boladi.
                        <br />
                        <a href="#">MERN Mavzular</a>
                    </p>
                </div>
            </div>



        <h1 className="content__title"><span>Yangi</span> Kurslar</h1>

        <div className="list-container">
                
                <div className="card__content ">
                    <div className="card__img-box">
                        <Link to="/cource"><img className="card__img" src={FoundationLogo} /></Link>
                        <div className="new">New</div>
                    </div>
                    <h3 className="card__title">Foundation kurslari</h3>
                    <hr />
                    <div className="card__footer">
                        <div className="card__footer-left"><Link to="/cource">Batafsil</Link></div>
                        <div className="card__footer-right">
                            <del>250.000</del>
                            <span>Bepul</span>
                        </div>
                    </div>
                </div>
            
                <div className="card__content ">
                    <div className="card__img-box">
                        <Link to="/cource"><img className="card__img" src={FoundationLogo} /></Link>
                        <div className="new">New</div>
                    </div>
                    <h3 className="card__title">Foundation kurslari</h3>
                    <hr />
                    <div className="card__footer">
                        <div className="card__footer-left"><Link to="/cource">Batafsil</Link></div>
                        <div className="card__footer-right">
                            <del>250.000</del>
                            <span>Bepul</span>
                        </div>
                    </div>
                </div>
            
                <div className="card__content ">
                    <div className="card__img-box">
                        <Link to="/cource"><img className="card__img" src={FoundationLogo} /></Link>
                        <div className="new">New</div>
                    </div>
                    <h3 className="card__title">Foundation kurslari</h3>
                    <hr />
                    <div className="card__footer">
                        <div className="card__footer-left"><Link to="/cource">Batafsil</Link></div>
                        <div className="card__footer-right">
                            <del>250.000</del>
                            <span>Bepul</span>
                        </div>
                    </div>
                </div>
        
        </div>

    </div>
    </div>
  )
}

export default Main
