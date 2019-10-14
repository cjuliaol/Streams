import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {

   const actions = (
       <React.Fragment>
       <div>
          <div className='ui negative button' title='You are about to delete this stream'>Delete</div>
          <div className='ui button'>Cancel</div>
       </div>
       </React.Fragment>
       
   ); 

    return (
    <div>StreamDelete
        <Modal
          title='Delete Stream'
          content='Are you sure you want to delete this?'
          actions={actions}
          onDismiss={() => history.push('/')}
         />
    </div>
    )
}

export default StreamDelete;