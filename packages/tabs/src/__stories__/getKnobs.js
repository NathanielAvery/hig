import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { alignments, variants } from "../constants";

const alignmentOptions = makeSelectOptions(alignments);
const variantsOptions = makeSelectOptions(variants);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  align: "Alignment",
  variant: "Variant",
  onTabChange: "onTabChange"
};

export default function getKnobs(props) {
  const { align, variant, onTabChange, ...otherProps } = props;

  return {
    ...otherProps,
    align: select(
      knobLabels.align,
      alignmentOptions,
      align,
      knobGroupIds.basic
    ),
    variant: select(
      knobLabels.variant,
      variantsOptions,
      variant,
      knobGroupIds.basic
    ),
    onTabChange: action(knobLabels.onTabChange)
  };
}
