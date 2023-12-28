import './style.css'

export default function Skeleton() {
    return (
        <div className='Skeleton-Container'>
        {
            [1,2,3,4,5,6,].map((item,index) => {
                return(
                    <div className='Skeleton' key={index}>
                    </div>
                )
            })
        }
        </div>
        
    )
}