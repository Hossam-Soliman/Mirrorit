import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";


const Links = () => {
    
    return(
        <div className="myList">    
            <h3>Most visited websites <FontAwesomeIcon icon={faMugHot} style={{ color: '#316CF9' }} size='sm'/></h3>
            <ul className="list-unstyled">              
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=http://beinmatch.com">beinmatch.com</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=https://goalarab.com/matches-today/">goalarab.com</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=http://kora-online.tv">kora-online.tv</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=https://kora-live.tv">kora-live.tv</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=http://kooora2day.com">kooora2day.com</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=http://yallashootplus.com">yallashootplus.com</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=https://kora-star.tv">kora-star.tv</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=http://super-kora.tv">super-kora.tv</a></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg" alt=""></img><a href="http://mirrorit.me/get?target=http://kooralive.info">kooralive.info</a></li>
            </ul>
            <i />
        </div>
    )
}

export default Links