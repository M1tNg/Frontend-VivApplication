import React from 'react';
import './summaryItem_month.css'
import Chart from '../Piechart/Piechart';

const SummaryItemMonth =() => {
    return (
        <>
            <Chart/>
            <div className="summary-card">
                <div className="container-card">

                    {/*         card 1        */}
                    <div className="card">
                        <div className="card-content">
                                <h3>Week 1</h3>
                                <p>Running</p>
                                <p>Weight lifting</p>
                        </div>
                    </div>

                    {/*         card2             */}
                    <div className="card">
                        <div className="card-content">
                                <h3>Week 2</h3>
                                <p>Running</p>
                                <p>Weight lifting</p>
                        </div>
                    </div>

                     {/*         card 3           */}
                   
                    <div className="card">
                        <div className="card-content">
                                <h3>Week 3</h3>
                                <p>Running</p>
                                <p>Weight lifting</p>
                        </div>
                    </div>

                    {/*         card 4            */}

                    <div className="card">
                        <div className="card-content">
                                <h3>Week 4</h3>
                                <p>Running</p>
                                <p>Weight lifting</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SummaryItemMonth