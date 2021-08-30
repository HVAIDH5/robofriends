// import React from 'react';

// const Card= (props) => {
//     return(
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
//             <div>
//            <h2>{props.name} </h2>
//            <p>{props.email}</p>
//             </div>
//             </div>

//     );
// }
// export default Card;


//upper one is correct but this is power of destructuring
import React from 'react';

const Card= ({name ,email,id}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
           <h2>{name} </h2>
           <p>{email}</p>
            </div>
            </div>

    );
}
export default Card;