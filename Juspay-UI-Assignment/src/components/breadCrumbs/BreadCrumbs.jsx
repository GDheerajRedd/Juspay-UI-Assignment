import { useLocation } from "react-router-dom";
import BreadCrumbsStyled from "./BreadCrumbsStyled";

const BreadCrumbs = ({ isDarkMode, separator = "/" }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <BreadCrumbsStyled.NavbarCrumbsLink
        isDarkMode={isDarkMode}
        style={{ opacity: "0.6" }}
      >
        Dashboard
      </BreadCrumbsStyled.NavbarCrumbsLink>
      <BreadCrumbsStyled.NavbarCrumbs
        isDarkMode={isDarkMode}
        style={{ opacity: "0.6" }}
      >
        {separator}
      </BreadCrumbsStyled.NavbarCrumbs>
      <BreadCrumbsStyled.NavbarCrumbs
        isDarkMode={isDarkMode}
        style={{ color: isDarkMode ? "#FFFFFF" : "" }}
      >
        Default
      </BreadCrumbsStyled.NavbarCrumbs>
    </>
  );
};

export default BreadCrumbs;
