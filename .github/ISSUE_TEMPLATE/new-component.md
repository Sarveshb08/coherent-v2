---
name: New component
about: Adding new design component in coherent-v2 design system
title: ''
labels: design, new-component
assignees: ''

---

## Overview
Create a reusable [] component for the Coherent-v2 design system, following the latest Figma design guidelines and system requirements.

## Requirements
- Implement the [] component using TypeScript, Tailwind CSS, and Material-UI.
- Fetch and apply relevant design tokens added in the theme.ts for MUI theme provider.
- The [] component should support:
  - Primary, secondary, and disabled states
  - Responsive sizing and proper focus/hover/active states
  - Accessibility best practices (ARIA, keyboard navigation)
- Add clear documentation for props, usage, and available variants.
- Provide Storybook stories for all states and variants.
- If the current theme is not sufficient, required design tokens can be added following a standard nomenclature and also modify the augmentation.ts to add the new tokens in MUI default theme.

## Design Reference
- Figma design: [Coherent-v2 [] Component](https://figma.com/design/qsvxjZOgpBMl3cHsEzPe0L/Coherent-v2-design-system?node-id=6594-974380&t=dnjg6Eth0W1DsvD6-4)

## Acceptance Criteria
- [] component matches the Figma design and passes visual review.
- All props and variants documented.
- Storybook stories demonstrate all visual states.
