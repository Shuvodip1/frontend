"use client"
import React from "react";

const Page = () => {
    const [data, setData] = React.useState([]);
    const [bed, setBed] = React.useState(0)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const handler = () => {
            fetch(`${process.env.BACKEND_URL}/api/appointment/`)
                .then(res => res.json())
                .then(res => {
                    setData(pre => res['appointments'])
                    setBed(pre => res['bed_no'])
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        handler()
    }, []);

    return (
        loading ? "Loading ... " : <main id="main" className="main">
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
            <link href="assets/css/style.css" rel="stylesheet"></link>

            <div className="pagetitle">
                <h1>Data Tables</h1>
            </div>

            <section class="section dashboard">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-xxl-4 col-md-6">
                                <div class="card info-card sales-card">

                                    <div class="card-body">
                                        <h5 class="card-title">Available Doctors<span>| Today</span></h5>

                                        <div class="d-flex align-items-center">
                                            <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi bi-people"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>76</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-xxl-4 col-md-6">
                                <div class="card info-card revenue-card">


                                    <div class="card-body">
                                        <h5 class="card-title">Occupied Bed<span>| Today</span></h5>

                                        <div class="d-flex align-items-center">
                                            <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi bi-people"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>{bed}</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-xxl-4 col-xl-12">

                                <div class="card info-card customers-card">


                                    <div class="card-body">
                                        <h5 class="card-title">Vacant Bed<span>| Today</span></h5>

                                        <div class="d-flex align-items-center">
                                            <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i class="bi bi-people"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>{100 - bed}</h6>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Datatables</h5>
                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Time</th>
                                            <th>Departmment</th>
                                            <th>Booked</th>
                                            <th>Doctor</th>
                                        </tr>
                                    </thead>
                                    {
                                        data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.time}</td>
                                                <td>{item.department}</td>
                                                <td>{item.is_book ? 'Yes' : 'No'}</td>
                                                <td>{item.doctor}</td>
                                            </tr>
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
