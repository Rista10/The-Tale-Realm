
import { Link } from "react-router-dom";

const FollowedUserStoryCard = ({ story}) => {
    if(story=== undefined){
        return null;
    }
    console.log(story);
    return (
        <div className="items-center rounded-md bg-white flex max-w-[600px] flex-col pb-5 ">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba47ac784fe5126ed2a3b162ba473dc7cf3549366fd5e13cad5e8c4692ff334a?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba47ac784fe5126ed2a3b162ba473dc7cf3549366fd5e13cad5e8c4692ff334a?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba47ac784fe5126ed2a3b162ba473dc7cf3549366fd5e13cad5e8c4692ff334a?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba47ac784fe5126ed2a3b162ba473dc7cf3549366fd5e13cad5e8c4692ff334a?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba47ac784fe5126ed2a3b162ba473dc7cf3549366fd5e13cad5e8c4692ff334a?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba47ac784fe5126ed2a3b162ba473dc7cf3549366fd5e13cad5e8c4692ff334a?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba47ac784fe5126ed2a3b162ba473dc7cf3549366fd5e13cad5e8c4692ff334a?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba47ac784fe5126ed2a3b162ba473dc7cf3549366fd5e13cad5e8c4692ff334a?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
        className="aspect-[2.62] object-contain object-center w-full overflow-hidden self-stretch"
      />
      <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2.5 pr-5 rounded-lg">
        <div className="justify-between items-stretch flex gap-2.5 px-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a89c5a70af2cad1b21939daa83f3113778be25d04fe390248c7a3b9c83339?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-stone-500 text-xs self-center grow whitespace-nowrap my-auto">
            <Link to={`/profile/${story.author._id}`}>
            {story.author.username}
            </Link>
          </div>
        </div>
        <div className="justify-center items-stretch self-center flex gap-2.5 my-auto px-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec1d7bc088ed975c8dd5a112cd4a78364b75a5e638f67f1344e032c18c7bc012?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-stone-500 text-xs self-center my-auto">
            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(story.publishedAt))}
          </div>
        </div>
      </div>
      <div className="text-black text-base font-bold self-center whitespace-nowrap mt-2.5">
        {story.title}
      </div>
      <div className="self-center flex gap-3.5 mt-2.5 items-start">
        <div className="justify-center items-stretch flex gap-2.5 px-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84868456f6ad0c0ec4b5a2955fe10f59b7562ec326cb28ef26b2056009e665b2?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
            className="aspect-[1.23] object-contain object-center w-4 fill-red-500 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black text-xs self-start">{story.likes.length} likes</div>
        </div>
        <div className="justify-between items-stretch self-stretch flex gap-2.5 px-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be29c891e343130458ef5db2d19e62ccddf31c28ad79f5f984818f1bf63f81f6?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
            className="aspect-square object-contain object-center w-3.5 fill-stone-500 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black text-xs self-start">{story.comments.length} comments</div>
        </div>
      </div>
      <div className="text-zinc-600 text-xs self-center max-w-[370px] mt-2.5 overflow-ellipsis">
        {story.content.slice(0, 200)}
      </div>
      <div className="text-white text-sm font-bold whitespace-nowrap items-stretch bg-sky-600 self-center justify-center mt-2.5 px-2.5 py-1.5">
        Read More
      </div>
    </div>
    );
}

export default FollowedUserStoryCard;
