function Watching() {
  return (
    <div className="container play-container">
        <div className="row">
            <div className="play-video">
                {/* <video controls>
                    <source src="images/video.mp4" type="video/mp4">
                </video>  */}
                <iframe id="iframe" src="https://www.youtube.com/embed/xp7YROtJ2HE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3 id="lesson__title">#00. Lesson title</h3>
                <hr />
            </div>

            <div className="right-sidebar">
                <div id="course__modul" className="course__vid-info">
                    <ul className="accordion__vids">
                            <h1>Kurs bolimlari</h1>
                            <p>6ta Bolim <i className="fa-solid fa-circle"></i> 37ta Darslik</p>
                         <li className="accordio__vid">
                            <label className="accordion__v" htmlFor="vid__one"><span><i className='bx bxs-chevron-down down__icon'></i> 1-Modul. HTML darslari</span> <span>5ta dars</span></label>
                            <input className="accordion__input" checked id="vid__one" type="radio" name="accordion" />
                            <div className="accordion__content">

                                <a href="#" className="accordion__content-item">
                                    <div className="accordion__content-item-left">
                                        <input type="checkbox" />
                                        <p className="accordion__content-title active">
                                            #1. Web dasurlash haqida
                                        </p>
                                    </div>
                                    <div className="accordion__content-item-right">
                                        <div className="accordion__content-item-time active">15:43</div>
                                    </div>
                                </a>

                                <a href="#" className="accordion__content-item">
                                    <div className="accordion__content-item-left flex-div">
                                        <input type="checkbox" />
                                        <p className="accordion__content-title">
                                            #1. Web dasurlash haqida
                                        </p>
                                    </div>
                                    <div className="accordion__content-item-right">
                                        <div className="accordion__content-item-time">15:43</div>
                                    </div>
                                </a>

                            </div>
                        </li>

                         <li className="accordio__vid">
                            <label className="accordion__v" htmlFor="vid__two"><span><i className='bx bxs-chevron-down'></i> 1-Modul. HTML darslari</span> <span>5ta dars</span></label>
                            <input className="accordion__input" id="vid__two" type="radio" name="accordion" />
                            <div className="accordion__content">

                                <a href="#" className="accordion__content-item">
                                    <div className="accordion__content-item-left flex-div">
                                        <input type="checkbox" />
                                        <p className="accordion__content-title">
                                            #1. Web dasurlash haqida
                                        </p>
                                    </div>
                                    <div className="accordion__content-item-right">
                                        <div className="accordion__content-item-time">15:43</div>
                                    </div>
                                </a>

                            </div>
                        </li>

                         <li className="accordio__vid">
                            <label className="accordion__v" htmlFor="vid__three"><span><i className='bx bxs-chevron-down'></i> 1-Modul. HTML darslari</span> <span>5ta dars</span></label>
                            <input className="accordion__input" id="vid__three" type="radio" name="accordion" />
                            <div className="accordion__content">

                                <a href="#" className="accordion__content-item">
                                    <div className="accordion__content-item-left flex-div">
                                        <input type="checkbox" />
                                        <p className="accordion__content-title">
                                            #1. Web dasurlash haqida
                                        </p>
                                    </div>
                                    <div className="accordion__content-item-right">
                                        <div className="accordion__content-item-time">15:43</div>
                                    </div>
                                </a>

                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Watching
