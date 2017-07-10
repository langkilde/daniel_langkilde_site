import * as React from "react";

interface IBioListProps {
  grouping: string;
  list_items: Array<{
    sentence: string,
  }>;
}

class BioList extends React.Component<IBioListProps, any> {
  
  private constructor(props) {
    super(props);
  }
  
  public render() {
    return (
      <div className="item-container">
        <h3>{this.props.grouping}</h3>
        <ul>
          {this.props.list_items.map(this.renderBioItem)}
        </ul>
      </div>
    );
  }
  
  private renderBioItem(bioItem) {
    return (
      <li key={bioItem.sentence}>{bioItem.sentence}</li>
    );
  }
  
}

export default BioList;
