import style  from"../Style/Common.css"
export default function Navbar(){

    return(
        <div>
            <div>
                <h1 className="top-heading" >🇦🇺 Free Australia wide Shipping - Flat Rate Global Shipping 🌏</h1>
            </div>
            <div className="navbar">
                <div className="right-navbar-div">
                    <div>
                    <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/proper_logo_website_header_85x.png?v=1618292350" alt="" />
                    </div>
                    <div>
                        iphone
                    </div>
                    <div>
                        Customer Support
                    </div>
                    <div>
                        About
                    </div>
                </div>
                <div className="left-navbar-div">
                      <img src="https://icon-library.com/images/login-icon-png/login-icon-png-1.jpg" width={"25px"} alt="" />
                        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"  width={"25px"} alt="" />    
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MEVaDWuxRUBoLrSHoOk6LdsJk2r_MWcWYA&usqp=CAU" width={"25px"} alt="" />
                </div>

            </div>
        </div>
    )
}