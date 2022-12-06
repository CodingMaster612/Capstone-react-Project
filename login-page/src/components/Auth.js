import React from "react"

export default function (props) {
    return (


        <div className="Auth-form-container">

            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title"></h3>
                    <div className="form-group mt-3">
                        <div className="Header">
                            <h4>Currency Converter</h4>
                        </div>
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
            <body>
            

            <div class="header">
                <a href="#default" class="logo">CompanyLogo</a>
                <div class="header-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
                
            </body>
            </div>
            

        

    )
}