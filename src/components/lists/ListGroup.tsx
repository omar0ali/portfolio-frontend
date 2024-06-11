import { useState } from "react";

interface Props {
    items: { text: JSX.Element; onClickEvent?: () => void }[];
    clickable?: boolean;
}

function item(
    text: JSX.Element,
    pos: { selectedIndex: number; index: number },
    onClickEvent: () => void,
    setActive: (i: number) => void,
    clickable: boolean = true
) {
    return (
        <li
            key={pos.index}
            className={`list-group-item list-group-item-action ${
                pos.selectedIndex === pos.index && clickable == true
                    ? "active"
                    : null
            }`}
            onClick={function () {
                setActive(pos.index);
                onClickEvent();
            }}
        >
            {text}
        </li>
    );
}

export default function ListGroup({ items, clickable }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    return (
        <>
            <ul style={{ margin: "10px" }} className="list-group">
                {items.map((i, index) =>
                    item(
                        i.text,
                        { selectedIndex, index },
                        i.onClickEvent
                            ? i.onClickEvent
                            : function () {
                                  setSelectedIndex(index);
                              },
                        setSelectedIndex,
                        clickable
                    )
                )}
            </ul>
        </>
    );
}
