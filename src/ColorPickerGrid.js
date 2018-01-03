class ColorPickerGrid extends React.Component {
    colors = [
        0xFFFFF0, 0xF0E68C, 0xE6E6FA, 0xFFF0F5,
        0x7CFC00, 0xFFFACD, 0xADD8E6, 0xF08080,
        0xE0FFFF, 0xFAFAD2, 0xEaD8f3, 0xD3D3D3,
        0x90EE90, 0xFFB6C1, 0xFFA07A, 0x20B2AA,
        0x87CEFA, 0x778899, 0x88A19f, 0xB0C4DE,
        0xFFFFE0, 0x00FF00, 0x32CD32, 0xFAF0E6];

    constructor(props) {
        super(props);
    };

    selectColor = (event) => {
        let color = event.target.style["backgroundColor"];

        this.props.onColorChange(color);
    };

    render() {
        let cells = this.colors.map((item, index) => {
            return <div className="containerCell" style={{backgroundColor: "#" + item.toString(16)}} key={index}></div>
        });

        return <div id="colorPickerContainer" className="container" onClick={this.selectColor}>{cells}</div>;
    };
}