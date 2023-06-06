import React from 'react';

const MenuCard = ({ MenuData }) => {
    return (
        <>
            <section className="main-card--cointainer">
                {
                    MenuData.map((Carddata) => {
                        return (
                            <>
                                <div className="card-container1" key={Carddata.id}>
                                    <div className="card1">
                                        <div className="card-body1">
                                            <span className='card-number1 card-circle1  subtle'>{Carddata.id}</span>
                                            <span className='card-author1 subtle' style={{ color: 'red' }}>{Carddata.category}</span>
                                            <h5 className="card-title1">{Carddata.name}</h5>
                                            <span className="card-description1 subtle">
                                                {Carddata.description}
                                            </span>
                                            <div className="card-read1">Read</div>
                                        </div>
                                        <img src={Carddata.image} alt='images' className="card-media"></img>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    );
}

export default MenuCard;