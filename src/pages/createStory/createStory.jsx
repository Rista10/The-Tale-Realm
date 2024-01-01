import './createStory.css';
import { useState, useRef } from 'react';
import axios from '../../api/axios';
import background from '../../assets/images/homeBackground.png'


const CreateStory = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState('');
  const STORY_CREATE_URL = '/stories/create';
  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [tags, setTags] = useState([]);

  const addTags = (e) => {
    if (e.target.value !== "") {
        e.preventDefault();
        setTags([...tags, e.target.value]);
        e.target.value = "";
    }
}

const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag, index) => index !== tagToRemove))
}

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
            const token = localStorage.getItem('token');

            console.log(title, description);

            if (!title || !description) {
                alert('Title and content are required');
                return;
              }
    
            try {
                const response = await axios.post(STORY_CREATE_URL, {
                    title: title,
                    content: description
                }, {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });
                console.log(response.status)
    
                if (response.status === 201) {
                    await setShowSuccessPopup(true);
                }
            } catch (error) {
                console.error("Error posting story:", error);
            }
  };

  return (
 <>
 <img src={background} alt="" className='background-image'/>
    <div className="content border text-card-htmlForeground max-w-4xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg" data-v0-t="card">
      
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="tracking-tight text-2xl font-bold text-gray-800">Add a Story</h3>
        <p className="text-sm text-gray-600">Share your imagination with the world.</p>
      </div>
      <div className="p-6">
      {image && (
  <div className="image-preview">
    <img src={URL.createObjectURL(image)} alt="Selected cover" />
  </div>
)}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold" htmlFor="title">
              Title*
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="title"
              placeholder="Title of the story"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold" htmlFor="content">
              Content*
            </label>
            <textarea
              id="content"
              placeholder="Content of your story"
              className="p-4 h-48 border rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col space-y-2">
  <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold" htmlFor="tags">Tags*</label>
  <input
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    id="tags"
    placeholder="#adventure #mystery #fantasy"
    value={tags}
    onChange={(e) => setTags(e.target.value)}
  />

{/* <ul id="tags">
     {tags.map((tag, index) => (
        <li key={index} className='tag'>
            <span className="tag-title">
                {tag}
            </span>
            <span className="tag-close" onClick={() => removeTag(index)}>x</span>
        </li>
    ))}
</ul> */}
</div>
<div className="flex flex-col space-y-2">
  <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold" htmlFor="genre">Genre*</label>
<select
  id="genre"
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
  required
  className="flex h-10 w-full bg-white rounded-md bg-whi border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-htmlForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
>
  <option value="" disabled>Select Genre</option>
  <option value="fantasy">Fantasy</option>
  <option value="sci-fi">Sci-Fi</option>
  <option value="mystery">Mystery</option>
  <option value="romance">Romance</option>
</select>
</div>
<div className="flex flex-col space-y-2">
  <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold" htmlFor="status">Status*</label>
  <select
  id="status"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  required
  className="flex h-10 w-full bg-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
>
  <option value="" disabled>Select Status</option>
  <option value="ongoing">Ongoing</option>
  <option value="completed">Completed</option>
</select>

</div>
<div className="flex flex-col space-y-2">
  <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold" htmlFor="ratings">Ratings*</label>
  <select
  id="rating"
  value={rating}
  onChange={(e) => setRating(e.target.value)}
  required
  className="flex h-10 w-full bg-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
>
  <option value="" disabled>Select Rating</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
</div>
<div className="flex flex-col items-center space-x-2">
<input
  type="file"
  ref={imageRef}
  id="coverImage"
  name="coverImage"
  accept="image/*"
  onChange={handleImageChange}
  className="hidden"
/>
<label htmlFor="coverImage" className="flex items-center space-x-2 cursor-pointer mb-6" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-gray-600"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
    <circle cx="12" cy="13" r="3"></circle>
  </svg>
  <div className="text-sm text-gray-600">Add a cover image</div>
</label>

<br/>
<div className="flex flex-col space-y-2 w-full">
  <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
    Post Story
  </button>
</div>
          </div>
        </form>
        {showSuccessPopup && (
          <div className="success-popup">
            <p>Story posted successfully!</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default CreateStory;
