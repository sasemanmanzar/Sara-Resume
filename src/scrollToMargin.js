import React from 'react';

class YourComponent extends React.Component {
  scrollToMargin = () => {
    const marginElement = document.getElementById('IdOne');
    if (marginElement) {
      marginElement.scrollIntoView();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.scrollToMargin}>Go to Favorite Margin</button>
        {/* Your long page content */}
      </div>
    );
  }
}

export default YourComponent;