class InstructionsLayout extends React.Component {    
 
    render() {
        

        return(           
            <div>
                {this.props.instructions.split('\n').map(i => {
                    return <p>{i}</p>
                })}
            </div>                   
        );
    }
}


export default InstructionsLayout