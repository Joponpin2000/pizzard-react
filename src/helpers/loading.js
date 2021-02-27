import React, { Fragment } from 'react';

export const showLoading = () => (
    <Fragment>
        <div className="text-center text-secondary mx-5 my-5">
            <div className="spinner-border spinner-border-lg mx-5 my-5" role="status">
                <span className="sr-only mx-5 my-5">Loading...</span>
            </div>
        </div>
    </Fragment>
)