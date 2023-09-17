const Contact = () => {
  return (
    <div className="container">
        <h1 className="contact__title">Boglanish</h1>
        <p className="contact__subtitle">Platformaga oid savol va takilf yozishingiz mumkin.</p>


        <div className="list-container">
                <div className="form__box">
                    <form className="form__content" action="#">

                        <div className="input__box">
                            <label htmlFor="name">Ismingiz</label>
                            <input name="name" id="name" type="text" placeholder="Your name" />
                        </div>

                        <div className="input__box">
                            <label htmlFor="email">Email manzilingiz</label>
                            <input name="email" id="email" type="text" placeholder="Your email" />
                        </div>

                        <div className="input__box">
                            <label htmlFor="message">Taklifingiz</label>
                            <textarea id="message" name="message" cols="30" rows="3" placeholder="Your message"></textarea>
                        </div>
                        <button className="btn" type="submit">Yuborish</button>
                    </form>
                    <div className="form__icons">
                        <i className="fa-solid fa-envelope-open-text form__icon"></i>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Contact
