const ColumnInfo = props => (
    <div class="container pt-3 pb-3">
        <div class="row">
            <div class="col-sm text-justify">
                {props.column1}
            </div>
            <div class="col-sm text-justify">
                {props.column2}
            </div>
            <div class="col-sm text-justify">
                {props.column3}
            </div>
        </div>
    </div>
  )
  
  export default ColumnInfo