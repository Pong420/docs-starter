import React from 'react';
import DocPage from '@theme-original/DocPage';
import { createContext } from 'react';

/** @type {(SidebarItem)[] | null} */
const context = null;
export const SidebarContext = createContext(context);

export default function DocPageWrapper(props) {
  console.log('debug', props.versionMetadata.docsSidebars.tutorialSidebar);
  return (
    <SidebarContext.Provider value={props.versionMetadata.docsSidebars.tutorialSidebar}>
      <DocPage {...props} />
    </SidebarContext.Provider>
  );
}
