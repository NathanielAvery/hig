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
        backgroundColor: themeData["tabs.general.halo.color"],
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
  } else if (variant === variants.BOX) {
    styles = {
      ...styles,
      top: 0,
      width: "100%",
      backgroundColor: themeData["tabs.general.halo.color"]
    };

    if (hasFocus) {
      styles.height = themeData["tabs.general.halo.size"];
    }
  }

  return styles;
}

function getTabBackground({ active, hasHover, isPressed, variant }, themeData) {
  if (variant === variants.UNDERLINE) {
    return "transparent";
  }
  if (active || isPressed) {
    return themeData["tabs.box.tab.active.backgroundColor"];
  }
  if (hasHover) {
    return themeData["tabs.box.tab.hover.backgroundColor"];
  }
  return "transparent";
}

export default function stylesheet(
  { active, hasHover, hasFocus, isPressed, label, variant },
  themeData
) {
  return {
    tab: {
      position: "relative",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      margin: `0 ${themeData["tabs.general.tab.gutter"]} 0 0`,
      "&:last-of-type": {
        marginRight: 0
      }
    },
    wrapper: {
      position: "relative",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      cursor: "pointer",
      userSelect: "none",
      transitionDuration: "0.3s",
      transitionProperty: "background-color",

      "&:focus": {
        outline: "none"
      },

      ...(variant === variants.UNDERLINE && {
        marginBottom: `-${
          themeData["tabs.underline.wrapper.borderBottomWidth"]
        }`,
        padding: `0 0 ${themeData["tabs.underline.tab.paddingBottom"]} 0`
      }),

      ...(variant === variants.BOX && {
        padding: `${themeData["tabs.box.tab.verticalPadding"]} ${
          themeData["tabs.box.tab.horizontalPadding"]
        }`,
        backgroundColor: getTabBackground(
          { active, hasHover, isPressed, variant },
          themeData
        )
      })
    },
    label: {
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
    ),
    divider: {
      display: variant === variants.BOX ? "block" : "none",
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      height: themeData["tabs.box.divider.height"],
      width: themeData["tabs.box.divider.width"],
      backgroundColor:
        hasHover || active ? "transparent" : themeData["tabs.box.divider.color"]
    }
  };
}
