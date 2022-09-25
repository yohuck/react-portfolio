import Popper from "./Popper";
import React from "react"

const PopperCard = () => {
    return(
        <article className="pop">
            <div className="top">
                <div className="info">
                    <h4>Popper Toy</h4>
                    <hr></hr>
                    <div className="grp">
                        <a target='blank' href="https://codepen.io/yohuck/pen/bGaLKaW">Codepen</a>
                    </div>
                </div>
            </div>
            <Popper />
        </article>
    )
}

export default PopperCard