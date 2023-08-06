import { Button } from '@mui/material'
import { color } from '@mui/system'
import React, { useState } from 'react'
import Chart from "react-apexcharts"
import { Form } from 'react-bootstrap'

function Project4() {

    const [inputchart1, setInputChart1] = useState("")
    const [inputchart2, setInputChart2] = useState("")
    const [errmsg, setErrMsg] = useState("")
    const [chartopt, setChartOpt] = useState({
        series: [],
        options: {
            labels: ["Box A", "Box B"],
            color: ['#FF6384', '#36A2EB'],
            plotoptions: {
                pie: {
                    pie: {
                        size: "70%"
                    },
                },
            }
        }
    })




    const handleInputChange1 = (e) => {
        const value = e.target.value
        console.log(value)
        if (value <= 100) {
            setInputChart1(value);
            setInputChart2(100 - value);
            setErrMsg("")
        } else if (value > 100) {
            setErrMsg("Value can not be grater than 100")
        }
    };
    const handleInputChange2 = (e) => {
        const value = e.target.value;
        if (value > 100) {
            setErrMsg("Value can not be grater than 100")
        } else if (value <= 100) {
            setInputChart2(value);
            setInputChart1(100 - value);
        }
    };

    const createChart = () => {
        setChartOpt((prev) => ({
            ...prev,
            series: [Number(inputchart1), Number(inputchart2)]
        }))
        setErrMsg("")
    }

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className=' card col-sm-12 col-md-8 mx-auto'>
                        <div className='card-body'>
                        <div className='row'>
                            <div className='col-sm-5'>

                                <div className='row'>
                                    <div className='col-sm-12 form-group'>
                                        <label>Group A</label>
                                        <input className='form-control' onChange={handleInputChange1} value={inputchart1} type="number" name='boxA' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 form-group'>
                                        <label>Group B</label>
                                        <input className='form-control' onChange={handleInputChange2} value={inputchart2} type="number" name='boxB' />
                                        {errmsg && <div className="alert alert-primary mt-3" role="alert">{errmsg}</div>}

                                    </div>

                                </div>
                                <div className='form-group'>
                                    <button onClick={createChart} className='btn btn-primary'>Create Chart</button>
                                </div>
                            </div>

                            <div className='row'>
                            <div className='col-sm-4 mt-2'>

                                
                                    <Chart
                                        options={chartopt.options} series={chartopt.series}
                                        type='pie'
                                        width={300}
                                        height={200}

                                    >
                                    </Chart>

                                
                            </div>

                            </div>
                        </div>
                        </div>

                    </div>
                </div>



            </div>


            {/* <div className='container col-6 d-flex mt-5' style={{ borderRadius: "8px", border: "1px solid #ccc", boxShadow: "2px 3px 10px #ccc" }}>
                <div className='mt-4'>

                    <Form>
                        <Form.Group className="mb-3">
                            <div style={{ width: "200px" }}>
                                <Form.Label>Group A</Form.Label>
                                <Form.Control onChange={handleInputChange1} value={inputchart1} type="number" name='boxA' />
                            </div>
                            <div style={{ width: "200px" }}>
                                <Form.Label>Group B</Form.Label>
                                <Form.Control onChange={handleInputChange2} value={inputchart2} type="number" name='boxB' />
                                <div>{errmsg}</div>
                            </div>
                        </Form.Group>
                        <Button onClick={createChart} variant="contained">Create Chart</Button>
                    </Form>
                </div>
                <div className=' m-5' >

                    <Chart
                        options={chartopt.options} series={chartopt.series}
                        type='pie'
                        width={300}
                        height={200}

                    >
                    </Chart>
                </div>

            </div> */}
        </>
    )
}

export default Project4