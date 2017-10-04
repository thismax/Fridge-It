import React, { Component } from 'react';
import { ShareButtons, ShareCounts, generateShareIcon, } from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
} = ShareButtons;

// const {
//   FacebookShareCount,
//   GooglePlusShareCount,
//   PinterestShareCount,
// } = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const PinterestIcon = generateShareIcon('pinterest');
const EmailIcon = generateShareIcon('email');

class ShareWidget extends Component {

  constructor(props) {
    super(props);
    //shareUrl
    //title
    
  }




  render() {
    const shareUrl = this.props.shareUrl;
    const title = this.props.title;

    return (
      <div>
        <ul className="share-widget-list">
        <li>
          <FacebookShareButton
            url={this.props.shareUrl}
            quote={this.props.title}
            className="facebook-share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="twitter-share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </li>
        <li>
          <PinterestShareButton
            url={String(window.location)} //i deleted a prop here. check the examples in the repo
            windowWidth={1000}
            windowHeight={730}
            className="pinterest-share-button">
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </li>
        <li>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="email-share-button">
            <EmailIcon
              size={32}
              round />
          </EmailShareButton>
        </li>
        </ul>
      </div>
    );
  }
}

export default ShareWidget;