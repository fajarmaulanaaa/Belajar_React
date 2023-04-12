import React, { Component } from 'react';
import {Biwater} from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import PropTypes from 'prop-types';

class TransactionList extends Component {
    today = [{
        name: 'water Bill',
        status: 'Unsuccessfully',
        price: '-$280',

    },];

    render() {
        return (
            <div>
                <h3>Today</h3>
                <div>
                    {this.today.map((val) => {
                        return <div className='flex flex-row items-center'>
                            <div className='h-10 w-10 bg-indigo-900 rounded-lg flex items-start justify-center'>
                                <BiUser color="white" />
                            </div>
                            <div className="flex-1">
                                <div className='text-lg fonr-medium'>{val.name} </div>
                                <div className='text-sm'>{val.status} </div>
                            </div>
                            <div className='text-red-600'>{val.price} </div>


                        </div>
                    })}
                </div>
            </div>
        );
    }
}

TransactionList.propTypes = {

};

export default TransactionList;