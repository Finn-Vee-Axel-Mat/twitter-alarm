import React from "react";
import { StyleSheet } from 'react-native';


export default class Data extends React.Component {
  constructor (props) {
    super(props)
    this.item = props.item.item;
    console.log(this.item);
    this.delay = props.delay;
    this.percentage = this.item;
  }

  componentWillReceiveProps (props) {
    this.delay = props.delay;
  }

  render () {
    return (<>
      <div className="px-6 mb-3">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-4/12 px-4 lg:order-1">
            <div className="mr-4 p-3 text-left">
              <a
                href="/tweet"
                target="_blank"
                className="text-3xl font-bold block tracking-wide text-blueGray-800"
              >
                {this.item.titre}
              </a>
              <span className="text-sm text-blueGray-600">
                Updated {this.delay} seconds ago
              </span>
            </div>
          </div>
          <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div className="relative"></div>
          </div>

          <div className="w-full lg:w-4/12 px-4 lg:order-2 lg:text-right lg:self-center">
            <div className="px-3">
              <div className="relative pt-1">
                <span className="text-sm text-blueGray-600">
                  Matching tweets : {this.item.occurence}/{this.item.total}
                </span>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{width: (100*this.item.occurence/this.item.total).toString()+"%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
  }
}