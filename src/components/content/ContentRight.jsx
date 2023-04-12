
import React, { Component } from 'react';
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import BCA from "../../assets/bca.png";
import profil from "../../assets/profil.png";
import PropTypes from 'prop-types';
import transactionList from './TransactionList';

class contentRight extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <section className='w-96 bg-gray-200 rounded-tl-70px overflow-hidden px-14'>
            <div className='pt-12 flex justify-end space-x-9 items-center'>
              <GrNotification size={20} />
              <BiUser size={20} />
              <img src={profil}
                alt='admin'
                className='h-9 w-9 object-cover rounded-full'
              />
            </div>
            <div className='card mt-9'>
              <div className='relative p-5 text-white'>
                <div className='text-lg'>Fajar Maulana</div>
                <div className='mt-10 space-y-3'>
                  <div>BCA Platinum</div>
                  <div>4756 ... ... 1234</div>
                  <div className='flex justify-between relative'>
                    <span> Rp 999999999</span>
                    <img src={BCA} alt='bca' className='h-4' />
                  </div>
                </div>
              </div>
              
            </div>
            <button className='py-3 rounded border border-indigo-400 text-gray-400 border-dashed w-full mt-10'>Add New Card</button>
            <div>
              <transactionList/>
            
            </div>
            
          </section>
        );
    }
}

contentRight.propTypes = {

};

export default contentRight;