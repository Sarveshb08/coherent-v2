import React from 'react';
import { Tabs as MuiTabs, Tab as MuiTab, Box } from '@mui/material';
import clsx from 'clsx';
import { TabsProps, TabPanelProps } from './types';

/**
 * TabPanel component for displaying tab content
 */
export const TabPanel: React.FC<TabPanelProps> = ({ 
  children, 
  value, 
  index, 
  className,
  ...props 
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={clsx(className)}
      {...props}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

/**
 * Helper function to generate accessibility props for tabs
 */
function a11yProps(index: string | number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

/**
 * Tabs component using MUI with theme-based styling to match Figma design
 * Leverages MUI's built-in capabilities with minimal customization
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  variant = 'standard',
  orientation = 'horizontal',
  centered = false,
  scrollButtons = 'auto',
  allowScrollButtonsMobile = false,
  value,
  onChange,
  className,
  showPanels = true,
  PanelComponent = TabPanel,
  ...props
}) => {
  // Convert variant to MUI's expected props
  const getMuiVariant = () => {
    if (variant === 'scrollable') return 'scrollable';
    if (variant === 'fullWidth') return 'fullWidth';
    return 'standard';
  };

  // Handle scroll buttons configuration
  const getScrollButtonsConfig = () => {
    if (variant !== 'scrollable') return undefined;
    return scrollButtons;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box 
        sx={{ 
          borderBottom: orientation === 'horizontal' ? 1 : 0, 
          borderRight: orientation === 'vertical' ? 1 : 0,
          borderColor: 'divider',
          display: orientation === 'vertical' ? 'flex' : 'block',
        }}
      >
        <MuiTabs
          orientation={orientation}
          variant={getMuiVariant()}
          value={value}
          onChange={onChange}
          centered={orientation === 'horizontal' && variant === 'standard' ? centered : false}
          scrollButtons={getScrollButtonsConfig()}
          allowScrollButtonsMobile={variant === 'scrollable' ? allowScrollButtonsMobile : undefined}
          className={clsx(className)}
          sx={{
            flexShrink: 0,
            ...(orientation === 'vertical' && {
              borderRight: 1,
              borderColor: 'divider',
              minWidth: '200px',
            }),
          }}
          {...props}
        >
          {tabs.map((tab) => (
            <MuiTab
              key={tab.value}
              label={tab.label}
              value={tab.value}
              icon={tab.icon}
              disabled={tab.disabled}
              {...a11yProps(tab.value)}
            />
          ))}
        </MuiTabs>
        
        {/* Tab Panels */}
        {showPanels && (
          <Box sx={{ flex: 1 }}>
            {tabs.map((tab) => (
              <PanelComponent 
                key={tab.value} 
                value={value} 
                index={tab.value}
              >
                {tab.content}
              </PanelComponent>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Tabs;
