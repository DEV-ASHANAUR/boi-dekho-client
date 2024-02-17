import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import Person2Icon from "@mui/icons-material/Person2";
import PublishIcon from "@mui/icons-material/Publish";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export const menuItem = [
  {
    label: "Dashboard",
    link: "",
    icon: <DashboardIcon />,
  },
  {
    label: "Manage User",
    link: "manage-user",
    icon: <Person2Icon />,
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
    link: "manage-book",
    icon: <LibraryBooksIcon />,
  },
  {
    label: "Manage Order",
    link: "manage-order",
    icon: <CardGiftcardIcon />,
  },
];
