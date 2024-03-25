import {PAGE_ROUTE, PRICE_PLAN_PAGE_ROUTE, PRODUCT_PAGE_ROUTE,} from "./constants-route";
import {ProductsPage} from "../pages/products";
import {Page} from "../pages/page";
import {PricePlanePage} from "../pages/price-plane";

export const publicRoutes = [
  {
    path: PRODUCT_PAGE_ROUTE,
    Component: ProductsPage,
  },
  {
    path: PAGE_ROUTE,
    Component: Page,
  },
  {
    path: PRICE_PLAN_PAGE_ROUTE,
    Component: PricePlanePage,
  }
];