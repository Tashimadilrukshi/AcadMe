import React from "react";
import Nav from "../components/nav";

const LandingLayout = (ViewComponent) => {
    return class extends React.Component {
        render() {
            return (
                <>
                    <Nav/>
                    <div>
                        <ViewComponent />
                    </div>
                    {/* Add Footer and any other components to the default layout */}
                </>
            );
        }
    };
};
export default LandingLayout;