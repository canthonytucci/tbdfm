import React from 'react';
import actions from '../../actions/AppActions';
import postStore from '../../stores/PostStore';
import connectToStores from 'alt/utils/connectToStores';
import Post from '../Post/Post'
var Parse = require('parse').Parse;

class PostList extends React.Component {
  constructor(){
    super();
    actions.getPosts();
  }

  static getStores() {
    return [postStore];
  }

  static getPropsFromStores() {
    return postStore.getState();
  }

  renderPosts() {
    let posts = this.props.posts.map((postie)=> {
      return (
        <div>
          <Post post={postie}/>
          <hr />
        </div>
      )
    })
    return posts;
  }

  render() {
    return (
        <div>
          {this.renderPosts()}
        </div>
      )
  }

}

export default connectToStores(PostList);
