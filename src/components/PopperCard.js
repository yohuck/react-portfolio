import Popper from "./Popper";
import '../styles/Project.css'
import React from "react"

const styles = {
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 'var(--radius-3)',
    padding: 'var(--size-3)',
    boxShadow: 'var(--shadow-3)',
    border: 'var(--border-size-3) solid transparent',
    color: 'var(--violet-2)'
}

const PopperCard = () => {
    return(
        <article styles={styles} className="popperToy">
            <div className="top">
                <div className="info">
                    <h4>Popper Toy</h4>
                    <hr className="hrp"></hr>
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