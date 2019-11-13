import React from "react";
import proptypes, { InferProps } from "prop-types";
import { Icon, Image } from "semantic-ui-react";

export default function Header({
  onOpenMenu
}: InferProps<typeof Header.propTypes>) {
  return (
    <div
      style={{
        boxShadow: "0px 0px 3px 0px gray",
        paddingLeft: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        height: "40px"
      }}
    >
      <Icon name="bars" size="large" onClick={() => onOpenMenu()} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexGrow: 10
        }}
      >
        <Image src="/images/game-of-thrones-logo.png" size="small" />{" "}
      </div>
    </div>
  );
}

Header.propTypes = {
  onOpenMenu: proptypes.func.isRequired
};
