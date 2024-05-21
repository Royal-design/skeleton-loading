import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.scss";

export const SkeletonUser = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-left">
        <Skeleton circle className="skeleton-circle" />
      </div>
      <div className="skeleton-right">
        <Skeleton count={4} style={{ marginBottom: "0.6rem" }} />
      </div>
    </div>
  );
};
