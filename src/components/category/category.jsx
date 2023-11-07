import React from 'react'

const Category = () => {
    const catgeory = ["Mystery", "Love", "Thriller", "Drama", "Horror", "Scientific", "Technology"]
  return (
    <>
     <section className='catgorys'>
                <h4>Categories</h4>
                {catgeory.map((val) => {
                    return (
                        <div className='category category1'>
                            <span>{val}</span>
                        </div>
                    )
                })}
            </section>
    </>
  )
}

export default Category