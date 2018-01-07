import React from 'react';

import './LoggedInLayout.less';

const LoggedInLayout = React.createClass({
    render() {
        return (
            <div className='logged-in-layout'>
                <div className='logged-in-layout__content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default LoggedInLayout;