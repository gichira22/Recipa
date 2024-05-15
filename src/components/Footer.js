import React from "react";
// import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const sections = [
  {
    title: `Solutions`,
    Items: [`Marketing`, `Analytics`, `Commerce`, `Data`],
  },
  {
    title: `Support`,
    Items: [`Pricing`, `Documnetation`, `Guide`, `API`],
  },
  {
    title: `Company`,
    Items: [`About`, `Blog`, `Jobs`, `Partners`],
  },
  {
    title: `Legal`,
    Items: [`Claims`, `Privacy`, `Terms`, `Policies`],
  },
];
const Icons = [
  {
    title: `Facebook`,
    icon: FaFacebook,
    link: `https://facebook.com/`,
  },
  {
    title: `Instagram`,
    icon: FaInstagram,
    link: `https://instagram.com/`,
  },
  {
    title: `Twitter`,
    icon: FaTwitter,
    link: `https://twitter.com/`,
  },
  {
    title: `TikTok`,
    icon: FaTiktok,
    link: `https://tiktok.com/`,
  },
  {
    title: `WhatsApp`,
    icon: FaWhatsapp,
    link: `https://whatsapp.com/`,
  },
];

function Footer() {
  return <></>;
}

export default Footer;
