import { useState } from "react";

export interface AccordionItem {
    title: JSX.Element;
    body: JSX.Element;
}

function itemAccordion(title: JSX.Element, body: JSX.Element) {
    const [showItem, setShowItem] = useState<boolean>(false);

    const flipSignal = (): void => {
        setShowItem(!showItem);
    };
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        onClick={flipSignal}
                        aria-expanded={showItem}
                    >
                        {title}
                    </button>
                </h2>
                <div
                    id="panelsStayOpen-collapseOne"
                    className={
                        showItem
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                    }
                >
                    <div className="accordion-body">{body}</div>
                </div>
            </div>
        </>
    );
}

export default function Accordion(items: AccordionItem[]) {
    return (
        <>
            <div
                style={{ marginTop: "10px" }}
                className="accordion"
                id="accordionPanelsStayOpenExample"
            >
                {items.map((item) => itemAccordion(item.title, item.body))}
            </div>
        </>
    );
}
