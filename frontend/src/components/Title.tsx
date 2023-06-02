import React from "react";

type Props = {};

const Title = (props: Props) => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-between mt-2 pt-3 tit">
      <div>
        <h5 className="text-primary user-select-none">
          Created tasks:
          <span className="py-1 px-2 rounded-5 bg-white-50 h6 text-white">
            4
          </span>
        </h5>
      </div>
      <div>
        <h5 className="text-primary user-select-none">
          Done:
          <span className="py-1 px-2 rounded-5 bg-white-50 h6 text-white">
            2 out of 5
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Title;
