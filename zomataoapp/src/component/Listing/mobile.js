import React, { Component } from "react";
import Listingpage from './Listingpage';
import Ratingfilter from "../filter/ratingfilter";
import Costfilter from "../filter/costfilter";
import Axios from 'axios'


const qurl = 'http://localhost:2500/Alldata?TypeId=1'

class mobile extends Component {
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
                                        <Ratingfilter TypeId="1"
                                            starperrating={(data) => { this.setDataPerFilter(data) }} />
                                        <Costfilter TypeId="1" costperfilter={(data) => { this.setDataPerFilter(data) }} />
                                         
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
    //    async componentDidMount(){
    //     let typeId = this.props.location.search.split('=')[1]
    //     console.log(typeId)
    //     let response = await Axios.get(`${qurl}${typeId}`,{method:'GET'})
    //     console.log(response)
    //     this.setState({mobiletype:response})
    //     }

}


export default mobile


