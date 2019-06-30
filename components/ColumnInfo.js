const ColumnInfo = props => (
    <div className="container pt-3 pb-3">
        <div className="row">
            <div className="col-sm text-justify">
                {props.column1}
            </div>
            <div className="col-sm text-justify">
                {props.column2}
            </div>
            <div className="col-sm text-justify">
                {props.column3}
            </div>
        </div>
    </div>
  )
  
  export default ColumnInfo