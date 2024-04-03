import React from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function Card({ item }) {
  return (
    <div className="col mt-3 mb-3 bg-primary">
      <div className="card sm-2 rounded-3 shadow-sm w-3 h-5">
        <div className="card-header text-center ">
          <h4 className="my-0 fw-normal text-secondary">{item.plan}</h4>
          <h1 className="card-title pricing-card-title">
            ${item.fee}/month
          </h1>
        </div>
        <div className="card-body ml-4" >
          <ul className="list-unstyled mt-5 mb-5">
            {item.features.map((ftr, index) => {
              return (
                <li key={index}>
                  {ftr.enabled ? (
                    <>
                      <span>
                        <TiTick />
                        <b>{ftr.name}</b>
                      </span>
                    </>
                  ) : (
                    <>
                      <ImCross size={9} />
                      <span className="link-secondary text-decoration-none">
                        {" "}
                        {ftr.name}
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg btn-primary ${
              item.button ? "btn-primary" : "btn btn-primary btn-lg disabled"
            }`}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
