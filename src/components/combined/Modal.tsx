import { useState } from "react";
import Button from "../Button";
import { Colors } from "../Colors";
interface Props {
    btnColor: Colors;
    btnText: string;
    mdlTitle: string;
    mdlContent: JSX.Element;
    mdlBtnYes?: string;
    mdlBtnNo?: string;
    onBtnYesClicked: () => void;
}

export default function Modal(props: Props) {
    const [visible, setVisablility] = useState<boolean>(false);
    return (
        <>
            <Button
                color={props.btnColor}
                text={props.btnText}
                key={1}
                onClick={() => setVisablility(true)}
            ></Button>

            <div
                className="modal"
                style={{ display: visible ? "block" : "none" }}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">
                                {props.mdlTitle}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setVisablility(false)}
                            ></button>
                        </div>
                        <div className="modal-body">{props.mdlContent}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => setVisablility(false)}
                            >
                                {props.mdlBtnNo ? props.mdlBtnNo : "Cancel"}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    props.onBtnYesClicked();
                                    setVisablility(false);
                                }}
                                className="btn btn-primary"
                            >
                                {props.mdlBtnYes ? props.mdlBtnYes : "Yes"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
