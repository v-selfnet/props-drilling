import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h3>Friend</h3>
            {ring && <p><small>{ring}</small></p>}
        </div>
    );
};

export default Friend;