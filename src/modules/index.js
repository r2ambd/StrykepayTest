import userRoutes from "./users/user.routes";
import trackRoutes from "./Dashboard/track.routes";
export default app => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/track", trackRoutes);
};
