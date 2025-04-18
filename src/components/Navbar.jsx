"use client"

import { useState, useEffect } from "react"
import logo from "../../public/logo.svg"
import Image from "next/image"

const Navbar = ({ aboutRef, projectsRef, contactRef }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const scrollingUp = prevScrollPos > currentScrollPos

      // Update visibility and scroll state together for symmetrical animation
      if (scrollingUp) {
        setVisible(true)
        // Small delay before expanding width when scrolling up
        setTimeout(() => setIsScrolled(false), 50)
      } else {
        // First shrink width, then hide when scrolling down
        setIsScrolled(true)
        setTimeout(() => setVisible(false), 50)
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={`fixed w-full z-50 px-6 transition-all duration-1000 ease-in-out
        ${visible ? "translate-y-[18px]" : "-translate-y-full"}`}
    >
      <div
        className={`mx-auto flex justify-between items-center py-3 sm:py-0 pl-[26px] pr-4 
        bg-[#8C8C8C29] rounded-full backdrop-blur-md transition-all duration-1000 ease-in-out
        ${isScrolled ? "sm:max-w-[400px] max-w-[250px]" : "sm:max-w-[613px] max-w-full"}`}
      >
        <div>
          <Image src={logo || "/placeholder.svg"} alt="logo" className="h-5 w-auto" />
        </div>
        <div className="hidden sm:block">
          <ul className="flex">
            <li
              onClick={() => scrollToSection(aboutRef)}
              className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer hover:text-white transition-colors"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection(projectsRef)}
              className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer hover:text-white transition-colors"
            >
              Works
            </li>
            <li
              onClick={() => scrollToSection(contactRef)}
              className="px-4 py-3 text-[#FFFFFFB2] cursor-pointer hover:text-white transition-colors"
            >
              Contact
            </li>
          </ul>
        </div>

        <div className="sm:hidden flex gap-[10px] items-center">
          {/* facebook */}
          <a
            href="https://www.facebook.com/fojla.tuhin"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                fill="white"
              />
            </svg>
          </a>
          {/* linkedin  */}
          <a
            href="https://www.linkedin.com/in/fojle-tuhin"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

