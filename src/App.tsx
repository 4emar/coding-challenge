import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {useQuery} from "react-query";
import ComponentEx1 from "./example1";
import MultipleSelectComponent from "./component/multiple-selection-component";


function App() {

    const data = {
        customerName: "Google",
        invoices: [
            {id: 123, name: "Dev work", total: "20.00"},
            {id: 456, name: "More dev work", total: "50.00"},
            {id: 789, name: "Something different", total: "100.00"}
        ]
    }

    const data1 = [
        {
            id: "1",
            title: "TITLE 1",
            description: "DESCRIPTION 1"
        },
        {
            id: "2",
            title: "TITLE 2",
            description: "DESCRIPTION 2"
        },
        {
            id: "3",
            title: "TITLE 3",
            description: "DESCRIPTION 3"
        },
        {
            id: "4",
            title: "TITLE 4",
            description: "DESCRIPTION 4"
        },
    ]
    const componentData = [
        {
            id: "1",
            title: "title 1"
        },
        {
            id: "2",
            title: "title 2"
        },
        {
            id: "3",
            title: "title 3"
        },
        {
            id: "4",
            title: "title 4"
        },
        {
            id: "5",
            title: "title 5"
        },
    ]

    return (
        <div>
            {/*<ComponentEx1 items={data1}/>*/}
            <MultipleSelectComponent items={componentData}/>
        </div>
    );
}

export default App;
