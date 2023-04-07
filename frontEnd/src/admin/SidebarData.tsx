import * as FaIcons from "react-icons/fa";

type SidebarDataProps = {
title : string,
path:string,
icon: string | any
}

 export const SidebarData : SidebarDataProps[]=[
  {
    title: "Product",
    path: "products",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Summary",
    path: "summary",
    icon: <FaIcons.FaGit />,
  },
]