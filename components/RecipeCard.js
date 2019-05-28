import Link from 'next/link'

const RecipeCard = props => (    
        <div className='card border-pink'>
            <Link href={`/recipe?id=${props.id}`}>
                <a>
                    <img src={props.url} className='card-img-top' alt='...'/>
                    <div className='card-body'>
                        <h5 className='card-title'>{props.name}</h5>
                    </div>
                </a>                
            </Link>
            <style jsx>{`
                    .border-pink {
                        border-color: #fdd7d7;
                    }
                `}
            </style> 
        </div>
    
)
export default RecipeCard