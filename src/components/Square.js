import classNames from 'classnames';
import '../styles/Square.css'

const Square = ( {value, onClick, turn} ) => {
   
    const handleClick = () => {
       (turn !== null && value === null) && onClick();
    }
    
    let squareClass = classNames({
        square: true,
        [`square--${value}`]: value !== null,
    });

    return(
        <div className={squareClass}  onClick={() => handleClick()}>
            
        </div>
    );
}

export default Square;