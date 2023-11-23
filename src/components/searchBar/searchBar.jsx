import axios from '../../api/axios';
import './style.css'
import { useForm } from "react-hook-form"

export function SearchBar(){
    
     const Search=async(query)=>{
        var SEARCH_URL='/stories/search/story?title='+ query;
        console.log(SEARCH_URL);
        const response = await axios.get(SEARCH_URL)
        const data = await response.json();
        console.log(data);
        return data;
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting, isSubmitSuccessful }
      } = useForm({
        defaultValues: {
          Search: "",
        }
      });

      console.log(watch("Search"));

      return (
        <form className='search-bar'
          onSubmit={handleSubmit(async (data) => {
            const stories = await Search(data.Search);
            console.log(stories);
          })}
        >
            <input type="text" placeholder="Search..." {...register("Search", { required: "Search is required" })} />
          {errors.example && <p>{errors.example.message}</p>}
          <input type="submit" />
        </form>
      );
}