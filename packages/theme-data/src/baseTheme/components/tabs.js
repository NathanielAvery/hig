import {
  COLOR,
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LENGTH,
  LINE_HEIGHT,
  SPACING
} from "../../consts/types";

export default {
  // General
  "tabs.general.wrapper.horizontalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.extraLarge" }
  },
  "tabs.general.tab.fontFamily": {
    type: FONT_FAMILY,
    value: { ref: "basics.fontFamilies.main" }
  },
  "tabs.general.tab.fontSize": {
    type: FONT_SIZE,
    value: { ref: "typography.body.fontSize" }
  },
  "tabs.general.tab.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.regular" }
  },
  "tabs.general.tab.active.fontWeight": {
    type: FONT_WEIGHT,
    value: { ref: "basics.fontWeights.bold" }
  },
  "tabs.general.tab.lineHeight": {
    type: LINE_HEIGHT,
    value: { ref: "typography.body.lineHeight" }
  },
  "tabs.general.tab.gutter": {
    type: SPACING,
    value: { ref: "density.spacings.extraExtraLarge" }
  },
  "tabs.general.halo.size": {
    type: LENGTH,
    value: { ref: "basics.borderWidths.medium" }
  },
  "tabs.general.halo.color": {
    type: COLOR,
    value: { ref: "colorScheme.accentColor" },
    transform: { alpha: 0.35 }
  },

  // Underline
  "tabs.underline.wrapper.borderBottomColor": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.35 }
  },
  "tabs.underline.wrapper.borderBottomWidth": {
    type: BORDER_WIDTH,
    value: { ref: "basics.borderWidths.small" }
  },
  "tabs.underline.tab.paddingBottom": {
    type: LENGTH,
    value: { ref: "density.spacings.extraExtraSmall" }
  },
  "tabs.underline.halo.hover.color": {
    type: COLOR,
    value: { ref: "colorScheme.baseColor" },
    transform: { alpha: 0.85 }
  },
  "tabs.underline.halo.active.color": {
    type: COLOR,
    value: { ref: "colorScheme.accentColor" }
  },

  // Box
  "tabs.box.wrapper.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel250Color" }
  },
  "tabs.box.wrapper.borderRadius": {
    type: BORDER_RADIUS,
    value: { ref: "basics.borderRadii.large" }
  },
  "tabs.box.wrapper.verticalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.medium" }
  },
  "tabs.box.tab.horizontalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.small" }
  },
  "tabs.box.tab.verticalPadding": {
    type: LENGTH,
    value: { ref: "density.spacings.extraSmall" }
  },
  "tabs.box.tab.active.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel100Color" }
  },
  "tabs.box.tab.hover.backgroundColor": {
    type: COLOR,
    value: { ref: "colorScheme.surfaceLevel100Color" },
    transform: { alpha: 0.5 }
  },
  "tabs.box.divider.color": {
    type: COLOR,
    value: { ref: "divider.heavyColor" }
  },
  "tabs.box.divider.width": {
    type: LENGTH,
    value: { ref: "divider.width" }
  },
  "tabs.box.divider.height": {
    type: LENGTH,
    value: "18px"
  }
};
