const DisplayResults = (web = false) => {
  if (web) {
    return "This is Displayed in Web";
  } else {
    return "This is Displayed in Mobile App";
  }
};

export { DisplayResults };
