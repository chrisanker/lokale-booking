import React from "react";

export function EquipmentList() {
    const assets = ["Conference Phone", "Projector", "Surface Hub", "Video Camera"];
    const listAssets = assets.map((asset) =>
        <div key={asset.toString()} className={"equipment-list-container"}>
            <label>{asset}</label>
            <input type={"checkbox"}/>
        </div>
    );

    return (
        <React.Fragment>
            <h2>Ledigt Udstyr</h2>
            <div >
                <ul >{listAssets}</ul>
            </div>
        </React.Fragment>
    )
}
