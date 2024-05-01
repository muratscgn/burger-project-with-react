import "../../styles/Contact.css"
import BannerImage from "../../assets/banner.png"

const Contact = () => {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${BannerImage})` }}>

      </div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form action="">
          <label htmlFor="">Ad Soyad</label>
          <input type="text" placeholder="Lütfen doldurunuz" />
          <label htmlFor="">E-Mail</label>
          <input type="text" placeholder="Lütfen mailinizi giriniz" />
          <label htmlFor="">Mesaj</label>
          <textarea name="" id="" cols="30" rows="6" placeholder="Lütfen mesajınızı giriniz"></textarea>
          <button>Gönder</button>
        </form>

      </div>

    </div>
  )
}

export default Contact