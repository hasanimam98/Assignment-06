import React from 'react';
import logoImg from '../assets/products/DigiTools.png'
import { FiShoppingCart } from "react-icons/fi";
const NavBar = ({cartItems}) => {
  const links = (
    <>
  <li className="hover:text-primary cursor-pointer transition-colors duration-200">Products</li>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">Features</li>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">Pricing</li>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">Testimonials</li>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">FAQ</li>
    </>
  );
