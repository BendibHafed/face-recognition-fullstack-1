import React from "react";

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='hite f3'>
                {`${name}, your current entry count is: `}
            </div>
            <div className='hite f2'>
                {entries}
            </div>
        </div>
    );
}
export default Rank;