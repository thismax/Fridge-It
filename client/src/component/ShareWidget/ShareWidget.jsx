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
  }




  render() {
    let shareUrl = this.props.shareUrl;
    let title = this.props.title;
    let shareUrlMailBody = 'link: ' + this.props.shareUrl;
    let shareUrlTwitterBody = 'http:\/\/' + this.props.shareUrl;

    return (
      <div>
        <ul className="share-widget-list">
        <li>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="facebook-share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={shareUrlTwitterBody}
            title={title}
            className="twitter-share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </li>
        <li>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body={shareUrlMailBody}
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