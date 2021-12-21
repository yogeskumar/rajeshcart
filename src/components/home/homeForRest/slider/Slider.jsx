import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './SliderData.json';
import { mobile } from "../../../responsive";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 40%;
  /* height: 100vh; */
  display: flex;
  position: relative;
  overflow: hidden;
  /* ${mobile({ display: "none" })} */
  margin: auto;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #808080;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "0"};
  right: ${(props) => props.direction === "right" && "0"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.cardIndex * -50}vw);
`;

const Card = styled.div`
  width: 350px;
  height: 15vh;
  min-height: 100px;
  /* max-height: 150px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* padding: 15px; */
  /* background-color: #${(props) => props.bg}; */
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  background-size: cover;
`;

const Image = styled.img`
  height: 100%;
  background-size: cover;
`;

const InfoContainer = styled.div`
  flex: 2;
`;

const Title = styled.h3`
  font-size: 15px;
`;
const Rating = styled.div``;
const Price = styled.div``;
const DiscountedPrice = styled.span`
color: red;
`;
const OriginalPrice = styled.span`
color: black;
opacity: 0.5;
text-decoration: line-through;
margin-left: 5px;
`;

// const Desc = styled.p`
//   margin: 50px 0px;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;

function Slider() {

  const [cardIndex, setCardIndex] = useState(0);

  const dataLength = JsonData.length;
  
    const handleClick = (direction) => {
        if (direction === "left") {
          setCardIndex(cardIndex > 0 ? cardIndex - 1 : 1);
          console.log(dataLength)
        } else {
          setCardIndex(cardIndex < 1 ? cardIndex + 1 : 0);
          console.log(dataLength);
        }
    };
    return (
        <Container>

            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper cardIndex={cardIndex}>
                {JsonData.map((card) => (
                  <Card key={card.id}>
                    <ImgContainer>
                      <Image src={ card.image } />
                    </ImgContainer>
                    <InfoContainer>
                      <Title>{ card.name }</Title>
                      <Rating>
                        <ReactStars className="text-center" style={{"width":"fit-content", "border":"0"}}
                            count={5}
                            value={card.rating}
                            edit={false}
                            size={20}
                            activeColor="#ffd700"
                        />
                      </Rating>
                      <Price>
                        <DiscountedPrice>{'$' + card.discountedPrice }</DiscountedPrice>
                        <OriginalPrice>{ '$' + card.originalPrice }</OriginalPrice>
                      </Price>
                    </InfoContainer>
                  </Card>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
            
    </Container>
    )
}

export default Slider;
