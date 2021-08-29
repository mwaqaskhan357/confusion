import LoadingComponent from "./LoadingComponent";
import { Stagger, Fade } from "react-animation-components";
import RenderLeader from "./RenderLeader";

export const Leaders = ({ isLoading, errorMessage, leaders }) => {
  if (isLoading) {
    return <LoadingComponent />;
  } else if (errorMessage) {
    return <h4>{errorMessage}</h4>;
  } else {
    return (
      <Stagger in>
        {leaders?.map((leader) => (
          <Fade in>
            <RenderLeader leader={leader} />
          </Fade>
        ))}
      </Stagger>
    );
  }
};
