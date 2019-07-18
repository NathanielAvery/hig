import React from "react";
import PropTypes from "prop-types";
import Typography from "@hig/typography";
import ThemeContext from "@hig/theme-context";
import { css } from "emotion";
import { variants, AVAILABLE_VARIANTS } from "../constants";
import stylesheet from "./TabPresenter.stylesheet";

/**
 * @typedef {Object} TabPresenterProps
 * @property {boolean} [active]
 * @property {string} label
 * @property {Function} [onClick]
 * @property {Function} [onKeyDown]
 */

/**
 * @param {TabPresenterProps} props
 * @returns {JSX.Element}
 */
export default function TabPresenter({
  active,
  hasFocus,
  hasHover,
  isPressed,
  label,
  variant,
  onBlur,
  onFocus,
  onClick,
  onKeyDown,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseUp
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { active, hasFocus, hasHover, isPressed, label, variant },
          resolvedRoles
        );

        return (
          <li className={css(styles.tab)}>
            <div
              onBlur={onBlur}
              onFocus={onFocus}
              onClick={onClick}
              onKeyDown={onKeyDown}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              role="button"
              tabIndex="0"
              className={css(styles.wrapper)}
            >
              <Typography className={css(styles.label)}>{label}</Typography>
              <div className={css(styles.halo)} />
              {variant === variants.BOX && (
                <div className={css(styles.divider)} />
              )}
            </div>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
}

TabPresenter.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  isPressed: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func
};
