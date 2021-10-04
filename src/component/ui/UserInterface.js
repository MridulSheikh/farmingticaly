import React from 'react';
import"./ui.css";

const UserInterface = (props) => {
    //user first vew here
    return (
        <div className="body">
            <div className="content">
            <h2 className="text-warning">Cultivate and become financially active</h2>
            <p className="text-light mt-4">Agriculture is the practice of cultivating plants and livestock.[1] Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep, and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture.</p>
            <div className="mt-5">
            {props.service}
            </div>
            </div>
        </div>
    );
};

export default UserInterface;