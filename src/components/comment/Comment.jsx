import UserMan from '../../images/userman.png'
import UserWoman from '../../images/userwoman.png'
function Comment() {
  return (
    <>
            <div className="course__info">
                <h1>Sharhlar</h1>

                <div className="comment__box">
                    <div className="user__icons">
                        <div className="user__icon-box">
                            <img src={UserMan} alt="User icon" className="user__icon" />
                        </div>
                    </div>
                    <div className="user__comment">
                        <h3 className="user__name">User Name <span>2 kun oldin</span></h3>
                        <div className="user__stars">
                            <i className='bx bxs-star user__star'></i>
                            <i className='bx bxs-star user__star'></i>
                            <i className='bx bxs-star user__star'></i>
                            <i className='bx bxs-star user__star'></i>
                            <i className='bx bxs-star user__star'></i>
                        </div>
                        <p className="user__message">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda harum ipsa, enim accusantium labore!
                        </p>
                    </div>
                </div>

                <div className="comment__box">
                    <div className="user__icons">
                        <div className="user__icon-box">
                            <img src={UserWoman} alt="User icon" className="user__icon" />
                        </div>
                    </div>
                    <div className="user__comment">
                        <h3 className="user__name">User Name <span>2 kun oldin</span></h3>
                        <div className="user__stars">
                            <i className='bx bxs-star user__star'></i>
                            <i className='bx bxs-star user__star'></i>
                            <i className='bx bxs-star user__star'></i>
                            <i className='bx bxs-star user__star'></i>
                            <i className='bx bxs-star user__star'></i>
                        </div>
                        <p className="user__message">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda harum ipsa, enim accusantium labore!
                        </p>
                    </div>
                </div>

                <button className="btn comment__btn">Koproq</button>

            </div>
    </>
  )
}

export default Comment
