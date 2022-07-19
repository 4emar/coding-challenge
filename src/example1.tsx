import {FC, useState} from "react";

interface Props {
    items: Item[];
}

interface Item {
    id: string;
    title: string;
    description: string;
}

// I added the Item component, since we cannot map directly to an interface
// I use it to present the data in the Props interface on the screen
const Item: FC<Item> = ({id, title, description}: Item) => {
    return (
        <tr>
            <td>
                <h5>{id}</h5>
            </td>
            <td>
                <h5>{title}</h5>
            </td>
            <td>
                <h5>{description}</h5>
            </td>
        </tr>
    )
}

const ComponentEx1: FC<Props> = ({items}) => {
    return (
        <div>
            {items.map((item, index) =>
                <Item
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    key={index}
                />
            )}
        </div>
    );
};

export default ComponentEx1;