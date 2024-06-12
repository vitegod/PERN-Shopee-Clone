import { useRouteLoaderData } from "react-router-dom";

import InlineErrorPage from "../InlineErrorPage/InlineErrorPage";
import InlineLink from "../InlineLink/InlineLink";
import { OrdersHistory } from "../../features/orders/OrdersHistory";
import utilStyles from "../../App/utilStyles.module.css";


export default function AccountPage() {
  // https://reactrouter.com/en/main/hooks/use-route-loader-data
  const authData = useRouteLoaderData("app");

  if (!authData.logged_in) {
    return <InlineErrorPage pageName="Your account" type="login_required" />;
  }

  return (
    <div className={utilStyles.pagePadding}>
      <h1 className={utilStyles.h1}>Trang cá nhân</h1>
      <p>Bạn đang đăng nhập với email: <span className={utilStyles.email}>{authData.email_address}</span>. 🌈</p>
      <p className={utilStyles.mb3rem}>
        Theo dõi các sản phẩm đang có trong giỏ hàng tại <InlineLink path="/cart" anchor="Giỏ hàng" />.
      </p>
      <h2>Danh sách đơn đặt hàng</h2>
      <OrdersHistory />
    </div>
  );
}
