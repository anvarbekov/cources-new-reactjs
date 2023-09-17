import myPhoto from '../../images/myPhoto.png'
const Mentor = () => {
  return (
    <div className='course__info'>
               <h1>Mentor</h1>
                <div className="mentors">

                    <div className="mentor__avatar-box">
                        <img src={myPhoto} alt="This is logo" className="mentor__avatar" />
                    </div>
                    <div className="mentor__info-box">
                        <h2 className="mentor__name">Muhammadnozim Anvarbekov</h2>
                        <h3 className="mentor__subtitle">Frontend Developer & Backend Developer</h3>
                        <div className="mentor__comments">
                            <div className="mentor__comment">
                                <i className='bx bxs-star'></i>
                                <p>4.8 Reyting</p>
                            </div>
                            <div className="mentor__comment">
                                <i className="fa-solid fa-user-graduate"></i>
                                <p>+7,000 Oquvchi</p>
                            </div>
                            <div className="mentor__comment">
                                <i className="fa-regular fa-circle-play"></i>
                                <p>13 Kurslar</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mentor__infos">
                    <p className="mentor__info">
                        <span>Muhammadnozim Anvarbekov</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem eius non fugit magni fugiat ipsam hic ut expedita exercitationem, assumenda odio facere totam quod.
                    </p>
                    <p className="mentor__info">
                        <span>Stack</span> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga molestiae quaerat beatae eveniet provident exercitationem nobis culpa ipsam adipisci voluptatem, delectus enim a tenetur sunt?
                    </p>
                </div> 
    </div>
  )
}

export default Mentor
