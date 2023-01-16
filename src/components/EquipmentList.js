import React from "react";

export function EquipmentList() {
    const assets = ["Conference Phone", "Projector", "Surface Hub", "Video Camera"];
    const listAssets = assets.map((assets) =>
        <li>{assets}</li>
    );

    return (
        <React.Fragment>
            <h2>Ledigt Udstyr</h2>
            <ul>{listAssets}</ul>
        </React.Fragment>
    )
}
