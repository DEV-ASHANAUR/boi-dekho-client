import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import Person2Icon from "@mui/icons-material/Person2";
import PublishIcon from "@mui/icons-material/Publish";

export const menuItem = [
  {
    label: "Dashboard",
    link: "",
    icon: <DashboardIcon />,
  },
  {
    label: "Manage Publisher",
    link: "manage-publisher",
    icon: <PublishIcon />,
  },
  {
    label: "Manage Author",
    link: "manage-author",
    icon: <Person2Icon />,
  },
  {
    label: "Manage Category",
    link: "manage-category",
    icon: <CategoryIcon />,
  },
  {
    label: "Manage SubCategory",
    link: "manage-sub-category",
    icon: <CategoryIcon />,
  },
  {
    label: "Manage Book",
    link: "manage-product",
    icon: <LibraryBooksIcon />,
  },
];
