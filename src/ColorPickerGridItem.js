export default class ColorPickerGridItem extends React.Component {
    constructor(props) {
        super(props);

        this.color = props.color;
        this.width = props.width;
        this.height = props.height;
    }

    render() {
        return (<div width="20" height="20" style="background-color:0xff0000"></div>);
    }
}