import React, { useState, useRef, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import styled from "styled-components";
import swal from "sweetalert";
import { useRouter } from "next/router";

export default function CheckoutForm() {
  const router = useRouter();

  let scrollRef = useRef();

  const [Display, setDisplay] = useState(false);

  const StatesUS = new Set([
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = "Invalid email address";
    if (!values.first_name) errors.first_name = "Required";
    if (!values.last_name) errors.last_name = "Required";
    if (!values.address) errors.address = "Required";
    if (!values.zip) errors.zip = "Required";
    else if (values.zip.length < 5) errors.zip = "Must be as least 5 digits";
    else if (isNaN(values.zip)) errors.zip = "Input must only contain numbers";
    if (!values.city) errors.city = "Required";
    if (!values.state) errors.state = "Required";
    else if (!StatesUS.has(values.state.toUpperCase()))
      errors.state = "Enter a valid State";
    if (!values.CC) errors.CC = "Required";
    else if (values.CC.length != 16)
      errors.CC = "Card number must be 16 digits long";
    else if (isNaN(values.CC)) errors.CC = "Code must only container numbers";
    if (!values.CVV) errors.CVV = "Required";
    else if (values.CVV.length != 3)
      errors.CVV = "Security Code must be 3 digits long";
    else if (isNaN(values.CVV)) errors.CVV = "Code must only container numbers";
    return errors;
  };
  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    country: "",
    zip: "",
    city: "",
    state: "",
    CC: "",
    CVV: "",
    month: "",
    year: "",
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      checkSubmission();
    },
  });
  function checkSubmission() {
    if (
      parseFloat(formik.values.email.length) > 1 &&
      parseFloat(formik.values.first_name.length) > 1 &&
      parseFloat(formik.values.last_name.length) > 1 &&
      parseFloat(formik.values.address.length) > 1 &&
      parseFloat(formik.values.zip.length) > 4 &&
      parseFloat(formik.values.city.length) > 1 &&
      parseFloat(formik.values.state.length) > 1 &&
      parseFloat(formik.values.CC.length) > 15 &&
      parseFloat(formik.values.CVV.length) > 2
    )
      return true;
    else {
      return false;
    }
  }
  return (
    <Wrapper id="wrap">
      <Checkout_Form
        id="my-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (checkSubmission()) {
            formik.resetForm(initialValues);
            swal({
              icon: "success",
              title: "Successful Purchase",
              text: "Thank You For Shopping With Us",
            }).then((x) => {
              localStorage.removeItem("Cart");
              router.push("/");
            });
          } else {
            setDisplay(true);
            window.scrollTo({
              behavior: "smooth",
              top: scrollRef.current.offsetTop,
            });
          }
        }}
      >
        <H1Div ref={scrollRef}>
          <H1> Billing Address </H1>
          <Button
            type="reset"
            onClick={() => {
              formik.resetForm({
                values: {
                  email: "johnsmith@email.com",
                  first_name: "John",
                  last_name: "Smith",
                  address: "123 Street",
                  country: "United States",
                  zip: "12345",
                  city: "New York",
                  state: "NY",
                  CC: "1234567887654321",
                  CVV: "123",
                  month: "01",
                  year: "2021",
                },
              });
              setDisplay(false);
            }}
          >
            Autofill
          </Button>
        </H1Div>
        <Row>
          {Display && (
            <SubmitError id="scroll">
              PLEASE FILL IN ALL FIELDS BEFORE SUBMITTING
            </SubmitError>
          )}
        </Row>
        <Row>
          <FullDiv>
            <Full>Email Address</Full>
            <Input__Full
              type="email"
              name="email"
              id="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              enableReinitialize={true}
            />{" "}
            {formik.errors.email && formik.touched.email && (
              <ErrorDiv>{formik.errors.email}</ErrorDiv>
            )}
          </FullDiv>
        </Row>
        <Row_Name>
          <HalfDiv>
            <H2>First Name</H2>
            <Input__Half
              type="text"
              name="first_name"
              id="first_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.first_name}
              enableReinitialize={true}
            />{" "}
            {formik.errors.first_name && formik.touched.first_name && (
              <ErrorDiv>{formik.errors.first_name}</ErrorDiv>
            )}
          </HalfDiv>
          <HalfDiv>
            <H2>Last Name</H2>
            <Input__Half
              type="text"
              name="last_name"
              id="last_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.last_name}
              enableReinitialize={true}
            />
            {formik.errors.last_name && formik.touched.last_name && (
              <ErrorDiv>{formik.errors.last_name}</ErrorDiv>
            )}
          </HalfDiv>
        </Row_Name>
        <Row>
          <FullDiv>
            <Full>Address</Full>
            <Input__Full
              type="text"
              name="address"
              id="address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address}
              enableReinitialize={true}
            />
            {formik.errors.address && formik.touched.address && (
              <ErrorDiv>{formik.errors.address}</ErrorDiv>
            )}
          </FullDiv>
        </Row>
        <Row>
          <QuarterDiv>
            <H3>Country</H3>
            <QSelect
              type="select"
              name="country"
              id="country"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.country}
              enableReinitialize={true}
            >
              {" "}
              <Option value="US">United States</Option>
            </QSelect>
          </QuarterDiv>
          <QuarterDiv>
            <H3>Zip Code</H3>
            <Input__Quarter
              type="text"
              name="zip"
              id="zip"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.zip}
              enableReinitialize={true}
            />
            {formik.errors.zip && formik.touched.zip && (
              <ErrorDiv>{formik.errors.zip}</ErrorDiv>
            )}
          </QuarterDiv>
          <QuarterDiv>
            <H3>City</H3>
            <Input__Quarter
              type="text"
              name="city"
              id="city"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.city}
              enableReinitialize={true}
            />
            {formik.errors.city && formik.touched.city && (
              <ErrorDiv>{formik.errors.city}</ErrorDiv>
            )}
          </QuarterDiv>
          <QuarterDiv>
            <H3>State</H3>
            <Input__Quarter
              type="input"
              name="state"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.state}
              enableReinitialize={true}
            />
            {formik.errors.state && formik.touched.state && (
              <ErrorDiv>{formik.errors.state}</ErrorDiv>
            )}
          </QuarterDiv>
        </Row>
        <H1Div>
          <H1>Payment Information</H1>
        </H1Div>
        <Row>
          <Radio
            type="radio"
            id="card"
            defaultChecked
            value="card"
            name="payment"
          />
          <Label>
            Credit/Debit Card
            <div>
              <img src="https://i.ibb.co/XS6J4PM/20150901-visa.png" />
              <img src="https://i.ibb.co/gVDTzSh/20150901-mc.png" />
            </div>
          </Label>
        </Row>
        <Row>
          <RowItemCC>
            <Title>Card Number</Title>
            <Input__CardNum
              type="text"
              name="CC"
              id="CC"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.CC}
              enableReinitialize={true}
            />
            {formik.errors.CC && formik.touched.CC && (
              <ErrorDiv>{formik.errors.CC}</ErrorDiv>
            )}
          </RowItemCC>
          <RowItemCVV>
            <Title>CVV</Title>
            <Input__CVV
              type="text"
              name="CVV"
              id="CVV"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.CVV}
              enableReinitialize={true}
            />
            {formik.errors.CVV && formik.touched.CVV && (
              <ErrorDiv>{formik.errors.CVV}</ErrorDiv>
            )}
          </RowItemCVV>
        </Row>
        <Row>
          <Date>Expiration Date</Date>
        </Row>
        <Row>
          <DateSelect
            type="select"
            name="month"
            id="month"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.month}
            enableReinitialize={true}
          >
            <Option value="1">01 Jan</Option>
            <Option value="2">02 Feb</Option>
            <Option value="3">03 Mar</Option>
            <Option value="4">04 Apr</Option>
            <Option value="5">05 May</Option>
            <Option value="6">06 Jun</Option>
            <Option value="7">07 Jul</Option>
            <Option value="8">08 Aug</Option>
            <Option value="9">09 Sep</Option>
            <Option value="10">10 Oct</Option>
            <Option value="11">11 Nov</Option>
            <Option value="12">12 Dec</Option>
          </DateSelect>
          <DateSelect
            type="select"
            name="year"
            id="year"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.year}
            enableReinitialize={true}
          >
            <Option value="2021">2021</Option>
            <Option value="2022">2022</Option>
            <Option value="2023">2023</Option>
            <Option value="2024">2024</Option>
            <Option value="2025">2025</Option>
            <Option value="2026">2026</Option>
            <Option value="2027">2027</Option>
            <Option value="2028">2028</Option>
            <Option value="2029">2029</Option>
            <Option value="2030">2030</Option>
            <Option value="2031">2031</Option>
            <Option value="2032">2032</Option>
            <Option value="2033">2033</Option>
          </DateSelect>
        </Row>
      </Checkout_Form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;
