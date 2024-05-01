import BannerImage from "../../assets/homebanner.jpg"
import "../../styles/About.css"

const About = () => {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde rem impedit modi. Alias deleniti quo id accusamus, eos rerum rem doloribus animi fuga maiores recusandae ipsum quibusdam placeat ea.
          Pariatur saepe similique, exercitationem culpa ullam totam minus deserunt sequi dignissimos repellat eos voluptatum est laboriosam voluptatem incidunt obcaecati eveniet molestiae aspernatur magni beatae! Aspernatur quos culpa dicta optio animi.
          Iusto perferendis nihil neque laborum vitae totam nemo voluptatum magni. Eos molestiae vero quos laudantium, architecto numquam tempore possimus? Praesentium, commodi nihil. Fugit architecto pariatur quod quis nulla, quo commodi?
          Neque autem quaerat rerum maxime, ab modi sit voluptatum! Earum consectetur vel voluptates aspernatur fugit voluptas, harum ad hic quibusdam blanditiis quod eius expedita, alias ullam nulla magnam? Quisquam, adipisci.
          Error, iste sequi. Alias exercitationem et nobis accusantium. Cupiditate vel soluta magni quod, tempore et eligendi inventore neque, explicabo porro velit deserunt aliquid animi? Molestias accusantium exercitationem asperiores consectetur porro!
          Ullam cumque non architecto dolore quis rem minus atque rerum provident, eveniet, dicta quisquam deleniti commodi odit laborum aut veniam doloremque? Alias iste sapiente, dolores saepe accusamus fugiat quo eligendi?
          Quam ipsa corrupti similique eaque molestias, vitae illum reprehenderit nostrum mollitia adipisci pariatur explicabo saepe labore cumque optio, corporis quis error rerum nesciunt id. Autem qui velit alias sint nemo.
        </p>
      </div>
    </div>
  )
}

export default About