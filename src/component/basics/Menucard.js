import React from 'react';

const MenuCard = ({ MenuData }) => {
    return (
        <>
            <section className="main-card--cointainer">
                {
                    MenuData.map((Carddata) => {
                        return (
                            <>
                                <div className="card-container" key={Carddata.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className='card-number card-circle  subtle'>{Carddata.id}</span>
                                            <span className='card-author subtle' style={{ color: 'red' }}>{Carddata.category}</span>
                                            <h5 className="card-title">{Carddata.name}</h5>
                                            <span className="card-description subtle">
                                                {Carddata.description}
                                            </span>
                                            <div className="card-read">Read</div>
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