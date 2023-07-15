import React from 'react'
import {MdOutlineGroups, MdWorkHistory} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import CountUp from 'react-countup';

function Counter() {
  return (
    <>
    
        <div className="counter">

            <div className="singleCounter">
                <div className="icon">
                    <MdOutlineGroups />
                </div>
                <div className="counterNumber">
                    <h4>
                        <CountUp
                        start={0}
                        end={30}
                        duration={3}
                        suffix="+"
                        ></CountUp>
                    </h4>
                </div>
                <div className="counterName">
                    <p>Clients</p>
                </div>
            </div>

            <div className="singleCounter">
                <div className="icon">
                    <MdWorkHistory />
                </div>
                <div className="counterNumber">
                    <h4>
                        <CountUp
                        start={0}
                        end={20}
                        duration={3}
                        suffix="+"
                        ></CountUp>
                    </h4>
                </div>
                <div className="counterName">
                    <p>Projects</p>
                </div>
            </div>

            <div className="singleCounter">
                <div className="icon">
                    <AiOutlineFundProjectionScreen />
                </div>
                <div className="counterNumber">
                    <h4>
                        <CountUp
                        start={0}
                        end={1}
                        duration={1}
                        suffix="+"
                        ></CountUp>
                    </h4>
                </div>
                <div className="counterName">
                    <p>Years Experience</p>
                </div>
            </div>
        </div>


    </>
  )
}

export default Counter