import React from "react"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { BannerStyles } from "../../styles/bannerStyles"
import Packages from "../Packages/packages"
import Package from "../Package/package"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const Portfolio = () => {

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <BannerStyles>
            <Packages
            id="portfolio"
        title="Projects"
        para="A few projects created during my course of study"
      >
                <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Space Adventure">
            <ul>
              <li>
                <MdDone />
                JavaScript
              </li>
              <li>
                <MdDone />
                HTML
              </li>
              <li>
                <MdDone  />
                CSS
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="GitHub Repo" />
            </Link>
          </Package>
          <Package title="Trail Explorer" active={true}>
            <ul>
              <li>
                <MdDone />
                Express / NodeJS
              </li>
              <li>
                <MdDone />
                PostgreSQL
              </li>
              <li>
                <MdDone />
                JavaScript, EJS
              </li>
              <li>
                <MdDone />
                HTML / CSS
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="GitHub Repo" />
            </Link>
          </Package>
          <Package title="Oopsie">
            <ul>
              <li>
                <MdDone />
                Amazon Web Services
              </li>
              <li>
                <MdDone />
                SNS / SQS / SES / SMS
              </li>
              <li>
                <MdDone />
                DynamoDB
              </li>
              <li>
                <MdDone />
                API Gateway / Lambda Functions
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="GitHub Repo" />
            </Link>
          </Package>
        </IconContext.Provider>
              </Packages>
              </BannerStyles>
  )
}

export default Portfolio