const Checkout_Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const H1Div = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f2f3f4;
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1 = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;
  font-family: Helvetica, sans-serif;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;
const Row_Name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  justify-content: space-between;
`;
const Full = styled.h2`
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding-bottom: 5px;
`;
const Input__Full = styled.input`
  width: 100%;
  padding: 7px;
  background: #fff;
  color: #7b7b7b;
  font-weight: 500;
  border: 1px solid #d5d7d8;
  border-radius: 4px;
  outline: 0;
  font-size: 13px;
  vertical-align: bottom;
  margin-bottom: 5px;
  box-sizing: border-box;
`;
const H2 = styled.h2`
  width: 50%;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding-bottom: 5px;
`;
const Input__Half = styled.input`
  width: 100%;
  padding: 7px;
  background: #fff;
  color: #7b7b7b;
  font-weight: 500;
  border: 1px solid #d5d7d8;
  border-radius: 3px;
  outline: 0;
  font-size: 13px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;
const QuarterDiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;
const H3 = styled.h3`
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding-bottom: 5px;
`;
const Input__Quarter = styled.input`
  width: 65%;
  padding: 7px;
  background: #fff;
  color: #7b7b7b;
  font-weight: 500;
  border: 1px solid #d5d7d8;
  border-radius: 3px;
  outline: 0;
  font-size: 13px;
  vertical-align: bottom;
  margin-bottom: 5px;
`;
const QSelect = styled.select`
  width: 85%;
  padding: 7px;
  background: #fff;
  color: #7b7b7b;
  font-weight: 500;
  border: 1px solid #d5d7d8;
  border-radius: 3px;
  outline: 0;
  font-size: 13px;
  vertical-align: bottom;
  margin-right: 5px;
`;
const Option = styled.option``;
const Radio = styled.input`
  margin-right: 10px;
`;
const Label = styled.label`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const RowItemCC = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 23px;
`;

