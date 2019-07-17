import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";
import ThemeContext from "@hig/theme-context";
import stylesheet from "./TabsPresenter.stylesheet";
import {
  AVAILABLE_ALIGNMENTS,
  alignments,
  AVAILABLE_VARIANTS,
  variants
} from "../constants";

export default function TabsPresenter({ align, variant, children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet({ align, variant }, resolvedRoles);

        return <ul className={css(styles.wrapper)}>{children}</ul>;
      }}
    </ThemeContext.Consumer>
  );
}

TabsPresenter.propTypes = {
  align: PropTypes.oneOf(AVAILABLE_ALIGNMENTS),
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  children: PropTypes.node
};

TabsPresenter.defaultProps = {
  align: alignments.LEFT,
  variant: variants.UNDERLINE
};
