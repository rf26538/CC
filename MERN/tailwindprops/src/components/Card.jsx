import React from 'react'

const Card = ({username ="HC", post ="test", myArr=[]}) => {
  return (
      <figure className ="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <div className ="pt-6 space-y-4">
              <blockquote>
                  <p className ="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam quia consequatur eius qui consectetur delectus dolores, nobis facere voluptates reprehenderit sequi? Pariatur, consequuntur. Quis ab architecto minima quod obcaecati?
                  </p>
              </blockquote>
              <figcaption>
                  <div>
                      {username}
                  </div>
                  <div>
                      {post}
                  </div>
                  <div>
                      {myArr}
                  </div>
              </figcaption>
          </div>
      </figure>
  )
}

export default Card;