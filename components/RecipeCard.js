import Link from 'next/link'

const linkStyle = {
    width: '18rem'
}

const RecipeCard = props => (    
        <div className='card border-0' style={linkStyle}>
            <Link href={`/recipe?id=${props.id}`}>
                <a>
                    <img src={props.url} className='card-img-top' alt='...'/>
                    <div className='card-body'>
                        <h5 className='card-title'>{props.name}</h5>
                    </div>
                </a>                
            </Link>
        </div>
    
)
export default RecipeCard