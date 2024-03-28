function extractClassName(sessionTitle) {
  if (sessionTitle.includes("Class 2022 Januar")) {
    return "2022-01";
  } else if (sessionTitle.includes("Class 2022 Februar")) {
    return "2022-02";
  } else if (sessionTitle.includes("Class 2022 März")) {
    return "2022-03";
  } else if (sessionTitle.includes("Class 2022 Maerz")) {
    return "2022-03";
  } else if (sessionTitle.includes("Class 2022 April")) {
    return "2022-04";
  } else if (sessionTitle.includes("Class 2022 Mai")) {
    return "2022-05";
  } else if (sessionTitle.includes("Class 2022 Juni")) {
    return "2022-06";
  } else if (sessionTitle.includes("Class 2022 Juli")) {
    return "2022-07";
  } else if (sessionTitle.includes("Class 2022 August")) {
    return "2022-08";
  } else if (sessionTitle.includes("Class 2022 September")) {
    return "2022-09";
  } else if (sessionTitle.includes("Class 2022 Oktober")) {
    return "2022-10";
  } else if (sessionTitle.includes("Class 2022 November")) {
    return "2022-11";
  } else if (sessionTitle.includes("Class 2022 Dezember")) {
    return "2022-12";
  } else if (sessionTitle.includes("Class 2023 Januar")) {
    return "2023-01";
  } else {
    return null;
  }
}
