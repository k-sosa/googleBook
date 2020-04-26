import React from 'react';

export default function searchForm(props) {
    return (
        <div>
        <form>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <label className="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
     
                </div>
            </div>
            <div className="col-auto">
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
      
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </div>
        </form>
    </div>

    )




}