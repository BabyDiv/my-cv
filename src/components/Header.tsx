import { useState } from 'react';
import Link from "next/link";

export default function Header({ onToggleTheme }: { onToggleTheme: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full flex flex-row justify-between items-center">
      <div>
        <Link href="/" className="relative text-[var(--color-font-primary)] no-underline z-[10000]">Inna.</Link>
      </div>
      <nav className="nav nav--desktop bg-opacity-20 rounded-[32px] px-[52px] py-[8px]">
        <ul className="nav__list flex flex-row gap-2 list-none pl-0">
          <li className="cursor-pointer">
            <Link href="/about" className="text-[var(--color-font-primary)] no-underline"> 
              About me
            </Link>
          </li>

          <li className="cursor-pointer">
            <a href="#" className="text-[var(--color-font-primary)] no-underline"> 
              My projects
            </a>
          </li>
          <li className="cursor-pointer">
            <Link href="/contacts" className="text-[var(--color-font-primary)] no-underline">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button
          className="burger-menu flex flex-col justify-between w-[51px] h-[51px] focus:outline-none border-none bg-transparent cursor-pointer z-[1000]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >

          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute transition-all duration-700 ease-in-out ${
              isMenuOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            <rect
              width="51"
              height="51"
              rx="25.5"
              transform="matrix(-1 0 0 1 51 0)"
              fill="white"
              fillOpacity="0.2"
            />
            <path
              d="M40.375 17H21.7813M40.375 25.5H10.625M29.2188 34H10.625"
              stroke="white"
              strokeWidth="2.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute transition-all duration-700 ease-in-out ${
              isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
          >
            <rect
              width="51"
              height="51"
              rx="25.5"
              transform="matrix(-1 0 0 1 51 0)"
              fill="white"
              fillOpacity="0.2"
            />
            <path
              d="M13.8105 35.0864L24.9053 25.0433L36.0001 15.0002"
              stroke="white"
              strokeWidth="2.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36 35.0864L24.9052 25.0433L13.8105 15.0002"
              stroke="white"
              strokeWidth="2.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isMenuOpen && (
        <nav className="nav nav--mobile box-border h-full rounded-[32px] bg-gradient-to-b from-[#00A9FF] to-[#E5E5E5]">
          <ul className="flex flex-col justify-center items-center gap-[30px] list-none pl-[0]">
            <li className="text-center">
              <a href="#" className="nav__link text-[var(--color-font-primary)] text-[52px] no-underline">About me</a>
            </li>
            <li className="text-center">
              <a href="#" className="nav__link text-[var(--color-font-primary)] text-[52px] no-underline">My projects</a>
            </li>
            <li className="text-center">
              <a href="#" className="nav__link text-[var(--color-font-primary)] text-[52px] no-underline">Contacts</a>
            </li>
          </ul>
        </nav>
      )}

        <img src="/switcher.svg" className="switcher cursor-pointer" alt="theme-switcher" onClick={onToggleTheme}></img>
      </div>
    </header>
  )
}