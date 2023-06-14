import React from "react";

class Loading extends React.Component {

  render() {
    
    
    return (
      <div style={{ position: "fixed", zIndex: "1" }} className="container-fluid">
        <section className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3 shadow">
                  <div className="card-body">
                    <div className="pt-4 pb-1">
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    );
  }
}


export default Loading;