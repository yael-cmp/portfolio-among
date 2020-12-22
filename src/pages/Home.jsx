import React, { useState } from "react";
import CanvasTd from "../components/canvastd";
import Carousel, { Card } from "../components/carousel";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  const [e, setE] = useState(false);
  function toggleButton() {
    if (e === true) {
      setE(false);
    } else {
      setE(true);
    }
  }
  return (
    <div>
      
      <Header callback={toggleButton}/>
      <Hero enable={e}/>
      <CanvasTd enableMove={e}/>
      <div className="container">
        <Carousel>
          <Card
            logo={"https://image.flaticon.com/icons/png/512/174/174855.png"}
            title="Instagram"
            description="3d renders and more"
            link={"https://instagram.com/yael_cmp"}
          />
          <Card
            logo={
              "https://boxboat.com/assets/wf/images/github.9412ae55426a.png"
            }
            title="Github"
            description="All my projects here"
            link={"https://github.com/yael-cmp"}
          />
          <Card
            logo={
              "https://www.flaticon.es/svg/static/icons/svg/1384/1384065.svg"
            }
            title="Twitter"
            description=""
            link={"https://twitter.com/yael_cmp"}
          />
          <Card
            logo={"https://image.flaticon.com/icons/png/512/281/281769.png"}
            title="Gmail"
            description='send me an email'
            link={"mailto:enrikeyael2@gmail.com"}
          />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
