class InstructionsLayout extends React.Component {   
 
    render() {
        let index = 0;
        return(           
            <div>                
                {this.props.instructions.split('\n').map(i => {
                    return <p key={index++}>{i}</p>
                })}
            </div>                   
        );
    }
}
export default InstructionsLayout