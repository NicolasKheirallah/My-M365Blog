import * as React from "react";
import Card from "../Card/card";

const Grid = () => {
    return (
        <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    )
}
export default Grid