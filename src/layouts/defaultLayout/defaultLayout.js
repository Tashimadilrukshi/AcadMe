import React from "react";
import Nav from "../../components/navBar/nav";
import './defaultLayout.css';


const LandingLayout = (ViewComponent) => {
    return class extends React.Component {
        render() {
            return (
                <div className="background">
                    <Nav/>
                    <div>
                        <ViewComponent />
                    </div>
                    {/* Add Footer and any other components to the default layout */}
                </div>
            );
        }
    };
};
export default LandingLayout;