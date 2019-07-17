import { variants } from "../constants";

function getHaloStyles(
  { active, hasHover, hasFocus, isPressed, variant },
  themeData
) {
  let styles = {
    position: "absolute",
    height: 0,
    transitionDuration: "0.3s",
    transitionProperty: "height, width"
    // transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
  };

  if (variant === variants.UNDERLINE) {
    styles = {
      ...styles,
      bottom: 0,
      width: "100%",
      backgroundColor: themeData["tabs.underline.halo.hover.color"],
      overflow: "visible",
      "&:after": {
        position: "absolute",
        top: "100%",
        backgroundColor: themeData["tabs.underline.halo.color"],
        content: `" "`,
        width: "100%",
        height: hasFocus ? themeData["tabs.general.halo.size"] : 0,
        transitionDuration: "0.3s",
        transitionProperty: "height"
      }
    };

    if (hasHover || active || isPressed) {
      styles = {
        ...styles,
        height: themeData["tabs.general.halo.size"],
        ...((active || isPressed) && {
          backgroundColor: themeData["tabs.underline.halo.active.color"]
        })
      };
    }
  }

  return styles;
}

export default function stylesheet(
  { active, hasHover, hasFocus, isPressed, label, variant },
  themeData
) {
  return {
    wrapper: {
      position: "relative",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      margin: `0 ${themeData["tabs.general.tab.gutter"]} 0 0`,
      marginBottom:
        variant === variants.UNDERLINE
          ? `-${themeData["tabs.underline.wrapper.borderBottomWidth"]}`
          : 0,
      cursor: "pointer",
      userSelect: "none",
      padding:
        variant === variants.UNDERLINE
          ? `0 0 ${themeData["tabs.underline.tab.paddingBottom"]} 0`
          : 0,

      "&:last-of-type": {
        marginRight: 0
      }
    },
    label: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      "&:focus": {
        outline: "none"
      }
    },
    text: {
      fontFamily: themeData["tabs.general.tab.fontFamily"],
      fontSize: themeData["tabs.general.tab.fontSize"],
      fontWeight: active
        ? themeData["tabs.general.tab.active.fontWeight"]
        : themeData["tabs.general.tab.fontWeight"],
      lineHeight: themeData["tabs.general.tab.lineHeight"],

      // keep same amount of space whether it's active (bold font weight)
      // or not active (regular font weight)
      "&:before": {
        display: "block",
        content: `"${label}"`,
        fontFamily: themeData["tabs.general.tab.fontFamily"],
        fontSize: themeData["tabs.general.tab.fontSize"],
        fontWeight: themeData["tabs.general.tab.active.fontWeight"],
        height: "0",
        color: "transparent",
        overflow: "hidden",
        visibility: "hidden"
      }
    },
    halo: getHaloStyles(
      { active, hasHover, hasFocus, isPressed, variant },
      themeData
    )
  };
}
