import '@docusaurus/types';

// https://docusaurus.io/docs/sidebar/items#sidebar-item-category
type SidebarItem = {
  docId: string;
  type: string;
  label: string; // Sidebar label text.
  items: SidebarItem[]; // Array of sidebar items.
  className?: string;

  // Category options:
  collapsible: boolean; // Set the category to be collapsible
  collapsed: boolean; // Set the category to be initially collapsed or open by default
  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;
};
