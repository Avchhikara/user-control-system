import Login from "./../components/Login";

export default function LoginPage() {
  return <Login />;
}

LoginPage.getInitialProps = async (ctx) => {
  // console.log(ctx.headers, ctx);
  const cookies =
    ctx.req &&
    ctx.req.headers &&
    ctx.req.headers.cookie &&
    ctx.req.headers.cookie.split("; ");
  let userId = "";
  if (cookies)
    cookies.forEach((element) => {
      const [key, value] = element.split("=");
      if (key === "userId") userId = value;
    });
  if (userId) {
    ctx.res.writeHead(302, { Location: "/dashboard" });
    ctx.res.end();
  }
  return { userId };
};
