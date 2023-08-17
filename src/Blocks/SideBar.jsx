import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

import Logo from '../Assets/amblem.svg'


import RectangleBarsLogo from '../Assets/rectangle-vertical-bars.svg'
import FileIcon from '../Assets/file-lines.svg'
import folder from '../Assets/folder.svg'
import Mail from '../Assets/envelope.svg'
import FileiconWithoutLines from '../Assets/file.svg'
import Filter from '../Assets/sliders.svg'
import Calender from '../Assets/calender-days-2.svg'


import Avatar from '../Assets/avatar.svg'

import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Analysis",
    icon: RectangleBarsLogo,
    
  },
  {
    path: "/users",
    name: "Muamele",
    icon: FileIcon,
  },
  {
    path: "/Option4",
    name: "Option 3",
    icon: folder,
  },
  {
    path: "/option5",
    name: "Option 4",
    icon: Mail,
  },
  {
    path: "/option6",
    name: "Option 5",
    icon: FileiconWithoutLines,
  },
  {
    path: "/option7",
    name: "Option 6",
    icon: Filter,
  },
  {
    path: "/option8",
    name: "Option 7",
    icon: Calender,
  },
  
  
  // {
  //   path: "/file-manager",
  //   name: "File Manager",
  //   icon: <AiTwotoneFileExclamation />,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
 
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "90px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="show"
                  animate="show"
                  exit="show"
                  className="logo"
                >
                  <center><img src={Logo} onClick={toggle}/></center>
                </motion.h1>
              )}
            </AnimatePresence>

                <center>

            <img src={Logo} onClick={toggle} />
                </center>
                {/* <div className="bars">

                <center><FaBars onClick={toggle} /></center>
            </div> */}
                
            
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              // if (route.subRoutes) {
              //   return (
              //     <SidebarMenu
              //       setIsOpen={setIsOpen}
              //       route={route}
              //       showAnimation={showAnimation}
              //       isOpen={isOpen}
              //     />
              //   );
              // }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <center>

                  <div className="icon"><img src={route.icon} className="dashboard-icon-style" /></div><p className="names-icon">{route.name}</p>
                  </center>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="show"
                        animate="show"
                        exit="show"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </NavLink>
                
              );
            })}
            <center>

            <img src={Avatar} className="avatar-style"/>
            </center>
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
