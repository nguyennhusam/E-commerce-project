import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about-page.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Customers themselves, customers will be able to pursue the success of the company.
            Let the time of those who accuse the wise run away, but let them suffer, and they will receive them.
            Anyone, said. Those blinded by denial of life or pain, falling into flattery,
            carrying out grudges are often chosen by hatred when choosing a path, and beyond by less freedom than an opinion.
            Wise architects can pursue it. None of these things, unless you see clearly, usually want the whole of him,
            but people like him. From that, we accuse them of having fun, they don't know that this is the whole of life.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
