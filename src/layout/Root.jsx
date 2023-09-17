// import react router dom
import { NavLink, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <header>
            <div className="sidebar">
                <div className="shortcut-links">
                    <NavLink className="sidebar__link" to="/"><i className='bx bx-tachometer'></i><p>Bosh Sahifa</p></NavLink>
                    <NavLink className="sidebar__link" to="/cources"><i className='bx bx-book-open'></i><p>Kurslar</p></NavLink>
                    <NavLink className="sidebar__link" to="/watching"><i className='bx bx-folder-minus'></i><p>Kod Manbalar</p></NavLink>
                    <NavLink className="sidebar__link" to="/contact"><i className="fa-regular fa-address-book"></i><p>Kontakt</p></NavLink>
                    <NavLink className="sidebar__link" to="/faq"><i className="fa-regular fa-circle-question"></i><p>FAQ</p></NavLink>
                    <NavLink className="sidebar__link" to="/bootcamp"><i className="fa-solid fa-signal"></i><p>Bootcamp</p></NavLink>
                </div>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="page__footer">
            <div className="page__footer-left">
                <span>© 2023 Cources. Barcha huquqlar himoyalangan</span>
            </div>
            <div className="page__footer-right">
                <div className="social__links">
                    <a className="social__link" href="#"><i className='bx bxl-telegram'></i></a>
                    <a className="social__link" href="#"><i className='bx bxl-youtube'></i></a>
                    <a className="social__link" href="#"><i className='bx bxl-instagram'></i></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Root
