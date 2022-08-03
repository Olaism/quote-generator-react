import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Quotes = ({quote, getPrevQuoteIndex, getNextQuoteIndex}) => {
    return (
        <div className="quote">
            <button className="btn-nav btn-prev" onClick={getPrevQuoteIndex}><FaChevronLeft /></button>
            <div className="quote-content">
                <h2><FaQuoteLeft className="fa-quote-left" />{quote.text}</h2>
                <p className="quote-author">{quote.author}</p>
            </div>
            <button className="btn-nav btn-next" onClick={getNextQuoteIndex}><FaChevronRight /></button>
        </div>
    );
}
 
export default Quotes;