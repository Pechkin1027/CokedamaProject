import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsLock } from "react-icons/bs";
import CheckoutForm from "./CheckoutForm";
import CartItem from "./CartItem";
import swal from "sweetalert";
import { useRouter } from "next/router";

export default function CheckoutContent() {
  const [TotalPrice, updateTotalPrice] = useState(0);
  const [Cart, setCart] = useState([0]);
  const router = useRouter();

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem("Cart")) || [];
    setCart(localCart);
    if (localCart.length > 0) {
      let x = 0;
      localCart.map((item) => {
        x += item.price * item.quantity;
      });
      updateTotalPrice(x);
    }
  }, []);
  const updateCheckout = (info) => {
    let x = 0;
    info.map((item) => {
      x += item.price * item.quantity;
    });
    updateTotalPrice(x);
  };

  function updateNums(newVal, id) {
    let x = 0;
    let y = 0;
    let newCart = [...Cart];
    newCart[id].quantity = newVal;
    newCart.map((item) => {
      x += item.price * item.quantity;
      y += item.quantity;
    });
    updateTotalPrice(x);
    localStorage.setItem("Cart", JSON.stringify(newCart));
  }
  const handleRemove = (id) => {
    let newCart = [...Cart];
    newCart.splice(id, 1);
    setCart(newCart);
    localStorage.setItem("Cart", JSON.stringify(newCart));
    updateCheckout(newCart);
  };

  return (
    <Wrapper>
      <Container>
        <Col1>
          <Cart_Wrapper>
            <Cart_Container>
              {Cart.map((item, index) => (
                <CartItem
                  key={item.id + item.name + index}
                  index={index}
                  data={item}
                  updateNums={updateNums}
                  handleRemove={handleRemove}
                />
              ))}
            </Cart_Container>
          </Cart_Wrapper>
          <CheckoutForm />
        </Col1>
        <Col2>
          <Wrap>
            <Checkout>
              <Top>
                <Row>
                  <Bold>({Cart.length}) Items:</Bold>
                  <Bold>${TotalPrice.toFixed(2)}</Bold>
                </Row>
                <Row>
                  <Text>Promotional Savings:</Text>
                  <Red>$0</Red>
                </Row>
                <Row>
                  <Bold>Subtotal After Discounts</Bold>
                  <Bold>${TotalPrice.toFixed(2)}</Bold>
                </Row>
              </Top>
              <Bottom>
                <Row>
                  <Text>Shipping:</Text>
                  <Bold>FREE</Bold>
                </Row>
                <Row>
                  <Text>Estimated Tax:</Text>
                  <Text>${(TotalPrice * 0.1).toFixed(2)}</Text>
                </Row>
                <Row>
                  <Large>Total:</Large>
                  <Large>${(TotalPrice * 0.1 + TotalPrice).toFixed(2)}</Large>
                </Row>
                {Cart.length > 0 ? (
                  <Button form="my-form" type="submit">
                    <BsLock /> <P>Submit Order</P>
                  </Button>
                ) : (
                  <Button Empty onClick={() => router.push("/")}>
                    <P>Continue Shopping</P>
                  </Button>
                )}
              </Bottom>
            </Checkout>
          </Wrap>
        </Col2>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 24px;
  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
  }
`;

const Cart_Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cart_Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Col1 = styled.div`
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    width: 60%;
  }
`;

const Col2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  @media ${(props) => props.theme.tablet} {
    width: 40%;
    height: 100%;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #e7e8ea;
  @media ${(props) => props.theme.tablet} {
    margin-left: 40px;
  }
`;

const Checkout = styled.div`
  padding: 25px;
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e7e8ea;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 0;
`;

const Text = styled.div`
  color: #2f3337;
  line-height: 1.5;
`;

const Bold = styled.div`
  font-weight: 700;
  color: #2f3337;
  line-height: 1.5;
`;

const Red = styled.div`
  color: red;
  line-height: 1.5;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${(props) => (props.Empty ? "#0272a2" : "#27865f")};
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  outline: none;
  font-family: Helvetica, Arial, sans-serif;
  height: 44px;
  padding: 0 20px;
  border: none;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  &:hover {
    background-color: ${(props) => (props.Empty ? "#026089" : "#227553")};
  }
`;
const Large = styled.h1`
  font-size: 22px;
  color: #2f3337;
  line-height: 1.5;
  font-weight: bold;
`;
const P = styled.p`
  padding-left: 5px;
`;
