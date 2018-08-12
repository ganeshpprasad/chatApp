import React from 'react';

class Hamburger extends React.Component{
    
    
    render() {
        return (
            <button onClick={() => { this.props.toggleAccount()}} className="hamburger">
                <svg width="14px" height="10px" viewBox="0 0 14 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Artboard-1" transform="translate(-214.000000, -539.000000)" fill="#FFFFFF">
                            <g id="hamburger" transform="translate(214.000000, 539.000000)">
                                <path d="M0,0.7 C0.39,0.7 0.7,0.39 0.7,0 L13.3,0 C13.3,0.39 13.61,0.7 14,0.7 L14,1.3 C13.61,1.3 13.3,1.61 13.3,2 L0.7,2 C0.7,1.61 0.39,1.3 0,1.3 L0,0.7 L0,0.7 Z" id="Shape"></path>
                                <path d="M0,4.7 C0.39,4.7 0.7,4.39 0.7,4 L13.3,4 C13.3,4.39 13.61,4.7 14,4.7 L14,5.3 C13.61,5.3 13.3,5.61 13.3,6 L0.7,6 C0.7,5.61 0.39,5.3 0,5.3 L0,4.7 L0,4.7 Z" id="Shape"></path>
                                <path d="M0,8.7 C0.39,8.7 0.7,8.39 0.7,8 L13.3,8 C13.3,8.39 13.61,8.7 14,8.7 L14,9.3 C13.61,9.3 13.3,9.61 13.3,10 L0.7,10 C0.7,9.61 0.39,9.3 0,9.3 L0,8.7 L0,8.7 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        );
    }
}

export default Hamburger;