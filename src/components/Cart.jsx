import { Description, Search, ShoppingCartOutlined } from "@material-ui/icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import UserCartItems from './UserCartItems.json';

const Container = styled.div`
    width:100%;
`;
const TopHeading = styled.p`
    width:100%;
    height:50px;
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    font-weight:500;
    background-color:#F6F7F8;
    margin:0;
    ${mobile({
        display:"none"
    })}
`;
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding: 10vh 20vh 20vh 20vh;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    flex-wrap: nowrap;
    font-weight: 700;
    ${mobile({
        display:"none"
    })}
`;
const ProductHeader = styled.div`
padding-right: 10px;
    flex: 1;
`;
const DescriptionHeader = styled.div`
padding-right: 10px;
    flex: 2;
    align-items: center;
    justify-content: center;
`;
const PriceHeader = styled.div`
padding-right: 10px;
    flex: 1;
`;
const QtyHeader = styled.div`
    flex: 1;
padding-right: 10px;
`;
const UnitPriceHeader = styled.div`
    flex: 1;
padding-right: 10px;
`;
const Products = styled.div`
margin: auto auto 5vh auto;
width: 100%;
`;
const Product = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;
const CrossButtonAndImage = styled.div`
    flex:1;
padding-right: 10px;
`;
const RemoveProductButton = styled.button`
    color: #ff0000;
    width: fit-content;
    height: fit-content;
    padding: 1px;
    border: 0;
    border-radius: 50%;
    background-color: #ffd1d1;
    width: 20px;
    height: 20px;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;
const ProductImage = styled.img`
    width: 100px;
    height: auto;
    background-size: cover;
`;
const ProductDescription = styled.div`
    flex: 2;
    font-size: 18px;
    font-weight: 500;
padding-right: 10px;
`;
const ProductTotalPrice = styled.div`
    flex: 2;
    font-size: 18px;
    font-weight: 400;
padding-right: 10px;
`;
const IncreaseDecreaseQty = styled.div`
    flex: 1;
padding-right: 10px;
`;
const ChangeQty = styled.div`
background-color: #F6F7F8;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex-wrap: nowrap;
width: 100px;
font-weight: 700;
`;
const QtyChangeButton = styled.button`
border: 0;
background: transparent;
color: #33A0FF;
font-weight: 900;
font-size: 20px;
`;
const ProductUnitPrice = styled.div`
    flex:1;
    font-size: 18px;
    font-weight: 400;
padding-right: 10px;
`;
const LowerPart = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
    ${mobile({
        display: "block",
        width: "98%"
    })}
`;
const VoucherContainer = styled.div`
width: 33.33%;
`;
const Input = styled.input`
padding: 20px;
font-size: 14px;
flex: 2;
`;
const ReedemButton = styled.button`
color: white;
border: 0;
border-radius: 0 2px 2px 0;
padding: 22px 25px;
font-size: 14px;
background-color: #33A0FF;
font-weight: bold;
flex: 1;
`;
const Amount = styled.div`
width: 33.33%;
    ${mobile({
        width: "100%"
    })}
`;
const CheckOutDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: row;
font-weight: bold;
margin: 22px 0;
`;
const CheckOutButton = styled.button`
width: 100%;
padding-top: 22px;
padding-bottom: 22px;
color: white;
font-size: 14px;
background-color: #33A0FF;
font-weight: bold;
border: 0;
border-radius: 2px;
`;

function Cart() {
    return (
        <div>
            <Container>
                <TopHeading>
                    Cart
                </TopHeading>
                <Wrapper>
                    <Header>
                        <ProductHeader className="text-center">PRODUCT</ProductHeader>
                        <DescriptionHeader className="text-center">DESCRIPTION</DescriptionHeader>
                        <PriceHeader className="text-center">PRICE</PriceHeader>
                        <QtyHeader className="text-center">QTY</QtyHeader>
                        <UnitPriceHeader className="text-center">Unit Price</UnitPriceHeader>
                    </Header>
                    <hr style={{backgroundColor:"#bdbdbd", width:"100%", height:"1px", margin:"30px 0"}}/>
                    <Products>
                        {UserCartItems.slice(0, 2).map(item=>{
                            return <div><Product>
                                <CrossButtonAndImage className="text-center">
                                    <RemoveProductButton>X</RemoveProductButton>
                                    <ProductImage src={item.image}/>
                                </CrossButtonAndImage>
                                <ProductDescription className="text-center">{ item.description }</ProductDescription>
                                <ProductTotalPrice className="text-center">$998</ProductTotalPrice>
                                <IncreaseDecreaseQty className="text-center fw-bolder">
                                    <ChangeQty style={{margin:"auto", padding:"10px", borderRadius:"2px"}}>
                                        <QtyChangeButton>-</QtyChangeButton>
                                        <div>2</div>
                                        <QtyChangeButton>+</QtyChangeButton>
                                    </ChangeQty>
                                </IncreaseDecreaseQty>
                                <ProductUnitPrice className="text-center">$499</ProductUnitPrice>
                            </Product>
                    <hr style={{backgroundColor:"#bdbdbd", width:"100%", height:"1px", margin:"30px 0"}}/>
                                </div>
                        })}
                    </Products>
                    <LowerPart>
                        <VoucherContainer>
                            <div style={{width:"100%", display:"flex", flexDirection:"row"}}>
                                <Input placeholder="Voucher code" />
                            <ReedemButton>Reedem</ReedemButton>
                            </div>
                        </VoucherContainer>
                        <Amount>
                            <CheckOutDiv>
                                <div>Subtotal</div>
                                <div>$998</div>
                            </CheckOutDiv>
                            <CheckOutDiv>
                                <div>Shipping fee</div>
                                <div>$20</div>
                            </CheckOutDiv>
                            <CheckOutDiv>
                                <div>Coupon</div>
                                <div>No</div>
                            </CheckOutDiv>
                            <hr style={{backgroundColor:"#bdbdbd", width:"100%", height:"1px", margin:"30px 0"}}/>
                            <CheckOutDiv>
                                <div className="h1">Total</div>
                                <div className="h1">$1018</div>
                            </CheckOutDiv>
                            <CheckOutButton>Check out</CheckOutButton>
                        </Amount>
                    </LowerPart>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Cart;