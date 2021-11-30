import React from "react";
import PageLayout from "../components/PageLayout";
import JumboSaleDisplay from "../components/Landing/JumboSaleDisplay";
import styled from "styled-components";
import ProductGrid from "../components/Landing/ProductGrid";
import CategoryGrid from "../components/Landing/CategoryGrid";
import { AllProducts } from "../data/Category";

export default function contact() {
  return (
    <PageLayout type={"CONTACT"}>
      <div className="contactBanner">
        <div className="bannerHeader">
          <h2>Contact Us</h2>
        </div>
        <div className="bannerContent">
          <img src="https://i.ibb.co/1bQSDG2/kokedama-header-1024x683.jpg" width="50%" />
          <div className="bannerText">
              <a
                href="https://www.facebook.com/cokedamainteriorplantscaping"
                class="fbLink"
              >
                <div className="facebook">
                  <img src="Facebook.png" width="25" height="25" />
                  <h3>https://www.facebook.com/cokedamainteriorplantscaping</h3>
                </div>
              </a>
              <h3>+94 71 412 0033</h3>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
