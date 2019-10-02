import React from 'react';
import  {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import { Link } from "react-router-dom";


class  StreamList extends React.Component  {
    
    componentDidMount() {
       this.props.fetchStreams();
                  
    }

    renderCreate() {
      if(this.props.isSignedIn ) {
          return (
              <div style={ {textAlign: 'right' }}>
                  <Link to='/streams/new' className='ui primary button'>Create stream</Link>
              </div>
          )
      }
    }

    renderAdmin(stream) {
      if ( stream.userId === this.props.currentUserId) {
         return (
             <div className='right floated content'>
                <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
                <button className='ui button negative'> 
                   Delete
                </button>
             </div>
         )
      }
    }

    renderList() {
        return this.props.streamsProps.map( (stream) => { 
            return (
                <div className='item' key={stream.id}>
                    <i className='large middle aligned icon camera'/>
                    <div className='content'>
                        {stream.title}
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            )
        });
    }

    render() { 
       return (
         <div>
             <h2>Streams</h2>
             <div className='ui celled list'>{this.renderList()}</div>
             <div>{this.renderCreate()}</div>
         </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { streamsProps: Object.values(state.streamsss),
             currentUserId: state.auth.userId,
             isSignedIn: state.auth.isSignedIn
            }
}
export default connect(mapStateToProps, {fetchStreams}) (StreamList);