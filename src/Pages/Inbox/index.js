// LandingPage.js
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 1em;
  text-align: center;
`;

const Section = styled.section`
  max-width: 800px;
  margin: 2em auto;
  padding: 2em;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const H1 = styled.h1`
  color: #2c3e50;
`;

const P = styled.p`
  color: #555;
`;

const CtaButton = styled.a`
  display: inline-block;
  padding: 1em 2em;
  background-color: #e74c3c;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const Inbox = () => {
  return (
    <>
      <Header>
        <H1>Awesome Landing Page</H1>
        <P>Welcome to our fantastic world of awesomeness!</P>
      </Header>

      <Section>
        <h2>What We Offer</h2>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</P>
      </Section>

      <Section>
        <h2>Key Features</h2>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</P>
      </Section>

      <Section>
        <h2>Call to Action</h2>
        <P>Ready to experience greatness? Click below to get started!</P>
        <CtaButton href="#cta">Get Started</CtaButton>
      </Section>
    </>
  );
};

export default Inbox;
