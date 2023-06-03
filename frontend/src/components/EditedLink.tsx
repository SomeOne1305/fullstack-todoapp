import React from "react";
import { useNavigate} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

type Props = {
  to: string;
  children: React.ReactNode[] | React.ReactNode;
};

const EditedLink = ({ to, children }: Props) => {
  const [progress, setProgress] = React.useState<number>(0);
  const navigate = useNavigate()
  const handleClick = () =>{
    const timer = setInterval(() => {
      setProgress((prevProgress: number) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          navigate(to);
        }
        return prevProgress + 20;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }
  return (
    <>
      <a className="icon-link default mb-2" onClick={()=>handleClick()}>{children}</a>
      <LoadingBar
        background="transparent"
        shadow={true}
        height={3}
        loaderSpeed={2}
        color="#0B5ED7"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
};

export default EditedLink;
