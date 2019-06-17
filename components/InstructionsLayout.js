class InstructionsLayout extends React.Component {   
 
    render() {
        function printNote(note) {
            if(note == null){
                return "";
            }
            return (
              <p>
               <b>Note: </b>{note}
              </p>
            );
          }
        return(           
            <div>
                {this.props.instructions.map(instruction=> {  
                    return (
                    <div key={instruction.index}>    
                        <div className="row">
                            <div className="col-sm">
                                <p>{instruction.index}) {instruction.step}</p>                            
                            </div>
                        </div>                        
                    </div>      
                    );
                })}
                <div className="row">
                    <div className="col-sm">
                        <p>{printNote(this.props.note)}</p>                        
                    </div>                            
                </div>
            </div>               
        );
    }
}
export default InstructionsLayout