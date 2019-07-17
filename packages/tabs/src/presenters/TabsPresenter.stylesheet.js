import { alignments, variants } from "../constants";

export default function stylesheet({ align, variant }, themeData) {
  const justifyContent = {
    [alignments.LEFT]: "flex-start",
    [alignments.CENTER]: "center",
    [alignments.RIGHT]: "flex-end"
  };

  return {
    wrapper: {
      boxSizing: "border-box",
      flexGrow: 1,
      display: "flex",
      padding: `${
        variant === variants.BOX
          ? themeData["tabs.box.wrapper.verticalPadding"]
          : 0
      } ${themeData["tabs.general.wrapper.horizontalPadding"]}`,
      margin: 0,
      justifyContent: justifyContent[align],
      borderBottom:
        variant === variants.UNDERLINE
          ? `${themeData["tabs.underline.wrapper.borderBottomWidth"]} solid ${
              themeData["tabs.underline.wrapper.borderBottomColor"]
            }`
          : 0,
      borderRadius:
        variant === variants.BOX
          ? themeData["tabs.box.wrapper.borderRadius"]
          : 0,
      backgroundColor:
        variant === variants.BOX
          ? themeData["tabs.box.wrapper.backgroundColor"]
          : "transparent"
    }
  };
}
