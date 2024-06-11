import Button from "../Button";
import { useState } from "react";
import { Colors } from "../Colors";
interface Props {
    title: string;
    content: string;
    pos: "start" | "end" | "bottom" | "top";
    btnColor: Colors;
    btnText: string;
}

export default function Offcanvas(props: Props) {
    const [closeState, setClose] = useState<string>("");
    return (
        <>
            <Button
                color={props.btnColor}
                text={props.btnText}
                key={1}
                onClick={() => setClose("show")}
            ></Button>
            <div
                className={`offcanvas offcanvas-${props.pos} ${closeState}`}
                id="offcanvas"
                aria-labelledby="offcanvasLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">
                        {props.title}
                    </h5>
                    <button
                        type="button"
                        onClick={() => setClose("")}
                        className="btn-close"
                    ></button>
                </div>
                <div className="offcanvas-body">{props.content}</div>
            </div>
        </>
    );
}
