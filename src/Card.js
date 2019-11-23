

import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <h1 className="titre">Credit Card</h1>
            <img src="https://cdn140.picsart.com/288622685092211.png?r1024x1024" className="chip" alt="chip" />
            <div className="card-descr">
                <div className="card-caract">
                    <p className="card-num">{String(props.number).padEnd(19, '*')}</p>
                    <div className="expire">
                        <h2>5422</h2>
                        <div className="valid">
                            <span className='valid-thru'> VALID THRU </span>
                            <div className="sous-valid">
                                <p>month/year</p>
                                <span className="date">{String(props.date).padEnd(5,'*')} </span>
                            </div>

                        </div>
                    </div>
                    <h2> {(props.name).toUpperCase()} </h2>
                </div>
                <img src="https://mikeladano.files.wordpress.com/2018/03/visa.png?w=640" className="master-logo" alt="logo" />

            </div>


        </div>
    )
}

export default Card


