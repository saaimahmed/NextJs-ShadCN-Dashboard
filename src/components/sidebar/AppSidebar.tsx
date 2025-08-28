import AppSidebarHeader from "./AppSidebarHeader";
import AppSidebarFooter from "./AppSidebarFooter";
import { Sidebar } from "../ui/sidebar";
import AppSidebarContent from "./AppSidebarContent";

const AppSidebar = () => {
  return (
    <>
      <Sidebar collapsible="icon">
        {/* Header */}
        <AppSidebarHeader />
        {/* Content Menu Item with all System shadcn  */}
        <AppSidebarContent />

        {/* Footer */}
        <AppSidebarFooter />
      </Sidebar>
    </>
  );
};

export default AppSidebar;
