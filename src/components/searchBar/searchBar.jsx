import { Link, Navigate,useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import './style.css'
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
           <div className="search-wrapper">

        <input 
          type="text" 
          placeholder="Search..." 
          {...register("Search", { required: "Search is required" })} 
        />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      {errors.Search && <p>{errors.Search.message}</p>}
        </form>
      );
}