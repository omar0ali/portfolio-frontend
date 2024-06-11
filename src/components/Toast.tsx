import { useEffect, useState } from "react";
//TODO: Try an intervial to show the toast.
interface Props {
    topRight: string;
    content: JSX.Element;
    title: string;
    timer: number;
}
export default function Toast(props: Props) {
    const [visable, setVisibility] = useState<boolean>(false);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibility(true);
        }, props.timer * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div
                style={{ display: visable ? "block" : "none", margin: "20px" }}
                className="toast position-fixed bottom-0 end-0"
                role="alert"
            >
                <div className="toast-header">
                    <strong className="me-auto">{props.title}</strong>
                    <small>{props.topRight}</small>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="toast"
                        onClick={() => setVisibility(false)}
                    ></button>
                </div>
                <div className="toast-body">{props.content}</div>
            </div>
        </>
    );
}
