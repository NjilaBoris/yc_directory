const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  CREATE_PITCH: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  PITCH: (id: string) => `/pitchs/${id}`,
  TAG: (id: string) => `/tags/${id}`,
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
};

export default ROUTES;
