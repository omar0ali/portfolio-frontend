import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Colors } from "./Colors.tsx";
import { useState } from "react";

export interface AlertElement {
    closable: boolean;
    text: JSX.Element;
    color: Colors;
    show?: boolean;
}

export default function AlertBox(alert: AlertElement) {
    const [refresh] = useAutoAnimate<HTMLDivElement>();
    const [showAlert, setShowAlert] = useState<boolean>(true);
    const className = function (color: Colors): string {
        return `alert alert-${color}`;
    };

    return (
        <div
            ref={refresh}
            style={{
                display: alert.show ? "block" : "none",
            }}
        >
            {!alert.closable ? (
                <div className={className(alert.color)} role="alert">
                    {alert.text}
                </div>
            ) : (
                showAlert && (
                    <div
                        className={`${className(
                            alert.color
                        )} alert-dismissible fade show`}
                        role="alert"
                    >
                        <div>{alert.text}</div>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowAlert(false)}
                            aria-label="Close"
                        ></button>
                    </div>
                )
            )}
        </div>
    );
}
