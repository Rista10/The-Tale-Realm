import { Link, Navigate,useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import './style.css'
import { useForm } from "react-hook-form"

export function SearchBar(){

  const navigate = useNavigate();
    
    //  const Search=async(query)=>{
    //     var SEARCH_URL='/stories/search/story?title='+ query;
    //     const response = await axios.get(SEARCH_URL)
    //     const data = await response.data;
    //     return data;
    // }

    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting, isSubmitSuccessful }
      } = useForm({
        defaultValues: {
          Search: "",
        }
      });


      return (
        <form className='search-bar'
          onSubmit={handleSubmit(async (data) => {
            navigate(`/search/${data.Search}`)
          })}
        >
            <input type="text" placeholder="Search..." {...register("Search", { required: "Search is required" })} />
          {errors.example && <p>{errors.example.message}</p>}
          <input type="submit" />
        </form>
      );
}