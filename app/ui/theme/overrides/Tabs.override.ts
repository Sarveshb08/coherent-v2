import { Components } from '@mui/material/styles';
import { colors, tabsSizes, tabsTypography } from '../../design-tokens';

export const TabsOverrides: Components['MuiTabs'] = {
  styleOverrides: {
    root: {
      minHeight: `${tabsSizes.minHeight}px`,
    },
    indicator: {
      backgroundColor: colors.tabs.indicator,
      height: `${tabsSizes.indicatorHeight}px`,
      
      // Vertical indicator
      '&.MuiTabs-indicator': {
        width: `${tabsSizes.indicatorHeight}px`,
      },
    },
    scrollButtons: {
      color: colors.tabs.scrollButton,
      width: `${tabsSizes.scrollButtonWidth}px`,
      
      '&.Mui-disabled': {
        color: colors.tabs.scrollButtonDisabled,
      },
    },
    flexContainer: {
      // Ensure proper alignment for different variants
      '&.MuiTabs-flexContainer': {
        alignItems: 'stretch',
      },
    },
  },
};

export const TabOverrides: Components['MuiTab'] = {
  styleOverrides: {
    root: {
      fontFamily: tabsTypography.fontFamily,
      fontSize: tabsTypography.fontSize,
      fontWeight: tabsTypography.fontWeight,
      lineHeight: tabsTypography.lineHeight,
      textTransform: tabsTypography.textTransform,
      minHeight: `${tabsSizes.minHeight}px`,
      padding: tabsSizes.padding,
      color: colors.tabs.textInactive,
      
      '&:hover': {
        color: colors.primary.main,
        backgroundColor: colors.primary.hover,
      },
      
      '&.Mui-selected': {
        color: colors.tabs.textActive,
        fontWeight: 600, // Semi-bold for active state
      },
      
      '&.Mui-focusVisible': {
        backgroundColor: colors.primary.focus,
      },
      
      '&.Mui-disabled': {
        color: colors.text.disabled,
      },
    },
    
    // Icon positioning
    iconWrapper: {
      marginBottom: `${tabsSizes.gap}px`,
      
      '&.MuiTab-iconWrapper': {
        fontSize: `${tabsSizes.iconSize}px`,
      },
    },
  },
};
