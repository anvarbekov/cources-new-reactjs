import FoundationLogo from "../images/foundation.webp";
import { Link, NavLink, Outlet } from "react-router-dom";

function CourceLayout() {
  return (
    <>
      <div className="container">
        <div id="cource__content" className="content">
          <div className="content__box cource__box">
            <div className="course__content">
              <h1 className="cource__title">Foundation darslari toliq kurs</h1>
              <p className="cource__subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat animi perferendis, maxime odit soluta similique quia
                temporibus voluptate quae nobis debitis aliquam dolorum velit ex
                unde expedita magni? Repudiandae assumenda, dolorum iusto
                officiis sapiente sunt architecto tempora dolorem sequi tenetur
                repellendus ratione voluptatibus itaque eum autem quae
                obcaecati. Eveniet, optio.
              </p>
              <div className="cource__info-box">
                <div className="stars__box">
                  <i className="bx bx-alarm"></i>
                  <span>Oxirgi yangilanish 11 Fevral, 2023</span>
                </div>
              </div>

              <div className="cource__card">
                <div className="card__img-box">
                  <Link to="/watching">
                    <img className="card__img" src={FoundationLogo} />
                  </Link>
                  <div className="new">New</div>
                </div>
                <div className="card__footer remove__border">
                  <div className="card__footer-left">
                    <span className="price">Bepul</span>
                  </div>
                  <div className="card__footer-right">
                    <del>250.000 Som</del>
                  </div>
                </div>
                <div className="card__body">
                  <Link
                    to="/watching"
                    className="watching__cource"
                    id="watching__cource">
                    Kursni Korish
                  </Link>
                </div>

                <div className="card__footer">
                  <div className="card__footer-left">
                    <span className="price">
                      <i className="fa-solid fa-person-chalkboard"></i> Darslar
                    </span>
                  </div>
                  <div className="card__footer-right">
                    <span>35 ta</span>
                  </div>
                </div>

                <div className="card__footer">
                  <div className="card__footer-left">
                    <span className="price">
                      <i className="bx bx-alarm"></i> Umumiy soat
                    </span>
                  </div>
                  <div className="card__footer-right">
                    <span>15 Soat</span>
                  </div>
                </div>

                <div className="card__footer">
                  <div className="card__footer-left">
                    <span className="price">
                      <i className="fa-solid fa-signal"></i> Darajasi
                    </span>
                  </div>
                  <div className="card__footer-right">
                    <span>Boshlangich</span>
                  </div>
                </div>

                <div className="card__footer">
                  <div className="card__footer-left">
                    <span className="price">
                      <i className="fa-solid fa-language"></i> Til
                    </span>
                  </div>
                  <div className="card__footer-right">
                    <span>Ozbek</span>
                  </div>
                </div>

                <div className="card__footer">
                  <div className="card__footer-left">
                    <span className="price">
                      <i className="fa-solid fa-certificate"></i> Sertifikat
                    </span>
                  </div>
                  <div className="card__footer-right">
                    <span>Yoq</span>
                  </div>
                </div>

                <div className="card__footer">
                  <div className="card__footer-left">
                    <span className="price">
                      <i className="fa-solid fa-infinity"></i> Dostup
                    </span>
                  </div>
                  <div className="card__footer-right">
                    <span>Umrbod</span>
                  </div>
                </div>

                <div className="card__footer">
                  <div className="card__footer-left">
                    <span className="price">
                      <i className="fa-solid fa-chalkboard-user"></i> Mentor
                    </span>
                  </div>
                  <div className="card__footer-right">
                    <span>Muhammadnozim</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="page__content" className="course__content page__content">
          <div className="course__nav-list">
            <NavLink className="course__nav-links course__nav-link" to="info">
              <i className="bx bxl-meta"></i> Tavsif
            </NavLink>
            <NavLink className="course__nav-links course__nav-link" to="program">
              <i className="bx bx-book"></i> Dastur
            </NavLink>
            <NavLink className="course__nav-links course__nav-link" to="comment">
              <i className="bx bxs-star"></i> Sharh
            </NavLink>
            <NavLink className="course__nav-links course__nav-link" to="mentor">
              <i className="fa-solid fa-user-tie"></i> Mentor
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default CourceLayout;
