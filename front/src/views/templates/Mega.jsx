import React from "react"

const MegaStore = () => {
    return (
        <div className="headerMegaStore">
            <div className="preheaderMegaStore">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="preheaderMegaStore-message">
                                Despacho gratis por compras mayores a $20.000
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="preheaderMegaStore-menu">
                                Customers links
                                <div className="preheaderMegaStore-menu-items">
                                    <a href="/customer/login" className="trsn" ></a>
<span className="customer-name">
Login/Register
</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaStore;