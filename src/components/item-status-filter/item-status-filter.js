import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () =>{
    return(
        <div className="btn-group">
            <button type="button"
                    className="btn btn-info">Все</button>
            <button type="button"
                    className="btn btn-outline-secondary">В работе</button>
            <button type="button"
                    className="btn btn-outline-secondary">Выполненные</button>
        </div>
    )
};

export default ItemStatusFilter;