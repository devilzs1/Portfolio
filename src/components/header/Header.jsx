import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollHandler = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibleSection = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxVisibleSection = entry.target;
          }
        });

        if (maxVisibleSection) {
          setActiveNav(`#${maxVisibleSection.id}`);
        }
      },
      { threshold: 0.5 } // Section must be at least 50% visible to be active
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Adil
        </a>

        <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            {[
              { id: "home", icon: "uil uil-estate", text: "Home" },
              { id: "about", icon: "uil uil-user", text: "About" },
              { id: "skills", icon: "uil uil-file-alt", text: "Skills" },
              { id: "qualification", icon: "uil uil-file-alt", text: "Qualification" },
              { id: "portfolio", icon: "uil uil-scenery", text: "Portfolio" },
              { id: "certificate", icon: "uil uil-scenery", text: "Certificate" },
              { id: "contact", icon: "uil uil-message", text: "Message" },
            ].map((item) => (
              <li className="nav_item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActiveNav(`#${item.id}`)}
                  className={`nav_link ${activeNav === `#${item.id}` ? "active-link" : ""}`}
                >
                  <i className={`${item.icon} nav_icon`} />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)} />
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
