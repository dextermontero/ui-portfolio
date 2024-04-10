import React from 'react';
import { FaArrowUp } from "react-icons/fa";

class MoveToTop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showButton: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollPosition = window.pageYOffset;

        if(scrollPosition > 100){
            this.setState({ showButton: true });
        }else {
            this.setState({ showButton: false });
        }
    }

    moveToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    render() {
        return this.state.showButton && (
            <button 
                className="fixed bottom-5 right-5 z-[100px] bg-gray-500 p-4 rounded-full text-gray-50 shadow-md animate-bounce hover:opacity-70 transition duration-300 ease-in-out" 
                onClick={this.moveToTop} >
                <FaArrowUp />
            </button>
        );
    }
}

export default MoveToTop;