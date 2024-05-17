import { Colors } from "./Colors.tsx";
import { useState } from "react";

export interface AlertElement {
    closable: boolean;
    text: JSX.Element;
    color: Colors;
}

export default function AlertBox(alert: AlertElement) {
    const [showAlert, setShowAlert] = useState<boolean>(true);
    const handleClose = (): void => {
        setShowAlert(false);
    };
    const className = function (color: Colors): string {
        return `alert alert-${color}`;
    };

    return (
        <div style={{ marginTop: "10px" }}>
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
                            onClick={handleClose}
                            aria-label="Close"
                        ></button>
                    </div>
                )
            )}
        </div>
    );
}