const RowItemCVV = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding-bottom: 5px;
  margin-top: 20px;
`;
const Input__CardNum = styled.input`
  width: 90%;
  padding: 7px;
  background: #fff;
  color: #7b7b7b;
  font-weight: 500;
  border: 1px solid #d5d7d8;
  border-radius: 3px;
  outline: 0;
  font-size: 13px;
  vertical-align: bottom;
  margin-bottom: 5px;
`;
const Input__CVV = styled.input`
  width: 25%;
  padding: 7px;
  background: #fff;
  color: #7b7b7b;
  font-weight: 500;
  border: 1px solid #d5d7d8;
  border-radius: 3px;
  outline: 0;
  font-size: 13px;
  vertical-align: bottom;
  margin-bottom: 5px;
`;
const ErrorDiv = styled.div`
  margin-bottom: 15px;
  font-family: helvetica;
  font-weight: 400;
  color: red;
  font-size: 12px;
`;
const SubmitError = styled.div`
  font-family: helvetica;
  font-weight: 400;
  color: red;
  font-size: 15px;
`;
const DateSelect = styled.select`
  width: 20%;
  padding: 7px;
  background: #fff;
  color: #7b7b7b;
  font-weight: 500;
  border: 1px solid #d5d7d8;
  border-radius: 3px;
  outline: 0;
  font-size: 13px;
  vertical-align: bottom;
  margin-right: 10px;
  margin-left: 23px;
  @media (max-width: 500px) {
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: none;
    width: 60%;
  }
`;
const Date = styled.h2`
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding-bottom: 5px;
  margin-left: 23px;
`;
const Button = styled.button`
  width: 100px;
  height: 32px;
  background-color: red;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0 20px;
  margin-right: 10px;
  border: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: 1.4px;
`;
const FullDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HalfDiv = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
`;
