import React, { Component } from "react";

export default class PhoneShoppingCard extends Component {
  render() {
    return (
      <div className="relative w-10 max-w-[40px] ml-auto cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="absolute inline-block top-0 right-0 translate-x-8 -translate-y-3 text-sm border-2 p-[5px] rounded-full leading-none text-white bg-red-600">
          3
        </span>
      </div>
    );
  }
}
