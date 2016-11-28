/// <reference path="react-datetime.d.ts" />
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />

import React = require("react");
import ReactDOM = require("react-dom");
import DateTime = require("react-datetime");

class TestApp extends React.Component<{}, {}> {
    render() {
        const theDate = new Date();
        return (
            <DateTime
                value={theDate}
                defaultValue={theDate}
                open={false}
                locale="en"
                utc={true}
                className="test-class"
                />
        );
    }
}

ReactDOM.render(<TestApp />, document.getElementById("test-app"));
