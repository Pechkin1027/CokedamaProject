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
      <div className="aboutBanner">
        <div className="bannerHeader">
          <h2>Contact Us</h2>
          <div className="contactBanner">
            <img
              src="https://i.ibb.co/1bQSDG2/kokedama-header-1024x683.jpg"
              width="100%"
            />
          </div>
          {/* Form group 1 */}
          <div class="col-md-6 col-sm-12">
            <div class="contact-block">
              <div class="form-group-1">
                <div class="input-group">
                  <label for="Name" class="label">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="control-form-control"
                    required
                  ></input>
                </div>
                <div class="input group">
                  <label for="Email" class="label">
                    Your Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    class="control-form-control"
                    required
                  ></input>
                </div>
                <div class="input group">
                  <label for="Subject" class="label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="email"
                    class="control-form-control"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-sm-12">
            <div class="form-group-2">
              <label for="Message" class="label">
                Message
              </label>
              <div class="input-group">
                <textarea
                  name="user message"
                  class="for control"
                  rows="5"
                  columns="4"
                  maxlength="3000"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
