import { useEffect } from "react";

const useSidebarToggle = (sidebarMenuBtnId: string, sidebarId: string) => {
  useEffect(() => {
    const sidebarMenuBtn = document.getElementById(sidebarMenuBtnId);
    const sidebar = document.getElementById(sidebarId);

    // Check if sidebar and sidebarMenuBtn are not null
    if (sidebar && sidebarMenuBtn) {
      const showSidebar = () => {
        // console.log("showSidebar function called"); //

        // Move the sidebar-menu-btn 5rem to the right and flip its image
        sidebarMenuBtn.style.transform = "translateX(145px) scaleX(-1)";
        sidebarMenuBtn.style.transition =
          "0.5s cubic-bezier(0.0, 0.0, 0.2, 1), transform 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)";

        sidebar.style.transform = "translateX(0)"; // Show the sidebar by moving it to its original position
        sidebar.style.visibility = "visible";
        sidebar.style.opacity = "1";
      };

      const hideSidebar = () => {
        // Reset the sidebar-menu-btn position and flip its image
        sidebarMenuBtn.style.transform = "translateX(0) scaleX(1)";
        sidebarMenuBtn.style.transition =
          "0.5s cubic-bezier(0.0, 0.0, 0.2, 1), transform 0.5s cubic-bezier(0.0, 0.0, 0.2, 1);";

        sidebar.style.transform = "translateX(-100%)"; // Hide the sidebar by moving it off-screen to the left
        // sidebar.style.visibility = "hidden";
        sidebar.style.opacity = "0";
        sidebar.style.transition =
          "0.5s cubic-bezier(0.0, 0.0, 0.2, 1), transform 0.5s cubic-bezier(0.0, 0.0, 0.2, 1);";
      };

      sidebarMenuBtn.addEventListener("mouseenter", showSidebar);
      sidebar.addEventListener("mouseleave", hideSidebar);

      return () => {
        sidebarMenuBtn.removeEventListener("mouseenter", showSidebar);
        sidebar.removeEventListener("mouseleave", hideSidebar);
      };
    }
  }, [sidebarMenuBtnId, sidebarId]);
};

export default useSidebarToggle;
