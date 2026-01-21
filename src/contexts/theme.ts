import IconSun from "/images/icon-sun.svg";
import MoonIcon from "/images/icon-moon.svg";

export const themeConfig = {
  light: {
    name: "light",
    layout: {
      heroClass: 'theme-light',
      backgroundColor: "bg-neutral-very-light-grayish-blue",
      textColor: "text-neutral-dark-grayish-blue",
    },
    todo: {
      backgroundColor: "bg-neutral-very-light-gray",
      borderColor: "border-neutral-very-light-grayish-blue",
      textColor: "text-neutral-very-dark-grayish-blue",
    },
    icon: MoonIcon,
  },
  dark: {
    name: "dark",
    layout: {
      heroClass: 'theme-dark',
      backgroundColor: "bg-neutral-very-dark-blue",
      textColor: "text-neutral-very-dark-grayish-blue",
    },
    todo: {
      backgroundColor: "bg-neutral-very-dark-desaturated-blue",
      borderColor: "border-neutral-very-dark-grayish-blue",
      textColor: "text-neutral-light-grayish-blue",
    },
    icon: IconSun,
  },
};
