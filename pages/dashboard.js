import Dashboard from "./../components/Dashboard";

export default function DashboardPage() {
  return <Dashboard />;
}

// Dashboard.getInitialProps = async (ctx) => {
// console.log(ctx.headers, ctx);
// Move all of this to Dashboard class component as it's not compatible with login redirection
// const cookies =
//   ctx.req &&
//   ctx.req.headers &&
//   ctx.req.headers.cookie &&
//   ctx.req.headers.cookie.split("; ");
// let userId = "";
// if (cookies)
//   cookies.forEach((element) => {
//     const [key, value] = element.split("=");
//     if (key === "userId") userId = value;
//   });
// if (!userId) {
//   ctx.res.writeHead(302, { Location: "/login" });
//   ctx.res.end();
// }
// return { "userId" };
// };
