import './Summary.css'
import { Link } from 'react-router-dom'
import summaryLogo from './images/summaryicon.png'

const Summary = () => {
    return(
        
        <div className='Summary'>
           <Link to="/summary-Month"> 
                <a>
                    <img src={summaryLogo}></img>
                    <strong>Summary</strong>
                </a>
            </Link>
        </div>
    
    )
}

export default Summary;