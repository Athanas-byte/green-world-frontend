export interface RouteInfo {
    path: string;
    title: string;
    moduleName: string;
    icon: string;
    class: string;
    groupTitle: boolean;
    badge: string;
    badgeClass: string;
    role: string[];
    submenu: RouteInfo[];
  }
  
  export const ROUTES: RouteInfo[] = [
    {
      path: "./admin/dashboard/home",
      icon: "dashboard", 
      moduleName: "dashboard",
      title: "Dashboard",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        // {
        //     path: "./admin/dashboard/home",
        //     icon: "home", 
        //     moduleName: "dashboard",
        //     title: "Home",
        //     class: "",
        //     groupTitle: false,
        //     badge: "",
        //     badgeClass: "",
        //     role: ["ADMIN"],
        //     submenu: []
        //   },
        // {
        //   path: "./admin/dashboard/employees",
        //   icon: "people",
        //   moduleName: "dashboard",
        //   title: "Employees",
        //   class: "",
        //   groupTitle: false,
        //   badge: "",
        //   badgeClass: "",
        //   role: ["ADMIN"],
        //   submenu: []
        // },
     
      ]
    },
    {
      path: "employees",
      title: "Employees",
      moduleName: "employees",
      icon: "people", // Correct icon name
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./employees/available-employees",
          title: "All Employees",
          moduleName: "employees",
          icon: "group", // Correct icon name
          class: "",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: []
        },
        {
          path: "./employees/employee-remunerations",
          title: "Remunerations",
          moduleName: "employees",
          icon: "arrow-right", // Correct icon name
          class: "",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: []
        },
        {
          path: "./employees/employee-profiles",
          title: "Profiles",
          moduleName: "employees",
          icon: "arrow right", // Correct icon name
          class: "",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: []
        }
      ]
    },
    {
      path: "accounts",
      title: "Accounts",
      moduleName: "accounts",
      icon: "money",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./accounts/summary",
          title: "Summary",
          moduleName: "accounts",
          icon: "plus",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./accounts/expenses",
          title: "Expenses",
          moduleName: "accounts",
          icon: "plus",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./accounts/income",
          title: "Income",
          moduleName: "accounts",
          icon: "plus",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

      ]
    },
    {
      path: "products",
      title: "Products",
      moduleName: "products",
      icon: "sale",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./products/all-products",
          title: "All products",
          moduleName: "products",
          icon: "plus",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./products/orders",
          title: "Orders",
          moduleName: "products",
          icon: "plus",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

      ]
    },
    {
      path: "sales",
      title: "Sales",
      moduleName: "sales",
      icon: "sale",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [

      ]
    },
  ];
  