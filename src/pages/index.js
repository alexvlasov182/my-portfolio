import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Main = () => (
  <Layout>
    <div className="about-block">
      <div className="front-block">
        <StaticImage
          src="../images/iandmac.jpeg"
          width={200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Logo Alex Vlasov"
          style={{ marginBottom: `1.45rem` }}
        />
        <h1 className="main-header">
          Hi, my name is Alex and I’m a BackEnd developer with 3 months of
          experience.
        </h1>
      </div>
      <p className="paragraph">
        <strong>
          Passionate about developing technologies and development on server
          side.
        </strong>
        <br />I have a little e-commerce experience in markup, but I have a
        great desire to work and learn. I spend all my free time practicing
        PHP/Laravel development.{" "}
      </p>

      <p className="paragraph paragraph-bottom">
        I want to find hard and interesting project, that will allow me to apply
        and improve my skills and knowledge. <br /> I also made these projects
        myself:
      </p>
      <ul className="list-item">
        <li>Simple http server,</li>
        <li>CRUD,</li>
        <li>Creating cross-browser, semantic and valid code,</li>
        <li>
          Developing and implement a grid system (Media queries, Bootstrap) for
          mobile responsiveness.
        </li>
      </ul>
      <p className="paragraph paragraph-margin">
        In my spare time, I study the Golang language, I find it a very
        interesting language with static typing and fast compilation to
        bytecode.
      </p>
    </div>
  </Layout>
)

export default Main
