function Program() {
    return (
      <>
              <div className="course__info">
                  <h1>Kurs Dasturi</h1>
                  <p className="course__subtitle">
                      6ta Bolim <i className="fa-solid fa-circle"></i> 37ta Darslik
                  </p>
  
                  <div className="course__vid-info">
                      <ul className="accordion__vids">
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
      </>
    )
  }
  
  export default Program
  