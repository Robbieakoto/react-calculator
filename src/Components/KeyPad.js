import React, { Component } from "react";

class KeyPad extends Component {
  render() {
    let { result } = this.props;

    return (
      <div class="flex mb-4 px-2 " id="calculator-body">
        <div class="w-1/3 h-12" />
        <div class="w-1/3 h-12 p-6 md:w-1/3 lg:w-1/3 xl:w-1/6 ">
          <div class="flex">
            <div class="w-full bg-blue-800 h-12 ">
              {" "}
              <p class="text-3xl ml-2 text-white">{result}</p>
            </div>
          </div>
          <div class="flex -mx-1">
            <div class="w-1/4 px-1">
              <button
                name="CE"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                CE
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="("
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                (
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name=")"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                )
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="C"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                C
              </button>
            </div>
          </div>

          <div class="flex -mx-1 mt-1">
            <div class="w-1/4 px-1">
              <button
                name="1"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                1
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="2"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                2
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="3"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                3
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="+"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                +
              </button>
            </div>
          </div>

          <div class="flex -mx-1 mt-1">
            <div class="w-1/4 px-1">
              <button
                name="4"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                4
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="5"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                5
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="6"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                6
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="-"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                -
              </button>
            </div>
          </div>

          <div class="flex -mx-1 mt-1">
            <div class="w-1/4 px-1">
              <button
                name="7"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                7
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="8"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                8
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="9"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                9
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="*"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                x
              </button>
            </div>
          </div>

          <div class="flex -mx-1 mt-1">
            <div class="w-1/4 px-1">
              <button
                name="."
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                .
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="0"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full"
              >
                0
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="="
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                =
              </button>
            </div>
            <div class="w-1/4 px-1">
              <button
                name="/"
                onClick={(e) => this.props.onClick(e.target.name)}
                class="bg-gray-400 h-12 text-3xl w-full text-blue-800"
              >
                ÷
              </button>
            </div>
          </div>
        </div>
        <div class="w-1/3 h-12" />
      </div>
    );
  }
}
export default KeyPad;
