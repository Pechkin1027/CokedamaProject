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
      <div className="aboutBanner">
        <div className="bannerHeader">
          <h2>Contact Us</h2>
        </div>
        <div className="bannerContent">
          <img src="https://i.ibb.co/1bQSDG2/kokedama-header-1024x683.jpg" width="50%" />
          <div className="bannerText">
            <p>
            Phone: +94 71 412 0033
            </p>
            <p>
            Email: cokedamainterior@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="aboutStory">
        <div className="storyHeader">
          <h2>Send us a message</h2>
        </div>
        <div class="body">
            <div id="contact-form">
            <form id="contact" class="form-class" method="post" action="components/contact-form-process.php"> 
                <div class="form-group">
                    <label for="Name" class="label">Your name</label>
                    <div class="input-group">
                        <input type="text" id="Name" name="Name" class="form-control" required></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="Email" class="label">Your email address</label>
                    <div class="input-group">
                        <input type="email" id="Email" name="Email" class="form-control" required></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="Message" class="label">Your message</label>
                    <div class="input-group">
                        <textarea id="Message" name="Message" class="form-control" rows="6" maxlength="3000" required></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" id="button" class="button">Send Message</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    </PageLayout>
  );
}
