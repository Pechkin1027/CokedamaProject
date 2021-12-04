import React from "react";
import PageLayout from "../components/PageLayout";
import JumboSaleDisplay from "../components/Landing/JumboSaleDisplay";
import styled from "styled-components";
import ProductGrid from "../components/Landing/ProductGrid";
import CategoryGrid from "../components/Landing/CategoryGrid";
import { AllProducts } from "../data/Category";
import { BiRepeat } from "react-icons/bi";

//Javascript
export default function contact() {
  return (
    <PageLayout type={"CONTACT"}>
      <html>
        <div className = "contactBanner">
          <div className = "contactImg">
            <img src = "Contact_Background.jpg" width = "100%"/>
          </div>
          <div className = "contactTitle">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className = "contactContent">
          <div className = "contactContainer">
            <div className = "contactSet">
              <div className = "setContent">
                <label>First Name</label>
                <input type = "text"/>
              </div>
            </div>
            <div className = "contactSet">
              <div className = "setContent">
                <label>Last Name</label>
                <input type = "text"/>
              </div>
            </div>
            <div className = "contactSet">
              <div className = "setContent">
                <label>Email Address</label>
                <input type = "email"/>
              </div>
            </div>
            <div className = "contactSet">
              <div className = "setContent">
                <label>Phone Number</label>
                <input type = "text"/>
              </div>
            </div><div className = "contactSet">
              <div className = "setContent">
                <label>Message</label>
                <textarea></textarea>
              </div>
            </div>
            <div className = "contactSet">
              <input type = "submit" value = "Submit"/>
            </div>
          </div> 
        </div>
      </html>
    </PageLayout>
  );
}
