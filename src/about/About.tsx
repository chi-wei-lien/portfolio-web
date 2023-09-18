import ReactMarkdown from 'react-markdown'
import {useEffect, useState} from "react";
import styled from "styled-components";
import SectionContainer from "../style/SectionContainer";

const About = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("/content/intro.md")
            .then((res) => res.text())
            .then((text) => {
                setContent(text)
                console.log(text)
            })
    }, [])

    return (
        <div>
            <SectionContainer>
                <TextImageContainer>
                    <TextSection>
                        <h1>About</h1>
                        <ReactMarkdown children={content} />
                    </TextSection>
                    <ImageContainer>
                        <ImageSection>
                            <img src={"images/me_1.jpg"} alt={"me"}></img>
                        </ImageSection>
                    </ImageContainer>
                </TextImageContainer>
            </SectionContainer>
        </div>
    )
}

const TextImageContainer = styled.div`
  max-width: 1100px;
  border-width: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 800px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const TextSection = styled.div`
  padding: 40px;
  width: 700px;
  color: white;
  max-width: 100%;
  
  & h1 {
    font-family: "VT323", monospace;
    font-size: 100px;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 400px;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

const ImageSection = styled.div`
  top: 50%;
  position: absolute;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 40px 40px 40px 0;

  @media only screen and (max-width: 768px) {
    top: 0;
    -ms-transform: translateY(0);
    transform: translateY(0);
    position: relative;
    width: 400px;
    padding: 40px;
  }
`

export default About