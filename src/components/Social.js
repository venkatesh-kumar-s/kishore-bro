import { Tooltip } from "@mui/material";
import React from "react";
import { SocialNetworks } from "../data/social";

const Social = () => {
  return (
    <div className="d-flex">
      <p className="text-nowrap d-none d-md-block m-auto me-3">
        React out to me @{" "}
      </p>
      {SocialNetworks?.map((r, i) => (
        <Tooltip key={i} title={r?.alt}>
          <a
            className="mx-2 mx-md-1"
            href={
              r?.email
                ? "mailto:kishore.natte@chy.iith.ac.in"
                : r?.mobile
                ? "tel:+914023016257"
                : r?.url
            }
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={r?.image}
              alt={r?.alt}
              style={{ objectFit: "contain", width: 20, marginRight: 5 }}
            />
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

export default Social;
