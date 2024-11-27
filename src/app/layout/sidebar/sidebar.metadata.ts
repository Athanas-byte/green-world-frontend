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
      path: "human-resource-module",
      title: "Human Resource",
      moduleName: "HumanResourceModuleModule",
      icon: "badge", // Correct icon name
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./human-resource-module/staffrecords",
          title: "Staff Rcords",
          icon: "arrow_right_alt",
          moduleName: "HumanResourceModuleModule",
          class: "",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: []
        },
        {
          path: "./human-resource-module/staffjourney",
          title: "Staff Journey",
          moduleName: "HumanResourceModuleModule",
          icon: "arrow_right_alt", // Correct icon name
          class: "",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: []
        },
      
      ]
    },

    {
      path: "supply-chain-module",
      title: "Supply Chain",
      moduleName: "SupplyChainModuleModule",
      icon: "local_shipping",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./supply-chain-module/summary",
          title: "Inventory",
          moduleName: "SupplyChainModuleModule",
          icon: "arrow_right_alt",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./supply-chain-module/expenses",
          title: "Logistics",
          moduleName: "SupplyChainModuleModule",
          icon: "arrow_right_alt",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./supply-chain-module/income",
          title: "Procurement",
          moduleName: "SupplyChainModuleModule",
          icon: "arrow_right_alt",
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
      path: "finance-module",
      title: "Finance",
      moduleName: "accounts",
      icon: "receipt_long",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./accounts/summary",
          title: "GL Codes",
          moduleName: "accounts",
          icon: "arrow_right_alt",
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
          icon: "arrow_right_alt",
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
          icon: "arrow_right_alt",
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
      title: "CRM & Sales",
      moduleName: "products",
      icon: "contact_mail",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./products/all-products",
          title: "Ads",
          moduleName: "products",
          icon: "arrow_right_alt",
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
          icon: "arrow_right_alt",
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
      path: "masterdata-module",
      title: "Masterdata",
      moduleName: "MasterdataModuleModule",
      icon: "view_list",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [

        {
          path: "./products/all-products",
          title: "Subsidiaries",
          moduleName: "products",
          icon: "arrow_right_alt",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./masterdata-module/warehouses",
          title: "Warehouses",
          moduleName: "products",
          icon: "arrow_right_alt",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./products/orders",
          title: "Suppliers",
          moduleName: "products",
          icon: "arrow_right_alt",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./products/orders",
          title: "Vehicles",
          moduleName: "products",
          icon: "arrow_right_alt",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },



      ]
    },
  ];
  