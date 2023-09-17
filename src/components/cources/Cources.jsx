// import pictures
import { Link } from 'react-router-dom'
import FoundationLogo from '../../images/foundation.webp'
const Cources = () => {
  return (
    <div className='container'>
    <div className="content">
        <h1 className="content__title"><span>Barcha</span> Kurslar</h1>
    </div>

    <div id="list-container" className="list-container">

            <div className="card__content ">
                <div className="card__img-box">
                    <Link to='/cource'><img className="card__img" src={FoundationLogo} /></Link>
                    <div className="new">New</div>
                </div>
                <h3 className="card__title">Foundation kurslari</h3>
                <hr />
                <div className="card__footer">
                    <div className="card__footer-left"><Link to='/cource'>Batafsil</Link></div>
                    <div className="card__footer-right">
                        <del>250.000</del>
                        <span>Bepul</span>
                    </div>
                </div>
            </div>
        
    </div>
    </div>
  )
}

export default Cources
