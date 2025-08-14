import { TabsProps as MuiTabsProps, TabProps as MuiTabProps } from '@mui/material';

export type TabVariant = 'standard' | 'scrollable' | 'fullWidth';
export type TabOrientation = 'horizontal' | 'vertical';

export interface TabsData {
  /**
   * Label text for the tab
   */
  label: string;
  
  /**
   * Unique identifier for the tab
   */
  value: string | number;
  
  /**
   * Optional icon element for the tab
   */
  icon?: React.ReactElement;
  
  /**
   * Whether the tab is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Content to display in the tab panel
   */
  content?: React.ReactNode;
}

export interface TabsProps extends Omit<MuiTabsProps, 'variant' | 'children'> {
  /**
   * Array of tab data
   */
  tabs: TabsData[];
  
  /**
   * The visual variant of the tabs
   * @default 'standard'
   */
  variant?: TabVariant;
  
  /**
   * The orientation of the tabs
   * @default 'horizontal'
   */
  orientation?: TabOrientation;
  
  /**
   * Whether to center the tabs (for horizontal orientation)
   * @default false
   */
  centered?: boolean;
  
  /**
   * Whether tabs should scroll automatically with buttons
   * Only applies when variant is 'scrollable'
   * @default 'auto'
   */
  scrollButtons?: boolean | 'auto';
  
  /**
   * Allow scroll buttons on mobile
   * Only applies when variant is 'scrollable' and scrollButtons is true
   * @default false
   */
  allowScrollButtonsMobile?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Whether to show tab panels below the tabs
   * @default true
   */
  showPanels?: boolean;
  
  /**
   * Custom panel container component
   */
  PanelComponent?: React.ComponentType<{ children: React.ReactNode; hidden?: boolean; }>;
}

export interface TabPanelProps {
  /**
   * Content of the panel
   */
  children?: React.ReactNode;
  
  /**
   * The current active tab value
   */
  value: string | number;
  
  /**
   * The value of this panel
   */
  index: string | number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
