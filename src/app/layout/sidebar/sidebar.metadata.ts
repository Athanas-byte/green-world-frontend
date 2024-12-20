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
      path: "hr",
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
          path: "./hr/staffrecords",
          title: "Staff Records",
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
          path: "./hr/staffcompensation",
          title: "Salaries",
          moduleName: "HumanResourceModuleModule",
          icon: "arrow_right_alt", // Correct icon name
          class: "",
          groupTitle: false,
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: []
        },
        {
          path: "./hr/careers",
          title: "Careers",
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
      path: "supplychain",
      title: "Logistics",
      moduleName: "LogisticsModuleModule",
      icon: "local_shipping",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./logistics/orders",
          title: "Orders",
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
          path: "./logistics/expenses",
          title: "Warehouse",
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
          path: "./logistics/trips",
          title: "Shipment",
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
      path: "inventory",
      title: "Inventory",
      moduleName: "InventoryModuleModule",
      icon: "inventory",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: [
        {
          path: "./inventory/products",
          title: "Products",
          moduleName: "InventoryModuleModule",
          icon: "arrow_right_alt",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./inventory/WIP",
          title: "WIP",
          moduleName: "InventoryModuleModule",
          icon: "arrow_right_alt",
          class: "",
          badge: "",
          badgeClass: "",
          role: ["ADMIN"],
          submenu: [],
          groupTitle: false
        },

        {
          path: "./logistics/income",
          title: "",
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
      path: "masterdata/home",
      title: "Masterdata",
      moduleName: "MasterdataModuleModule",
      icon: "view_list",
      class: "",
      groupTitle: false,
      badge: "",
      badgeClass: "",
      role: ["ADMIN"],
      submenu: []
    },
  ];
  