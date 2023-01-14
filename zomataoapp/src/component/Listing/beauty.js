import React, { Component } from "react";
import Listingpage from './Listingpage';
import Ratingfilter from "../filter/ratingfilter";


const qurl = 'http://localhost:2500/Alldata?TypeId=4'

class beauty extends Component {
    constructor() {
        super()

        this.state = {
            mobiletype: ''
        }
    }
    setDataPerFilter = (data) => {
        this.setState({ mobiletype: data })
    }
    render() {
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <div class="side col-md-4">
                            <div class="filterbox">
                                <div class="filter">
                                    <h3> Filters</h3>
                                    <div class="type">
                                        <Ratingfilter TypeId="4"
                                            starperrating={(data) => { this.setDataPerFilter(data) }} />
                                        <div class="cuisine">
                                            <h4>Brands</h4>
                                            <ul>
                                                <li> <input type="checkbox" /> Samsung</li>
                                                <li> <input type="checkbox" /> iphone</li>
                                                <li> <input type="checkbox" /> Realme</li>
                                                <li> <input type="checkbox" /> Redmi</li>
                                                <li> <input type="checkbox" /> oppo</li>
                                                <li> <input type="checkbox" /> Vivo</li>
                                            </ul>
                                        </div>
                                        <div class="cost">
                                            <h4>Price</h4>
                                            <ul>
                                                <li> <input type="radio" name="h" /> less than 10000</li>
                                                <li> <input type="radio" name="h" /> 10000 to 20000</li>
                                                <li> <input type="radio" name="h" /> 20000 to 30000</li>
                                                <li> <input type="radio" name="h" /> 30000 to 50000</li>
                                                <li> <input type="radio" name="h" /> 50000 to 100000</li>
                                            </ul>
                                        </div>
                                        <div class="sort">
                                            <h4> sort</h4>
                                            <ul>
                                                <li> <input type="radio" name="h" /> price low to high</li>
                                                <li> <input type="radio" name="h" /> price high to low</li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Listingpage mobileData={this.state.mobiletype} />
                    </div>
                    <div class="pagination">
                        <a href="#">&laquo;</a>
                        <a class="active" href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>

                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        fetch(qurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ mobiletype: data })
            })
    }

}


export default beauty


