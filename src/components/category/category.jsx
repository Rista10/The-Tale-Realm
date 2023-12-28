
const Category = () => {
    const category = ["Mystery", "Love", "Thriller", "Drama", "Horror", "Scientific", "Technology"]
  return (
    <>
     <section className='category'>
                <h4>Categories</h4>
                {category.map((val) => {
                    return (
                        <div key={val} className='category category1'>
                            <span>{val}</span>
                        </div>
                    )
                })}
            </section>
    </>
  )
}

export default Category