import React from "react";
import { FiSearch, FiHeart } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
const nav = (props) => {
  return (
    <nav
      className={`flex justify-between  font-[500] max-sm:bg-none max-sm:text-primary sm:bg-primary ${
        props.className && props.className
      }`}
    >
      <ul className="my-[1.85rem] mx-[2.2rem] flex items-center gap-6  text-[0.9rem] max-lg:hidden ">
        <li>Skin Care</li>
        <li>Body & Hand</li>
        <li>Hair</li>
        <li>Fragrance</li>
        <li>Home</li>
        <li>Kits &Travel</li>
        <li>Gifts</li>
        <li>Read</li>
        <li>Stores</li>
        <li>
          <span>
            <FiSearch />
          </span>
        </li>
      </ul>
      <ul className="my-[1.85rem] mx-[2.2rem] flex items-center gap-6  text-[0.9rem] max-sm:hidden lg:hidden ">
        <li>Shop</li>
        <li>Read</li>
        <li>Store</li>
        <li>
          <span>
            <FiSearch />
          </span>
        </li>
      </ul>
      <ul className="my-[1.85rem] mx-[2.2rem] flex items-center gap-6  text-[0.9rem] sm:hidden ">
        <li className="h-[1.5rem] flex-shrink-0">
          <img src="src/assets/logo.svg" className="h-full  " alt="" />
        </li>
        <li>
          <span>
            <FiSearch />
          </span>
        </li>
      </ul>
      <ul className="my-[1.85rem] mx-[2rem] flex flex-wrap gap-4 text-sm max-sm:hidden">
        <li>Login</li>
        <li>Cabinet</li>
        <li>Cart</li>
      </ul>
      <ul className="my-[1.85rem] mx-[2rem] flex flex-wrap items-center gap-8 text-base sm:hidden">
        <li>
          <FiSearch></FiSearch>
        </li>
        <li>
          <FiHeart></FiHeart>
        </li>
        <li className="cart-link">Cart</li>
        <li>
          <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
